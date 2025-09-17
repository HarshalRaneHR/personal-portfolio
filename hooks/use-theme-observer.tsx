"use client"

import { useEffect } from "react"

export function useThemeObserver() {
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          const root = document.documentElement
          const isDark = root.classList.contains("dark")

          // Get current palette colors
          const primaryLight = root.style.getPropertyValue("--primary-light") || "221.2 83.2% 53.3%"
          const primaryDark = root.style.getPropertyValue("--primary-dark") || "217.2 91.2% 59.8%"
          const ringLight = root.style.getPropertyValue("--ring-light") || "221.2 83.2% 53.3%"
          const ringDark = root.style.getPropertyValue("--ring-dark") || "217.2 91.2% 59.8%"

          // Apply appropriate colors based on theme
          root.style.setProperty("--primary", isDark ? primaryDark : primaryLight)
          root.style.setProperty("--ring", isDark ? ringDark : ringLight)
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])
}
