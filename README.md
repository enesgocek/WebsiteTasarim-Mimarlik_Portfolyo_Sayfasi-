# Atelier Noir — Mimarlık Stüdyosu Portfolyosu

Atelier Noir, çağdaş mimarlık ve mekan tasarımı üzerine çalışan bağımsız bir stüdyo için geliştirilmiş, modern ve minimalist bir portfolyo web sitesidir. Estetik kaygılar ön planda tutularak, projenin bağlamına ve yapısına odaklanmayı sağlayan temiz bir arayüz ile tasarlanmıştır.

## Özellikler

- **Modern ve Minimalist Tasarım:** Mimari projeleri ön plana çıkaran, gereksiz detaylardan arındırılmış şık bir görünüm.
- **Dinamik Proje Sayfaları:** Her proje için kendi özel detaylarının, yapım süreçlerinin ve büyük ölçekli görsellerinin incelenebildiği dinamik sayfalar (`/projeler/[slug]`).
- **Karanlık/Aydınlık Mod (Dark/Light Mode):** Ziyaretçilerin tercihine veya sistem ayarlarına göre otomatik uyum sağlayan kusursuz tema desteği.
- **Tam Duyarlı (Responsive) Tasarım:** Mobil, tablet ve masaüstü cihazlarda mükemmel deneyim sağlayan akışkan yapılar.
- **Modern Teknoloji Yığını:** En güncel web teknolojileri ile yüksek performans.

## Kullanılan Teknolojiler

- **[Next.js](https://nextjs.org/)** (v15+ App Router mimarisi)
- **[React](https://react.dev/)** (v19)
- **[Tailwind CSS](https://tailwindcss.com/)** (v4)
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Lucide React](https://lucide.dev/)** (İkonlar için)
- **[Shadcn UI](https://ui.shadcn.com/)** (Temel bileşen ve utility altyapısı)

## Kurulum ve Çalıştırma

Projeyi bilgisayarınızda yerel (local) olarak çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

1. **Projeyi Klonlayın veya İndirin**
   ```bash
   git clone <repo_url>
   cd architecture-portfolio-page
   ```

2. **Bağımlılıkları Yükleyin**
   Kullandığınız paket yöneticisine göre:
   ```bash
   npm install
   # veya
   yarn install
   # veya
   pnpm install
   ```

3. **Geliştirme Sunucusunu Başlatın**
   ```bash
   npm run dev
   # veya
   yarn dev
   # veya
   pnpm dev
   ```

4. **Projeyi Görüntüleyin**
   Tarayıcınızdan [http://localhost:3000](http://localhost:3000) adresine giderek siteyi inceleyebilirsiniz.

## Proje Yapısı

- `app/`: Next.js App Router sayfaları ve layout dosyaları. (Örn: Ana sayfa ve `/projeler/[slug]` detay sayfaları)
- `components/`: Tekrar kullanılabilir React bileşenleri (Header, Footer, Proje Kartları, Tema değiştirici vb.)
- `lib/`: Proje içerisindeki statik veriler (`projects.ts`) ve yardımcı (utility) fonksiyonlar.
- `public/`: Görseller, ikonlar ve diğer statik medya dosyaları.

## Geliştirme Notları

* Proje verilerini güncellemek, yeni proje eklemek veya mevcut projeleri düzenlemek için `lib/projects.ts` dosyasını kullanabilirsiniz. Resimlerinizi `public/projects/` klasörüne eklemeyi unutmayın.
* Sitenin renk paletini ve tipografisini değiştirmek için `app/globals.css` ve Tailwind ayar dosyalarına göz atabilirsiniz.
