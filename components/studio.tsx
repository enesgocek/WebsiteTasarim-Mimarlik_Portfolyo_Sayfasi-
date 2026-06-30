import Image from "next/image"

const principles = [
  {
    no: "01",
    title: "Malzemenin Dürüstlüğü",
    text: "Beton, çelik ve cam; örtülmeden, olduğu gibi. Her yüzey kendi karakterini taşır.",
  },
  {
    no: "02",
    title: "Işıkla Tasarım",
    text: "Mekanı şekillendiren asıl unsur ışıktır. Gölgeyi de mekanın bir parçası olarak kurgularız.",
  },
  {
    no: "03",
    title: "Bağlama Saygı",
    text: "Her yapı bulunduğu araziyle, iklimle ve kültürle diyalog içinde doğar.",
  },
]

export function Studio() {
  return (
    <section id="studyo" className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-full">
          <Image
            src="/projects/studio.png"
            alt="Beton bir masa üzerinde mimari maketlerin bulunduğu minimalist stüdyo iç mekanı"
            fill
            className="object-cover grayscale"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-20 lg:px-16 lg:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
            02 — Stüdyo
          </p>
          <h2 className="mt-4 max-w-md text-balance text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
            Sadeliğin içinde gizli olan kalıcılığı arıyoruz.
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
            2007&apos;de kurulan ATELIER NOIR, mimarlık ve iç mekan tasarımını
            tek bir bütünsel pratik olarak ele alır. İstanbul merkezli ekibimiz;
            konut, kültür ve kamusal yapılar üzerine, ölçekten bağımsız olarak
            aynı titizlikle çalışır.
          </p>

          <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
            {principles.map((p) => (
              <div key={p.no} className="border-t border-border pt-5">
                <dt className="font-mono text-xs text-muted-foreground">
                  {p.no}
                </dt>
                <p className="mt-3 text-sm font-medium text-foreground">
                  {p.title}
                </p>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
