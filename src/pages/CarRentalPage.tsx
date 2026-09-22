import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useData } from '../context/DataContext';
import { EnquiryForm } from '../components/common/EnquiryForm';
import { Car, ShieldCheck, Check, Clock, Award, Phone } from 'lucide-react';

export const CarRentalPage: React.FC = () => {
  const { openEnquiryModal, getWhatsAppLink } = useRouter();
  const { taxiVehicles: TAXI_VEHICLES } = useData();

  return (
    <div className="w-full bg-stone-50 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('images/taxi/ertiga.png')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-amber-950/75 to-slate-900/90" />
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Car className="w-3.5 h-3.5" />
              <span>Chauffeur Driven Fleet Rental · Organise My Trip</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif">
              Rajasthan Car Rental with Driver
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Hire premium chauffeur-driven cars for local city sightseeing, intercity road trips, royal weddings, and corporate delegations across Rajasthan.
            </p>
          </div>
        </div>

        {/* Pricing Matrix */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold font-serif text-slate-900">
              Car Rental Plans (Outstation & Local)
            </h2>
            <p className="text-xs text-slate-500">
              Standard outstation billing is 250 km minimum per calendar day. Local packages include 8 Hours / 80 Kilometers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TAXI_VEHICLES.map((veh) => (
              <div key={veh.id} className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="aspect-16/10 rounded-lg overflow-hidden">
                    <img src={veh.image} alt={veh.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900">{veh.name}</h3>
                  <p className="text-[11px] text-slate-500">{veh.models}</p>
                  <div className="pt-2 border-t border-stone-200 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Outstation:</span>
                      <strong className="text-amber-800">Quote on Request</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Min Outstation/Day:</span>
                      <strong>{veh.minKmPerDay} km</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Local (8hr/80km):</span>
                      <strong className="text-slate-900">Quote on Request</strong>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => openEnquiryModal({ type: 'taxi', vehicleType: veh.name })}
                  className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  Rent {veh.category}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Capture Form */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-lg space-y-4">
          <h3 className="text-xl font-bold font-serif text-slate-900">
            Book Chauffeur-Driven Car Rental
          </h3>
          <EnquiryForm formType="taxi" />
        </div>
      </div>
    </div>
  );
};
