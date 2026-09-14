import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { TOUR_PACKAGES } from '../data/packagesData';
import { DESTINATIONS } from '../data/destinationsData';
import { ACTIVITIES } from '../data/activitiesData';
import { TAXI_VEHICLES, TAXI_ROUTES } from '../data/taxiData';
import { BLOG_POSTS } from '../data/blogData';
import { EnquiryForm } from '../components/common/EnquiryForm';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Star, 
  MapPin, 
  Clock, 
  Car, 
  ChevronRight, 
  Check, 
  Calendar, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Compass, 
  HelpCircle,
  Building2,
  HeartHandshake,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, openEnquiryModal, getWhatsAppLink } = useRouter();

  // Filter state for featured packages
  const [packageCategory, setPackageCategory] = useState<string>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Quick Trip Estimator state
  const [calcDays, setCalcDays] = useState(7);
  const [calcTravelers, setCalcTravelers] = useState(2);
  const [calcTier, setCalcTier] = useState<'budget' | 'deluxe' | 'luxury'>('deluxe');

  const filteredPackages = packageCategory === 'All' 
    ? TOUR_PACKAGES.slice(0, 6) 
    : TOUR_PACKAGES.filter(p => p.category === packageCategory).slice(0, 6);

  // Approximate cost calculation
  const getEstimatedCost = () => {
    const basePerDay = calcTier === 'budget' ? 3200 : calcTier === 'deluxe' ? 5200 : 9800;
    return Math.round(basePerDay * calcDays * (calcTravelers > 2 ? 1 + (calcTravelers - 2) * 0.35 : 1));
  };

  const FAQS = [
    {
      q: 'Why should I book with Organise My Trip rather than standard online portals?',
      a: 'We are a real local Rajasthan destination management company established in 2011 with physical guest relations offices in Jaipur and Udaipur. Unlike aggregators who resell to unknown third-party vendors, we own our tourist taxi fleet, personally inspect every heritage hotel, and provide you with a dedicated 24/7 on-ground trip concierge throughout your stay.'
    },
    {
      q: 'Are your Rajasthan tour packages 100% private and customizable?',
      a: 'Yes, absolutely. Every single tour package is private to your family or group. You have your dedicated air-conditioned vehicle and professional chauffeur. We can adjust the route, add extra nights in Jaisalmer or Udaipur, upgrade to royal palace rooms, or incorporate wildlife safaris according to your personal schedule.'
    },
    {
      q: 'When is the best time of year to visit Rajasthan?',
      a: 'The peak tourist season is from October to March, when daytime temperatures are pleasant (20°C to 27°C) and evenings are comfortably cool. Southern Rajasthan (Udaipur, Mount Abu, and Kumbhalgarh) is also spectacular during the monsoon months (July to September) when the Aravalli hills turn lush green.'
    },
    {
      q: 'What is included in the quoted package prices?',
      a: 'Our comprehensive packages include: verified 3/4/5-star accommodation with daily breakfast and traditional dinners, all private intercity transfers and local sightseeing in an AC vehicle with commercial tourist permit, interstate taxes, toll fees, parking charges, driver allowances, and dedicated 24/7 concierge support.'
    },
    {
      q: 'How does the booking and payment process work?',
      a: 'After you review and finalize your personalized itinerary, we require a nominal 20% advance token deposit to confirm your hotel bookings and block your dedicated vehicle. The remaining balance can be paid upon arrival in Rajasthan.'
    },
    {
      q: 'Can you arrange Ranthambore Tiger Safari permits and desert camping?',
      a: 'Yes. We are authorized by the Rajasthan Forest Department for Ranthambore Jeep/Canter safari reservations. In Jaisalmer, we partner with premium Swiss tent camps in Sam Sand Dunes with private attached bathrooms, sunset camel rides, and folk cultural shows.'
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        {/* Background Image with warm gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transform transition-transform duration-10000"
          style={{ backgroundImage: `url('images/hero/rajasthan-hero-v1.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 z-10 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Local Rajasthan travel company · Since 2011</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif leading-[1.15] text-white tracking-tight">
              Authentic Rajasthan Journeys, <span className="text-amber-400">Crafted Locally.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              Private royal palace tours, Thar desert safaris, and intercity taxi transfers. Enjoy personal chauffeurs, handpicked heritage hotels, and transparent local pricing with zero middlemen.
            </p>

            {/* Direct CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => navigate('/packages')}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-xl hover:shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                id="hero-explore-packages-cta"
              >
                <Compass className="w-4 h-4 text-slate-950" />
                <span>Explore Tour Packages (29)</span>
              </button>

              <button
                onClick={() => openEnquiryModal({ type: 'tour' })}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/30 backdrop-blur-xs transition-all flex items-center gap-2 cursor-pointer"
                id="hero-plan-trip-cta"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Customise My Itinerary</span>
              </button>

              <button
                onClick={() => navigate('/taxi-service')}
                className="px-5 py-3.5 rounded-xl text-slate-200 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5"
              >
                <Car className="w-4 h-4 text-amber-400" />
                <span>Book Intercity Taxi →</span>
              </button>
            </div>

            {/* Trust bullet markers */}
            <div className="pt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Jaipur & Udaipur Offices</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-400" />
                <span>100% Private Chauffeurs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-400" />
                <span>No Advance Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-amber-800 text-amber-50 py-5 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-6 text-center text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-300 shrink-0" />
            <span>Serving Travelers Since 2011</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-amber-700/60" />
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-300 shrink-0" />
            <span>15,000+ Satisfied Guests</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-amber-700/60" />
          <div className="flex items-center gap-2">
            <Car className="w-5 h-5 text-amber-300 shrink-0" />
            <span>Own Fleet of 60+ Tourist Taxis</span>
          </div>
          <div className="hidden lg:block w-px h-6 bg-amber-700/60" />
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-300 fill-amber-300 shrink-0" />
            <span>4.9 / 5.0 Rated Local Specialist</span>
          </div>
        </div>
      </section>

      {/* 3. DESTINATIONS OF RAJASTHAN (Section 4 of Reference) */}
      <section className="py-16 sm:py-20 bg-stone-100/70 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                Explore The Royal Realm
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                Iconic Rajasthan Destinations
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                From fairy-tale lake palaces to soaring desert citadels and tiger reserves, explore our detailed destination guides.
              </p>
            </div>
            <button 
              onClick={() => navigate('/tour-by-destination/jaipur')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 group"
            >
              <span>Explore All 8 Guides</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {DESTINATIONS.map((dest) => (
              <div
                key={dest.id}
                onClick={() => navigate(`/tour-by-destination/${dest.slug}`)}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer bg-white border border-stone-200"
              >
                <div className="aspect-4/3 w-full overflow-hidden relative">
                  <img
                    src={dest.image}
                    alt={`${dest.name} Rajasthan`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/40 text-amber-300 backdrop-blur-xs border border-white/10">
                    {(dest.topAttractions ?? dest.attractions ?? []).length} Sights
                  </span>
                </div>

                <div className="p-4 space-y-1">
                  <div className="text-[11px] font-bold text-amber-800 tracking-wide uppercase">
                    {dest.tagline}
                  </div>
                  <h3 className="font-serif font-bold text-base text-slate-900 group-hover:text-amber-800 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {dest.description}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span>Ideal: {dest.bestMonths}</span>
                    <span className="text-amber-700 font-bold group-hover:translate-x-1 transition-transform">
                      View →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED TOUR PACKAGES (29 Tours Catalog) */}
      <section className="py-16 sm:py-20 bg-white" id="tour-packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
              Handcrafted Royal Itineraries
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-900">
              Popular Rajasthan Tour Packages
            </h2>
            <p className="text-sm text-slate-600">
              Private chauffeur-driven journeys with verified heritage boutique hotels, daily breakfast, and local concierge care.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {['All', 'Golden Triangle', 'Heritage & Forts', 'Honeymoon & Romantic', 'Desert & Safari', 'Wildlife & Nature'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setPackageCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    packageCategory === cat
                      ? 'bg-amber-700 text-white shadow-xs'
                      : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Package Cards Grid */}
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
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-900/80 text-amber-300 text-[10px] font-bold backdrop-blur-xs border border-white/10">
                    {pkg.category}
                  </span>

                  {/* Duration Pill */}
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-amber-600 text-white text-[11px] font-bold shadow-xs">
                    {pkg.durationDays} Days / {pkg.durationNights} Nights
                  </span>

                  {/* Route ribbon */}
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

                  {/* Highlights snippet */}
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
                        <span className="text-lg font-bold text-slate-900">₹{pkg.startingPrice.toLocaleString('en-IN')}</span>
                        <span className="text-[10px] text-slate-500">/ person</span>
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

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/packages')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-md transition-colors"
            >
              <span>View All 29 Rajasthan Tour Packages</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. INTERCITY TAXI & CHAUFFEUR SERVICE SPOTLIGHT (Section 7) */}
      <section className="py-16 sm:py-20 bg-stone-900 text-white" id="taxi-service">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                Commercial Tourist Fleet · Verified Chauffeurs
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white">
                Reliable Rajasthan Intercity Taxi Service
              </h2>
              <p className="text-sm text-slate-300">
                Travel comfortably between major royal cities. Clean sanitised cars, polite English/Hindi speaking drivers, FASTag express toll payment, and fixed transparent tariffs.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => openEnquiryModal({ type: 'taxi' })}
                className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition-colors"
              >
                Instant Taxi Quote
              </button>
              <button
                onClick={() => navigate('/rajasthan-tour-taxi')}
                className="px-5 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-200 text-xs font-semibold transition-colors"
              >
                All 50+ Routes →
              </button>
            </div>
          </div>

          {/* Vehicle Fleet Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {TAXI_VEHICLES.map((veh) => (
              <div 
                key={veh.id}
                className="bg-slate-800/90 rounded-xl border border-slate-700 overflow-hidden flex flex-col p-4 space-y-3"
              >
                <div className="aspect-16/10 rounded-lg overflow-hidden relative">
                  <img
                    src={veh.image}
                    alt={veh.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">
                    {veh.category}
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-white">{veh.name}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{veh.models}</p>
                </div>

                <div className="text-xs text-slate-300 flex items-center justify-between border-t border-slate-700/60 pt-2">
                  <span>Seats: <strong>{veh.seatingCapacity} Pax</strong></span>
                  <span>Rate: <strong className="text-amber-400">₹{veh.ratePerKm}/km</strong></span>
                </div>

                <ul className="text-[11px] text-slate-400 space-y-1 grow">
                  {veh.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-amber-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openEnquiryModal({ type: 'taxi', vehicleType: veh.name })}
                  className="w-full py-2 rounded-lg bg-amber-600/20 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/30 text-xs font-bold transition-all"
                >
                  Book This Vehicle
                </button>
              </div>
            ))}
          </div>

          {/* Popular Intercity Routes Table */}
          <div className="bg-slate-800/60 rounded-xl border border-slate-700 overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-400" />
                <span>Popular Intercity Taxi Routes & Fixed Fares</span>
              </h3>
              <span className="text-[11px] text-slate-400">All prices include Toll, State Tax & Driver Allowance</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900/80 text-slate-400 font-semibold border-b border-slate-700">
                  <tr>
                    <th className="p-3.5">Route</th>
                    <th className="p-3.5">Distance & Duration</th>
                    <th className="p-3.5">Sedan (Dzire)</th>
                    <th className="p-3.5">SUV (Ertiga)</th>
                    <th className="p-3.5">Innova Crysta</th>
                    <th className="p-3.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60 text-slate-200">
                  {TAXI_ROUTES.slice(0, 6).map((route) => (
                    <tr key={route.id} className="hover:bg-slate-700/40 transition-colors">
                      <td className="p-3.5 font-semibold text-white">
                        <div className="flex items-center gap-1.5">
                          <span>{route.fromCity}</span>
                          <span className="text-amber-400">→</span>
                          <span>{route.toCity}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-normal block">{route.highway}</span>
                      </td>
                      <td className="p-3.5 text-slate-300">
                        {route.distanceKm} km · {route.durationHours}
                      </td>
                      <td className="p-3.5 font-bold text-amber-300">₹{route.sedanFare.toLocaleString('en-IN')}</td>
                      <td className="p-3.5 font-bold text-amber-300">₹{route.suvFare.toLocaleString('en-IN')}</td>
                      <td className="p-3.5 font-bold text-amber-300">₹{route.crystaFare.toLocaleString('en-IN')}</td>
                      <td className="p-3.5 text-right">
                        <button
                          onClick={() => openEnquiryModal({ 
                            type: 'taxi', 
                            pickupCity: route.fromCity, 
                            dropCity: route.toCity 
                          })}
                          className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded text-[11px] transition-colors"
                        >
                          Book Cab
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPERIENCES & DESERT SAFARIS (Section 8) */}
      <section className="py-16 sm:py-20 bg-stone-100/70 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                Authentic Royal & Desert Adventures
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                Unforgettable Rajasthan Experiences
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Add these handpicked local experiences to any tour: sunset camel safaris, hot air balloon flights, and culinary walks.
              </p>
            </div>
            <button
              onClick={() => navigate('/activities')}
              className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-900"
            >
              <span>Explore All 12 Experiences</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACTIVITIES.slice(0, 4).map((act) => (
              <div
                key={act.id}
                onClick={() => navigate(`/activity-detail/${act.slug}`)}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group cursor-pointer"
              >
                <div className="aspect-16/10 w-full overflow-hidden relative">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900/80 text-amber-300">
                    {act.category}
                  </span>
                  <span className="absolute bottom-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">
                    {act.duration}
                  </span>
                </div>

                <div className="p-4 flex flex-col grow space-y-2">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-700" />
                    <span>{act.location}</span>
                  </div>
                  <h3 className="font-serif font-bold text-sm text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-2">
                    {act.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed grow">
                    {act.description}
                  </p>
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block">From</span>
                      <strong className="text-slate-900 font-bold">₹{act.pricePerPerson.toLocaleString('en-IN')}</strong>
                    </div>
                    <span className="text-amber-700 font-bold text-[11px] group-hover:translate-x-0.5 transition-transform">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE TRIP ESTIMATOR & CUSTOM FORM (Section 9) */}
      <section className="py-16 sm:py-20 bg-white" id="plan-trip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Col: Trip Estimator Calculator */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-amber-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Quick Cost Estimator
                </span>
                <h3 className="text-2xl font-bold font-serif">
                  Estimate Your Rajasthan Holiday
                </h3>
                <p className="text-xs text-slate-300">
                  Instant realistic budget range based on verified local hotel and cab rates.
                </p>
              </div>

              {/* Sliders */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span>Trip Duration:</span>
                    <strong className="text-amber-400">{calcDays} Days / {calcDays - 1} Nights</strong>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="16"
                    value={calcDays}
                    onChange={e => setCalcDays(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span>Number of Travelers:</span>
                    <strong className="text-amber-400">{calcTravelers} Persons</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={calcTravelers}
                    onChange={e => setCalcTravelers(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium block mb-1">Accommodation Tier:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'budget', label: '3★ Comfort' },
                      { id: 'deluxe', label: '4★ Deluxe' },
                      { id: 'luxury', label: '5★ Heritage' }
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setCalcTier(t.id as any)}
                        className={`py-2 text-xs font-bold rounded-lg transition-all ${
                          calcTier === t.id
                            ? 'bg-amber-500 text-slate-950 shadow-xs'
                            : 'bg-white/10 text-slate-200 hover:bg-white/20'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Box */}
              <div className="p-4 bg-white/10 rounded-2xl border border-white/10 space-y-1">
                <span className="text-[11px] text-slate-300 uppercase tracking-wide font-medium">
                  Estimated Total Package Range
                </span>
                <div className="text-3xl font-bold font-serif text-amber-300">
                  ₹{getEstimatedCost().toLocaleString('en-IN')}
                  <span className="text-xs text-slate-300 font-normal ml-2">approx for {calcTravelers} travelers</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-tight">
                  Includes private AC taxi, {calcTier === 'luxury' ? 'royal palace stays' : 'verified boutique hotels'}, daily breakfast & tour concierge.
                </p>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href={getWhatsAppLink(`Hi Organise My Trip, I calculated an estimate of ₹${getEstimatedCost()} for ${calcDays} days and ${calcTravelers} travelers (${calcTier} tier). Please share options!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send This Estimate to Expert on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Col: Full Custom Trip Enquiry Form */}
            <div className="lg:col-span-7 bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                  Tailor-Made Tour Consultation
                </span>
                <h3 className="text-2xl font-bold font-serif text-slate-900">
                  Request a Free Custom Rajasthan Quotation
                </h3>
                <p className="text-xs text-slate-600">
                  Fill in your preferred dates and requirements. Our senior trip planners will craft your custom itinerary within 15–30 minutes.
                </p>
              </div>

              <EnquiryForm formType="tour" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US (Section 6) */}
      <section className="py-16 sm:py-20 bg-stone-100/60 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
              The Organise My Trip Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Why Travelers Trust Organise My Trip Since 2011
            </h2>
            <p className="text-sm text-slate-600">
              We are rooted on the ground in Rajasthan. Here is what separates our private journeys from generic aggregator portals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Real Local Rajasthan Offices',
                desc: 'Located on MI Road Jaipur and Lake Palace Road Udaipur. If you need any assistance on the road, our local operations team is just a call away.'
              },
              {
                icon: Car,
                title: 'Own Dedicated Tourist Fleet',
                desc: 'No third-party car brokers. We maintain our own fleet of commercially permitted Sedans, Ertigas, Innova Crystas, and Tempo Travellers.'
              },
              {
                icon: Award,
                title: 'Senior English/Hindi Chauffeurs',
                desc: 'Our courteous drivers possess 10+ years of highway experience, polite manners, and deep knowledge of authentic highway dhabas and photo spots.'
              },
              {
                icon: Sparkles,
                title: '100% Tailor-Made Flexibility',
                desc: 'Travel at your own comfortable pace. Stop whenever you wish for tea or photography, adjust sightseeing timings, or swap monuments on the fly.'
              },
              {
                icon: Star,
                title: 'Transparent, Fair Pricing',
                desc: 'All quoted prices are strictly all-inclusive of interstate road taxes, toll fees, parking, driver allowances, and fuel. Zero surprise charges.'
              },
              {
                icon: HeartHandshake,
                title: 'Verified Heritage Havelis & Stays',
                desc: 'We personally inspect every hotel partner to ensure genuine Rajput hospitality, spotless linen, clean bathrooms, and authentic cuisine.'
              }
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-slate-900">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. AUTHENTIC REVIEWS & TESTIMONIALS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
              Guest Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Trusted by Over 15,000 Happy Travelers
            </h2>
            <div className="flex items-center justify-center gap-1 pt-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
              <span className="text-xs font-bold text-slate-800 ml-2">4.9 / 5.0 Average Guest Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: 'Organise My Trip organized our 8-day family trip across Jaipur, Jodhpur, and Udaipur. Our chauffeur Surendra ji was exceptionally polite, punctual, and safe. The desert camp in Jaisalmer was magical!',
                author: 'Dr. Alok & Priya Sen',
                origin: 'Mumbai, India',
                trip: 'Classic Rajasthan Heritage Tour'
              },
              {
                quote: 'Coming from London for our 25th anniversary, we wanted authentic luxury without hassle. Organise My Trip booked wonderful boutique havelis and the private Lake Pichola boat ride at sunset was unforgettable.',
                author: 'Richard & Catherine Davies',
                origin: 'London, United Kingdom',
                trip: 'Romantic Udaipur & Palace Stays'
              },
              {
                quote: 'Booked an Innova Crysta for our corporate client from Delhi Airport to Jaipur and Ranthambore. Top-notch sanitized vehicle, clear FASTag billing, and responsive WhatsApp coordinator.',
                author: 'Sunil Aggarwal (Apex Holidays)',
                origin: 'New Delhi, India',
                trip: 'B2B Intercity Taxi & Safari Transfer'
              }
            ].map((rev, i) => (
              <div key={i} className="bg-stone-50 p-6 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex text-amber-500 gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200 text-xs">
                  <strong className="text-slate-900 block font-semibold">{rev.author}</strong>
                  <span className="text-slate-500 text-[11px] block">{rev.origin} · <span className="text-amber-800 font-medium">{rev.trip}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TRAVEL GUIDES & BLOG ARTICLES (Section 11) */}
      <section className="py-16 sm:py-20 bg-stone-100/70 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                Rajasthan Travel Inspiration
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                Latest Travel Guides & Insider Tips
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Read our local destination experts’ guides to packing, seasonal planning, culinary trails, and heritage secrets.
              </p>
            </div>
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-900"
            >
              <span>View All 14 Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group cursor-pointer"
              >
                <div className="aspect-16/10 w-full overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900/80 text-amber-300">
                    {post.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col grow space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>{post.publishedDate}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed grow">
                    {post.excerpt}
                  </p>
                  <div className="pt-2 text-xs font-bold text-amber-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FREQUENTLY ASKED QUESTIONS (Section 12) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
              Clear & Transparent Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Have questions about booking, private chauffeurs, or desert camping? We are here to help.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-stone-200 overflow-hidden bg-stone-50/50 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm text-slate-900 hover:text-amber-800"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-amber-700 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-stone-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            Have a specific custom question?{' '}
            <a
              href={getWhatsAppLink('Hi Organise My Trip, I have a custom question regarding my Rajasthan trip plan.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 font-bold hover:underline"
            >
              Ask our Jaipur Concierge on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* 12. B2B PARTNERSHIP BANNER (Section 13) */}
      <section className="bg-gradient-to-r from-amber-900 via-amber-950 to-slate-950 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              <span>B2B Rajasthan DMC Partner</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif">
              Are You a Travel Agent or Outbound Tour Operator?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Partner with Organise My Trip for confidential net B2B tariffs, guaranteed commercial tourist cabs, white-label client service, and on-ground emergency handling across Rajasthan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => navigate('/b2b-rajasthan-dmc')}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-lg transition-colors"
            >
              Explore B2B DMC Services
            </button>
            <button
              onClick={() => openEnquiryModal({ type: 'b2b' })}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold transition-colors"
            >
              Request Confidential B2B Tariff
            </button>
          </div>
        </div>
      </section>

      {/* 13. FINAL BOTTOM CTA BANNER */}
      <section className="py-16 bg-amber-50 border-t border-amber-200/60 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
            Start Your Journey Today
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-900">
            Ready to Experience Royal Rajasthan?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Get a tailored itinerary designed around your family’s pace, favorite royal palaces, and hotel choices with zero booking fees.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openEnquiryModal({ type: 'tour' })}
              className="px-8 py-3.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm shadow-md transition-all"
            >
              Get My Free Custom Quotation
            </button>
            <a
              href="tel:+919829012345"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-slate-800 font-semibold text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Call +91 98290 12345</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
