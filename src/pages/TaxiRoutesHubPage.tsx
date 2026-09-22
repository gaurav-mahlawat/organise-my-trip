import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useData } from '../context/DataContext';
import { EnquiryForm } from '../components/common/EnquiryForm';
import { Search, Car, MapPin, Check, ShieldCheck, ArrowUpDown } from 'lucide-react';

export const TaxiRoutesHubPage: React.FC = () => {
  const { navigate, openEnquiryModal } = useRouter();
  const { taxiRoutes: TAXI_ROUTES, taxiVehicles: TAXI_VEHICLES } = useData();
  const [search, setSearch] = useState('');

  const filteredRoutes = TAXI_ROUTES.filter(r => 
    r.fromCity.toLowerCase().includes(search.toLowerCase()) ||
    r.toCity.toLowerCase().includes(search.toLowerCase()) ||
    r.highway.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-stone-50 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('images/taxi/ertiga.png')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-amber-950/75 to-slate-900/90" />
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Car className="w-3.5 h-3.5" />
              <span>Verified Chauffeurs · No Hidden Surcharges</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif">
              Rajasthan Intercity Taxi Route Directory
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore all major tourist corridors connecting Jaipur, Jodhpur, Udaipur, Jaisalmer, Delhi, and Agra. Share your route and travel dates for a quick custom quotation.
            </p>
          </div>
        </div>

        {/* Search and Table */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search city (e.g. Udaipur, Delhi)..."
                className="w-full pl-10 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Showing <strong>{filteredRoutes.length}</strong> intercity highway routes
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-100 text-slate-700 font-semibold border-b border-stone-200">
                <tr>
                  <th className="p-3.5">From → To Route</th>
                  <th className="p-3.5">Distance & Driving Time</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-slate-700">
                {filteredRoutes.map((route) => (
                  <tr key={route.id} className="hover:bg-amber-50/40 transition-colors">
                    <td className="p-3.5 font-semibold text-slate-900">
                      <div 
                        onClick={() => navigate(`/taxi-service/${route.slug}`)}
                        className="cursor-pointer hover:text-amber-800 transition-colors"
                      >
                        {route.fromCity} → {route.toCity}
                      </div>
                      <span className="text-[10px] text-slate-400 font-normal block">{route.highway}</span>
                    </td>
                    <td className="p-3.5 text-slate-600">
                      {route.distanceKm} km · {route.durationHours}
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => openEnquiryModal({ 
                          type: 'taxi', 
                          pickupCity: route.fromCity, 
                          dropCity: route.toCity 
                        })}
                        className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-[11px] transition-colors"
                      >
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
            <span className="font-bold block">Service Note:</span>
            <p className="text-[11px] leading-relaxed">
              Quotations are prepared on request and include toll expressway fees (FASTag), interstate tourist vehicle road tax, parking fees, driver night allowance, and fuel. Share your route and travel dates with our team for a date-valid quote.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
