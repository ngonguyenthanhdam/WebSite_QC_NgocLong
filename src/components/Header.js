'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useContact } from '@/context/ContactContext';
import { useClipboard } from '@/hooks/useClipboard';
import { siteInfo } from '@/lib/siteConfig';

const navLinks = [
  { label: 'Trang Chủ', href: '/' },
  {
    label: 'Biển Quảng Cáo',
    href: '/bien-quang-cao',
    children: [
      { label: 'Biển Hộp Đèn', href: '/bien-quang-cao?tab=hop-den' },
      { label: 'Biển Quảng Cáo Alu', href: '/bien-quang-cao?tab=alu' },
      { label: 'Biển Chữ Nổi', href: '/bien-quang-cao?tab=chu-noi' },
      { label: 'Các Loại Biển Khác', href: '/bien-quang-cao?tab=khac' },
    ],
  },
  { label: 'Đồ Nội Thất', href: '/noi-that' },
  { label: 'Sự Kiện', href: '/su-kien' },
  { label: 'Dự Án Hoàn Thành', href: '/du-an' },
  { label: 'Liên Hệ', href: '/lien-he' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showFbToast, setShowFbToast] = useState(false);
  const [showLogoModal, setShowLogoModal] = useState(false);
  const pathname = usePathname();
  const contact = useContact();
  const { copy, copied } = useClipboard();

  const handleFbClick = () => {
    setShowFbToast(true);
    setTimeout(() => setShowFbToast(false), 2800);
  };

  // Close logo modal on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setShowLogoModal(false); };
    if (showLogoModal) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showLogoModal]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMobileOpen(false); setActiveDropdown(null); }, [pathname]);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const handlePhoneClick = () => copy(contact.phone);

  return (
    <>
      {/* Toast for copied */}
      <AnimatePresence>
        {copied && (
          <motion.div
            className="toast-notification show"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            <span className="toast-icon">✓</span>
            Đã sao chép số điện thoại
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast for FB coming soon */}
      <AnimatePresence>
        {showFbToast && (
          <motion.div
            className="toast-notification show"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            <span className="toast-icon">ℹ️</span>
            Tính năng này sẽ được thêm sau
          </motion.div>
        )}
      </AnimatePresence>

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          transition: 'all 0.35s ease',
          background: scrolled
            ? 'rgba(247,245,242,0.97)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          boxShadow: scrolled ? 'var(--shadow-soft)' : 'none',
        }}
      >
        <div className="container-site" style={{ display: 'flex', alignItems: 'center', height: 72, gap: 24 }}>
          {/* Logo — click to open company card modal */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            <button
              id="header-logo-btn"
              onClick={() => setShowLogoModal(true)}
              title="Xem thông tin công ty"
              style={{
                background: 'none', border: 'none', padding: 0,
                cursor: 'zoom-in', display: 'block', flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 46, height: 46, borderRadius: 12, overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(201,168,76,0.35)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(201,168,76,0.55)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(201,168,76,0.35)'; }}
              >
                <img
                  src="/images/logo.png"
                  alt="Logo Ngọc Long"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                />
              </div>
            </button>

            <Link href="/" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
              <span style={{
                fontWeight: 800, fontSize: '0.95rem', lineHeight: 1.2,
                color: scrolled ? 'var(--color-text)' : 'white',
                letterSpacing: '-0.02em', transition: 'color 0.3s',
              }}>Long Quảng Cáo</span>
              <span style={{
                fontSize: '0.72rem', fontWeight: 500,
                color: scrolled ? 'var(--color-champagne)' : 'rgba(255,255,255,0.75)',
                letterSpacing: '0.04em', transition: 'color 0.3s',
              }}>&nbsp;&nbsp;Sự Kiện & Nội Thất</span>
            </Link>
          </div>

          {/* Company Card Modal */}
          <AnimatePresence>
            {showLogoModal && (
              <motion.div
                id="logo-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowLogoModal(false)}
                style={{
                  position: 'fixed', inset: 0, zIndex: 9000,
                  background: 'rgba(8,14,24,0.85)',
                  backdropFilter: 'blur(14px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: 24,
                }}
              >
                <motion.div
                  initial={{ scale: 0.86, opacity: 0, y: 28 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.92, opacity: 0, y: 20 }}
                  transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                  onClick={e => e.stopPropagation()}
                  style={{
                    background: 'linear-gradient(135deg, rgba(24,33,50,0.98), rgba(14,20,32,0.98))',
                    border: '1px solid rgba(201,168,76,0.22)',
                    borderRadius: 24,
                    boxShadow: '0 40px 90px rgba(0,0,0,0.65), 0 0 0 1px rgba(201,168,76,0.08)',
                    padding: '44px 40px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 44,
                    maxWidth: 620,
                    width: '100%',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setShowLogoModal(false)}
                    style={{
                      position: 'absolute', top: 16, right: 16,
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '50%', width: 34, height: 34,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', color: 'rgba(255,255,255,0.6)', fontSize: '1rem',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                  >✕</button>

                  {/* Logo large */}
                  <div style={{
                    width: 190, height: 190, borderRadius: 20, overflow: 'hidden',
                    flexShrink: 0, background: 'white', padding: 14,
                    boxShadow: '0 12px 48px rgba(201,168,76,0.28)',
                  }}>
                    <img
                      src="/images/logo.png"
                      alt="Logo Công ty Ngọc Long"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                    />
                  </div>

                  {/* Company info */}
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{
                      display: 'inline-block',
                      background: 'linear-gradient(135deg, var(--color-champagne), var(--color-champagne-dark))',
                      borderRadius: 6, padding: '3px 12px',
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                      color: '#1A1A1A', marginBottom: 12,
                    }}>CÔNG TY TNHH</div>
                    <h2 style={{
                      color: 'white', fontWeight: 900,
                      fontSize: 'clamp(1.05rem, 3vw, 1.4rem)',
                      lineHeight: 1.3, marginBottom: 28,
                      letterSpacing: '-0.01em',
                    }}>
                      QUẢNG CÁO NGỌC LONG
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {[
                        { icon: '📞', label: 'Điện thoại', value: '0373 132 811' },
                        { icon: '🏢', label: 'Mã số thuế', value: '0318692666' },
                      ].map(({ icon, label, value }) => (
                        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <div style={{
                            width: 42, height: 42, borderRadius: 11, flexShrink: 0,
                            background: 'rgba(201,168,76,0.1)',
                            border: '1px solid rgba(201,168,76,0.22)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.15rem',
                          }}>{icon}</div>
                          <div>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: 3 }}>{label}</div>
                            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-champagne-light)', letterSpacing: '0.02em' }}>{value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>


          {/* Desktop Nav */}
          <nav style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 4 }}>
            {navLinks.map((link) => (
              <div
                key={link.href}
                style={{ position: 'relative' }}
                onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  id={`nav-${link.href.replace(/\//g, '-').replace(/^-/, '')}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '8px 14px',
                    borderRadius: 100,
                    fontWeight: isActive(link.href) ? 700 : 500,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                    color: isActive(link.href)
                      ? 'var(--color-champagne)'
                      : scrolled ? 'var(--color-text)' : 'rgba(255,255,255,0.9)',
                    background: isActive(link.href)
                      ? scrolled ? 'rgba(201,168,76,0.08)' : 'rgba(255,255,255,0.12)'
                      : 'transparent',
                  }}
                  className="desktop-nav-link"
                >
                  {link.label}
                  {link.children && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: 2, marginTop: 1 }}>
                      <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <AnimatePresence>
                    {activeDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 8px)',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'white',
                          borderRadius: 16,
                          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                          minWidth: 220,
                          overflow: 'hidden',
                          border: '1px solid var(--color-border)',
                        }}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 10,
                              padding: '13px 20px',
                              textDecoration: 'none',
                              color: 'var(--color-text)',
                              fontSize: '0.88rem',
                              fontWeight: 500,
                              borderBottom: '1px solid var(--color-border)',
                              transition: 'all 0.2s',
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = 'rgba(201,168,76,0.06)';
                              e.currentTarget.style.color = 'var(--color-champagne-dark)';
                              e.currentTarget.style.paddingLeft = '26px';
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = 'var(--color-text)';
                              e.currentTarget.style.paddingLeft = '20px';
                            }}
                          >
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-champagne)', display: 'inline-block', flexShrink: 0 }}></span>
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Phone + Social */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            <button
              id="header-phone-btn"
              onClick={handlePhoneClick}
              title="Ấn để sao chép SĐT"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '9px 18px',
                background: 'linear-gradient(135deg, var(--color-champagne), var(--color-champagne-dark))',
                borderRadius: 100,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 700,
                fontSize: '0.88rem',
                color: '#1A1A1A',
                boxShadow: '0 4px 16px rgba(201,168,76,0.35)',
                transition: 'var(--transition)',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontSize: '1rem' }}>📞</span>
              {contact.phoneDisplay}
            </button>
            <a
              id="header-zalo-link"
              href={contact.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Zalo"
              style={{
                width: 38, height: 38,
                background: 'linear-gradient(135deg,#0068FF,#004CC7)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: '0.9rem', textDecoration: 'none',
                transition: 'var(--transition)', fontWeight: 700,
                boxShadow: '0 4px 12px rgba(0,104,255,0.3)',
              }}
            >Z</a>
            <button
              id="header-fb-link"
              onClick={handleFbClick}
              title="Facebook"
              style={{
                width: 38, height: 38,
                background: 'linear-gradient(135deg,#1877F2,#0D5EBF)',
                borderRadius: '50%',
                border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'var(--transition)',
                boxShadow: '0 4px 12px rgba(24,119,242,0.3)',
              }}
            >f</button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: 'none',
                background: 'none', border: 'none', cursor: 'pointer',
                width: 38, height: 38,
                alignItems: 'center', justifyContent: 'center',
                borderRadius: 8,
                color: scrolled ? 'var(--color-text)' : 'white',
                fontSize: '1.3rem',
              }}
              className="mobile-menu-btn"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                background: 'rgba(247,245,242,0.98)',
                backdropFilter: 'blur(20px)',
                borderTop: '1px solid var(--color-border)',
                overflow: 'hidden',
              }}
            >
              <div className="container-site" style={{ padding: '16px 24px' }}>
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        display: 'block',
                        padding: '13px 0',
                        fontWeight: isActive(link.href) ? 700 : 500,
                        color: isActive(link.href) ? 'var(--color-champagne)' : 'var(--color-text)',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        borderBottom: '1px solid var(--color-border)',
                      }}
                    >
                      {link.label}
                    </Link>
                    {link.children && link.children.map(child => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{
                          display: 'block',
                          padding: '10px 16px',
                          color: 'var(--color-text-muted)',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          borderBottom: '1px solid var(--color-border)',
                        }}
                      >— {child.label}</Link>
                    ))}
                  </div>
                ))}
                <div style={{ padding: '16px 0', display: 'flex', gap: 12 }}>
                  <button
                    onClick={handlePhoneClick}
                    className="btn-primary"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >📞 {contact.phoneDisplay}</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <style jsx global>{`
        @media (max-width: 900px) {
          nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          #header-phone-btn { display: none !important; }
          #header-zalo-link { display: none !important; }
          #header-fb-link { display: none !important; }
        }
      `}</style>
    </>
  );
}
