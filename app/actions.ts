"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
    success: boolean;
    message: string;
};

const fail = (message: string): ContactFormState => ({ success: false, message });

export async function sendContactMessage(
    _prev: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
        return fail("Please fill in all fields.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return fail("That email doesn't look right.");
    }

    if (name.length > 100 || subject.length > 200 || message.length > 5000) {
        return fail("One of your fields is too long.");
    }

    const to = process.env.CONTACT_EMAIL;
    if (!process.env.RESEND_API_KEY || !to) {
        return fail("Email isn't set up yet.");
    }

    try {
        const { error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to,
            replyTo: email,
            subject: `New message: ${subject}`,
            text: `From: ${name} (${email})\n\n${message}`,
        });

        if (error) {
            console.error("Resend error:", error);
            return fail("Couldn't send your message. Try again?");
        }

        return { success: true, message: "Thanks! Your message is on its way." };
    } catch (err) {
        console.error("Contact form error:", err);
        return fail("Something went wrong. Please try again later.");
    }
}