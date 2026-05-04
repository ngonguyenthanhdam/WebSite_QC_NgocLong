'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useContact } from '@/context/ContactContext';
import { useClipboard } from '@/hooks/useClipboard';

export default function ContactPage() {
  const contact = useContact();
  const { copy, copied } = useClipboard();
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [showFbToast, setShowFbToast] = useState(false);

  const handleFbClick = (e) => {
    e.preventDefault();
    setShowFbToast(true);
    setTimeout(() => setShowFbToast(false), 2800);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(false);
    try {
      const res = await fetch('https://formspree.io/f/xjglgznd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'Họ và tên': form.name,
          'Số điện thoại': form.phone,
          'Dịch vụ': form.service,
          'Nội dung yêu cầu': form.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {copied && (
          <motion.div className="toast-notification show"
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}>
            <span className="toast-icon">✓</span> Đã sao chép số điện thoại
          </motion.div>
        )}
      </AnimatePresence>

      {/* FB coming-soon toast */}
      <AnimatePresence>
        {showFbToast && (
          <motion.div className="toast-notification show"
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            <span className="toast-icon">ℹ️</span> Tính năng này sẽ được thêm sau
          </motion.div>
        )}
      </AnimatePresence>

      <div className="page-header" style={{ background: 'linear-gradient(135deg, #1A2332 0%, #2D4060 100%)' }}>
        <div className="container-site page-header-content">
          <div className="breadcrumb" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <Link href="/" style={{ color: 'var(--color-champagne)' }}>Trang Chủ</Link>
            <span>›</span><span>Liên Hệ</span>
          </div>
          <div className="section-label">Liên Hệ</div>
          <h1 style={{ color: 'white' }}>Liên Hệ & Báo Giá</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: 14, maxWidth: 520 }}>
            Chúng tôi sẵn sàng tư vấn và báo giá miễn phí. Phản hồi trong vòng 30 phút trong giờ hành chính.
          </p>
        </div>
      </div>

      <section>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px 60px', alignItems: 'start' }}>
            
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-label">Gửi Yêu Cầu</div>
              <h2 style={{ marginBottom: 8 }}>Yêu Cầu Báo Giá</h2>
              <div className="divider-fancy" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))',
                    border: '2px solid var(--color-champagne)',
                    borderRadius: 'var(--radius-md)',
                    padding: '40px 32px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontWeight: 800, marginBottom: 12, color: 'var(--color-champagne-dark)' }}>Gửi Thành Công!</h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: 24 }}>
                    Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: '', message: '' }); }}
                    className="btn-outline"
                  >Gửi yêu cầu khác</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }} id="contact-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Họ và tên *</label>
                    <input
                      id="contact-name"
                      className="form-input"
                      type="text"
                      placeholder="Nguyễn Văn A"
                      required
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">Số điện thoại *</label>
                    <input
                      id="contact-phone"
                      className="form-input"
                      type="tel"
                      placeholder="0901 234 567"
                      required
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-service">Nhu cầu cần tư vấn *</label>
                    <select
                      id="contact-service"
                      className="form-select"
                      required
                      value={form.service}
                      onChange={e => setForm({...form, service: e.target.value})}
                    >
                      <option value="">-- Chọn dịch vụ --</option>
                      <option value="hop-den">Biển Hộp Đèn LED</option>
                      <option value="alu">Biển Quảng Cáo Alu</option>
                      <option value="chu-noi">Chữ Nổi Inox/Mica</option>
                      <option value="bien-khac">Loại Biển Khác</option>
                      <option value="noi-that-tu">Tủ Nội Thất</option>
                      <option value="noi-that-ke">Kệ Nội Thất</option>
                      <option value="khac">Khác / Chưa xác định</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Mô tả yêu cầu thêm</label>
                    <textarea
                      id="contact-message"
                      className="form-textarea"
                      placeholder="Mô tả kích thước, số lượng, thiết kế mong muốn hoặc bất kỳ yêu cầu đặc biệt nào..."
                      value={form.message}
                      onChange={e => setForm({...form, message: e.target.value})}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    id="contact-submit-btn"
                    disabled={loading}
                    style={{ justifyContent: 'center', opacity: loading ? 0.75 : 1 }}
                  >
                    {loading ? '⏳ Đang gửi...' : '📋 Gửi Yêu Cầu Báo Giá'}
                  </button>

                  {submitError && (
                    <div style={{
                      background: 'rgba(220,53,69,0.08)',
                      border: '1px solid rgba(220,53,69,0.35)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '14px 18px',
                      color: '#c0392b',
                      fontSize: '0.88rem',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <span>⚠️</span>
                      <span>Gửi thất bại. Vui lòng thử lại hoặc liên hệ trực tiếp qua SĐT <strong>0373 132 811</strong>.</span>
                    </div>
                  )}
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
            >
              <div>
                <div className="section-label">Thông Tin</div>
                <h2 style={{ marginBottom: 8 }}>Liên Hệ Trực Tiếp</h2>
                <div className="divider-fancy" />
              </div>

              {/* Phone cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <button
                  id="contact-page-phone-btn"
                  onClick={() => copy(contact.phone)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 18,
                    background: 'white', border: '1.5px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)', padding: '20px 22px',
                    cursor: 'pointer', fontFamily: 'inherit',
                    transition: 'all 0.25s', textAlign: 'left',
                    boxShadow: 'var(--shadow-soft)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-champagne)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(201,168,76,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'var(--shadow-soft)'; }}
                >
                  <div style={{
                    width: 52, height: 52,
                    background: 'linear-gradient(135deg, var(--color-champagne), var(--color-champagne-dark))',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', flexShrink: 0,
                  }}>📞</div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: 3, fontWeight: 500 }}>Gọi hoặc nhắn tin (ấn để sao chép)</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-champagne-dark)', letterSpacing: '-0.01em' }}>{contact.phoneDisplay}</div>
                  </div>
                </button>

                <a
                  id="contact-page-zalo-link"
                  href={contact.zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 18,
                    background: 'white', border: '1.5px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)', padding: '20px 22px',
                    textDecoration: 'none', color: 'inherit',
                    transition: 'all 0.25s', boxShadow: 'var(--shadow-soft)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#0068FF'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,104,255,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'var(--shadow-soft)'; }}
                >
                  <div style={{
                    width: 52, height: 52, borderRadius: 'var(--radius-sm)',
                    background: 'linear-gradient(135deg, #0068FF, #004CC7)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 900, fontSize: '1.3rem', color: 'white', flexShrink: 0,
                  }}>Z</div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: 3, fontWeight: 500 }}>Zalo</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>Nhắn tin Zalo ngay</div>
                  </div>
                </a>

                <button
                  id="contact-page-fb-link"
                  onClick={handleFbClick}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 18,
                    background: 'white', border: '1.5px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)', padding: '20px 22px',
                    cursor: 'pointer', fontFamily: 'inherit', color: 'inherit',
                    transition: 'all 0.25s', boxShadow: 'var(--shadow-soft)',
                    textAlign: 'left', width: '100%',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#1877F2'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(24,119,242,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'var(--shadow-soft)'; }}
                >
                  <div style={{
                    width: 52, height: 52, borderRadius: 'var(--radius-sm)',
                    background: 'linear-gradient(135deg, #1877F2, #0D5EBF)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem', color: 'white', flexShrink: 0,
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: 3, fontWeight: 500 }}>Facebook</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>Fan Page của chúng tôi</div>
                  </div>
                </button>
              </div>

              {/* Working hours */}
              <div style={{
                background: 'var(--color-bg-alt)',
                borderRadius: 'var(--radius-md)',
                padding: '24px 22px',
              }}>
                <h4 style={{ fontWeight: 700, marginBottom: 14, fontSize: '0.95rem' }}>🕐 Giờ Làm Việc</h4>
                <table style={{ width: '100%', fontSize: '0.88rem' }}>
                  <tbody>
                    {[
                      ['Thứ 2 – Chủ Nhật', '7:30 – 21:00'],
                      ['Các ngày lễ', '7:30 – 17:00'],
                    ].map(([day, time]) => (
                      <tr key={day}>
                        <td style={{ padding: '7px 0', color: 'var(--color-text-muted)', width: '60%' }}>{day}</td>
                        <td style={{ fontWeight: 600, textAlign: 'right' }}>{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
