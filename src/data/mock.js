// Portfolio Data for Harshal Rane

export const personalInfo = {
  name: "Harshal Rane",
  role: "Software Developer",
  tagline: "Building high-performance, user-centric web applications",
  email: "harshalrane114@gmail.com",
  phone: "+91 9158785403",
  location: "Mumbai, Maharashtra",
  linkedin: "https://www.linkedin.com/in/harshal-rane-009916227/",
  github: "https://github.com/HarshalRaneHR",
  bio: "Software Developer with proven expertise in building high-performance, user-centric web applications using the MERN stack. Skilled in translating business requirements into scalable technical solutions through clean architecture, optimized APIs, and modern UI development. Passionate about delivering impactful digital experiences with measurable performance improvements and maintainable codebases.",
};

export const skills = {
  frontend: [
    "React.js",
    "Redux",
    "Zustand",
    "JavaScript",
    "HTML5",
    "CSS3",
    "CreateJS",
    "TailwindCSS",
    "Bootstrap",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "MongoDB",
    "Mongoose",
    "Socket.io",
    "FastAPI",
  ],
  devops: [
    "Git",
    "GitHub",
    "Docker",
    "Jenkins",
    "Render",
    "Netlify",
    "Postman",
    "Artifactory",
  ],
  testing: ["Jest", "Mocha", "Chai", "Cypress"],
  other: [
    "Chart.js",
    "Responsive Design",
    "Performance Optimization",
    "Figma",
    "Agile",
    "Jira",
  ],
};

export const experience = [
  {
    id: 1,
    company: "Mitr Learning & Media Pvt. Ltd.",
    role: "Software Developer (React / Node.js)",
    location: "Mumbai, Maharashtra",
    period: "Jul 2023 – Present",
    highlights: [
      "Engineered and deployed 10+ interactive e-learning games and microservices using React.js, Node.js, and CreateJS, improving performance by 45%",
      "Led end-to-end development of a content authoring platform enabling live previews, collaborative editing, and instant publishing – cutting content creation time by 40%",
      "Designed modular, reusable UI components with React Hooks and Zustand/Redux, enhancing scalability and reducing repetitive code by 30%",
      "Integrated RESTful APIs and optimized server-client data flow, reducing latency and improving application responsiveness",
      "Optimized animation and game rendering pipelines to consistently achieve 60+ FPS, enhancing user engagement",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Expense Tracker",
    subtitle: "MERN Stack Application",
    period: "Jan 2024 – Mar 2024",
    description:
      "A full-stack expense tracking web application with secure authentication, real-time visualization, and comprehensive transaction management.",
    features: [
      "Secure JWT & bcrypt authentication",
      "Real-time Chart.js visualization",
      "Full CRUD transaction management",
      "CI/CD deployment pipeline",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js"],
    color: "#3B82F6",
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    subtitle: "MERN + Socket.io",
    period: "Jun 2023 – Jul 2023",
    description:
      "A responsive real-time chat application with event-based communication, presence tracking, and modern accessible interface.",
    features: [
      "Real-time Socket.io messaging",
      "JWT-based route protection",
      "Zustand state management",
      "TailwindCSS & DaisyUI styling",
    ],
    tech: ["React.js", "Node.js", "Socket.io", "Zustand", "TailwindCSS"],
    color: "#10B981",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering (B.E.)",
    field: "Information Technology",
    institution: "Datta Meghe College of Engineering",
    university: "University of Mumbai",
    period: "Aug 2019 – May 2023",
    location: "Mumbai, Maharashtra",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    field: "",
    institution: "KCE'S Moolji Jaitha College",
    university: "Maharashtra State Board",
    period: "Jun 2018 – May 2019",
    location: "Jalgaon, Maharashtra",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Full Stack Development Course",
    issuer: "GeeksforGeeks",
    year: "2024",
  },
  {
    id: 2,
    title: "React - The Complete Guide (incl. React Router and Redux)",
    issuer: "Udemy",
    year: "2023",
  },
  {
    id: 3,
    title: "The Complete JavaScript Course: From Zero to Expert!",
    issuer: "Udemy",
    year: "2023",
  },
];

export const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "45%", label: "Performance Boost" },
  { value: "60+", label: "FPS Optimization" },
  { value: "40%", label: "Time Saved" },
];
