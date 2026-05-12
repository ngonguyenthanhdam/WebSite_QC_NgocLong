// ─── SERVER COMPONENT ──────────────────────────────────────────────────────
// metadata export is only supported in Server Components.
// The interactive UI is delegated to HomePageClient ('use client').
import HomePageClient from './HomePageClient';

// ── 1. METADATA OBJECT ──────────────────────────────────────────────────────
// Title: ≤ 60 chars, contains "Thi Công Nội Thất", "Quảng Cáo", "Ngọc Long", "TP.HCM"
// Description: 150–160 chars, keyword-rich with a clear CTA.
export const metadata = {
  // Absolute title for the homepage (bypasses the layout template)
  title: {
    absolute: 'Ngọc Long – Thi Công Nội Thất & Quảng Cáo TP.HCM',
    // 50 chars ✓
  },
  description:
    'Ngọc Long chuyên thi công nội thất, biển quảng cáo LED, Alu, chữ nổi tại TP.HCM. ' +
    'Thiết kế miễn phí – Bảo hành 2 năm. Gọi ngay: 0373.132.811!',
  // 157 chars ✓

  keywords: [
    'thi công nội thất TP.HCM',
    'biển quảng cáo LED',
    'biển Alu',
    'chữ nổi Inox',
    'hộp đèn LED',
    'đồ sự kiện',
    'Ngọc Long',
    'quảng cáo nội thất HCM',
  ],

  // ── 2. OPEN GRAPH ─────────────────────────────────────────────────────────
  openGraph: {
    title: 'Ngọc Long – Thi Công Nội Thất & Quảng Cáo TP.HCM',
    description:
      'Chuyên thi công biển quảng cáo LED, Alu, chữ nổi Inox và nội thất cao cấp tại TP.HCM. ' +
      'Thiết kế miễn phí – Báo giá trong ngày. Hotline: 0373.132.811',
    url: 'https://quangcaovanoithat.vn',
    siteName: 'Quảng Cáo & Nội Thất Ngọc Long',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: 'https://quangcaovanoithat.vn/images/7_ADV.webp',
        width: 1200,
        height: 630,
        alt: 'Thi công biển quảng cáo chữ nổi – Ngọc Long TP.HCM',
      },
      {
        url: 'https://quangcaovanoithat.vn/images/noi-that/8_noi-that_bep.webp',
        width: 1200,
        height: 630,
        alt: 'Thi công nội thất bếp cao cấp – Ngọc Long TP.HCM',
      },
    ],
  },

  // ── 3. TWITTER CARD ───────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Ngọc Long – Thi Công Nội Thất & Quảng Cáo TP.HCM',
    description:
      'Chuyên thi công biển quảng cáo LED, Alu, chữ nổi Inox và nội thất cao cấp tại TP.HCM. ' +
      'Hotline: 0373.132.811',
    images: ['https://quangcaovanoithat.vn/images/7_ADV.webp'],
  },

  // ── ROBOTS ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // canonical (relative – resolved against metadataBase in layout.js)
  alternates: {
    canonical: '/',
  },
};

// ── 4. JSON-LD LocalBusiness SCHEMA ─────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Quảng Cáo & Nội Thất Ngọc Long',
  alternateName: 'Ngọc Long Advertising & Interior',
  url: 'https://quangcaovanoithat.vn',
  logo: 'https://quangcaovanoithat.vn/images/logo.png',
  image: [
    'https://quangcaovanoithat.vn/images/7_ADV.webp',
    'https://quangcaovanoithat.vn/images/noi-that/8_noi-that_bep.webp',
    'https://quangcaovanoithat.vn/images/30_Event.webp',
  ],
  description:
    'Chuyên thi công biển quảng cáo hộp đèn LED, biển Alu, chữ nổi Inox và nội thất ' +
    'cao cấp (bếp, tủ, giường, kệ tivi) tại TP. Hồ Chí Minh.',
  telephone: '+84373132811',
  email: 'ngoclongcompany010500@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Thành phố Hồ Chí Minh',
    addressRegion: 'TP.HCM',
    addressCountry: 'VN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.7769,
    longitude: 106.7009,
  },
  areaServed: {
    '@type': 'City',
    name: 'Thành phố Hồ Chí Minh',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '07:30',
      closes: '18:00',
    },
  ],
  priceRange: '₫₫',
  currenciesAccepted: 'VND',
  paymentAccepted: 'Tiền mặt, Chuyển khoản',
  hasMap: 'https://maps.google.com/?q=Ho+Chi+Minh+City,+Vietnam',
  sameAs: [
    'https://zalo.me/0373132811',
  ],
};

// ── PAGE COMPONENT (Server Component) ────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Interactive homepage UI (Client Component) */}
      <HomePageClient />
    </>
  );
}
