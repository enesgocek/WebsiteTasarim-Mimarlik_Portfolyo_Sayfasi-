import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src="/projects/hero-building.png"
        alt="Beton ve geometrik çizgilerle tasarlanmış modern bir yapının dramatik alttan görünümü"
        fill
        priority
        className="object-cover opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Mimarlık &middot; Mekan &middot; Tasarım
        </p>
        <h1 className="max-w-4xl text-balance text-5xl font-light leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          Işık, gölge ve
          <br />
          <span className="font-medium">malzemenin</span> mimarisi
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          ATELIER NOIR; sadeliği, oranı ve malzemenin dürüstlüğünü esas alan
          çağdaş yapılar tasarlayan bağımsız bir mimarlık stüdyosudur.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-6">
          <a
            href="#projeler"
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest text-foreground"
          >
            <span className="border-b border-foreground/40 pb-1 transition-colors group-hover:border-foreground">
              Projeleri Keşfet
            </span>
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" />
          </a>
          <div className="flex items-center gap-10">
            <Stat value="120+" label="Tamamlanan proje" />
            <Stat value="18" label="Yıllık deneyim" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-mono text-2xl font-medium text-foreground">
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  )
}
