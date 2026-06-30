const social = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-foreground">
              Atelier&nbsp;Noir
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Çağdaş mimarlık ve mekan tasarımı stüdyosu. İstanbul.
            </p>
          </div>

          <ul className="flex flex-wrap gap-8">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Atelier Noir. Tüm hakları saklıdır.</p>
          <p className="font-mono uppercase tracking-widest">
            41.0082° N, 28.9784° E
          </p>
        </div>
      </div>
    </footer>
  )
}
