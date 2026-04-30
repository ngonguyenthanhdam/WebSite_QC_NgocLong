'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProductGallery from '@/components/ProductGallery';
import { eventProducts } from '@/lib/siteConfig';

const categories = [
  { id: 'all',         label: 'Tất Cả',          icon: '🎪' },
  { id: 'phong-nen',   label: 'Phông Nền',        icon: '🖼️' },
  { id: 'booth',       label: 'Booth & Lều',      icon: '⛺' },
  { id: 'standee',     label: 'Standee & Banner', icon: '📋' },
  { id: 'cong-chao',   label: 'Cổng Chào',        icon: '🏛️' },
  { id: 'man-hinh',    label: 'Màn Hình LED',     icon: '📺' },
  { id: 'bien-chi-dan',label: 'Biển Chỉ Dẫn',    icon: '🗺️' },
];

const highlights = [
  { icon: '🎯', title: 'Thiết Kế Theo Yêu Cầu', desc: 'Đội ngũ thiết kế sáng tạo, tư vấn miễn phí, phác thảo nhanh trong 24h.' },
  { icon: '⚡', title: 'Thi Công Nhanh Chóng',   desc: 'Cam kết đúng deadline, hỗ trợ setup tại địa điểm sự kiện.' },
  { icon: '🎨', title: 'Đa Dạng Mẫu Mã',         desc: 'Phù hợp mọi loại sự kiện: hội nghị, tiệc cưới, khai trương, triển lãm.' },
  { icon: '🔧', title: 'Cho Thuê & Bán',          desc: 'Linh hoạt cho thuê thiết bị sự kiện hoặc mua sở hữu vĩnh viễn.' },
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? eventProducts
      : eventProducts.filter((p) => p.category === activeCategory);

  const activeInfo = categories.find((c) => c.id === activeCategory);

  return (
    <>
      {/* ── Page Header ── */}
      <div
        className="page-header"
        style={{
          background:
            'linear-gradient(135deg, #1A1033 0%, #3B2065 60%, #5E3A94 100%)',
        }}
      >
        {/* decorative glow */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(ellipse at 75% 40%, rgba(201,168,76,0.22) 0%, transparent 60%),' +
              'radial-gradient(ellipse at 20% 70%, rgba(120,80,220,0.18) 0%, transparent 55%)',
          }}
        />

        <div className="container-site page-header-content">
          {/* breadcrumb */}
          <div className="breadcrumb" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <Link href="/" style={{ color: 'var(--color-champagne)' }}>Trang Chủ</Link>
            <span>›</span>
            <span>Sự Kiện</span>
          </div>

          <div className="section-label" style={{ color: 'var(--color-champagne)' }}>
            Sản Phẩm Sự Kiện
          </div>
          <h1 style={{ color: 'white' }}>Thi Công Sự Kiện</h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.75)',
              marginTop: 14,
              maxWidth: 580,
              fontSize: '1.05rem',
            }}
          >
            Phông nền, booth triển lãm, cổng chào, màn hình LED, standee và toàn bộ vật phẩm
            trang trí sự kiện — chuyên nghiệp, đẹp mắt, đúng tiến độ.
          </p>
        </div>
      </div>

      {/* ── Highlights Strip ── */}
      <section style={{ padding: '56px 0', background: 'var(--color-bg-alt)' }}>
        <div className="container-site">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: 20,
            }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px 20px',
                  boxShadow: 'var(--shadow-soft)',
                  display: 'flex',
                  gap: 14,
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ fontSize: '1.9rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 5 }}>
                    {item.title}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section>
        <div className="container-site">

          {/* Section title */}
          <div style={{ marginBottom: 36 }}>
            <div className="section-label">Danh Mục Sản Phẩm</div>
            <h2>Bộ Sưu Tập Sự Kiện</h2>
            <div className="divider-fancy" />
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            {categories.map((cat) => {
              const count =
                cat.id === 'all'
                  ? eventProducts.length
                  : eventProducts.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  id={`event-filter-${cat.id}`}
                  className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span style={{ marginRight: 5 }}>{cat.icon}</span>
                  {cat.label}
                  <span
                    style={{
                      marginLeft: 6,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      background:
                        activeCategory === cat.id
                          ? 'rgba(0,0,0,0.12)'
                          : 'var(--color-bg-alt)',
                      padding: '2px 8px',
                      borderRadius: 100,
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Category info banner */}
          {activeCategory !== 'all' && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background:
                  'linear-gradient(135deg, rgba(94,58,148,0.08), rgba(94,58,148,0.03))',
                border: '1px solid rgba(94,58,148,0.2)',
                borderRadius: 'var(--radius-md)',
                padding: '18px 22px',
                marginBottom: 32,
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <span style={{ fontSize: '2rem' }}>{activeInfo?.icon}</span>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 3 }}>
                  {activeInfo?.label}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  {activeCategory === 'phong-nen' &&
                    'Phông nền & khung photo booth in kỹ thuật số, màu sắc sắc nét, kích thước tùy chỉnh.'}
                  {activeCategory === 'booth' &&
                    'Booth triển lãm, lều popup quảng cáo — lắp dựng nhanh, tháo gỡ tiện lợi.'}
                  {activeCategory === 'standee' &&
                    'Standee cuộn, X-banner, banner hiflex — in nét, giao hàng nhanh trong ngày.'}
                  {activeCategory === 'cong-chao' &&
                    'Cổng chào sự kiện, khai trương, đám cưới — trang trí hoa vải & đèn LED ấn tượng.'}
                  {activeCategory === 'man-hinh' &&
                    'Màn hình LED sân khấu — module P3/P4 trong nhà và ngoài trời, độ sáng cao.'}
                  {activeCategory === 'bien-chi-dan' &&
                    'Bộ biển chỉ dẫn, số bàn, tên khách — thiết kế đồng bộ với bộ nhận diện sự kiện.'}
                </p>
              </div>
            </motion.div>
          )}

          {/* Product Gallery */}
          <ProductGallery products={filtered} />

          {/* CTA */}
          <div
            style={{
              marginTop: 60,
              padding: '44px 36px',
              background:
                'linear-gradient(135deg, rgba(94,58,148,0.08), rgba(94,58,148,0.03))',
              border: '1px solid rgba(94,58,148,0.15)',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🎪</div>
            <h3 style={{ fontWeight: 800, marginBottom: 10 }}>
              Bạn đang cần chuẩn bị cho sự kiện?
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 26, maxWidth: 480, margin: '0 auto 26px' }}>
              Gửi yêu cầu để nhận tư vấn và báo giá trọn gói sự kiện miễn phí trong 30 phút!
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/lien-he" className="btn-primary" id="event-contact-cta">
                📋 Yêu Cầu Báo Giá
              </Link>
              <Link href="/du-an" className="btn-outline" id="event-projects-link">
                Xem Dự Án →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
