'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductGallery from '@/components/ProductGallery';
import Lightbox from '@/components/Lightbox';
import { signageProducts, furnitureProducts, featuredProjects, siteInfo } from '@/lib/siteConfig';
import { useClipboard } from '@/hooks/useClipboard';
import { useContact } from '@/context/ContactContext';
import { AnimatePresence } from 'framer-motion';

const heroSlides = [
  {
    image: '/images/hero_signage.png',
    tag: 'Biển Quảng Cáo',
    label: 'Thi Công Biển Hiệu Chuyên Nghiệp',
    title: 'Biển Quảng Cáo\nCao Cấp & Sáng Tạo',
    desc: 'Hộp đèn LED, Alu, Chữ nổi Inox — Đa dạng mẫu, thi công nhanh, bảo hành dài hạn.',
    cta: { label: 'Khám phá', href: '/bien-quang-cao' },
  },
  {
    image: '/images/hero_furniture.png',
    tag: 'Nội Thất',
    label: 'Sản Xuất Đồ Nội Thất',
    title: 'Nội Thất Hiện Đại\nTheo Yêu Cầu',
    desc: 'Tủ, Kệ, Nội thất văn phòng & gia đình — Chất liệu cao cấp, thiết kế tinh tế.',
    cta: { label: 'Xem mẫu', href: '/noi-that' },
  },
];

const stats = [
  { num: '500+', label: 'Dự án hoàn thành' },
  { num: '8+', label: 'Năm kinh nghiệm' },
  { num: '300+', label: 'Khách hàng tin dùng' },
  { num: '100%', label: 'Hài lòng & bảo hành' },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const { copy, copied } = useClipboard();
  const contact = useContact();

  useEffect(() => {
    const interval = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5500);
    return () => clearInterval(interval);
  }, []);

  const current = heroSlides[slide];

  return (
    <>
      {/* Phone copied toast */}
      <AnimatePresence>
        {copied && (
          <motion.div className="toast-notification show"
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}>
            <span className="toast-icon">✓</span> Đã sao chép số điện thoại
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======= HERO ======= */}
      <section className="hero-slide" style={{ position: 'relative', height: '100vh', minHeight: 600 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={current.image} alt={current.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
        </AnimatePresence>
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="container-site" style={{ paddingTop: 80 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${slide}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ maxWidth: 700 }}
              >
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.4)',
                  borderRadius: 100, padding: '6px 18px', marginBottom: 24,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-champagne)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-champagne-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {current.tag}
                  </span>
                </div>

                <h1 style={{ color: 'white', whiteSpace: 'pre-line', marginBottom: 20, textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
                  {current.title}
                </h1>

                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.08rem', marginBottom: 36, maxWidth: 520, lineHeight: 1.7 }}>
                  {current.desc}
                </p>

                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link href={current.cta.href} className="btn-primary" id={`hero-cta-${slide}`}>
                    {current.cta.label} →
                  </Link>
                  <Link href="/lien-he" className="btn-ghost">
                    Yêu cầu báo giá
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide dots */}
        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} id={`hero-dot-${i}`}
              style={{
                width: i === slide ? 28 : 8, height: 8, borderRadius: 4,
                border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0,
                background: i === slide ? 'var(--color-champagne)' : 'rgba(255,255,255,0.4)',
              }} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: 36, right: 40,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          color: 'rgba(255,255,255,0.5)',
        }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Cuộn xuống</span>
          <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.3)', animation: 'scroll-hint 2s infinite' }} />
        </div>
      </section>

      {/* ======= SLOGAN BANNER ======= */}
      <section style={{ padding: '28px 0', background: 'linear-gradient(135deg, var(--color-champagne-dark), var(--color-champagne))' }}>
        <div className="container-site" style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: 800, fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', color: '#1A1A1A', letterSpacing: '-0.01em' }}>
            ✦ {siteInfo.slogan} ✦
          </p>
        </div>
      </section>

      {/* ======= SERVICE INTRO ======= */}
      <section>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Dịch Vụ</div>
            <h2>Hai Mảng Dịch Vụ Chính</h2>
            <div className="divider-fancy" style={{ margin: '16px auto 0' }} />
            <p style={{ color: 'var(--color-text-muted)', maxWidth: 560, margin: '0 auto', marginTop: 12 }}>
              Chúng tôi cung cấp giải pháp toàn diện từ thi công biển quảng cáo đến sản xuất nội thất theo yêu cầu.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {/* Signage Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: 400 }}
            >
              <img src="/images/hero_signage.png" alt="Biển quảng cáo" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,20,40,0.88) 0%, rgba(10,20,40,0.2) 60%, transparent 100%)' }} />
              <div style={{ position: 'relative', zIndex: 1, padding: 36, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🪧</div>
                <h3 style={{ color: 'white', fontWeight: 800, fontSize: '1.5rem', marginBottom: 10 }}>Biển Quảng Cáo</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginBottom: 20, lineHeight: 1.65 }}>
                  Hộp đèn LED, Alu phẳng, Chữ nổi Inox/Mica. Thi công chuyên nghiệp, đúng thời hạn.
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                  {['Hộp đèn', 'Alu', 'Chữ nổi'].map(s => (
                    <span key={s} className="tag" style={{ background: 'rgba(201,168,76,0.2)', borderColor: 'rgba(201,168,76,0.4)', color: 'var(--color-champagne-light)' }}>{s}</span>
                  ))}
                </div>
                <Link href="/bien-quang-cao" className="btn-primary" id="service-signage-link">
                  Xem sản phẩm →
                </Link>
              </div>
            </motion.div>

            {/* Furniture Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: 400 }}
            >
              <img src="/images/hero_furniture.png" alt="Nội thất" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,20,40,0.88) 0%, rgba(10,20,40,0.2) 60%, transparent 100%)' }} />
              <div style={{ position: 'relative', zIndex: 1, padding: 36, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🛋️</div>
                <h3 style={{ color: 'white', fontWeight: 800, fontSize: '1.5rem', marginBottom: 10 }}>Đồ Nội Thất</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginBottom: 20, lineHeight: 1.65 }}>
                  Tủ, Kệ theo yêu cầu. Gỗ công nghiệp, gỗ tự nhiên chất lượng cao với thiết kế hiện đại.
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                  {['Tủ quần áo', 'Kệ sách', 'Tủ bếp'].map(s => (
                    <span key={s} className="tag" style={{ background: 'rgba(201,168,76,0.2)', borderColor: 'rgba(201,168,76,0.4)', color: 'var(--color-champagne-light)' }}>{s}</span>
                  ))}
                </div>
                <Link href="/noi-that" className="btn-primary" id="service-furniture-link">
                  Xem sản phẩm →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======= STATS ======= */}
      <section style={{ background: 'var(--color-bg-alt)', padding: '60px 0' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 0 }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ borderRight: i < stats.length - 1 ? '1px solid var(--color-border)' : 'none' }}
              >
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= FEATURED PROJECTS ======= */}
      <section>
        <div className="container-site">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="section-label">Dự Án</div>
              <h2>Dự Án Tiêu Biểu</h2>
              <div className="divider-fancy" style={{ marginBottom: 0 }} />
            </div>
            <Link href="/du-an" className="btn-outline" id="homepage-projects-link">Xem tất cả →</Link>
          </div>

          <ProductGallery
            products={featuredProjects.slice(0, 8).map(p => ({
              ...p,
              material: p.category,
              size: p.year,
            }))}
          />
        </div>
      </section>

      {/* ======= WHY US ======= */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-slate-dark) 0%, var(--color-slate) 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center', color: 'var(--color-champagne)' }}>Tại Sao Chọn Chúng Tôi</div>
            <h2 style={{ color: 'white' }}>Cam Kết Chất Lượng & Uy Tín</h2>
            <div className="divider-fancy" style={{ margin: '16px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 28 }}>
            {[
              { icon: '⚡', title: 'Thi Công Nhanh', desc: 'Cam kết đúng tiến độ, không để ảnh hưởng đến kế hoạch kinh doanh của bạn.' },
              { icon: '💎', title: 'Chất Liệu Cao Cấp', desc: 'Sử dụng nguyên liệu chính hãng, bền bỉ với thời gian và thời tiết.' },
              { icon: '🎨', title: 'Thiết Kế Miễn Phí', desc: 'Đội ngũ thiết kế chuyên nghiệp hỗ trợ tư vấn và thiết kế theo yêu cầu.' },
              { icon: '🔧', title: 'Bảo Hành Dài Hạn', desc: 'Bảo hành sản phẩm đến 2 năm, hỗ trợ kỹ thuật 24/7.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 'var(--radius-md)',
                  padding: '32px 24px',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.15)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, color: 'white', marginBottom: 10, fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CTA CONTACT ======= */}
      <section style={{ background: 'var(--color-bg-alt)', padding: '70px 0' }}>
        <div className="container-site" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, var(--color-champagne), var(--color-champagne-dark))',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(40px, 6vw, 70px) clamp(24px, 6vw, 80px)',
            }}
          >
            <h2 style={{ fontWeight: 800, marginBottom: 14, color: '#1A1A1A' }}>Sẵn Sàng Bắt Đầu Dự Án?</h2>
            <p style={{ color: 'rgba(26,26,26,0.75)', marginBottom: 32, fontSize: '1.05rem', maxWidth: 500, margin: '0 auto 32px' }}>
              Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết trong ngày.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/lien-he" id="cta-contact-link"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 32px', background: '#1A1A1A', color: 'white',
                  borderRadius: 100, fontWeight: 700, textDecoration: 'none',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.25)', transition: 'all 0.3s',
                }}
              >📋 Gửi Yêu Cầu Báo Giá</Link>
              <button
                id="cta-phone-btn"
                onClick={() => copy(contact.phone)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 32px', background: 'rgba(26,26,26,0.12)',
                  backdropFilter: 'blur(8px)', color: '#1A1A1A',
                  borderRadius: 100, fontWeight: 700, border: '2px solid rgba(26,26,26,0.3)',
                  cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.95rem',
                  transition: 'all 0.3s',
                }}
              >📞 {contact.phoneDisplay}</button>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        @keyframes scroll-hint {
          0% { opacity: 0.3; height: 20px; }
          50% { opacity: 0.8; height: 40px; }
          100% { opacity: 0.3; height: 20px; }
        }
      `}</style>
    </>
  );
}
