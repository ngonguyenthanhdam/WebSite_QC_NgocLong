'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProductGallery from '@/components/ProductGallery';
import { furnitureProducts } from '@/lib/siteConfig';

const categories = [
  { id: 'all', label: 'Tất Cả' },
  { id: 'tu', label: 'Tủ' },
  { id: 'ke', label: 'Kệ' },
];

export default function FurniturePage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? furnitureProducts
    : furnitureProducts.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <div className="page-header" style={{
        background: 'linear-gradient(135deg, #2C3E2D 0%, #4A6B4C 100%)',
      }}>
        <div className="container-site page-header-content">
          <div className="breadcrumb" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/" style={{ color: 'var(--color-champagne)' }}>Trang Chủ</Link>
            <span>›</span>
            <span>Đồ Nội Thất</span>
          </div>
          <div className="section-label">Sản Phẩm</div>
          <h1 style={{ color: 'white' }}>Đồ Nội Thất</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: 14, maxWidth: 560, fontSize: '1.05rem' }}>
            Sản xuất tủ, kệ và nội thất theo yêu cầu. Chất liệu gỗ công nghiệp và gỗ tự nhiên cao cấp.
          </p>
        </div>
      </div>

      <section>
        <div className="container-site">
          {/* Materials info */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 20, marginBottom: 44,
          }}>
            {[
              { icon: '🌳', title: 'Gỗ Tự Nhiên', desc: 'Sồi, Óc Chó, Tần Bì — cao cấp, tự nhiên.' },
              { icon: '🏭', title: 'Gỗ Công Nghiệp', desc: 'MDF, HDF phủ Melamine — bền, đẹp, tầm trung.' },
              { icon: '✨', title: 'Phụ Kiện Nhập', desc: 'Tay nắm, bản lề Blum, Hettich chính hãng.' },
              { icon: '🎨', title: 'Sơn & Phủ Bóng', desc: 'Sơn PU, phủ Acrylic, veneer đa màu sắc.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'white', borderRadius: 'var(--radius-md)',
                  padding: '24px 20px', boxShadow: 'var(--shadow-soft)',
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                }}
              >
                <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>{item.title}</div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Filter */}
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                id={`furniture-filter-${cat.id}`}
                className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
                <span style={{
                  marginLeft: 6, fontSize: '0.75rem', fontWeight: 700,
                  background: activeCategory === cat.id ? 'rgba(0,0,0,0.12)' : 'var(--color-bg-alt)',
                  padding: '2px 8px', borderRadius: 100,
                }}>
                  {cat.id === 'all' ? furnitureProducts.length : furnitureProducts.filter(p => p.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>

          <ProductGallery products={filtered} />

          <div style={{
            marginTop: 60, padding: '44px 36px',
            background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-lg)', textAlign: 'center',
          }}>
            <h3 style={{ fontWeight: 800, marginBottom: 10 }}>Cần thiết kế theo không gian riêng?</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 24 }}>Gửi ảnh và yêu cầu, chúng tôi sẽ thiết kế và báo giá miễn phí!</p>
            <Link href="/lien-he" className="btn-primary" id="furniture-contact-cta">📋 Yêu Cầu Báo Giá Ngay</Link>
          </div>
        </div>
      </section>
    </>
  );
}
