import React from 'react';
import { useRouter } from '../context/RouterContext';
import { ACTIVITIES } from '../data/activitiesData';
import { EnquiryForm } from '../components/common/EnquiryForm';
import { MapPin, Clock, Check, Users, ShieldCheck, Sparkles, MessageCircle, ArrowLeft } from 'lucide-react';

export const ActivityDetailPage: React.FC = () => {
  const { params, navigate, openEnquiryModal, getWhatsAppLink } = useRouter();
  const slug = params.slug || 'sam-desert-camel-sunset-safari';

  const act = ACTIVITIES.find(a => a.slug === slug) || ACTIVITIES[0];

  const waMsg = `Hi Organise My Trip, I am interested in booking "${act.title}" in ${act.location}. Please share availability and booking details.`;

  return (
    <div className="w-full bg-stone-50 pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigate('/')} className="hover:text-amber-800">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/activities')} className="hover:text-amber-800">Experiences</button>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate">{act.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-12 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{ backgroundImage: `url('${act.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-bold">
              {act.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold backdrop-blur-xs border border-white/10">
              Duration: {act.duration}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold font-serif max-w-4xl text-white">
            {act.title}
          </h1>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{act.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Timings: {act.timing}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Ideal for: {act.idealFor}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <h2 className="text-xl font-bold font-serif text-slate-900">
                Experience Overview
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {act.description}
              </p>

              <div className="pt-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Highlights & Inclusions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {act.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                      <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  What is Included
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {act.includes.map((inc, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sticky Booking Form */}
          <div className="lg:col-span-4 sticky top-24 space-y-5">
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xl space-y-5">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  Rate Per Person
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-bold font-serif text-slate-900">
                    ₹{act.pricePerPerson.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-slate-500">all inclusive</span>
                </div>
              </div>

              <a
                href={getWhatsAppLink(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reserve via WhatsApp</span>
              </a>

              <div className="pt-2 border-t border-stone-100">
                <h4 className="text-xs font-bold text-slate-800 mb-2">Request Booking Quote</h4>
                <EnquiryForm 
                  formType="tour" 
                  defaultPackageName={`Experience: ${act.title}`} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
