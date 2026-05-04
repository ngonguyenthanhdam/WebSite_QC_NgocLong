import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingSocial from '@/components/FloatingSocial';
import { ContactProvider } from '@/context/ContactContext';
import BackToTop from '@/components/BackToTop';

export const metadata = {
  title: 'Long Quảng Cáo & Nội Thất - Biển Hiệu LED, Hộp Đèn, Chữ Nổi, Tủ Kệ',
  description: 'Chuyên thi công biển quảng cáo hộp đèn LED, biển Alu, chữ nổi Inox và sản xuất đồ nội thất tủ kệ cao cấp. Chất lượng cao - Giá hợp lý - Bảo hành uy tín.',
  keywords: 'biển quảng cáo, hộp đèn LED, chữ nổi, biển alu, nội thất, tủ kệ, thiết kế nội thất',
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
