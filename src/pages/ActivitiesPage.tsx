import React, { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { ACTIVITIES } from '../data/activitiesData';
import { MapPin, Clock, Check, Sparkles, Search } from 'lucide-react';

export const ActivitiesPage: React.FC = () => {
  const { navigate, openEnquiryModal } = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Desert Adventure', 'Cultural Heritage', 'Royal Luxury', 'Culinary & Village', 'Wildlife & Safari'];

  const filteredActivities = useMemo(() => {
    let list = [...ACTIVITIES];
    if (selectedCategory !== 'All') {
      list = list.filter(a => a.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(a => 
        a.title.toLowerCase().includes(q) || 
        a.location.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full bg-stone-50 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('images/activities/desert-experiences.webp')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-amber-950/75 to-slate-900/90" />
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>12 Handpicked Authentic Experiences</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif">
              Rajasthan Experiences & Safaris
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Elevate your journey with private desert camel treks, hot air balloon flights over mountain fortresses, Ranthambore tiger tracking, and royal home-cooking masterclasses.
            </p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-amber-700 text-white'
                    : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search experiences..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col group"
            >
              <div 
                className="aspect-16/10 w-full overflow-hidden relative cursor-pointer"
                onClick={() => navigate(`/activity-detail/${act.slug}`)}
              >
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-900/80 text-amber-300 backdrop-blur-xs border border-white/10">
                  {act.category}
                </span>
                <span className="absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-600 text-white">
                  {act.duration}
                </span>
              </div>

              <div className="p-5 flex flex-col grow space-y-3">
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  <span>{act.location}</span>
                </div>

                <h3 
                  onClick={() => navigate(`/activity-detail/${act.slug}`)}
                  className="font-serif font-bold text-base text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-2 cursor-pointer"
                >
                  {act.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed grow">
                  {act.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1 pt-1">
                  {act.highlights.slice(0, 2).map((hl, i) => (
                    <div key={i} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-amber-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">From</span>
                    <strong className="text-base font-bold text-slate-900">₹{act.pricePerPerson.toLocaleString('en-IN')}</strong>
                    <span className="text-[10px] text-slate-500 ml-1">/ person</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigate(`/activity-detail/${act.slug}`)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-stone-100 border border-stone-200"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => openEnquiryModal({ type: 'tour', message: `Inquiring for experience: ${act.title}` })}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-xs"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
