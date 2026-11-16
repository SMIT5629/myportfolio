import { createHash } from "node:crypto";
import { education } from "@/data/education";
import { personalInfo } from "@/data/personal";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export type KnowledgeSource = { title: string; content: string; href?: string };

type Chunk = KnowledgeSource & { id: string };

export const portfolioKnowledge: KnowledgeSource[] = [
  {
    title: "Personal profile",
    // Serialize the complete source object so newly added data fields are
    // automatically included in the Pinecone corpus.
    content: JSON.stringify(personalInfo),
    href: "#about",
  },
  ...skills.map((group) => ({
    title: `Skills: ${group.category}`,
    content: JSON.stringify(group),
    href: "#skills",
  })),
  ...projects.map((project) => ({
    title: `Project: ${project.title}`,
    content: JSON.stringify(project),
    href: project.live || project.github || "#projects",
  })),
  ...education.map((item) => ({
    title: `Education: ${item.degree}`,
    content: JSON.stringify(item),
    href: "#education",
  })),
];

const namespace = process.env.PINECONE_NAMESPACE || "portfolio";
let indexedContentHash: string | null = null;
let indexingPromise: Promise<void> | null = null;

function chunkPortfolioData(): Chunk[] {
  // Keep each portfolio record intact where possible; split long records into
  // overlapping chunks so project features remain retrievable individually.
  const chunks: Chunk[] = [];
  for (const source of portfolioKnowledge) {
    const text = `${source.title}\n${source.content}`;
    const maxLength = 900;
    const overlap = 120;
    let start = 0;
    let part = 0;
    while (start < text.length) {
      let end = Math.min(start + maxLength, text.length);
      if (end < text.length) {
        const boundary = text.lastIndexOf(" ", end);
        if (boundary > start + maxLength * 0.6) end = boundary;
      }
      const content = text.slice(start, end).trim();
      const id = createHash("sha256").update(`${source.title}:${part}`).digest("hex");
      chunks.push({ ...source, id, content });
      if (end >= text.length) break;
      start = Math.max(end - overlap, start + 1);
      part += 1;
    }
  }
  return chunks;
}

function pineconeConfig() {
  const apiKey = process.env.PINECONE_API_KEY;
  let host = process.env.PINECONE_INDEX_HOST?.replace(/\/$/, "");
  if (!apiKey || !host) throw new Error("Set PINECONE_API_KEY and PINECONE_INDEX_HOST to enable portfolio search.");
  if (!/^https?:\/\//i.test(host)) host = `https://${host}`;
  return { apiKey, host };
}

async function pineconeRequest(path: string, body: unknown) {
  const { apiKey, host } = pineconeConfig();
  const response = await fetch(`${host}${path}`, {
    method: "POST",
    headers: {
      "Api-Key": apiKey,
      "Content-Type": "application/json",
      "X-Pinecone-Api-Version": "2026-07",
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) {
    const details = await response.text();
    console.error("Pinecone request failed:", response.status, details);
    throw new Error(`Pinecone request failed with status ${response.status}.`);
  }
  return response.json();
}

async function ensureIndexed(apiKey: string, chunks: Chunk[]) {
  const contentHash = createHash("sha256").update(JSON.stringify(chunks.map(({ title, content }) => [title, content]))).digest("hex");
  if (indexedContentHash === contentHash) return;
  if (!indexingPromise) {
    indexingPromise = (async () => {
      const storedHash = process.env.PINECONE_CONTENT_HASH;
      if (storedHash === contentHash) {
        indexedContentHash = contentHash;
        return;
      }
      // Upsert creates the namespace on first use. Deleting an empty namespace
      // first returns 404 in Pinecone, so stable document IDs replace old chunks.
      // The index generates vectors from its configured document text field.
      for (let offset = 0; offset < chunks.length; offset += 96) {
        const documents = chunks.slice(offset, offset + 96).map((chunk) => ({
          _id: chunk.id,
          title: chunk.title,
          chunk_text: chunk.content,
          href: chunk.href ?? "",
        }));
        await pineconeRequest(`/namespaces/${encodeURIComponent(namespace)}/documents/upsert`, { documents });
      }
      indexedContentHash = contentHash;
      console.info(`Indexed ${chunks.length} portfolio chunks in Pinecone. Set PINECONE_CONTENT_HASH=${contentHash} to skip re-indexing on later cold starts.`);
    })();
  }
  try {
    await indexingPromise;
  } catch (error) {
    indexingPromise = null;
    throw error;
  }
}

export async function retrieveKnowledge(query: string, apiKey: string, limit = 5) {
  const chunks = chunkPortfolioData();
  await ensureIndexed(apiKey, chunks);
  const result = await pineconeRequest(`/namespaces/${encodeURIComponent(namespace)}/documents/search`, {
    top_k: limit,
    score_by: [{ type: "text", fields: ["chunk_text"], query }],
    include_fields: ["title", "chunk_text", "href"],
  });
  return (result.matches ?? []).flatMap((match: Record<string, unknown>) => {
    const metadata = match;
    if (!metadata || typeof metadata.title !== "string" || typeof metadata.chunk_text !== "string") return [];
    return [{ title: metadata.title, content: metadata.chunk_text, href: typeof metadata.href === "string" ? metadata.href : undefined }];
  });
}
