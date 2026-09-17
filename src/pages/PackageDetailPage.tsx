import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { TOUR_PACKAGES } from '../data/packagesData';
import { EnquiryForm } from '../components/common/EnquiryForm';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Check, 
  X, 
  ChevronDown, 
  Share2, 
  MessageCircle, 
  ShieldCheck, 
  Building, 
  Car, 
  ArrowLeft,
  Sparkles
} from 'lucide-react';

export const PackageDetailPage: React.FC = () => {
  const { params, navigate, openEnquiryModal, getWhatsAppLink } = useRouter();
  const slug = params.slug || 'royal-rajasthan-highlights';

  const pkg = TOUR_PACKAGES.find(p => p.slug === slug) || TOUR_PACKAGES[0];

  const [activeDay, setActiveDay] = useState<number | null>(1);
  const [selectedHotelTier, setSelectedHotelTier] = useState<'deluxe' | 'budget' | 'luxury'>('deluxe');

  const relatedPackages = TOUR_PACKAGES
    .filter(p => p.id !== pkg.id && (p.category === pkg.category || p.durationDays === pkg.durationDays))
    .slice(0, 3);

  const waMessage = `Hi Organise My Trip, I am interested in "${pkg.title}" (${pkg.durationDays} Days / ${pkg.durationNights} Nights). Please send full day-by-day itinerary and price quote.`;

  return (
    <div className="w-full bg-stone-50 pb-20">
      {/* 1. Breadcrumbs */}
      <div className="bg-white border-b border-stone-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigate('/')} className="hover:text-amber-800">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/packages')} className="hover:text-amber-800">Packages</button>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate">{pkg.title}</span>
        </div>
      </div>

      {/* 2. Hero Header */}
      <div className="bg-slate-950 text-white py-12 lg:py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{ backgroundImage: `url('${pkg.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-bold">
              {pkg.durationDays} Days / {pkg.durationNights} Nights
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold backdrop-blur-xs border border-white/10">
              {pkg.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              100% Private & Tailor-Made
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif max-w-4xl text-white">
            {pkg.title}
          </h1>

          <p className="text-sm sm:text-base text-amber-300 font-medium max-w-3xl">
            {pkg.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>Route:</strong> {pkg.route}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Car className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Dedicated AC Vehicle & Chauffeur</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Jaipur & Udaipur Local Operator</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Content & Sticky Booking Form Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Itinerary, Inclusions, Overview */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <h2 className="text-xl font-bold font-serif text-slate-900">
                Tour Overview
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pkg.overview}
              </p>

              {/* Highlights Bullet Grid */}
              <div className="pt-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Key Journey Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {pkg.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                      <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Day-by-Day Detailed Itinerary */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold font-serif text-slate-900">
                    Day-by-Day Itinerary
                  </h2>
                  <p className="text-xs text-slate-500">Every day can be fully customized according to your flight or train schedule.</p>
                </div>
                <button
                  onClick={() => setActiveDay(activeDay === null ? 1 : null)}
                  className="text-xs font-semibold text-amber-800 hover:underline"
                >
                  {activeDay === null ? 'Expand All' : 'Collapse All'}
                </button>
              </div>

              <div className="space-y-3">
                {pkg.itinerary.map((day) => {
                  const isOpen = activeDay === null || activeDay === day.day;
                  return (
                    <div
                      key={day.day}
                      className="rounded-xl border border-stone-200 overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setActiveDay(isOpen ? -1 : day.day)}
                        className={`w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm transition-colors ${
                          isOpen ? 'bg-amber-50/70 text-amber-950' : 'bg-white text-slate-800 hover:bg-stone-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-amber-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                            D{day.day}
                          </span>
                          <span className="font-serif text-sm sm:text-base">{day.title}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-amber-800 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="p-4 sm:p-5 bg-white border-t border-stone-200/80 space-y-3 text-xs leading-relaxed text-slate-600">
                          <p>{day.description}</p>
                          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500 pt-2 border-t border-stone-100 font-medium">
                            <span>Meals: <strong className="text-slate-800">{day.meals}</strong></span>
                            <span>Overnight: <strong className="text-slate-800">{day.nightStay}</strong></span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions and Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
                <h3 className="font-serif font-bold text-base text-emerald-800 flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Package Inclusions</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
                <h3 className="font-serif font-bold text-base text-rose-800 flex items-center gap-2">
                  <X className="w-5 h-5 text-rose-600" />
                  <span>Package Exclusions</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hotel Options Section */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <h2 className="text-xl font-bold font-serif text-slate-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-amber-700" />
                <span>Accommodation Categories</span>
              </h2>
              <p className="text-xs text-slate-600">
                We offer three distinct accommodation tiers for this tour. All properties are verified for quality, hygiene, and authentic hospitality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div 
                  onClick={() => setSelectedHotelTier('budget')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedHotelTier === 'budget' ? 'border-amber-600 bg-amber-50/50 shadow-xs' : 'border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Comfort Tier</span>
                  <h4 className="font-serif font-bold text-sm text-slate-900 mt-0.5">3-Star Heritage & City Hotels</h4>
                  <p className="text-xs text-slate-600 mt-1">{pkg.hotels.budget}</p>
                </div>

                <div 
                  onClick={() => setSelectedHotelTier('deluxe')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedHotelTier === 'deluxe' ? 'border-amber-600 bg-amber-50/50 shadow-xs ring-1 ring-amber-500' : 'border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold text-amber-800 block">Most Popular (4★)</span>
                  <h4 className="font-serif font-bold text-sm text-slate-900 mt-0.5">Deluxe Heritage Haveli Stays</h4>
                  <p className="text-xs text-slate-600 mt-1">{pkg.hotels.deluxe}</p>
                </div>

                <div 
                  onClick={() => setSelectedHotelTier('luxury')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedHotelTier === 'luxury' ? 'border-amber-600 bg-amber-50/50 shadow-xs' : 'border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold text-amber-700 block">Royal Palace Tier</span>
                  <h4 className="font-serif font-bold text-sm text-slate-900 mt-0.5">5-Star Royal Palaces</h4>
                  <p className="text-xs text-slate-600 mt-1">{pkg.hotels.luxury}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking & Quotation Card */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xl space-y-5">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  Direct Local Operator Fare
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  {pkg.startingPrice ? (
                    <>
                      <span className="text-3xl font-bold font-serif text-slate-900">
                        ₹{pkg.startingPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-500">/ person</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold font-serif text-amber-700">Price on Request</span>
                  )}
                </div>
                <p className="text-[11px] text-amber-700 font-medium mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Date-Dependent Rates · Customisable by Hotel & Meal Plan</span>
                </p>
              </div>

              {/* Instant WhatsApp CTA */}
              <a
                href={getWhatsAppLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss This Itinerary on WhatsApp</span>
              </a>

              <div className="relative flex py-1 items-center">
                <div className="grow border-t border-stone-200"></div>
                <span className="shrink mx-3 text-[10px] text-slate-400 font-bold uppercase">or get email quote</span>
                <div className="grow border-t border-stone-200"></div>
              </div>

              {/* Inline Quick Quotation Form */}
              <div>
                <EnquiryForm 
                  formType="tour" 
                  defaultPackageName={pkg.title}
                />
              </div>
            </div>

            {/* Local Trust Banner */}
            <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200/60 space-y-2 text-xs">
              <h4 className="font-bold text-amber-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Local Support in Rajasthan</span>
              </h4>
              <p className="text-amber-800 leading-relaxed text-[11px]">
                Organise My Trip is a local Rajasthan operator based in Jaipur. Add 3*/4*/5* hotels, breakfast or MAP, private vehicle, guides, safari permits, desert camp, cultural evenings and airport/rail transfers as required.
              </p>
            </div>
          </div>
        </div>

        {/* Related Packages */}
        {relatedPackages.length > 0 && (
          <div className="mt-16 pt-12 border-t border-stone-200 space-y-6">
            <h2 className="text-xl font-bold font-serif text-slate-900">
              Similar Rajasthan Journeys You Might Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPackages.map((rp) => (
                <div
                  key={rp.id}
                  onClick={() => navigate(`/package-detail/${rp.slug}`)}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="aspect-16/10 relative overflow-hidden">
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">
                      {rp.durationDays}D / {rp.durationNights}N
                    </span>
                  </div>
                  <div className="p-4 space-y-1">
                    <h3 className="font-serif font-bold text-sm text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-1">
                      {rp.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1">{rp.route}</p>
                    <div className="pt-2 flex justify-between items-center text-xs">
                      {rp.startingPrice ? (
                        <strong className="text-slate-900">₹{rp.startingPrice.toLocaleString('en-IN')}</strong>
                      ) : (
                        <strong className="text-amber-700">Price on Request</strong>
                      )}
                      <span className="text-amber-800 font-bold text-[11px]">View Tour →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
