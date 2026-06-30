import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { type Project, projectsData as projects } from "@/lib/projects"

export function Projects() {
  return (
    <section id="projeler" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="flex flex-col justify-between gap-6 border-b border-border pb-10 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
            01 — Seçili İşler
          </p>
          <h2 className="mt-4 text-4xl font-light tracking-tight text-foreground sm:text-5xl">
            Projeler
          </h2>
        </div>
        <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
          Konuttan kamusal yapılara uzanan, her biri bağlamına ve malzemesine
          özenle yaklaşan seçili çalışmalarımız.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const spanClass =
    project.span === "wide"
      ? "md:col-span-2"
      : project.span === "tall"
        ? "md:row-span-2"
        : ""

  const aspect =
    project.span === "wide"
      ? "aspect-[16/9]"
      : project.span === "tall"
        ? "aspect-[3/4]"
        : "aspect-[4/3]"

  return (
    <Link href={`/projeler/${project.slug}`} className={`group block ${spanClass}`}>
      <div className={`relative ${aspect} overflow-hidden bg-card`}>
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} — ${project.location}`}
          fill
          className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/10" />
        <span className="absolute left-4 top-4 font-mono text-xs text-foreground/70">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="flex items-center gap-1.5 text-xl font-medium text-foreground">
            {project.title}
            <ArrowUpRight className="size-4 -translate-y-px text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-foreground" />
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {project.location}
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {project.category}
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {project.year}
          </p>
        </div>
      </div>
    </Link>
  )
}
