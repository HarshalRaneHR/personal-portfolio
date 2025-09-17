"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Palette } from "lucide-react"
import { cn } from "@/lib/utils"

const colorPalettes = [
  {
    name: "Blue",
    value: "blue",
    color: "hsl(221.2 83.2% 53.3%)",
    light: "221.2 83.2% 53.3%",
    dark: "217.2 91.2% 59.8%",
  },
  {
    name: "Purple",
    value: "purple",
    color: "hsl(262.1 83.3% 57.8%)",
    light: "262.1 83.3% 57.8%",
    dark: "262.1 83.3% 67.8%",
  },
  {
    name: "Green",
    value: "green",
    color: "hsl(142.1 76.2% 36.3%)",
    light: "142.1 76.2% 36.3%",
    dark: "142.1 70.6% 45.3%",
  },
  {
    name: "Orange",
    value: "orange",
    color: "hsl(24.6 95% 53.1%)",
    light: "24.6 95% 53.1%",
    dark: "20.5 90.2% 48.2%",
  },
  {
    name: "Red",
    value: "red",
    color: "hsl(0 84.2% 60.2%)",
    light: "0 84.2% 60.2%",
    dark: "0 72.2% 50.6%",
  },
  {
    name: "Pink",
    value: "pink",
    color: "hsl(330.4 81.2% 60.4%)",
    light: "330.4 81.2% 60.4%",
    dark: "330.4 81.2% 70.4%",
  },
]

export function ColorPaletteSwitcher() {
  const [currentPalette, setCurrentPalette] = useState("blue")
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("color-palette")
    if (saved && colorPalettes.find((p) => p.value === saved)) {
      setCurrentPalette(saved)
      applyColorPalette(saved)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      applyColorPalette(currentPalette)
    }
  }, [resolvedTheme, mounted, currentPalette])

  const applyColorPalette = (paletteValue: string) => {
    const palette = colorPalettes.find((p) => p.value === paletteValue)
    if (!palette) return

    const root = document.documentElement

    // Set CSS custom properties for both light and dark themes
    root.style.setProperty("--primary-light", palette.light)
    root.style.setProperty("--primary-dark", palette.dark)
    root.style.setProperty("--ring-light", palette.light)
    root.style.setProperty("--ring-dark", palette.dark)

    // Apply immediately based on current theme
    const isDark = root.classList.contains("dark")
    root.style.setProperty("--primary", isDark ? palette.dark : palette.light)
    root.style.setProperty("--ring", isDark ? palette.dark : palette.light)
  }

  const handlePaletteChange = (palette: string) => {
    setCurrentPalette(palette)
    localStorage.setItem("color-palette", palette)
    applyColorPalette(palette)
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Palette className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Change color palette">
          <Palette className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48" align="end">
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Color Palette</h4>
          <div className="grid grid-cols-2 gap-2">
            {colorPalettes.map((palette) => (
              <Button
                key={palette.value}
                variant="ghost"
                size="sm"
                className={cn("h-8 w-full justify-start gap-2 px-2", currentPalette === palette.value && "bg-accent")}
                onClick={() => handlePaletteChange(palette.value)}
              >
                <div className="w-3 h-3 rounded-full border border-border" style={{ backgroundColor: palette.color }} />
                <span className="text-xs">{palette.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
