'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Lightbox from '@/components/Lightbox';
import { featuredProjects } from '@/lib/siteConfig';

const categories = ['Tất Cả', 'Biển quảng cáo', 'Nội thất'];

export default function ProjectsPage() {
  const [active, setActive] = useState('Tất Cả');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'Tất Cả'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === active);

  return (
    <>
      <div className="page-header">
        <div className="container-site page-header-content">
          <div className="breadcrumb" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/" style={{ color: 'var(--color-champagne)' }}>Trang Chủ</Link>
            <span>›</span><span>Dự Án</span>
          </div>
          <div className="section-label">Portfolio</div>
          <h1 style={{ color: 'white' }}>Dự Án Tiêu Biểu</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: 14, maxWidth: 520 }}>
            Tổng hợp các công trình tiêu biểu đã thi công — biển quảng cáo và nội thất.
          </p>
        </div>
      </div>

      <section>
        <div className="container-site">
          {/* Filter */}
          <div className="filter-tabs">
            {categories.map(cat => (
              <button key={cat} id={`project-filter-${cat}`}
                className={`filter-tab ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="card"
                style={{ cursor: 'pointer' }}
                onClick={() => setSelected(project)}
                id={`project-card-${project.id}`}
                role="button"
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter') setSelected(project); }}
              >
                <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                  <img src={project.image} alt={project.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute', top: 12, left: 12,
                    background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
                    borderRadius: 100, padding: '4px 12px',
                    fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-champagne-light)',
                  }}>{project.category}</div>
                </div>
                <div style={{ padding: '20px 22px' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: 6 }}>{project.year}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 8, lineHeight: 1.35 }}>{project.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--color-text-muted)' }}>
              Chưa có dự án trong danh mục này.
            </div>
          )}
        </div>
      </section>

      {selected && (
        <Lightbox
          item={{ ...selected, material: selected.category, size: selected.year }}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
