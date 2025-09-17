"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExternalLink, Github, Eye } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    longDescription:
      "Built with Next.js, TypeScript, and Stripe for payments. Features include user authentication, product catalog, shopping cart, order management, and comprehensive admin panel. Deployed on Vercel with PostgreSQL database.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    category: "Full-Stack",
    featured: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    longDescription:
      "React-based application with real-time synchronization using WebSockets. Features drag-and-drop task organization, team collaboration, file attachments, and progress tracking. Built with modern React patterns and state management.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    category: "Frontend",
    featured: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 3,
    title: "Weather Analytics Dashboard",
    description: "A data visualization dashboard for weather analytics with interactive charts and forecasting.",
    longDescription:
      "Python-based backend with Flask serving weather data APIs. Frontend built with React and D3.js for interactive data visualizations. Features include historical data analysis, weather forecasting, and customizable dashboard widgets.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "Flask", "React", "D3.js", "PostgreSQL"],
    category: "Data Visualization",
    featured: false,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 4,
    title: "Mobile Banking App UI",
    description: "Modern mobile banking application interface with focus on user experience and accessibility.",
    longDescription:
      "Complete UI/UX design for a mobile banking application. Includes user research, wireframing, prototyping, and final design implementation. Focus on accessibility, security, and intuitive user flows for financial transactions.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Figma", "React Native", "TypeScript", "Expo"],
    category: "UI/UX",
    featured: false,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 5,
    title: "API Gateway Service",
    description: "Microservices API gateway with authentication, rate limiting, and monitoring capabilities.",
    longDescription:
      "Node.js-based API gateway service handling authentication, rate limiting, request routing, and monitoring for microservices architecture. Includes comprehensive logging, metrics collection, and health checks.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Node.js", "Express", "Redis", "Docker", "Kubernetes"],
    category: "Backend",
    featured: false,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Personal portfolio website with modern design, animations, and content management.",
    longDescription:
      "This very website! Built with Next.js, Tailwind CSS, and Framer Motion. Features include theme switching, responsive design, contact forms, and optimized performance. Deployed on Vercel with continuous integration.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    category: "Frontend",
    featured: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const [sortBy, setSortBy] = useState("featured")

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "UI/UX", "Data Visualization"]

  const filteredProjects = projects
    .filter((project) => filter === "All" || project.category === filter)
    .sort((a, b) => {
      if (sortBy === "featured") {
        return b.featured ? 1 : -1
      }
      return a.title.localeCompare(b.title)
    })

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I've worked on, ranging from full-stack applications to UI/UX designs. Each project
            represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
        >
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured First</SelectItem>
              <SelectItem value="alphabetical">Alphabetical</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter + sortBy}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.featured && <Badge className="absolute top-4 left-4">Featured</Badge>}
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <Badge variant="outline">{project.category}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{project.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="text-muted-foreground">{project.longDescription}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex gap-2">
                              <Button asChild>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </a>
                              </Button>
                              <Button variant="outline" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4 mr-2" />
                                  Source Code
                                </a>
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found for the selected filter.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
