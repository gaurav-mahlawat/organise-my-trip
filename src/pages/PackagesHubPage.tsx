import React, { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { useData } from '../context/DataContext';
import { MapPin, Check, Search, SlidersHorizontal, ArrowUpDown, Calendar, Sparkles } from 'lucide-react';

export const PackagesHubPage: React.FC = () => {
  const { navigate, openEnquiryModal } = useRouter();
  const { tourPackages: TOUR_PACKAGES } = useData();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [durationFilter, setDurationFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'duration'>('recommended');

  const categories = ['All', 'Heritage & Forts', 'Wildlife & Safari', 'Desert & Safari', 'Luxury & Leisure', 'Family & Groups'];

  const filteredPackages = useMemo(() => {
    let list = [...TOUR_PACKAGES];

    if (selectedCategory !== 'All') {
      list = list.filter(p => p.category === selectedCategory);
    }

    if (durationFilter === 'short') {
      list = list.filter(p => p.durationDays <= 5);
    } else if (durationFilter === 'medium') {
      list = list.filter(p => p.durationDays >= 6 && p.durationDays <= 8);
    } else if (durationFilter === 'long') {
      list = list.filter(p => p.durationDays >= 9 && p.durationDays <= 12);
    } else if (durationFilter === 'grand') {
      list = list.filter(p => p.durationDays >= 13);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.route.toLowerCase().includes(q) ||
        p.citiesCovered.some(c => c.toLowerCase().includes(q))
      );
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => (a.startingPrice ?? Infinity) - (b.startingPrice ?? Infinity));
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => (b.startingPrice ?? 0) - (a.startingPrice ?? 0));
    } else if (sortBy === 'duration') {
      list.sort((a, b) => a.durationDays - b.durationDays);
    }

    return list;
  }, [selectedCategory, durationFilter, searchQuery, sortBy]);

  return (
    <div className="w-full bg-stone-50 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('images/hero/packages-banner.webp')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-amber-950/75 to-slate-900/90" />
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>8 Promotional Itineraries · Heritage · Wildlife · Lakes · Desert · Luxury</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif">
              Rajasthan Curated Tour Collection
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Designed for promotional use, these ready-to-sell Rajasthan circuits can be customised by hotel category, vehicle, meal plan, safari availability and travel dates.
            </p>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-4">
          {/* Search Bar & Sort Row */}
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by city (e.g. Udaipur, Jaisalmer, Ranthambore)..."
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500 outline-none"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <ArrowUpDown className="w-3.5 h-3.5 text-amber-700" />
                <span className="font-semibold">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as any)}
                  className="px-2.5 py-1.5 text-xs rounded-lg border border-stone-300 bg-stone-50 font-medium outline-none"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="duration">Trip Duration</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category & Duration Filter Chips */}
          <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            {/* Categories */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    selectedCategory === cat
                      ? 'bg-amber-700 text-white'
                      : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Duration Pills */}
            <div className="flex items-center gap-1 text-xs">
              <span className="text-slate-400 text-[11px] font-semibold mr-1">Duration:</span>
              {[
                { id: 'all', label: 'All' },
                { id: 'short', label: '3-5D' },
                { id: 'medium', label: '6-8D' },
                { id: 'long', label: '9-12D' },
                { id: 'grand', label: '13D+' }
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDurationFilter(d.id)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                    durationFilter === d.id
                      ? 'bg-slate-900 text-amber-300 font-bold'
                      : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center text-xs text-slate-500 px-1">
          <span>Showing <strong>{filteredPackages.length}</strong> curated promotional itineraries</span>
          <span>Final quotations on request · Date-dependent rates</span>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col group"
            >
              {/* Image & Badges */}
              <div 
                className="aspect-16/10 w-full relative overflow-hidden cursor-pointer"
                onClick={() => navigate(`/package-detail/${pkg.slug}`)}
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-900/80 text-amber-300 text-[10px] font-bold backdrop-blur-xs border border-white/10">
                  {pkg.category}
                </span>

                <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-amber-600 text-white text-[11px] font-bold shadow-xs">
                  {pkg.durationDays} Days / {pkg.durationNights} Nights
                </span>

                <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium flex items-center gap-1.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{pkg.route}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col grow space-y-3">
                <h3 
                  onClick={() => navigate(`/package-detail/${pkg.slug}`)}
                  className="font-serif font-bold text-base text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-2 cursor-pointer"
                >
                  {pkg.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {pkg.overview}
                </p>

                {/* Cities tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {pkg.citiesCovered.map((c, i) => (
                    <span key={i} className="text-[10px] bg-stone-100 text-slate-600 px-2 py-0.5 rounded">
                      {c}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-1 pt-1 grow">
                  {pkg.highlights.slice(0, 2).map((hl, i) => (
                    <div key={i} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-amber-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Starting from</span>
                    <div className="flex items-baseline gap-1">
                      {pkg.startingPrice ? (
                        <span className="text-lg font-bold text-slate-900">₹{pkg.startingPrice.toLocaleString('en-IN')}</span>
                      ) : (
                        <span className="text-sm font-bold text-amber-700">Price on Request</span>
                      )}
                      {pkg.startingPrice && <span className="text-[10px] text-slate-500">/ person</span>}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigate(`/package-detail/${pkg.slug}`)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-stone-100 border border-stone-200 transition-colors"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => openEnquiryModal({ type: 'tour', packageInterest: pkg.title })}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-xs transition-colors"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important: date-dependent rates note */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-2">
          <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wider">Important</h3>
          <p className="text-xs text-amber-900 leading-relaxed">
            Rates, hotel availability, safari permits and sightseeing access are date-dependent. Final quotations should be prepared after confirming travel dates, pax, rooming and hotel category.
          </p>
          <p className="text-xs text-amber-900 leading-relaxed">
            Call / WhatsApp: <strong>+91 77289 90407 / +91 89055 23568</strong> · Email: <strong>organisemytripdsr@gmail.com</strong>
          </p>
        </div>

        {/* Empty state if search finds nothing */}
        {filteredPackages.length === 0 && (
          <div className="bg-white p-12 rounded-2xl border border-stone-200 text-center space-y-3">
            <h3 className="text-lg font-bold text-slate-800">No packages match your search filter.</h3>
            <p className="text-xs text-slate-500">Try changing your search keywords or resetting filters.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setDurationFilter('all'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-lg bg-amber-600 text-white text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
