import React from 'react';
import { useRouter } from '../context/RouterContext';
import { EnquiryForm } from '../components/common/EnquiryForm';
import { Building2, ShieldCheck, Car, Award, Users, Check, MessageCircle, FileSpreadsheet } from 'lucide-react';

export const B2bDmcPage: React.FC = () => {
  const { openEnquiryModal, getWhatsAppLink } = useRouter();

  return (
    <div className="w-full bg-stone-50 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('images/packages/luxury-palace.webp')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-amber-950/75 to-slate-900/90" />
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              <span>Dedicated B2B Inbound DMC Desk</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif">
              Rajasthan DMC for Travel Agents & Tour Operators
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Partner with a genuine on-ground Rajasthan specialist. We offer confidential net B2B tariffs, our own commercial tourist vehicle fleet, seamless white-label ground handling, and 24/7 client care.
            </p>
          </div>
        </div>

        {/* 4 Pillars of B2B Operations */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Own Tourist Fleet</h3>
            <p className="text-xs text-slate-500">60+ commercially permitted Sedans, Ertigas, Innova Crystas, and Tempo Travellers.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Confidential Net Tariffs</h3>
            <p className="text-xs text-slate-500">Competitive wholesale contracted rates for 3★, 4★, and 5★ palace hotels across Rajasthan.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Strict White-Label Policy</h3>
            <p className="text-xs text-slate-500">We represent your brand. Airport welcome placards and itinerary folders display your agency logo.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">24/7 Operations Desk</h3>
            <p className="text-xs text-slate-500">Dedicated operational manager for real-time tracking, flight delay adjustments, and guest care.</p>
          </div>
        </div>

        {/* B2B Partner Registration Form */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-lg space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
              Agency Empanelment
            </span>
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Request B2B Confidential Net Tariffs (2026-2027)
            </h2>
            <p className="text-xs text-slate-500">
              Please submit your agency details below. Our B2B contracting department will verify and dispatch complete hotel and fleet rate cards within 2 business hours.
            </p>
          </div>

          <EnquiryForm formType="b2b" />
        </div>
      </div>
    </div>
  );
};
