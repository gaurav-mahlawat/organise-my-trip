import React from 'react';
import { useRouter } from '../context/RouterContext';
import { DESTINATIONS } from '../data/destinationsData';
import { EnquiryForm } from '../components/common/EnquiryForm';
import { MapPin, Clock, Ticket, Camera, ShieldCheck, ArrowLeft, MessageCircle } from 'lucide-react';

export const SightseeingPage: React.FC = () => {
  const { params, navigate, getWhatsAppLink } = useRouter();
  const destSlug = params.destSlug || 'jaipur';
  const slug = params.slug || 'amer-fort';

  const dest = DESTINATIONS.find(d => d.slug === destSlug) || DESTINATIONS[0];
  const attraction = dest.attractions.find(a => a.slug === slug) || dest.attractions[0];

  return (
    <div className="w-full bg-stone-50 pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigate('/')} className="hover:text-amber-800">Home</button>
          <span>/</span>
          <button onClick={() => navigate(`/tour-by-destination/${dest.slug}`)} className="hover:text-amber-800">{dest.name}</button>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate">{attraction.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pt-10 space-y-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>{dest.name}, Rajasthan</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-slate-900">
            {attraction.name}
          </h1>
        </div>

        {/* Hero Photo */}
        <div className="aspect-16/9 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={attraction.image}
            alt={attraction.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Quick Facts Card */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-700" />
              <span>Timings</span>
            </span>
            <strong className="text-xs text-slate-800 block">{attraction.timing}</strong>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
              <Ticket className="w-3 h-3 text-amber-700" />
              <span>Entry Fee</span>
            </span>
            <strong className="text-xs text-slate-800 block">{attraction.entryFee}</strong>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-700" />
              <span>Ideal Time Needed</span>
            </span>
            <strong className="text-xs text-slate-800 block">2 - 3 Hours</strong>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
              <Camera className="w-3 h-3 text-amber-700" />
              <span>Photography</span>
            </span>
            <strong className="text-xs text-slate-800 block">Allowed (Camera fee extra)</strong>
          </div>
        </div>

        {/* Description & History */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold font-serif text-slate-900">
            About {attraction.name}
          </h2>
          <p>{attraction.description}</p>
          <p>
            When exploring {attraction.name}, booking a private air-conditioned vehicle ensures you can bypass steep walking queues, store shopping bags comfortably, and combine this visit smoothly with other royal sights in {dest.name}.
          </p>
        </div>

        {/* Local Cab Booking CTA */}
        <div className="bg-amber-50 p-6 sm:p-8 rounded-2xl border border-amber-200 space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold font-serif text-slate-900">
              Book Local Sightseeing Cab for {dest.name}
            </h3>
            <p className="text-xs text-slate-600">
              Get an 8hr / 80km full-day private taxi covering {attraction.name} and all major city landmarks.
            </p>
          </div>
          <EnquiryForm formType="taxi" defaultPickup={`${dest.name} Hotel`} defaultDrop={`${dest.name} Local Sightseeing`} />
        </div>
      </div>
    </div>
  );
};
