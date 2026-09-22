import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useData } from '../context/DataContext';
import { EnquiryForm } from '../components/common/EnquiryForm';
import { MapPin, Clock, ShieldCheck, Car, Check, MessageCircle, ArrowLeft } from 'lucide-react';

export const TaxiRouteDetailPage: React.FC = () => {
  const { params, navigate, openEnquiryModal, getWhatsAppLink } = useRouter();
  const { taxiRoutes: TAXI_ROUTES } = useData();
  const routeSlug = params.routeSlug || 'jaipur-to-jodhpur';

  const route = TAXI_ROUTES.find(r => r.slug === routeSlug) || TAXI_ROUTES[0];

  const waMsg = `Hi Organise My Trip, I want to book a taxi from ${route.fromCity} to ${route.toCity}. Please share the best quote.`;

  return (
    <div className="w-full bg-stone-50 pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigate('/')} className="hover:text-amber-800">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/taxi-service')} className="hover:text-amber-800">Taxi Service</button>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate">{route.fromCity} to {route.toCity} Taxi</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-slate-950 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('images/taxi/etios.webp')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <Car className="w-3.5 h-3.5" />
            <span>Private Chauffeur Driven Cab Service</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            {route.fromCity} to {route.toCity} Taxi Service
          </h1>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Distance: <strong>{route.distanceKm} km</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Travel Time: <strong>{route.durationHours}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Via: {route.highway}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left details */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <h2 className="text-xl font-bold font-serif text-slate-900">
                Route Overview & Highway Guide
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {route.overview}
              </p>

              {/* Stopovers */}
              {route.popularStops.length > 0 && (
                <div className="pt-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Popular Enroute Sightseeing Stopovers
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {route.popularStops.map((stop, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>{stop}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Vehicle Options */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <h3 className="text-lg font-bold font-serif text-slate-900">
                Vehicle Options for {route.fromCity} to {route.toCity}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Sedan (Dzire / Etios)</span>
                  <div className="text-lg font-bold font-serif text-slate-900">Max 4 Passengers · 2 Bags</div>
                  <p className="text-[11px] text-slate-500">Quotation on request</p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Family SUV (Maruti Ertiga)</span>
                  <div className="text-lg font-bold font-serif text-slate-900">Max 6 Passengers · 4 Bags</div>
                  <p className="text-[11px] text-slate-500">Quotation on request</p>
                </div>

                <div className="p-4 rounded-xl border border-amber-300 bg-amber-50/50 space-y-1">
                  <span className="text-[10px] text-amber-800 uppercase font-bold">Executive Innova Crysta</span>
                  <div className="text-lg font-bold font-serif text-amber-950">Captain Seats · Ultra Smooth Ride</div>
                  <p className="text-[11px] text-slate-500">Quotation on request</p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Tempo Traveller</span>
                  <div className="text-lg font-bold font-serif text-slate-900">12 - 16 Passengers · Dedicated Luggage</div>
                  <p className="text-[11px] text-slate-500">Quotation on request</p>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>Includes: FASTag toll fees, state boundary taxes, fuel, and driver night fee.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right booking card */}
          <div className="lg:col-span-5 sticky top-24 space-y-5">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xl space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider block">
                  Book This Route
                </span>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Instant Cab Reservation
                </h3>
              </div>

              <EnquiryForm
                formType="taxi"
                defaultPickup={route.fromCity}
                defaultDrop={route.toCity}
              />

              <div className="pt-2">
                <a
                  href={getWhatsAppLink(waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book on WhatsApp Instantly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
