"use client"

import type React from "react"

import { useThemeObserver } from "@/hooks/use-theme-observer"

export function ClientThemeWrapper({ children }: { children: React.ReactNode }) {
  useThemeObserver()
  return <>{children}</>
}
