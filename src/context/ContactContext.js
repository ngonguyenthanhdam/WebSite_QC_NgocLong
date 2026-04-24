'use client';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { contactByPage } from '@/lib/siteConfig';

const ContactContext = createContext(null);

export function ContactProvider({ children }) {
  const pathname = usePathname();
  const [contact, setContact] = useState(contactByPage.default);

  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean);
    const firstSeg = segments[0];
    if (firstSeg && contactByPage[firstSeg]) {
      setContact(contactByPage[firstSeg]);
    } else {
      setContact(contactByPage.default);
    }
  }, [pathname]);

  return (
    <ContactContext.Provider value={contact}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  return useContext(ContactContext);
}
