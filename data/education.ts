export interface CourseModule {
  title: string;
  desc: string;
}

export interface EducationItem {
  id: number;
  degree: string;
  field: string;
  college: string;
  location: string;
  startYear?: string;
  graduationYear: string;
  badge?: string;
  currentStatus?: string;
  description?: string;
  score?: string;
  modules: CourseModule[];
}

export const education: EducationItem[] = [{
  id: 1,
  degree: "Secondary Education School (10th)",
  field: "General Education",
  college: "B.L.PATEL SARV. VIDHYAMANDIR RANKUVA",
  location: "Rankuva, Gujarat, India",
  startYear: "2019",
  graduationYear: "2021",
  badge: "Secondary Education",
  score: "80.33%",
  currentStatus: "Completed",
  description:
    "Developed fundamental knowledge across core subjects and built a foundation for higher education.",
  modules: [
    {
      title: "Mathematics",
      desc: "Algebra, Geometry, Statistics & Basic Calculations",
    },
    {
      title: "Science",
      desc: "Fundamentals of Physics, Chemistry & Biology",
    },
    {
      title: "Social Science",
      desc: "History, Geography, Civics & Economics",
    },
    {
      title: "Languages",
      desc: "English, Gujarati & Communication Skills",
    },
  ],
},
  {
  id: 2,
  degree: "Higher Secondary School (12th)",
  field: "Science(Maths)",
  college: "B.L.PATEL SARV. VIDHYAMANDIR RANKUVA",
  location: "Rankuva, Gujarat, India",
  startYear: "2021",
  graduationYear: "2023",
  badge: "Higher Secondary Education",
  score: "69.84%",
  currentStatus: "Completed",
  description:
    "Built a strong foundation in science, mathematics, and analytical problem-solving.",
  modules: [
    {
      title: "Physics",
      desc: "Mechanics, Electricity, Magnetism & Modern Physics",
    },
    {
      title: "Chemistry",
      desc: "Organic, Inorganic & Physical Chemistry",
    },
    {
      title: "Mathematics",
      desc: "Algebra, Calculus, Trigonometry & Statistics",
    },
  ],
},
  {
    id: 3,
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    college: "Government Engineering College, Bhavnagar",
    location: "Bhavnagar, Gujarat, India",
    startYear: "2023",
    graduationYear: "2027",
    badge: "Undergraduate Program",
    score: "8.22 CGPA",
    currentStatus: "Undergraduate Student • Pre-final Year",
    description:
      "Theoretical computer science foundation combined with practical software engineering coursework.",
    modules: [
      {
        title: "Data Structures & Algorithms",
        desc: "Arrays, Trees, Graphs, Sorting & Complexity Analysis",
      },
      {
        title: "Database Management Systems",
        desc: "Relational Modeling, Normalization, SQL Queries & Indexing",
      },
      {
        title: "Object-Oriented Programming",
        desc: "Polymorphism, Inheritance, Design Patterns in Java & C++",
      },
      {
        title: "Computer Networks",
        desc: "TCP/IP, HTTP/HTTPS, OSI Model, Socket Programming",
      },
      {
        title: "Operating Systems",
        desc: "Process Scheduling, Memory Management & Multithreading",
      },
      {
        title: "Web Engineering",
        desc: "Client-Server Architecture, REST APIs & Responsive Interfaces",
      },
    ],
  },
];

export default education;
