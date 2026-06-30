import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Studio } from "@/components/studio"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="bg-background">
      <Hero />
      <Projects />
      <Studio />
      <Services />
      <Contact />
    </main>
  )
}
