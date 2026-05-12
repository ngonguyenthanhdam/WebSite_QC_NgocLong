import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingSocial from '@/components/FloatingSocial';
import { ContactProvider } from '@/context/ContactContext';
import BackToTop from '@/components/BackToTop';

export const metadata = {
  // metadataBase resolves all relative URLs in openGraph.images, twitter.images, etc.
  metadataBase: new URL('https://quangcaovanoithat.vn'),

  // Title template: child pages export title:'Foo' → renders 'Foo | Ngọc Long'
  title: {
    template: '%s | Ngọc Long Quảng Cáo & Nội Thất',
    default: 'Ngọc Long – Thi Công Nội Thất & Quảng Cáo TP.HCM',
  },
  description:
    'Ngọc Long chuyên thi công nội thất, biển quảng cáo LED, Alu, chữ nổi tại TP.HCM. ' +
    'Thiết kế miễn phí – Bảo hành 2 năm. Gọi ngay: 0373.132.811!',
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

  openGraph: {
    title: 'Ngọc Long – Thi Công Nội Thất & Quảng Cáo TP.HCM',
    description:
      'Chuyên thi công biển quảng cáo LED, Alu, chữ nổi Inox và nội thất cao cấp tại TP.HCM. ' +
      'Hotline: 0373.132.811',
    url: 'https://quangcaovanoithat.vn',
    siteName: 'Quảng Cáo & Nội Thất Ngọc Long',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: '/images/7_ADV.webp',
        width: 1200,
        height: 630,
        alt: 'Thi công biển quảng cáo chữ nổi – Ngọc Long TP.HCM',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ngọc Long – Thi Công Nội Thất & Quảng Cáo TP.HCM',
    description:
      'Chuyên thi công biển quảng cáo LED, Alu, chữ nổi Inox và nội thất tại TP.HCM. ' +
      'Hotline: 0373.132.811',
    images: ['/images/7_ADV.webp'],
  },

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

  alternates: {
    canonical: 'https://quangcaovanoithat.vn',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ContactProvider>
          <Header />
          <main style={{ minHeight: '60vh' }}>
            {children}
          </main>
          <Footer />
          <FloatingSocial />
          <BackToTop />
        </ContactProvider>
      </body>
    </html>
  );
}
