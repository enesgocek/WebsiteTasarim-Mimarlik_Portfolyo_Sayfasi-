# Atelier Noir — Mimarlık Stüdyosu Portfolyosu

Atelier Noir, çağdaş mimarlık ve mekan tasarımı üzerine çalışan bağımsız bir stüdyo için geliştirilmiş, modern ve minimalist bir portfolyo web sitesidir. Estetik kaygılar ön planda tutularak, projenin bağlamına ve yapısına odaklanmayı sağlayan temiz bir arayüz ile tasarlanmıştır.

<img width="1896" height="913" alt="Screenshot 2026-06-30 045330" src="https://github.com/user-attachments/assets/739aa0e1-f4ac-40ed-99f5-60f40863315a" />
<img width="1905" height="909" alt="Screenshot 2026-06-30 045321" src="https://github.com/user-attachments/assets/50e09c7f-63d8-40e6-adcc-43430eed5ad0" />
<img width="1900" height="911" alt="Screenshot 2026-06-30 045311" src="https://github.com/user-attachments/assets/5599d3a5-01bf-4daf-8930-2ace3dd417f3" />
<img width="1904" height="908" alt="Screenshot 2026-06-30 045257" src="https://github.com/user-attachments/assets/1cba11d7-2ce9-4a64-bafa-06eb173484da" />
<img width="1900" height="913" alt="Screenshot 2026-06-30 045231" src="https://github.com/user-attachments/assets/40ecb641-5cdd-4408-82c9-71b9a68cf38d" />

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
