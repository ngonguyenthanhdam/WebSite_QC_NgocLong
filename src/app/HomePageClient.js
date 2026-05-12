'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { siteInfo } from '@/lib/siteConfig';
import { useClipboard } from '@/hooks/useClipboard';
import { useContact } from '@/context/ContactContext';

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
    image: '/images/event_backdrop.png',
    tag: 'Sự Kiện',
    label: 'Thi Công Đồ Sự Kiện',
    title: 'Đồ Sự Kiện\nChuyên Nghiệp',
    desc: 'Phông nền, Booth, Cổng chào, Màn hình LED — Thiết kế sáng tạo, thi công nhanh, đúng tiến độ.',
    cta: { label: 'Xem mẫu', href: '/su-kien' },
  },
  {
    image: '/images/noi-that/8_noi-that_bep.webp',
    tag: 'Nội Thất',
    label: 'Thi Công Nội Thất',
    title: 'Nội Thất\nChuyên Nghiệp',
    desc: 'Nội thất sang trọng, bền bỉ — Thiết kế sáng tạo, thi công nhanh, đúng tiến độ.',
    cta: { label: 'Xem mẫu', href: '/noi-that' },
  },
];

const stats = [
  { num: '200+', label: 'Dự án hoàn thành' },
  { num: '8+', label: 'Năm kinh nghiệm' },
  { num: '100+', label: 'Khách hàng tin dùng' },
  { num: '100%', label: 'Hài lòng & bảo hành' },
];

const featuredByType = [
  {
    id: 'adv', label: 'Biển Quảng Cáo', icon: '🪧', color: 'var(--color-champagne)',
    items: [
      { id: 'a1', image: '/images/41_ADV.webp', name: 'Tôn Hoa Sen', year: '2024' },
      { id: 'a2', image: '/images/5_ADV.webp', name: 'Nha Khoa VGOLD', year: '2024' },
      { id: 'a3', image: '/images/15_ADV.webp', name: 'Cellphone S', year: '2023' },
    ],
    href: '/bien-quang-cao',
  },
  {
    id: 'event', label: 'Sự Kiện', icon: '🎪', color: '#6AB8FF',
    items: [
      { id: 'e1', image: '/images/30_Event.webp', name: 'Trang Trí Noel', year: '2024' },
      { id: 'e2', image: '/images/32_Event.webp', name: 'Standee & Banner', year: '2024' },
      { id: 'e3', image: '/images/12_Event.webp', name: 'Phông Nền Sự Kiện', year: '2023' },
    ],
    href: '/su-kien',
  },
  {
    id: 'interior', label: 'Nội Thất', icon: '🏠', color: '#7ED88A',
    items: [
      { id: 'i1', image: '/images/noi-that/8_noi-that_bep.webp', name: 'Nội Thất Bếp', year: '2024' },
      { id: 'i2', image: '/images/noi-that/19_noi-that_giuong-tu.webp', name: 'Giường Tủ', year: '2024' },
      { id: 'i3', image: '/images/noi-that/43_noi-that_tu-ke-tivi.webp', name: 'Tủ Kệ Tivi', year: '2023' },
    ],
    href: '/noi-that',
  },
];

const serviceCards = [
  {
    id: 'signage', image: '/images/hero_signage.png', alt: 'Biển quảng cáo',
    icon: '🪧', title: 'Biển Quảng Cáo',
    desc: 'Hộp đèn LED, Alu phẳng, Chữ nổi Inox/Mica. Thi công chuyên nghiệp, đúng thời hạn.',
    tags: ['Hộp đèn', 'Alu', 'Chữ nổi'], href: '/bien-quang-cao', btnId: 'service-signage-link',
  },
  {
    id: 'event', image: '/images/event_backdrop.png', alt: 'Đồ sự kiện',
    icon: '🎪', title: 'Đồ Sự Kiện',
    desc: 'Phông nền, Booth triển lãm, Cổng chào, Màn hình LED — Thiết kế sáng tạo, thi công nhanh.',
    tags: ['Phông nền', 'Booth', 'Cổng chào'], href: '/su-kien', btnId: 'service-event-link',
  },
  {
    id: 'interior', image: '/images/noi-that/8_noi-that_bep.webp', alt: 'Nội thất',
    icon: '🏠', title: 'Nội Thất',
    desc: 'Tủ, bếp, giường tủ, kệ tivi — Sản xuất theo yêu cầu, chất liệu gỗ cao cấp.',
    tags: ['Tủ', 'Bếp', 'Giường Tủ', 'Kệ Tivi'], href: '/noi-that', btnId: 'service-interior-link',
  },
];

const whyUs = [
  { icon: '⚡', title: 'Thi Công Nhanh', desc: 'Cam kết đúng tiến độ, không để ảnh hưởng đến kế hoạch kinh doanh của bạn.' },
  { icon: '💎', title: 'Chất Liệu Cao Cấp', desc: 'Sử dụng nguyên liệu chính hãng, bền bỉ với thời gian và thời tiết.' },
  { icon: '🎨', title: 'Thiết Kế Miễn Phí', desc: 'Đội ngũ thiết kế chuyên nghiệp hỗ trợ tư vấn và thiết kế theo yêu cầu.' },
  { icon: '🔧', title: 'Bảo Hành Dài Hạn', desc: 'Bảo hành sản phẩm đến 2 năm, hỗ trợ kỹ thuật 24/7.' },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [projectTab, setProjectTab] = useState(0);
  const { copy, copied } = useClipboard();
  const contact = useContact();

  useEffect(() => {
    const interval = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5500);
    return () => clearInterval(interval);
  }, []);

  const current = heroSlides[slide];

  return (
    <>
      {/* Toast */}
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
          <motion.div key={slide} style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <img src={current.image} alt={current.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
        </AnimatePresence>
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="container-site" style={{ paddingTop: 80 }}>
            <AnimatePresence mode="wait">
              <motion.div key={`text-${slide}`}
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ maxWidth: 700 }}>
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
                  <Link href="/lien-he" className="btn-ghost">Yêu cầu báo giá</Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} id={`hero-dot-${i}`}
              style={{
                width: i === slide ? 28 : 8, height: 8, borderRadius: 4, border: 'none',
                cursor: 'pointer', transition: 'all 0.3s', padding: 0,
                background: i === slide ? 'var(--color-champagne)' : 'rgba(255,255,255,0.4)',
              }} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>

        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: 36, right: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.5)' }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Cuộn xuống</span>
          <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.3)', animation: 'scroll-hint 2s infinite' }} />
        </div>
      </section>

      {/* ======= SLOGAN BANNER ======= */}
      <section style={{ padding: '28px 0', background: 'linear-gradient(135deg, var(--color-champagne-dark), var(--color-champagne))' }}>
        <div className="container-site" style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: 800, fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', color: '#1A1A1A', letterSpacing: '-0.01em', marginBottom: 6 }}>
            ✦ {siteInfo.slogan} ✦
          </p>
          <p style={{ fontWeight: 900, fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', color: '#1A1A1A', letterSpacing: '0.02em' }}>
            🏆 Uy Tín – Giá Rẻ Nhất Việt Nam 🏆
          </p>
        </div>
      </section>

      {/* ======= 3 DỊCH VỤ ======= */}
      <section>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Dịch Vụ</div>
            <h2>Ba Mảng Dịch Vụ Chính</h2>
            <div className="divider-fancy" style={{ margin: '16px auto 0' }} />
            <p style={{ color: 'var(--color-text-muted)', maxWidth: 600, margin: '12px auto 0' }}>
              Giải pháp toàn diện từ thi công biển quảng cáo, đồ sự kiện đến sản xuất nội thất cao cấp theo yêu cầu.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {serviceCards.map((card, i) => (
              <motion.div key={card.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: 400 }}>
                <img src={card.image} alt={card.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,20,40,0.88) 0%, rgba(10,20,40,0.2) 60%, transparent 100%)' }} />
                <div style={{ position: 'relative', zIndex: 1, padding: 36, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>{card.icon}</div>
                  <h3 style={{ color: 'white', fontWeight: 800, fontSize: '1.5rem', marginBottom: 10 }}>{card.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginBottom: 20, lineHeight: 1.65 }}>{card.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                    {card.tags.map(t => (
                      <span key={t} className="tag" style={{ background: 'rgba(201,168,76,0.2)', borderColor: 'rgba(201,168,76,0.4)', color: 'var(--color-champagne-light)' }}>{t}</span>
                    ))}
                  </div>
                  <Link href={card.href} className="btn-primary" id={card.btnId}>Xem sản phẩm →</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= STATS ======= */}
      <section style={{ background: 'var(--color-bg-alt)', padding: '60px 0' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 0 }}>
            {stats.map((s, i) => (
              <motion.div key={s.label} className="stat-card"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ borderRight: i < stats.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= DỰ ÁN TIÊU BIỂU — 3 tab × 3 ảnh ======= */}
      <section>
        <div className="container-site">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="section-label">Dự Án</div>
              <h2>Dự Án Tiêu Biểu</h2>
              <div className="divider-fancy" style={{ marginBottom: 0 }} />
            </div>
            <Link href="/du-an" className="btn-outline" id="homepage-projects-link">Xem tất cả →</Link>
          </div>

          {/* Tab switcher */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 36, flexWrap: 'wrap' }}>
            {featuredByType.map((group, idx) => (
              <button key={group.id} onClick={() => setProjectTab(idx)}
                style={{
                  padding: '9px 22px', borderRadius: 100, fontFamily: 'inherit',
                  fontWeight: 700, fontSize: '0.88rem', cursor: 'pointer', transition: 'all 0.22s',
                  background: projectTab === idx ? group.color : 'transparent',
                  color: projectTab === idx ? '#1A1A1A' : 'var(--color-text-muted)',
                  border: `2px solid ${projectTab === idx ? group.color : 'var(--color-border)'}`,
                }}>
                {group.icon} {group.label}
              </button>
            ))}
          </div>

          {/* Grid 3 images */}
          <AnimatePresence mode="wait">
            <motion.div key={projectTab}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 22 }}>
              {featuredByType[projectTab].items.map(item => (
                <div key={item.id}
                  style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', position: 'relative', aspectRatio: '4/3' }}>
                  <img src={item.image} alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(10,20,35,0.85), transparent)', padding: '28px 18px 16px' }}>
                    <div style={{ color: 'white', fontWeight: 700, fontSize: '0.92rem', marginBottom: 4 }}>{item.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem' }}>{item.year}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href={featuredByType[projectTab].href} className="btn-outline"
              id={`homepage-projects-${featuredByType[projectTab].id}-link`}>
              Xem thêm {featuredByType[projectTab].label} →
            </Link>
          </div>
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
            {whyUs.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-md)', padding: '32px 24px', backdropFilter: 'blur(8px)', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.15)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}>
                <div style={{ fontSize: '2.2rem', marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, color: 'white', marginBottom: 10, fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section style={{ background: 'var(--color-bg-alt)', padding: '70px 0' }}>
        <div className="container-site" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            style={{ background: 'linear-gradient(135deg, var(--color-champagne), var(--color-champagne-dark))', borderRadius: 'var(--radius-lg)', padding: 'clamp(40px, 6vw, 70px) clamp(24px, 6vw, 80px)' }}>
            <h2 style={{ fontWeight: 800, marginBottom: 14, color: '#1A1A1A' }}>Sẵn Sàng Bắt Đầu Dự Án?</h2>
            <p style={{ color: 'rgba(26,26,26,0.75)', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto 32px' }}>
              Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết trong ngày.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/lien-he" id="cta-contact-link"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: '#1A1A1A', color: 'white', borderRadius: 100, fontWeight: 700, textDecoration: 'none', boxShadow: '0 6px 24px rgba(0,0,0,0.25)', transition: 'all 0.3s' }}>
                📋 Gửi Yêu Cầu Báo Giá
              </Link>
              <button id="cta-phone-btn" onClick={() => copy(contact.phone)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: 'rgba(26,26,26,0.12)', backdropFilter: 'blur(8px)', color: '#1A1A1A', borderRadius: 100, fontWeight: 700, border: '2px solid rgba(26,26,26,0.3)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.95rem', transition: 'all 0.3s' }}>
                📞 {contact.phoneDisplay}
              </button>
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
