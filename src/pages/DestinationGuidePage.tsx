import React from 'react';
import { useRouter } from '../context/RouterContext';
import { DESTINATIONS } from '../data/destinationsData';
import { TOUR_PACKAGES } from '../data/packagesData';
import { EnquiryForm } from '../components/common/EnquiryForm';
import { MapPin, Calendar, Plane, Train, Clock, ArrowRight, Sparkles, Check, Car } from 'lucide-react';

export const DestinationGuidePage: React.FC = () => {
  const { params, navigate } = useRouter();
  const slug = params.slug || 'jaipur';

  const dest = DESTINATIONS.find(d => d.slug === slug) || DESTINATIONS[0];

  const packagesCoveringCity = TOUR_PACKAGES.filter(p => 
    p.citiesCovered.some(c => c.toLowerCase().includes(dest.name.toLowerCase()))
  ).slice(0, 3);

  return (
    <div className="w-full bg-stone-50 pb-20">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-14 lg:py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
          style={{ backgroundImage: `url('${dest.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{dest.tagline}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-white">
            {dest.name} Travel Guide
          </h1>

          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
            {dest.description}
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 pt-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Best Months: <strong>{dest.bestMonths}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Ideal Stay: <strong>{dest.idealDays}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Plane className="w-4 h-4 text-amber-400" />
              <span>Airport: <strong>{dest.connectivity.airport}</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Attractions and Guide */}
          <div className="lg:col-span-8 space-y-10">
            {/* Attractions Section */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">Must-Visit Monuments</span>
                  <h2 className="text-2xl font-bold font-serif text-slate-900">
                    Top Sightseeing Attractions in {dest.name}
                  </h2>
                </div>
                <span className="text-xs text-slate-500">{dest.attractions.length} Places</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {dest.attractions.map((att) => (
                  <div
                    key={att.id}
                    onClick={() => navigate(`/attraction/${dest.slug}/${att.slug}`)}
                    className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col"
                  >
                    <div className="aspect-16/10 relative overflow-hidden">
                      <img
                        src={att.image}
                        alt={att.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded bg-black/60 text-white backdrop-blur-xs">
                        {att.timing}
                      </span>
                    </div>

                    <div className="p-4 flex flex-col grow space-y-2">
                      <h3 className="font-serif font-bold text-base text-slate-900 group-hover:text-amber-800 transition-colors">
                        {att.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed grow">
                        {att.description}
                      </p>
                      <div className="pt-2 border-t border-stone-100 flex justify-between items-center text-xs">
                        <span className="text-slate-400 text-[11px]">Entry: {att.entryFee}</span>
                        <span className="text-amber-800 font-bold text-[11px] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                          Sight Guide →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Packages covering this city */}
            {packagesCoveringCity.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-stone-200">
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Tour Packages Featuring {dest.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {packagesCoveringCity.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => navigate(`/package-detail/${pkg.slug}`)}
                      className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs hover:shadow-md transition-all cursor-pointer space-y-2"
                    >
                      <span className="text-[10px] font-bold text-amber-800">{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
                      <h4 className="font-serif font-bold text-xs text-slate-900 hover:text-amber-800 line-clamp-2">
                        {pkg.title}
                      </h4>
                      <div className="flex justify-between items-center text-xs pt-1 border-t border-stone-100">
                        {pkg.startingPrice ? (
                          <strong className="text-slate-900">₹{pkg.startingPrice.toLocaleString('en-IN')}</strong>
                        ) : (
                          <strong className="text-amber-700">On Request</strong>
                        )}
                        <span className="text-amber-800 font-bold text-[11px]">View →</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Lead Capture Box */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xl space-y-4">
              <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider block">
                Local Tour Operator
              </span>
              <h3 className="text-xl font-bold font-serif text-slate-900">
                Plan Your {dest.name} Holiday
              </h3>
              <p className="text-xs text-slate-500">
                Get a private AC car, licensed monument guides, and verified heritage stays.
              </p>

              <EnquiryForm formType="tour" defaultPackageName={`${dest.name} Custom Tour`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
