export type Project = {
  slug: string
  title: string
  location: string
  year: string
  category: string
  image: string
  span: "wide" | "tall" | "normal"
  description: string
  process: string
}

export const projectsData: Project[] = [
  {
    slug: "beton-villa",
    title: "Beton Villa",
    location: "Bodrum, Türkiye",
    year: "2024",
    category: "Konut",
    image: "/projects/concrete-villa.png",
    span: "wide",
    description: "Ege'nin zorlu topoğrafyasına entegre edilmiş, brüt betonun doğayla kurduğu güçlü diyaloğu yansıtan modern bir yaşam alanı.",
    process: "Tasarım süreci arazinin eğimi ve deniz manzarası dikkate alınarak şekillendirildi. Yapım aşamasında, yerel iklim koşullarına dayanıklı olması amacıyla yüksek performanslı brüt beton tercih edildi. İç mekanda ise ahşap ve doğal taş kullanılarak betonun soğuk etkisine sıcaklık katıldı."
  },
  {
    slug: "cam-pavyon",
    title: "Cam Pavyon",
    location: "Cenevre, İsviçre",
    year: "2023",
    category: "Kültür",
    image: "/projects/glass-pavilion.png",
    span: "normal",
    description: "Şehir merkezindeki bir parkın içinde, şeffaflığıyla çevresindeki doğayla bütünleşen çağdaş bir sergi ve toplanma mekanı.",
    process: "Yapı, tamamen şeffaf bir görünüm elde etmek için strüktürel cam kolonlar ve çelik bağlantı detayları kullanılarak tasarlandı. Uygulama aşamasında büyük ölçekli cam panellerin yerleştirilmesi hassas mühendislik hesaplamaları gerektirdi. Enerji verimliliğini sağlamak için akıllı cam teknolojileri kullanıldı."
  },
  {
    slug: "sahil-evi",
    title: "Sahil Evi",
    location: "Çeşme, Türkiye",
    year: "2023",
    category: "Konut",
    image: "/projects/coastal-house.png",
    span: "normal",
    description: "Ege kıyılarının geleneksel mimarisinden ilham alarak tasarlanan, iç ve dış mekan sınırlarını kaldıran yazlık bir konut.",
    process: "Bölgenin yerel taş işçiliği modernize edilerek cephede uygulandı. Doğal havalandırmayı maksimize edecek avlulu bir plan şeması geliştirildi. İnşaat sürecinde yerel zanaatkarlarla çalışılarak sürdürülebilir ve yöreye ait malzemelerin kullanımına özen gösterildi."
  },
  {
    slug: "cagdas-sanat-muzesi",
    title: "Çağdaş Sanat Müzesi",
    location: "Porto, Portekiz",
    year: "2022",
    category: "Kamusal",
    image: "/projects/museum.png",
    span: "tall",
    description: "Eski bir endüstriyel alanın, dinamik kütle kompozisyonlarıyla şehrin yeni kültür merkezine dönüştürülmesi projesi.",
    process: "Mevcut endüstriyel mirasın bir kısmı korunarak yeni yapı ile entegre edildi. Ana kütlelerde kullanılan korten çelik, bölgenin endüstriyel geçmişine atıfta bulunurken zamanla değişen bir cephe dokusu sağladı. Müze içi sergi salonları için özel aydınlatma ve iklimlendirme sistemleri tasarlandı."
  },
  {
    slug: "sehir-kulesi",
    title: "Şehir Kulesi",
    location: "İstanbul, Türkiye",
    year: "2021",
    category: "Karma Kullanım",
    image: "/projects/urban-tower.png",
    span: "wide",
    description: "İstanbul silüetine saygılı, dikey bahçeleri ve sürdürülebilir sistemleri bünyesinde barındıran ikonik bir karma kullanım kulesi.",
    process: "Tasarım, dikeyde mahalle kurgusu oluşturma fikri etrafında gelişti. Rüzgar tüneli testleri sonucunda kütle aerodinamik olarak şekillendirildi. Yapım sürecinde yüksek mukavemetli çelik ve kompozit sistemler kullanıldı, her üç katta bir sosyal etkileşimi artıracak gökyüzü bahçeleri entegre edildi."
  },
]
