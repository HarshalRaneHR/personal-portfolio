"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function AboutPage() {
  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "Database Design", level: 75 },
  ];

  const experience = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and architected solutions for enterprise clients.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications and collaborated with design teams to create exceptional user experiences. Specialized in React and modern CSS frameworks.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Labs",
      period: "2019 - 2020",
      description:
        "Built and maintained web applications while learning modern development practices. Contributed to both frontend and backend development projects.",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate Software Engineer with 2+ years of industry experience
            building digital solutions that deliver real-world impact. I enjoy
            turning complex challenges into clean, intuitive, and user-focused
            applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>My Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  I started my journey in web development during college,
                  fascinated by the ability to create interactive experiences
                  that could reach people worldwide. What began as a curiosity
                  quickly became a passion.
                </p>
                <p className="text-muted-foreground">
                  Over the years, I've had the privilege of working with
                  startups and established companies, helping them build
                  everything from simple landing pages to complex enterprise
                  applications.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me exploring new
                  technologies or enjoying the outdoors games.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <Badge variant="secondary" className="mt-2 md:mt-0">
                      {job.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technologies I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Python",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "Docker",
              "Git",
              "Figma",
              "Tailwind CSS",
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm py-2 px-4">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
