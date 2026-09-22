import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useData } from '../context/DataContext';
import { EnquiryForm } from '../components/common/EnquiryForm';
import { Car, ShieldCheck, Check, Clock, MapPin, ArrowRight, MessageCircle, Phone, Award } from 'lucide-react';

export const TaxiOverviewPage: React.FC = () => {
  const { navigate, openEnquiryModal, getWhatsAppLink } = useRouter();
  const { taxiVehicles: TAXI_VEHICLES, taxiRoutes: TAXI_ROUTES } = useData();

  return (
    <div className="w-full bg-stone-50 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('images/taxi/sedan.png')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-amber-950/75 to-slate-900/90" />
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Car className="w-3.5 h-3.5" />
              <span>Rajasthan Commercial Tourist Fleet · Organise My Trip</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif">
              Rajasthan Taxi & Chauffeur Services
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Clean air-conditioned tourist vehicles, polite English/Hindi speaking drivers, FASTag express toll payment, and transparent service with zero hidden charges.
            </p>
          </div>
        </div>

        {/* Fleet Showcase */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">Our Fleet</span>
              <h2 className="text-2xl font-bold font-serif text-slate-900">Commercial Tourist Vehicles</h2>
            </div>
            <span className="text-xs text-slate-500">All vehicles equipped with GPS, AC, and first aid kits</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TAXI_VEHICLES.map((veh) => (
              <div key={veh.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col p-5 space-y-4">
                <div className="aspect-16/10 rounded-xl overflow-hidden relative">
                  <img src={veh.image} alt={veh.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <span className="absolute bottom-2 left-2 bg-slate-900/80 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">
                    {veh.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-base text-slate-900">{veh.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{veh.models}</p>
                </div>

                <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 flex items-center justify-between text-xs">
                  <span>Capacity: <strong>{veh.seatingCapacity} Pax</strong></span>
                  <span className="text-amber-800 font-bold text-sm">Quote on Request</span>
                </div>

                <ul className="text-xs text-slate-600 space-y-1.5 grow">
                  {veh.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openEnquiryModal({ type: 'taxi', vehicleType: veh.name })}
                  className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors shadow-xs"
                >
                  Book This Vehicle
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Intercity Routes Grid */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">Popular Routes</span>
              <h2 className="text-2xl font-bold font-serif text-slate-900">Popular Intercity Taxi Routes</h2>
            </div>
            <button
              onClick={() => navigate('/rajasthan-tour-taxi')}
              className="text-xs font-bold text-amber-800 hover:underline flex items-center gap-1"
            >
              <span>View all 50+ routes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TAXI_ROUTES.map((route) => (
              <div 
                key={route.id}
                className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span>{route.distanceKm} km · {route.durationHours}</span>
                    <span className="text-amber-700 font-bold text-[11px]">Fixed Toll Included</span>
                  </div>
                  <h3 
                    onClick={() => navigate(`/taxi-service/${route.slug}`)}
                    className="font-serif font-bold text-base text-slate-900 hover:text-amber-800 transition-colors mt-1 cursor-pointer"
                  >
                    {route.fromCity} to {route.toCity}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {route.overview}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Sedan from</span>
                    <span className="text-base font-bold text-slate-900">Quote on Request</span>
                  </div>
                  <button
                    onClick={() => navigate(`/taxi-service/${route.slug}`)}
                    className="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold transition-colors"
                  >
                    Route Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Taxi Booking Lead Form */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-lg space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
              Quick Taxi Booking
            </span>
            <h3 className="text-2xl font-bold font-serif text-slate-900">
              Get an Instant Intercity Taxi Quotation
            </h3>
            <p className="text-xs text-slate-600">
              Pick-up from any hotel, railway station, or airport in Rajasthan with instant confirmation.
            </p>
          </div>
          <EnquiryForm formType="taxi" />
        </div>
      </div>
    </div>
  );
};
