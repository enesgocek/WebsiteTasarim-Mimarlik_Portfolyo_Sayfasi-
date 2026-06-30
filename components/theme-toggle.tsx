"use client"

import { useEffect, useState } from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const options = [
  { value: "light", label: "Açık tema", Icon: Sun },
  { value: "system", label: "Sistem teması", Icon: Monitor },
  { value: "dark", label: "Koyu tema", Icon: Moon },
] as const

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div
      role="radiogroup"
      aria-label="Tema seçimi"
      className="inline-flex items-center gap-0.5 rounded-full border border-border p-0.5"
    >
      {options.map(({ value, label, Icon }) => {
        const active = mounted && theme === value
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={cn(
              "flex size-8 items-center justify-center rounded-full transition-colors",
              active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="size-4" />
          </button>
        )
      })}
    </div>
  )
}
