import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projectsData } from "@/lib/projects"
import { ArrowLeft } from "lucide-react"

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="min-h-screen pt-24 pb-12 lg:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Link 
          href="/#projeler" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Projelere Dön
        </Link>

        <header className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-x-12 gap-y-4 font-mono text-sm text-muted-foreground border-t border-border pt-6">
            <div>
              <span className="block text-xs uppercase tracking-wider mb-1">Konum</span>
              <span className="text-foreground">{project.location}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider mb-1">Yıl</span>
              <span className="text-foreground">{project.year}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider mb-1">Kategori</span>
              <span className="text-foreground">{project.category}</span>
            </div>
          </div>
        </header>
      </div>

      <div className="w-full h-[50vh] md:h-[80vh] relative mb-16 md:mb-24 bg-muted/20">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2">
          <section>
            <h2 className="text-2xl font-light mb-6">Proje Detayları</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-light mb-6">Yapım Süreci</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.process}
            </p>
          </section>
        </div>
      </div>
    </article>
  )
}
