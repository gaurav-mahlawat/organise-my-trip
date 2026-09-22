import React, { createContext, useContext, useState, useEffect } from 'react';
import { Enquiry, EnquiryRecord } from '../types';
import { INITIAL_ENQUIRIES } from '../data/enquiriesSeed';

export type { EnquiryRecord };

export { INITIAL_ENQUIRIES };

interface RouteState {
  path: string;
  params: Record<string, string>;
  search: Record<string, string>;
}

interface RouterContextType {
  currentPath: string;
  currentRoute: string;
  params: Record<string, string>;
  search: Record<string, string>;
  navigate: (to: string) => void;
  openEnquiryModal: (initialData?: Partial<Enquiry>) => void;
  closeEnquiryModal: () => void;
  isEnquiryModalOpen: boolean;
  modalInitialData?: Partial<Enquiry>;
  enquiries: Enquiry[];
  addEnquiry: (enquiry: Partial<Enquiry>) => Enquiry;
  updateEnquiryStatus: (id: string, status: Enquiry['status']) => void;
  clearEnquiries: () => void;
  getWhatsAppLink: (customMessage?: string) => string;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [route, setRoute] = useState<RouteState>(() => {
    const hash = window.location.hash.replace('#', '');
    const pathname = hash || window.location.pathname || '/';
    return parseRoute(pathname);
  });

  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState<Partial<Enquiry> | undefined>(undefined);

  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => {
    try {
      const stored = localStorage.getItem('organise_my_trip_enquiries');
      return stored ? JSON.parse(stored) : INITIAL_ENQUIRIES;
    } catch {
      return INITIAL_ENQUIRIES;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('organise_my_trip_enquiries', JSON.stringify(enquiries));
    } catch (e) {
      console.warn('Could not persist enquiries', e);
    }
  }, [enquiries]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/enquiries', { headers: { 'Content-Type': 'application/json' } });
        if (!res.ok) return;
        const serverEnquiries = await res.json();
        if (!cancelled && Array.isArray(serverEnquiries) && serverEnquiries.length > 0) {
          setEnquiries(serverEnquiries);
        }
      } catch {
        // API offline — keep localStorage data
      }
    })();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      const pathname = hash || window.location.pathname || '/';
      setRoute(parseRoute(pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  function parseRoute(fullPath: string): RouteState {
    const [pathPart, queryPart] = fullPath.split('?');
    const path = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;
    const search: Record<string, string> = {};
    if (queryPart) {
      const searchParams = new URLSearchParams(queryPart);
      searchParams.forEach((v, k) => {
        search[k] = v;
      });
    }

    const segments = path.split('/').filter(Boolean);
    const params: Record<string, string> = {};

    if (segments[0] === 'package-detail' && segments[1]) {
      params.slug = segments[1];
    } else if (segments[0] === 'rajasthan-tour-packages' && segments[1]) {
      params.slug = segments[1];
    } else if (segments[0] === 'activity-detail' && segments[1]) {
      params.slug = segments[1];
    } else if (segments[0] === 'taxi-service' && segments[1]) {
      params.routeSlug = segments[1];
    } else if (segments[0] === 'blog' && segments[1]) {
      params.slug = segments[1];
    } else if (segments[0] === 'tour-by-destination' && segments[1]) {
      params.slug = segments[1];
    } else if (segments[0] === 'attraction' && segments[1] && segments[2]) {
      params.destSlug = segments[1];
      params.slug = segments[2];
    }

    return { path, params, search };
  }

  const navigate = (to: string) => {
    const cleanTo = to.startsWith('/') ? to : `/${to}`;
    window.location.hash = cleanTo;
    setRoute(parseRoute(cleanTo));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openEnquiryModal = (initialData?: Partial<Enquiry>) => {
    setModalInitialData(initialData);
    setIsEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    setModalInitialData(undefined);
  };

  const addEnquiry = (data: Partial<Enquiry>): Enquiry => {
    const id = `ENQ-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 16).replace('T', ' ');
    const newEnq: Enquiry = {
      id,
      createdAt: dateStr,
      status: 'new',
      type: data.type || 'tour',
      name: data.name || data.fullName || 'Guest',
      fullName: data.fullName || data.name || 'Guest',
      phone: data.phone || '',
      email: data.email || '',
      message: data.message || '',
      ...data
    };
    setEnquiries(prev => [newEnq, ...prev]);
    fetch('/api/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEnq)
    }).catch(() => {});
    return newEnq;
  };

  const updateEnquiryStatus = (id: string, status: Enquiry['status']) => {
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
    fetch(`/api/enquiries/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    }).catch(() => {});
  };

  const clearEnquiries = () => {
    setEnquiries([]);
    try {
      localStorage.removeItem('organise_my_trip_enquiries');
    } catch {}
  };

  const getWhatsAppLink = (customMessage?: string) => {
    const baseNumber = '918905523568'; // Organise My Trip - Rajasthan Experiences
    const pageUrl = window.location.href;
    const msg = customMessage || `Hello Organise My Trip, I am inquiring from your website (${pageUrl}). Please share details and best quotation for Rajasthan trip.`;
    return `https://api.whatsapp.com/send?phone=${baseNumber}&text=${encodeURIComponent(msg)}`;
  };

  // Determine currentRoute
  const getRouteName = (path: string): string => {
    const segments = path.split('/').filter(Boolean);
    if (segments.length === 0) return 'home';

    const seg0 = segments[0];
    if (seg0 === 'packages') return 'packages';
    if (seg0 === 'package-detail') return 'package-detail';
    if (seg0 === 'rajasthan-tour-packages') return 'seo-landing';
    if (seg0 === 'activities') return 'activities';
    if (seg0 === 'activity-detail') return 'activity-detail';
    if (seg0 === 'taxi-service') {
      return segments[1] ? 'taxi-detail' : 'taxi-overview';
    }
    if (seg0 === 'rajasthan-tour-taxi') return 'taxi-routes';
    if (seg0 === 'rajasthan-car-rental') return 'car-rental';
    if (seg0 === 'blog') {
      return segments[1] ? 'blog-post' : 'blog-index';
    }
    if (seg0 === 'tour-by-destination') {
      return segments[1] ? 'destination-guide' : 'destinations-hub';
    }
    if (seg0 === 'attraction') return 'sightseeing';
    if (seg0 === 'b2b-rajasthan-dmc') return 'b2b-dmc';
    if (seg0 === 'about-us' || seg0 === 'rajasthan-inbound-tour-operator') return 'about-us';
    if (seg0 === 'contact-us') return 'contact-us';
    if (seg0 === 'privacy-policy') return 'privacy-policy';
    if (seg0 === 'terms-and-conditions') return 'terms-and-conditions';
    if (seg0 === 'cancellation-policy') return 'cancellation-policy';
    if (seg0 === 'sitemap') return 'sitemap';
    if (seg0 === 'admin') return 'admin';

    return 'home';
  };

  const currentRoute = getRouteName(route.path);

  return (
    <RouterContext.Provider
      value={{
        currentPath: route.path,
        currentRoute,
        params: route.params,
        search: route.search,
        navigate,
        openEnquiryModal,
        closeEnquiryModal,
        isEnquiryModalOpen,
        modalInitialData,
        enquiries,
        addEnquiry,
        updateEnquiryStatus,
        clearEnquiries,
        getWhatsAppLink
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
