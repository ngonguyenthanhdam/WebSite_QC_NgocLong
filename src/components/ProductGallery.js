'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lightbox from './Lightbox';

export default function ProductGallery({ products, title, subtitle }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  // Reset to page 1 whenever the product list changes (e.g. filter tab switch)
  useEffect(() => {
    setCurrentPage(0);
  }, [products]);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div>
      {(title || subtitle) && (
        <div style={{ marginBottom: 36 }}>
          {title && <h3 style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 6 }}>{title}</h3>}
          {subtitle && <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{subtitle}</p>}
        </div>
      )}

      {/* Gallery Grid */}
      <div style={{ position: 'relative' }}>
        <div className="gallery-grid">
          {currentProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              className="gallery-item"
              onClick={() => setSelectedProduct(product)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              id={`product-${product.id}`}
              tabIndex={0}
              role="button"
              aria-label={`Xem chi tiết ${product.name}`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedProduct(product); }}
            >
              <img src={product.image} alt={product.name} />
              <div className="overlay">
                <div className="overlay-text">
                  <div className="item-name">{product.name}</div>
                  <div className="item-category">{product.material}</div>
                </div>
              </div>
              {/* Zoom icon */}
              <div style={{
                position: 'absolute', top: 12, right: 12,
                width: 34, height: 34,
                background: 'rgba(255,255,255,0.9)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.9rem',
                opacity: 0,
                transition: 'opacity 0.25s',
                pointerEvents: 'none',
              }} className="zoom-icon">🔍</div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 28 }}>
          <button
            id="gallery-prev-btn"
            onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            style={{
              width: 46, height: 46,
              borderRadius: '50%',
              border: '2px solid var(--color-border)',
              background: currentPage === 0 ? 'var(--color-bg-alt)' : 'white',
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem',
              transition: 'all 0.25s',
              color: currentPage === 0 ? '#CCC' : 'var(--color-text)',
              boxShadow: 'var(--shadow-soft)',
            }}
            aria-label="Trang trước"
          >‹</button>

          {/* Page dots */}
          <div style={{ display: 'flex', gap: 8 }}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                style={{
                  width: i === currentPage ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: 'none',
                  background: i === currentPage ? 'var(--color-champagne)' : 'var(--color-border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }}
                aria-label={`Trang ${i + 1}`}
              />
            ))}
          </div>

          <button
            id="gallery-next-btn"
            onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
            style={{
              width: 46, height: 46,
              borderRadius: '50%',
              border: '2px solid var(--color-border)',
              background: currentPage === totalPages - 1 ? 'var(--color-bg-alt)' : 'white',
              cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem',
              transition: 'all 0.25s',
              color: currentPage === totalPages - 1 ? '#CCC' : 'var(--color-text)',
              boxShadow: 'var(--shadow-soft)',
            }}
            aria-label="Trang tiếp theo"
          >›</button>
        </div>

        <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.82rem', marginTop: 10 }}>
          Hiển thị {currentPage * itemsPerPage + 1}–{Math.min((currentPage + 1) * itemsPerPage, products.length)} / {products.length} sản phẩm
        </p>
      </div>

      {/* Lightbox */}
      {selectedProduct && (
        <Lightbox item={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      <style jsx global>{`
        .gallery-item:hover .zoom-icon { opacity: 1 !important; }
      `}</style>
    </div>
  );
}
