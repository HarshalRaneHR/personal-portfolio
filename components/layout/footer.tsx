"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"
import { getFooterData, getSocialLinks } from "@/lib/data"

export function Footer() {
  const footerData = getFooterData()
  const socialLinks = getSocialLinks()

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {footerData.brand}
              </span>
            </Link>
            <p className="text-muted-foreground">{footerData.description}</p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={socialLinks.email} aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">{footerData.quickLinks.title}</h3>
            <div className="flex flex-col space-y-2">
              {footerData.quickLinks.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">{footerData.services.title}</h3>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              {footerData.services.items.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">{footerData.contactInfo.title}</h3>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              <span>{footerData.contactInfo.location}</span>
              <span>{footerData.contactInfo.email}</span>
              <span>{footerData.contactInfo.phone}</span>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">{footerData.copyright}</p>
          <p className="text-muted-foreground text-sm flex items-center gap-1 mt-4 md:mt-0">
            {footerData.madeWith.replace("❤️", "")} <Heart className="h-4 w-4 text-red-500" /> using Next.js & Tailwind
            CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
