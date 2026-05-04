'use client';
import Link from 'next/link';
import { useContact } from '@/context/ContactContext';
import { useClipboard } from '@/hooks/useClipboard';
import { siteInfo } from '@/lib/siteConfig';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const contact = useContact();
  const { copy, copied } = useClipboard();

  return (
    <footer style={{
      background: 'linear-gradient(180deg, var(--color-slate-dark) 0%, #111820 100%)',
      color: 'white',
      paddingTop: 70,
      paddingBottom: 30,
    }}>
      {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div className="toast-notification show"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
          >
            <span className="toast-icon">✓</span> Đã sao chép số điện thoại
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container-site">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px 40px', marginBottom: 48 }}>
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 50, height: 50,
                borderRadius: 12,
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 4px 16px rgba(201,168,76,0.35)',
              }}>
                <img
                  src="/images/logo.png"
                  alt="Logo Ngọc Long"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1rem' }}>Long Quảng Cáo</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-champagne)', fontWeight: 500 }}>& Nội Thất</div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: 20 }}>
              Chuyên thi công biển quảng cáo LED, hộp đèn, chữ nổi Inox và sản xuất đồ nội thất theo yêu cầu. Chất lượng cao — Giá hợp lý.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>📍 {siteInfo.address}</p>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 20, fontSize: '1rem', color: 'var(--color-champagne)' }}>Dịch Vụ</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Biển Hộp Đèn LED', '/bien-quang-cao?tab=hop-den'],
                ['Biển Quảng Cáo Alu', '/bien-quang-cao?tab=alu'],
                ['Chữ Nổi Inox', '/bien-quang-cao?tab=chu-noi'],
                ['Đồ Nội Thất', '/noi-that'],
                ['Tủ & Kệ Theo Yêu Cầu', '/noi-that'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-champagne-light)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >→ {label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 20, fontSize: '1rem', color: 'var(--color-champagne)' }}>Liên Kết</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Trang Chủ', '/'],
                ['Dự Án Tiêu Biểu', '/du-an'],
                ['Liên Hệ & Báo Giá', '/lien-he'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-champagne-light)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >→ {label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 20, fontSize: '1rem', color: 'var(--color-champagne)' }}>Liên Hệ Nhanh</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <button
                id="footer-phone-btn"
                onClick={() => copy(contact.phone)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  background: 'rgba(201,168,76,0.12)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: 10,
                  padding: '12px 16px',
                  color: 'white', fontFamily: 'inherit', cursor: 'pointer',
                  transition: 'all 0.2s', textAlign: 'left',
                }}
                title="Ấn để sao chép SĐT"
              >
                <span style={{ fontSize: '1.1rem' }}>📞</span>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>Điện thoại</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-champagne-light)' }}>{contact.phoneDisplay}</div>
                </div>
              </button>

              <a
                id="footer-zalo-link"
                href={contact.zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  background: 'rgba(0,104,255,0.15)',
                  border: '1px solid rgba(0,104,255,0.3)',
                  borderRadius: 10, padding: '12px 16px',
                  textDecoration: 'none', color: 'white', transition: 'all 0.2s',
                }}
              >
                <span style={{ fontWeight: 800, color: '#4D9FFF' }}>Zalo</span>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>Nhắn tin Zalo</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Chat ngay</div>
                </div>
              </a>

              <a
                id="footer-fb-link"
                href={contact.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  background: 'rgba(24,119,242,0.15)',
                  border: '1px solid rgba(24,119,242,0.3)',
                  borderRadius: 10, padding: '12px 16px',
                  textDecoration: 'none', color: 'white', transition: 'all 0.2s',
                }}
              >
                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#5B9FFF' }}>FB</span>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>Facebook</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Fan Page</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem' }}>
            © 2015 Long Quảng Cáo & Nội Thất.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
            Thiết kế chuyên nghiệp • Thi công nhanh chóng • Bảo hành uy tín
          </p>
        </div>
      </div>
    </footer>
  );
}
