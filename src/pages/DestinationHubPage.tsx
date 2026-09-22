import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useData } from '../context/DataContext';
import { MapPin, Calendar, Clock, ArrowRight, Plane, Train } from 'lucide-react';

export const DestinationHubPage: React.FC = () => {
  const { navigate } = useRouter();
  const { destinations: DESTINATIONS } = useData();

  return (
    <div className="w-full bg-stone-50 pb-20">
      {/* Header */}
      <div className="bg-slate-950 text-white py-14 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
            Explore The Royal Realm
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white">
            Rajasthan Destination Guides
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Detailed guides to all {DESTINATIONS.length} iconic Rajasthan cities — top attractions, best time to visit, connectivity and curated tour packages for each destination.
          </p>
        </div>
      </div>

      {/* Destination Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest) => {
            const attractions = dest.attractions || dest.topAttractions || [];
            return (
              <div
                key={dest.id}
                onClick={() => navigate(`/tour-by-destination/${dest.slug}`)}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col"
              >
                <div className="aspect-16/9 w-full overflow-hidden relative">
                  <img
                    src={dest.image}
                    alt={`${dest.name} Rajasthan`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                      {dest.tagline || dest.nickname}
                    </span>
                  </span>
                </div>

                <div className="p-5 flex flex-col grow space-y-2.5">
                  <h2 className="font-serif font-bold text-lg text-slate-900 group-hover:text-amber-800 transition-colors">
                    {dest.name} Travel Guide
                  </h2>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>{dest.bestMonths || dest.bestTimeToVisit}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>{dest.idealDays || `${attractions.length} Sights`}</span>
                    </div>
                    {dest.connectivity?.airport && (
                      <div className="flex items-center gap-1.5 col-span-2">
                        <Plane className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span className="truncate">{dest.connectivity.airport}</span>
                      </div>
                    )}
                    {dest.connectivity?.railway && (
                      <div className="flex items-center gap-1.5 col-span-2">
                        <Train className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span className="truncate">{dest.connectivity.railway}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 mt-auto border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-700" />
                      {attractions.length} Top Attractions
                    </span>
                    <span className="text-xs font-bold text-amber-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Open Guide <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
