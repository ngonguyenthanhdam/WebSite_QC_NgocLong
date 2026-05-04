'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// ── Toàn bộ 69 ảnh, phân loại theo suffix tên file ───────────
const ALL_IMAGES = [
  // HERO
  { id: 'h1', src: '/images/hero_signage.png', name: 'Biển LED Cao Cấp', cat: 'adv' },
  // ADV
  { id: 'a1', src: '/images/4_ADV.webp', name: 'Biển Quảng Cáo 04', cat: 'adv' },
  { id: 'a2', src: '/images/5_ADV.webp', name: 'Biển Quảng Cáo 05', cat: 'adv' },
  { id: 'a3', src: '/images/7_ADV.webp', name: 'Biển Quảng Cáo 07', cat: 'adv' },
  { id: 'a4', src: '/images/8_ADV.webp', name: 'Biển Quảng Cáo 08', cat: 'adv' },
  { id: 'a5', src: '/images/9_ADV.webp', name: 'Biển Quảng Cáo 09', cat: 'adv' },
  { id: 'a6', src: '/images/11_ADV.webp', name: 'Biển Quảng Cáo 11', cat: 'adv' },
  { id: 'a7', src: '/images/14_ADV.webp', name: 'Biển Quảng Cáo 14', cat: 'adv' },
  { id: 'a8', src: '/images/15_ADV.webp', name: 'Biển Quảng Cáo 15', cat: 'adv' },
  { id: 'a9', src: '/images/16_ADV.webp', name: 'Biển Quảng Cáo 16', cat: 'adv' },
  { id: 'a10', src: '/images/17_ADV.webp', name: 'Biển Quảng Cáo 17', cat: 'adv' },
  { id: 'a11', src: '/images/18_ADV.webp', name: 'Biển Quảng Cáo 18', cat: 'adv' },
  { id: 'a12', src: '/images/19_ADV.webp', name: 'Biển Quảng Cáo 19', cat: 'adv' },
  { id: 'a13', src: '/images/20_ADV.webp', name: 'Biển Quảng Cáo 20', cat: 'adv' },
  { id: 'a14', src: '/images/21_ADV.webp', name: 'Biển Quảng Cáo 21', cat: 'adv' },
  { id: 'a15', src: '/images/23_ADV.webp', name: 'Biển Quảng Cáo 23', cat: 'adv' },
  { id: 'a16', src: '/images/24_ADV.webp', name: 'Biển Quảng Cáo 24', cat: 'adv' },
  { id: 'a17', src: '/images/25_ADV.webp', name: 'Biển Quảng Cáo 25', cat: 'adv' },
  { id: 'a18', src: '/images/27_ADV.webp', name: 'Biển Quảng Cáo 27', cat: 'adv' },
  { id: 'a19', src: '/images/28_ADV.webp', name: 'Biển Quảng Cáo 28', cat: 'adv' },
  { id: 'a20', src: '/images/36_ADV.webp', name: 'Biển Quảng Cáo 36', cat: 'adv' },
  { id: 'a21', src: '/images/38_ADV.webp', name: 'Biển Quảng Cáo 38', cat: 'adv' },
  { id: 'a22', src: '/images/39_ADV.webp', name: 'Biển Quảng Cáo 39', cat: 'adv' },
  { id: 'a23', src: '/images/40_ADV.webp', name: 'Biển Quảng Cáo 40', cat: 'adv' },
  { id: 'a24', src: '/images/41_ADV.webp', name: 'Biển Quảng Cáo 41', cat: 'adv' },
  { id: 'a25', src: '/images/42_ADV.webp', name: 'Biển Quảng Cáo 42', cat: 'adv' },
  { id: 'a26', src: '/images/43_ADV.webp', name: 'Biển Quảng Cáo 43', cat: 'adv' },
  { id: 'a27', src: '/images/44_ADV.webp', name: 'Biển Quảng Cáo 44', cat: 'adv' },
  { id: 'a28', src: '/images/45_ADV.webp', name: 'Biển Quảng Cáo 45', cat: 'adv' },
  { id: 'a29', src: '/images/46_ADV.webp', name: 'Biển Quảng Cáo 46', cat: 'adv' },
  { id: 'a30', src: '/images/47_ADV.webp', name: 'Biển Quảng Cáo 47', cat: 'adv' },
  { id: 'a31', src: '/images/48_ADV.webp', name: 'Biển Quảng Cáo 48', cat: 'adv' },
  { id: 'a32', src: '/images/49_ADV.webp', name: 'Biển Quảng Cáo 49', cat: 'adv' },
  { id: 'a33', src: '/images/51_ADV.webp', name: 'Biển Quảng Cáo 51', cat: 'adv' },
  { id: 'a34', src: '/images/53_ADV.webp', name: 'Biển Quảng Cáo 53', cat: 'adv' },
  { id: 'a35', src: '/images/54_ADV.webp', name: 'Biển Quảng Cáo 54', cat: 'adv' },
  { id: 'a36', src: '/images/55_ADV.webp', name: 'Biển Quảng Cáo 55', cat: 'adv' },
  // EVENT
  { id: 'e1', src: '/images/12_Event.webp', name: 'Sự Kiện 12', cat: 'event' },
  { id: 'e2', src: '/images/30_Event.webp', name: 'Sự Kiện 30', cat: 'event' },
  { id: 'e3', src: '/images/31_Event.webp', name: 'Sự Kiện 31', cat: 'event' },
  { id: 'e4', src: '/images/32_Event.webp', name: 'Sự Kiện 32', cat: 'event' },
  { id: 'e5', src: '/images/33_Event.webp', name: 'Sự Kiện 33', cat: 'event' },
  { id: 'e6', src: '/images/34_Event.webp', name: 'Sự Kiện 34', cat: 'event' },
  { id: 'e7', src: '/images/50_Event.webp', name: 'Sự Kiện 50', cat: 'event' },
  { id: 'e8', src: '/images/event_backdrop.png', name: 'Phông Nền Backdrop', cat: 'event' },
  // INTERIOR — 46 ảnh từ /images/noi-that/ (đều là .webp)
  { id: 'i01', src: '/images/noi-that/1_noi-that_bep.webp',            name: 'Nội Thất Bếp 01',          cat: 'interior' },
  { id: 'i02', src: '/images/noi-that/2_noi-that_giuong-tu.webp',      name: 'Giường Tủ 02',             cat: 'interior' },
  { id: 'i03', src: '/images/noi-that/3_noi-that_tu.webp',             name: 'Tủ Nội Thất 03',           cat: 'interior' },
  { id: 'i04', src: '/images/noi-that/4_noi-that_ban.webp',            name: 'Bàn Nội Thất 04',          cat: 'interior' },
  { id: 'i05', src: '/images/noi-that/5_noi-that_tu.webp',             name: 'Tủ Nội Thất 05',           cat: 'interior' },
  { id: 'i06', src: '/images/noi-that/6_noi-that_tu.webp',             name: 'Tủ Nội Thất 06',           cat: 'interior' },
  { id: 'i07', src: '/images/noi-that/7_noi-that_bep.webp',            name: 'Nội Thất Bếp 07',          cat: 'interior' },
  { id: 'i08', src: '/images/noi-that/8_noi-that_bep.webp',            name: 'Nội Thất Bếp 08',          cat: 'interior' },
  { id: 'i09', src: '/images/noi-that/9_noi-that_giuong-tu.webp',      name: 'Giường Tủ 09',             cat: 'interior' },
  { id: 'i10', src: '/images/noi-that/10_noi-that_bep.webp',           name: 'Nội Thất Bếp 10',          cat: 'interior' },
  { id: 'i11', src: '/images/noi-that/11_noi-that_giuong-tu.webp',     name: 'Giường Tủ 11',             cat: 'interior' },
  { id: 'i12', src: '/images/noi-that/12_noi-that_bep.webp',           name: 'Nội Thất Bếp 12',          cat: 'interior' },
  { id: 'i13', src: '/images/noi-that/13_noi-that_giuong-tu.webp',     name: 'Giường Tủ 13',             cat: 'interior' },
  { id: 'i14', src: '/images/noi-that/14_noi-that_bep.webp',           name: 'Nội Thất Bếp 14',          cat: 'interior' },
  { id: 'i15', src: '/images/noi-that/15_noi-that_ban.webp',           name: 'Bàn Nội Thất 15',          cat: 'interior' },
  { id: 'i16', src: '/images/noi-that/17_noi-that_tu.webp',            name: 'Tủ Nội Thất 17',           cat: 'interior' },
  { id: 'i17', src: '/images/noi-that/18_noi-that.webp',               name: 'Nội Thất 18',              cat: 'interior' },
  { id: 'i18', src: '/images/noi-that/19_noi-that_giuong-tu.webp',     name: 'Giường Tủ 19',             cat: 'interior' },
  { id: 'i19', src: '/images/noi-that/20_noi-that_bep.webp',           name: 'Nội Thất Bếp 20',          cat: 'interior' },
  { id: 'i20', src: '/images/noi-that/21_noi-that_bep.webp',           name: 'Nội Thất Bếp 21',          cat: 'interior' },
  { id: 'i21', src: '/images/noi-that/22_noi-that_tu.webp',            name: 'Tủ Nội Thất 22',           cat: 'interior' },
  { id: 'i22', src: '/images/noi-that/23_noi-that_ban.webp',           name: 'Bàn Nội Thất 23',          cat: 'interior' },
  { id: 'i23', src: '/images/noi-that/24_noi-that_giuong-tu.webp',     name: 'Giường Tủ 24',             cat: 'interior' },
  { id: 'i24', src: '/images/noi-that/25_noi-that_bep.webp',           name: 'Nội Thất Bếp 25',          cat: 'interior' },
  { id: 'i25', src: '/images/noi-that/26_noi-that_bep.webp',           name: 'Nội Thất Bếp 26',          cat: 'interior' },
  { id: 'i26', src: '/images/noi-that/27_noi-that_bep.webp',           name: 'Nội Thất Bếp 27',          cat: 'interior' },
  { id: 'i27', src: '/images/noi-that/28_noi-that_giuong-tu.webp',     name: 'Giường Tủ 28',             cat: 'interior' },
  { id: 'i28', src: '/images/noi-that/29_noi-that_giuong-tu.webp',     name: 'Giường Tủ 29',             cat: 'interior' },
  { id: 'i29', src: '/images/noi-that/30_noi-that_tu.webp',            name: 'Tủ Nội Thất 30',           cat: 'interior' },
  { id: 'i30', src: '/images/noi-that/31_noi-that_tu.webp',            name: 'Tủ Nội Thất 31',           cat: 'interior' },
  { id: 'i31', src: '/images/noi-that/32_noi-that_tu.webp',            name: 'Tủ Nội Thất 32',           cat: 'interior' },
  { id: 'i32', src: '/images/noi-that/33_noi-that_giuong-tu.webp',     name: 'Giường Tủ 33',             cat: 'interior' },
  { id: 'i33', src: '/images/noi-that/34_noi-that_tu.webp',            name: 'Tủ Nội Thất 34',           cat: 'interior' },
  { id: 'i34', src: '/images/noi-that/35_noi-that_bep.webp',           name: 'Nội Thất Bếp 35',          cat: 'interior' },
  { id: 'i35', src: '/images/noi-that/36_noi-that_giuong-tu.webp',     name: 'Giường Tủ 36',             cat: 'interior' },
  { id: 'i36', src: '/images/noi-that/37_noi-that_giuong-tu.webp',     name: 'Giường Tủ 37',             cat: 'interior' },
  { id: 'i37', src: '/images/noi-that/38_noi-that_bep.webp',           name: 'Nội Thất Bếp 38',          cat: 'interior' },
  { id: 'i38', src: '/images/noi-that/39_noi-that_tu.webp',            name: 'Tủ Nội Thất 39',           cat: 'interior' },
  { id: 'i39', src: '/images/noi-that/40_noi-that_bep.webp',           name: 'Nội Thất Bếp 40',          cat: 'interior' },
  { id: 'i40', src: '/images/noi-that/41_noi-that_tu.webp',            name: 'Tủ Nội Thất 41',           cat: 'interior' },
  { id: 'i41', src: '/images/noi-that/42_noi-that_giuong-tu.webp',     name: 'Giường Tủ 42',             cat: 'interior' },
  { id: 'i42', src: '/images/noi-that/43_noi-that_tu-ke-tivi.webp',    name: 'Tủ Kệ Tivi 43',            cat: 'interior' },
  { id: 'i43', src: '/images/noi-that/44_noi-that_tu.webp',            name: 'Tủ Nội Thất 44',           cat: 'interior' },
  { id: 'i44', src: '/images/noi-that/45_noi-that_bep.webp',           name: 'Nội Thất Bếp 45',          cat: 'interior' },
  { id: 'i45', src: '/images/noi-that/46_noi-that_tu-ke.webp',         name: 'Tủ Kệ 46',                 cat: 'interior' },
  { id: 'i46', src: '/images/noi-that/47_noi-that_tu-ke.webp',         name: 'Tủ Kệ 47',                 cat: 'interior' },
  // KHÁC (BG / Other / uncategorized / Logo)
  { id: 'o1', src: '/images/10_BG.webp', name: 'Hình Nền 10', cat: 'khac' },
  { id: 'o2', src: '/images/52_BG.webp', name: 'Hình Nền 52', cat: 'khac' },
  { id: 'o4', src: '/images/13.webp', name: 'Hình Ảnh 13', cat: 'khac' },
  { id: 'o6', src: '/images/35_Other.webp', name: 'Hình Ảnh 35', cat: 'khac' },
  { id: 'o7', src: '/images/37_Other.webp', name: 'Hình Ảnh 37', cat: 'khac' },
];

const CAT_LABEL = { adv: 'Biển QC', event: 'Sự Kiện', interior: 'Nội Thất', khac: 'Khác' };

const FILTERS = [
  { id: 'all', label: 'Tất Cả' },
  { id: 'adv', label: 'Biển Quảng Cáo' },
  { id: 'event', label: 'Sự Kiện' },
  { id: 'interior', label: 'Nội Thất' },
  { id: 'khac', label: 'Khác' },
];

// ── Lightbox với điều hướng ‹ › và phím tắt ────────────────
function GalleryLightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handle = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [onClose, onPrev, onNext]);

  const btnStyle = (pos) => ({
    position: 'absolute', [pos]: 20, top: '50%', transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: '50%', width: 52, height: 52, color: 'white', fontSize: '1.6rem',
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background 0.2s', zIndex: 1,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.93)', backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <button style={btnStyle('left')}
        onClick={e => { e.stopPropagation(); onPrev(); }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        aria-label="Ảnh trước"
      >‹</button>

      <motion.div
        key={item.id}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '85vw', maxHeight: '88vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}
      >
        <img
          src={item.src} alt={item.name}
          style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: 12, boxShadow: '0 32px 80px rgba(0,0,0,0.55)' }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ color: 'white', fontSize: '1rem', fontWeight: 600 }}>{item.name}</span>
          <span style={{
            fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 100,
            background: 'rgba(201,168,76,0.25)', color: 'var(--color-champagne-light)',
            border: '1px solid rgba(201,168,76,0.4)',
          }}>{CAT_LABEL[item.cat]}</span>
        </div>
      </motion.div>

      <button style={btnStyle('right')}
        onClick={e => { e.stopPropagation(); onNext(); }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        aria-label="Ảnh tiếp"
      >›</button>

      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 18, right: 18,
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)',
          borderRadius: '50%', width: 42, height: 42, color: 'white',
          fontSize: '1.1rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        aria-label="Đóng"
      >✕</button>
    </motion.div>
  );
}

// ── Trang chính ───────────────────────────────────────────────
export default function ProjectsPage() {
  const [activeCat, setActiveCat] = useState('all');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filtered = activeCat === 'all'
    ? ALL_IMAGES
    : ALL_IMAGES.filter(x => x.cat === activeCat);

  useEffect(() => { setLightboxIdx(null); }, [activeCat]);

  const goNext = () => setLightboxIdx(i => (i + 1) % filtered.length);
  const goPrev = () => setLightboxIdx(i => (i - 1 + filtered.length) % filtered.length);

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container-site page-header-content">
          <div className="breadcrumb" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/" style={{ color: 'var(--color-champagne)' }}>Trang Chủ</Link>
            <span>›</span><span>Dự Án Hoàn Thành</span>
          </div>
          <div className="section-label">Portfolio</div>
          <h1 style={{ color: 'white' }}>Dự Án Hoàn Thành</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: 14, maxWidth: 540 }}>
            Tổng hợp toàn bộ <strong style={{ color: 'var(--color-champagne-light)' }}>{ALL_IMAGES.length}</strong> hình ảnh
            công trình đã thi công — biển quảng cáo, sự kiện và nội thất.
          </p>
        </div>
      </div>

      <section>
        <div className="container-site">

          {/* Filter Tabs */}
          <div className="filter-tabs" style={{ flexWrap: 'wrap' }}>
            {FILTERS.map(f => {
              const cnt = f.id === 'all' ? ALL_IMAGES.length : ALL_IMAGES.filter(x => x.cat === f.id).length;
              return (
                <button
                  key={f.id}
                  id={`project-filter-${f.id}`}
                  className={`filter-tab ${activeCat === f.id ? 'active' : ''}`}
                  onClick={() => setActiveCat(f.id)}
                >
                  {f.label}
                  <span style={{
                    marginLeft: 6, fontSize: '0.74rem', fontWeight: 700, padding: '2px 8px', borderRadius: 100,
                    background: activeCat === f.id ? 'rgba(0,0,0,0.14)' : 'var(--color-bg-alt)',
                  }}>{cnt}</span>
                </button>
              );
            })}
          </div>

          {/* Image count */}
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.83rem', marginBottom: 20 }}>
            Hiển thị&nbsp;
            <strong style={{ color: 'var(--color-champagne-dark)' }}>{filtered.length}</strong>
            &nbsp;/&nbsp;{ALL_IMAGES.length} hình ảnh
            &nbsp;·&nbsp;Click ảnh để xem toàn màn hình &nbsp;·&nbsp; ← → để điều hướng &nbsp;·&nbsp; Esc để đóng
          </p>

          {/* Masonry Grid */}
          <div style={{ columns: '4 220px', columnGap: 12, lineHeight: 0 }}>
            <AnimatePresence>
              {filtered.map((img, idx) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.25, delay: (idx % 16) * 0.025 }}
                  onClick={() => setLightboxIdx(idx)}
                  id={`project-img-${img.id}`}
                  role="button" tabIndex={0}
                  aria-label={`Xem ảnh: ${img.name}`}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setLightboxIdx(idx); }}
                  style={{
                    display: 'inline-block', width: '100%', marginBottom: 12,
                    breakInside: 'avoid', cursor: 'pointer',
                    borderRadius: 10, overflow: 'hidden',
                    position: 'relative', lineHeight: 0,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.querySelector('img').style.transform = 'scale(1.07)';
                    e.currentTarget.querySelector('.ov').style.opacity = '1';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                    e.currentTarget.querySelector('.ov').style.opacity = '0';
                  }}
                >
                  <img
                    src={img.src} alt={img.name} loading="lazy"
                    style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.38s ease' }}
                  />
                  <div className="ov" style={{
                    position: 'absolute', inset: 0, opacity: 0, transition: 'opacity 0.28s',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 52%)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                    padding: '12px 11px', lineHeight: 1.3,
                  }}>
                    <div style={{ color: 'white', fontSize: '0.79rem', fontWeight: 600, marginBottom: 4 }}>{img.name}</div>
                    <span style={{
                      fontSize: '0.68rem', fontWeight: 700, padding: '2px 8px', borderRadius: 100,
                      background: 'rgba(0,0,0,0.38)', color: 'var(--color-champagne-light)',
                      display: 'inline-block', width: 'fit-content',
                    }}>{CAT_LABEL[img.cat]}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--color-text-muted)' }}>
              Chưa có hình ảnh trong danh mục này.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <GalleryLightbox
            item={filtered[lightboxIdx]}
            onClose={() => setLightboxIdx(null)}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}
