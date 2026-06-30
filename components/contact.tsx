"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="iletisim"
      className="border-t border-border bg-card"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
            04 — İletişim
          </p>
          <h2 className="mt-4 text-balance text-4xl font-light leading-tight tracking-tight text-foreground sm:text-5xl">
            Bir projeyi
            <br />
            konuşalım mı?
          </h2>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            Yeni bir yapı, dönüşüm ya da yalnızca bir fikir — sürecin her
            aşamasında size eşlik etmekten memnuniyet duyarız.
          </p>

          <dl className="mt-12 space-y-8">
            <ContactRow label="E-posta" value="merhaba@ateliernoir.studio" />
            <ContactRow label="Telefon" value="+90 212 000 00 00" />
            <ContactRow
              label="Stüdyo"
              value="Karaköy, Kemankeş Cad. No.12, İstanbul"
            />
          </dl>
        </div>

        <div>
          {submitted ? (
            <div className="flex h-full min-h-[20rem] flex-col items-start justify-center border border-border p-10">
              <div className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Check className="size-6" />
              </div>
              <h3 className="mt-6 text-2xl font-light text-foreground">
                Teşekkürler.
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Mesajınız bize ulaştı. Ekibimiz en kısa sürede sizinle iletişime
                geçecek.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <Field label="Ad Soyad" name="name" type="text" required />
              <Field label="E-posta" name="email" type="email" required />
              <Field label="Proje Türü" name="type" type="text" />
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="resize-none border-0 border-b border-border bg-transparent pb-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
                  placeholder="Projenizden kısaca bahsedin..."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-accent px-8 py-4 text-sm uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
              >
                Gönder
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-border pt-5">
      <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-2 text-lg text-foreground">{value}</dd>
    </div>
  )
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string
  name: string
  type: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border-0 border-b border-border bg-transparent pb-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
      />
    </div>
  )
}
