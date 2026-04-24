'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          className="lightbox-content"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        >
          {/* Image Panel */}
          <div className="lightbox-img-panel">
            <img
              src={item.image}
              alt={item.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 320 }}
            />
            <button className="lightbox-close" onClick={onClose} aria-label="Đóng">✕</button>
          </div>

          {/* Info Panel */}
          <div className="lightbox-info-panel">
            <div>
              <span className="tag">{item.category || 'Sản phẩm'}</span>
            </div>
            <h3 style={{ fontWeight: 800, fontSize: '1.25rem', lineHeight: 1.3, color: 'var(--color-text)' }}>
              {item.name}
            </h3>

            <div className="divider-fancy" />

            <table className="info-table">
              <tbody>
                <tr>
                  <td>Chất liệu</td>
                  <td>{item.material || '[...]'}</td>
                </tr>
                <tr>
                  <td>Kích thước</td>
                  <td>{item.size || '[...]'}</td>
                </tr>
                <tr>
                  <td>Giá tiền</td>
                  <td style={{ color: 'var(--color-champagne-dark)', fontWeight: 700 }}>{item.price || '[Liên hệ báo giá]'}</td>
                </tr>
                {item.year && (
                  <tr>
                    <td>Năm</td>
                    <td>{item.year}</td>
                  </tr>
                )}
              </tbody>
            </table>

            {item.description && (
              <div style={{ marginTop: 4 }}>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{item.description}</p>
              </div>
            )}

            <div style={{ marginTop: 'auto', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a
                href="/lien-he"
                className="btn-primary"
                style={{ justifyContent: 'center', textAlign: 'center' }}
                id={`lightbox-contact-${item.id}`}
              >
                Yêu cầu báo giá
              </a>
              <button
                onClick={onClose}
                className="btn-outline"
                style={{ justifyContent: 'center' }}
              >
                Đóng
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
