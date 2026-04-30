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
  const pathname = usePathname();
  const contact = useContact();
  const { copy, copied } = useClipboard();

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
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: 46, height: 46,
              background: 'linear-gradient(135deg, var(--color-champagne), var(--color-champagne-dark))',
              borderRadius: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: '1.2rem', color: '#FFF',
              boxShadow: '0 4px 16px rgba(201,168,76,0.35)',
              letterSpacing: '-0.05em',
              flexShrink: 0,
            }}>NL</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontWeight: 800, fontSize: '0.95rem', lineHeight: 1.2,
                color: scrolled ? 'var(--color-text)' : 'white',
                letterSpacing: '-0.02em',
                transition: 'color 0.3s',
              }}>Long Quảng Cáo</span>
              <span style={{
                fontSize: '0.72rem', fontWeight: 500,
                color: scrolled ? 'var(--color-champagne)' : 'rgba(255,255,255,0.75)',
                letterSpacing: '0.04em',
                transition: 'color 0.3s',
              }}>& Nội Thất</span>
            </div>
          </Link>

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
                  id={`nav-${link.href.replace(/\//g,'-').replace(/^-/, '')}`}
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
                      <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
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
            <a
              id="header-fb-link"
              href={contact.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              style={{
                width: 38, height: 38,
                background: 'linear-gradient(135deg,#1877F2,#0D5EBF)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: '0.9rem', textDecoration: 'none',
                transition: 'var(--transition)',
                boxShadow: '0 4px 12px rgba(24,119,242,0.3)',
              }}
            >f</a>

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
