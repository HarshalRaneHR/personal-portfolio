"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function ResumePage() {
  const handleDownload = () => {
    // In a real application, this would download an actual PDF file
    const link = document.createElement("a");
    link.href = "/placeholder.svg?height=800&width=600";
    link.download = "Harshal_Rane_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Download my complete resume or view the details below
          </p>
          <Button onClick={handleDownload} size="lg" className="rounded-full">
            <Download className="mr-2 h-4 w-4" />
            Download PDF Resume
          </Button>
        </motion.div>

        {/* Resume Content */}
        <div className="space-y-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Harshal Rane</CardTitle>
                <p className="text-lg text-muted-foreground">
                  Full-Stack Developer
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>harshalrane114@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>9158785403</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Mumbai, Maharashtra</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <span>harshalrane.dev</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Experienced Software Engineer with 2+ years in developing
                  scalable web applications and user-focused solutions.
                  Proficient in modern JavaScript frameworks, backend
                  technologies, and UI/UX design principles. Passionate about
                  writing clean, maintainable code and building seamless user
                  experiences across the full stack.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold">
                      Senior Full-Stack Developer
                    </h3>
                    <Badge variant="secondary">2022 - Present</Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">
                    Tech Innovations Inc. • Mumbai, Maharashtra
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>
                      Led development of 3 major web applications serving 100K+
                      users
                    </li>
                    <li>
                      Architected microservices infrastructure reducing response
                      times by 40%
                    </li>
                    <li>
                      Mentored 5 junior developers and established code review
                      processes
                    </li>
                    <li>
                      Implemented CI/CD pipelines improving deployment frequency
                      by 300%
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold">
                      Frontend Developer
                    </h3>
                    <Badge variant="secondary">2020 - 2022</Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">
                    Digital Solutions Co. • Mumbai, Maharashtra
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>
                      Developed responsive web applications using React and
                      modern CSS
                    </li>
                    <li>
                      Collaborated with design teams to implement pixel-perfect
                      UI components
                    </li>
                    <li>
                      Optimized application performance achieving 95+ Lighthouse
                      scores
                    </li>
                    <li>
                      Built reusable component library used across 10+ projects
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold">Junior Developer</h3>
                    <Badge variant="secondary">2019 - 2020</Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">
                    StartUp Labs • Mumbai, Maharashtra
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>
                      Built and maintained web applications using JavaScript and
                      Node.js
                    </li>
                    <li>
                      Participated in agile development processes and daily
                      standups
                    </li>
                    <li>
                      Contributed to both frontend and backend development tasks
                    </li>
                    <li>
                      Learned modern development practices and version control
                      systems
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold">
                    Bachelor of Science in Computer Science
                  </h3>
                  <Badge variant="secondary">2015 - 2019</Badge>
                </div>
                <p className="text-primary font-medium mb-2">
                  University of California, Berkeley
                </p>
                <p className="text-muted-foreground">
                  Relevant Coursework: Data Structures, Algorithms, Software
                  Engineering, Database Systems, Web Development, Human-Computer
                  Interaction
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Frontend Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "JavaScript",
                        "HTML5",
                        "CSS3",
                        "Tailwind CSS",
                        "Sass",
                      ].map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Node.js",
                        "Python",
                        "Express.js",
                        "FastAPI",
                        "PostgreSQL",
                        "MongoDB",
                        "Redis",
                      ].map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tools & Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Git",
                        "Docker",
                        "AWS",
                        "Vercel",
                        "Figma",
                        "Jest",
                        "Cypress",
                      ].map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>AWS Certified Solutions Architect</span>
                  <Badge variant="secondary">2023</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Google UX Design Certificate</span>
                  <Badge variant="secondary">2022</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Meta Frontend Developer Certificate</span>
                  <Badge variant="secondary">2021</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
