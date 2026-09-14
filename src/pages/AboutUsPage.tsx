import React from 'react';
import { useRouter } from '../context/RouterContext';
import { ShieldCheck, Award, Users, HeartHandshake, MapPin, CheckCircle2, Building, Sparkles } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  const { navigate, openEnquiryModal } = useRouter();

  return (
    <div className="w-full bg-stone-50 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('images/packages/classic-rajasthan.webp')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-amber-950/75 to-slate-900/90" />
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Local Rajasthan travel company · Since 2011</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif">
              About Organise My Trip
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Founded in Jaipur in 2011, Organise My Trip was born from a simple belief: genuine travel in the Land of Kings should be intimate, respectful, and transparently priced.
            </p>
          </div>
        </div>

        {/* Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              15 Years of Crafting Private Rajasthan Memories
            </h2>
            <p>
              Unlike generic online portals that broker tours to third-party sub-contractors, <strong>Organise My Trip</strong> is a direct local ground operator headquartered on MI Road, Jaipur, with a regional operational hub in Udaipur.
            </p>
            <p>
              When you travel with us, you are cared for by our own verified chauffeurs, assigned our hand-selected heritage havelis, and backed by round-the-clock on-ground emergency support. Over 18,500 happy travelers have journeyed across Rajasthan with us since 2011.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
                <span className="text-2xl font-bold font-serif text-amber-800">18,500+</span>
                <span className="text-[11px] text-slate-500 block">Happy Guests Guided</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
                <span className="text-2xl font-bold font-serif text-amber-800">60+</span>
                <span className="text-[11px] text-slate-500 block">Commercial Tourist Fleet</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
                <span className="text-2xl font-bold font-serif text-amber-800">4.9 / 5</span>
                <span className="text-[11px] text-slate-500 block">Google & TripAdvisor Rating</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
                <span className="text-2xl font-bold font-serif text-amber-800">2011</span>
                <span className="text-[11px] text-slate-500 block">Established in Jaipur</span>
              </div>
            </div>
          </div>

          <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-lg border border-stone-200">
            <img
              src="images/packages/jaipur-amber-fort.jpg"
              alt="Organise My Trip Rajasthan Team & Chauffeurs"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Core Commitments */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-xs space-y-6">
          <h3 className="text-xl font-bold font-serif text-slate-900 text-center">
            Our Guiding Operating Principles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2 p-4 rounded-xl bg-stone-50 border border-stone-100">
              <ShieldCheck className="w-6 h-6 text-amber-700" />
              <h4 className="font-bold text-sm text-slate-900">Zero Commission Trap Guarantee</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our drivers are strictly prohibited from coercing guests into high-commission tourist souvenir emporiums. Your itinerary time is 100% your own.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-stone-50 border border-stone-100">
              <Award className="w-6 h-6 text-amber-700" />
              <h4 className="font-bold text-sm text-slate-900">Verified Heritage Stays</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We inspect rooms, water pressure, and kitchen hygiene personally before recommending any heritage haveli or desert tent.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-stone-50 border border-stone-100">
              <Users className="w-6 h-6 text-amber-700" />
              <h4 className="font-bold text-sm text-slate-900">Local Chauffeurs & Guides</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Courteous, defensive drivers who know every highway shortcut, tea stall, clean restroom, and scenic sunset spot along the route.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
