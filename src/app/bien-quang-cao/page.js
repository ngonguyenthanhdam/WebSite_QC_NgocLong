'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProductGallery from '@/components/ProductGallery';
import { signageProducts } from '@/lib/siteConfig';
import { Suspense } from 'react';

const categories = [
  { id: 'all', label: 'Tất Cả' },
  { id: 'hop-den', label: 'Biển Hộp Đèn' },
  { id: 'alu', label: 'Biển Alu' },
  { id: 'chu-noi', label: 'Chữ Nổi' },
  { id: 'khac', label: 'Loại Khác' },
];

function SignagContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab') || 'all';
  const [activeCategory, setActiveCategory] = useState(tabParam);

  useEffect(() => {
    const tab = searchParams.get('tab') || 'all';
    setActiveCategory(tab);
  }, [searchParams]);

  const filtered = activeCategory === 'all'
    ? signageProducts
    : signageProducts.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container-site page-header-content">
          <div className="breadcrumb" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/" style={{ color: 'var(--color-champagne)' }}>Trang Chủ</Link>
            <span>›</span>
            <span>Biển Quảng Cáo</span>
          </div>
          <div className="section-label">Sản Phẩm</div>
          <h1 style={{ color: 'white' }}>Biển Quảng Cáo</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: 14, maxWidth: 560, fontSize: '1.05rem' }}>
            Thi công biển hộp đèn LED, biển Alu, chữ nổi Inox/Mica đẹp — chuyên nghiệp — bảo hành dài hạn.
          </p>
        </div>
      </div>

      {/* Content */}
      <section>
        <div className="container-site">
          {/* Filter Tabs */}
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                id={`filter-${cat.id}`}
                className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
                <span style={{
                  marginLeft: 6, fontSize: '0.75rem', fontWeight: 700,
                  background: activeCategory === cat.id ? 'rgba(0,0,0,0.12)' : 'var(--color-bg-alt)',
                  padding: '2px 8px', borderRadius: 100,
                }}>
                  {cat.id === 'all' ? signageProducts.length : signageProducts.filter(p => p.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>

          {/* Info Banner per category */}
          {activeCategory !== 'all' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.04))',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: 'var(--radius-md)',
                padding: '20px 24px',
                marginBottom: 32,
                display: 'flex', alignItems: 'center', gap: 16,
              }}
            >
              <span style={{ fontSize: '2rem' }}>
                {activeCategory === 'hop-den' ? '💡' : activeCategory === 'alu' ? '🔳' : activeCategory === 'chu-noi' ? '🔤' : '📋'}
              </span>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>
                  {categories.find(c => c.id === activeCategory)?.label}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  {activeCategory === 'hop-den' && 'Biển hộp đèn LED nội sáng, khung nhôm định hình, sáng rõ ban đêm. Phù hợp shop, nhà hàng, văn phòng.'}
                  {activeCategory === 'alu' && 'Tôn nhôm Alu cao cấp, in UV bền màu, không cong vênh. Phù hợp biển ngoài trời dài hạn.'}
                  {activeCategory === 'chu-noi' && 'Chữ nổi Mica, Inox, Đồng — nổi bật, sang trọng. Thi công tỉ mỉ theo đúng font design.'}
                  {activeCategory === 'khac' && 'Các loại biển bảng quảng cáo khác: standee, băng rôn, decal dán kính, biển chỉ dẫn...'}
                </p>
              </div>
            </motion.div>
          )}

          {/* Gallery */}
          <ProductGallery products={filtered} />

          {/* CTA Section */}
          <div style={{
            marginTop: 60, padding: '44px 36px',
            background: 'var(--color-bg-alt)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
          }}>
            <h3 style={{ fontWeight: 800, marginBottom: 10 }}>Không tìm thấy mẫu phù hợp?</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 24 }}>Chúng tôi nhận làm theo yêu cầu riêng. Hãy liên hệ để được tư vấn miễn phí!</p>
            <Link href="/lien-he" className="btn-primary" id="signage-contact-cta">📋 Yêu Cầu Báo Giá Ngay</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function SignagePage() {
  return (
    <Suspense>
      <SignagContent />
    </Suspense>
  );
}
