const services = [
  {
    title: "Mimari Tasarım",
    text: "Konsept geliştirmeden uygulama projelerine kadar tüm tasarım sürecinin yönetimi.",
  },
  {
    title: "İç Mekan",
    text: "Yapının diliyle bütünleşen, malzeme ve detay odaklı iç mekan kurguları.",
  },
  {
    title: "Kentsel Tasarım",
    text: "Kamusal alanlar, master planlar ve karma kullanımlı yapı toplulukları.",
  },
  {
    title: "Danışmanlık",
    text: "Fizibilite, ruhsat süreçleri ve sürdürülebilirlik odaklı tasarım danışmanlığı.",
  },
]

export function Services() {
  return (
    <section
      id="yaklasim"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
            03 — Yaklaşım
          </p>
          <h2 className="mt-4 text-balance text-4xl font-light tracking-tight text-foreground sm:text-5xl">
            Ne yapıyoruz
          </h2>
          <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Fikrin ilk eskizinden anahtar teslimine kadar bütüncül bir tasarım
            anlayışıyla yanınızdayız.
          </p>
        </div>

        <div className="lg:col-span-2">
          <ul>
            {services.map((service, i) => (
              <li
                key={service.title}
                className="group flex flex-col gap-3 border-t border-border py-8 transition-colors last:border-b sm:flex-row sm:items-baseline sm:gap-10"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <h3 className="w-full max-w-[14rem] text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-1">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
