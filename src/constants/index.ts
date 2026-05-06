

interface NavItem {
  id: number;
  title: string;
  path: string;
}
interface MyService {
  id: number;
  title: string;
  desc: string;
}

export const APP_CONFIG = {
  GLOBAL: {
    TITLE: 'Yangın Kriminal',
    VERSION: '1.0.0',
  },

  HOME_PAGE_TEXT: {
    HERO_TITLE: 'Yangın Kriminal Analizinde ',
    HERO_TITLE1 : 'Biz Kimiz?',
    HERO_TITLE2: 'Güvenilir Çözüm Ortağınız',
    HERO_SUBTITLE: 'Modern teknoloji ve uzman kadromuzla, yangınların çıkış nedenlerini aydınlatıyor, kriminal süreçlerde kesin ve hızlı raporlama sağlıyoruz.',
    SERVİCE_AREAS_TİTLE: 'Hizmet Alanlarımız',
  },

  NAV_ITEMS: {
    MAIN_MENU: [
      { id: 1, title: 'Ana Sayfa', path: '/' },
      { id: 2, title: 'Vaka Analizi', path: '/vaka-analizi' },
      { id: 3, title: 'Yangın Raporları', path: '/raporlar' },
      { id: 4, title: 'İstatistikler', path: '/istatistikler' },
      { id: 5, title: 'İletişim', path: '/iletisim' },
    ] as NavItem[],


  },

  MY_SERVICES: {
    SERVICES_LIST: [
      { id: 1, title: "Yangın Mahalli Analizi", desc: "Yangın sonrası olay yerinde teknik inceleme, yanma paternlerinin değerlendirilmesi ve ilk bulguların kriminal açıdan yorumlanması." },
      { id: 2, title: "Elektrik Kaynaklı Yangın Analizi", desc: "Elektrik tesisatı, kısa devre, ark oluşumu ve ekipman kaynaklı yangın ihtimallerinin teknik ve mühendislik esaslarına göre incelenmesi." },
      { id: 3, title: "Kimyasal Yangın ve Yanıcı Madde Analizi", desc: "Petrol türevleri, solventler, gazlar ve diğer yanıcı/reaktif kimyasalların yangın üzerindeki etkilerinin değerlendirilmesi." },
      { id: 4, title: "Hızlandırıcı (Accelerant) Kullanım Analizi", desc: "Yangında benzin, tiner vb. uçucu maddelerin kullanılıp kullanılmadığının hem sahada hem de laboratuvar verileriyle değerlendirilmesi." },
      { id: 5, title: "Yangın Yayılım Analizi ", desc: "Yangının gelişim süreci, sıcaklık dağılımı, oksijen etkisi ve yapı içindeki ilerleme şeklinin teknik olarak incelenmesi." },
      { id: 6, title: "Sirayet ve Zincirleme Hasar Analizi", desc: "Yangının komşu mahallere, araçlara veya yapılara sıçrama mekanizmasının değerlendirilmesi." },
      { id: 7, title: "Araç Yangınları Teknik Analizi", desc: "Motor bölmesi, elektrik sistemi ve yakıt hattı kaynaklı yangınların ayrıştırılması ve teknik kökenin belirlenmesi." },
      { id: 8, title: "Kusur ve Sorumluluk Analizi", desc: "Tarafların teknik yükümlülükleri, ihmal ve tedbirsizlik durumları ile illiyet bağının kurulması ve kusur oranlarının belirlenmesi." },
      { id: 9, title: "Mevzuat ve Yönetmelik Uygunluk Analizi", desc: "Binaların Yangından Korunması Hakkında Yönetmelik başta olmak üzere ilgili mevzuata uygunluk denetimi." },
      { id: 10, title: "Delil Bütünlüğü ve Kriminal Uyum Analizi", desc: "Olay yeri bulguları, laboratuvar sonuçları ve tanık beyanlarının birlikte değerlendirilmesi." },
      { id: 11, title: "Risk Analizi", desc: "İTÜ Afet Koordinasyon Birimi denetimi ve onayı ile gerçekleştirilen, yapıların yangın ve afet risklerinin belirlenmesine yönelik kapsamlı teknik analiz ve değerlendirme hizmeti." },
      { id: 12, title: "Tahliye Planı Hazırlama", desc: "İTÜ Afet Koordinasyon Birimi denetimi ve onayı ile hazırlanan, acil durumlarda güvenli ve hızlı tahliyeyi sağlayacak planların oluşturulması ve uygulanabilirliğinin değerlendirilmesi." },
      { id: 13, title: "Deprem Performans ve Yapısal Analiz", desc: "İTÜ Afet Koordinasyon Merkezi denetimi ve onayı ile binaların zemin ve taşıyıcı sistemlerinin deprem performansının incelenmesi, statik uygunluk değerlendirmesi ve olası risklerin raporlanması." },
      { id: 14, title: "Adli Belge İnceleme", desc: "Sahte yazı, imza ve belge tespiti kapsamında gerçekleştirilen kriminal analizler ile belgelerin doğruluğunun bilimsel yöntemlerle değerlendirilmesi." }
    ] as MyService[],
  },

  FOOTER: {
    SLOGAN: 'Her detayında özen, her adımında bir amaç.',
    RIGHTS: 'Yangın Kriminal. Tüm hakları saklıdır.'
  },

  FOOTER_LİNKS: {
    CORPORATE: [
      { id: 101, title: 'Hakkımızda', path: '/hakkimizda' },
      { id: 102, title: 'İletişim', path: '/iletisim' },
      { id: 103, title: 'Blog', path: '/blog' },
      { id: 104, title: 'Vaka Çalışmaları', path: '/vaka-calismalari' },
    ] as NavItem[],

    SERVICES: [
      { id: 201, title: 'Danışmanlık', path: '/danismanlik' },
      { id: 202, title: 'Analiz', path: '/analiz' },
    ] as NavItem[],

    LEGAL: [
      { id: 301, title: 'Gizlilik Politikası', path: '/gizlilik-politikasi' },
      { id: 302, title: 'Kullanım Şartları', path: '/kullanim-sartlari' },
      { id: 303, title: 'Çerez Politikası', path: '/cerez-politikasi' },
    ] as NavItem[],
  },

 CONTACT_INFO : [
    {
        id: 1,
        icon: "📍",
        label: "Adres",
        value: "Gümüşsuyu Mah. Sıraselviler Cad. Taner Palas apt. No:9 K2 D5 Taksim Beyoğlu İstanbul",
    },
    {
        id: 2,
        icon: "📞",
        label: "Telefon",
        value: "(0532) 158 74 89",
        href: "tel:+905321587489",
    },
    {
        id: 3,
        icon: "✉️",
        label: "E-posta",
        value: "info@yanginpatlama.com.tr",
        href: "mailto:info@yanginpatlama.com.tr",
    },
    {
        id: 4,
        icon: "🕐",
        label: "Çalışma Saatleri",
        value: "Pazartesi – Cuma: 09:00 – 18:00",
    },
  ],

  CONTACT_PAGE_TEXT:{
    HERO_TITLE: 'Bize Ulaşın',
    HERO_TITLE1 : 'İletişim',
    HERO_SUBTITLE: 'Hukuki sorularınız için bizimle iletişime geçin. En kısa sürede size dönüş yapacağız.',
    CONTACT_INFORMATION : 'İletişim Bilgileri',
    SENT_MESSAGE : 'Mesaj Gönderin',
    LOCATION: 'Konum'
  },

  
};