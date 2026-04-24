'use client';
import { useEffect, useState } from 'react';
import { useContact } from '@/context/ContactContext';

export default function FloatingSocial() {
  const contact = useContact();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="float-social"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(80px)',
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {/* Back to top button placeholder - handled separately */}
      <a
        id="float-zalo-btn"
        href={contact.zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn zalo"
        title="Nhắn Zalo"
        aria-label="Liên hệ Zalo"
      >
        <span className="tooltip">Nhắn Zalo</span>
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#0068FF"/>
          <text x="50%" y="57%" dominantBaseline="middle" textAnchor="middle" fill="white" fontWeight="900" fontSize="15" fontFamily="Arial">Z</text>
        </svg>
      </a>
      <a
        id="float-fb-btn"
        href={contact.facebookLink}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn facebook"
        title="Facebook"
        aria-label="Facebook Page"
      >
        <span className="tooltip">Facebook</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
        </svg>
      </a>
    </div>
  );
}
