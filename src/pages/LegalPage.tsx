import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useData } from '../context/DataContext';

export const LegalPage: React.FC<{ type: 'privacy' | 'terms' | 'cancellation' | 'sitemap' }> = ({ type }) => {
  const { navigate } = useRouter();
  const {
    tourPackages: TOUR_PACKAGES,
    destinations: DESTINATIONS,
    taxiRoutes: TAXI_ROUTES,
    blogPosts: BLOG_POSTS,
    seoLandings: SEO_LANDINGS
  } = useData();

  if (type === 'sitemap') {
    return (
      <div className="w-full bg-stone-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('images/hero/rajasthan-banner-wide.webp')` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-amber-950/75 to-slate-900/90" />
            <div className="relative z-10 max-w-3xl space-y-3">
              <h1 className="text-2xl sm:text-4xl font-bold font-serif">HTML Sitemap Directory</h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Browse the complete network of all pages and tour packages offered by Organise My Trip.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xs space-y-4">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t border-stone-100">
              {/* Main Hubs */}
              <div className="space-y-3">
                <h3 className="font-bold text-xs uppercase tracking-wider text-amber-800">Main Pages</h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li><button onClick={() => navigate('/')} className="hover:text-amber-800">Home Page</button></li>
                  <li><button onClick={() => navigate('/packages')} className="hover:text-amber-800">Tour Packages Hub</button></li>
                  <li><button onClick={() => navigate('/activities')} className="hover:text-amber-800">Experiences & Activities</button></li>
                  <li><button onClick={() => navigate('/taxi-service')} className="hover:text-amber-800">Rajasthan Taxi Service</button></li>
                  <li><button onClick={() => navigate('/rajasthan-tour-taxi')} className="hover:text-amber-800">Taxi Fare Directory</button></li>
                  <li><button onClick={() => navigate('/rajasthan-car-rental')} className="hover:text-amber-800">Car Rental with Driver</button></li>
                  <li><button onClick={() => navigate('/blog')} className="hover:text-amber-800">Travel Guide & Blog</button></li>
                  <li><button onClick={() => navigate('/b2b-rajasthan-dmc')} className="hover:text-amber-800">B2B DMC Travel Desk</button></li>
                  <li><button onClick={() => navigate('/about-us')} className="hover:text-amber-800">About Organise My Trip</button></li>
                  <li><button onClick={() => navigate('/contact-us')} className="hover:text-amber-800">Contact Us</button></li>
                  <li><button onClick={() => navigate('/admin')} className="hover:text-amber-800 text-amber-700 font-bold">Admin Inquiry Portal</button></li>
                </ul>
              </div>

              {/* Destinations */}
              <div className="space-y-3">
                <h3 className="font-bold text-xs uppercase tracking-wider text-amber-800">City Guides</h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {DESTINATIONS.map(d => (
                    <li key={d.id}>
                      <button onClick={() => navigate(`/tour-by-destination/${d.slug}`)} className="hover:text-amber-800">
                        {d.name} Travel Guide
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SEO Landing Clusters */}
              <div className="space-y-3">
                <h3 className="font-bold text-xs uppercase tracking-wider text-amber-800">SEO Tour Landings</h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {SEO_LANDINGS.map(s => (
                    <li key={s.slug}>
                      <button onClick={() => navigate(`/rajasthan-tour-packages/${s.slug}`)} className="hover:text-amber-800 text-left">
                        {s.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Packages */}
              <div className="space-y-3">
                <h3 className="font-bold text-xs uppercase tracking-wider text-amber-800">Top Packages</h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {TOUR_PACKAGES.slice(0, 10).map(p => (
                    <li key={p.id}>
                      <button onClick={() => navigate(`/package-detail/${p.slug}`)} className="hover:text-amber-800 text-left line-clamp-1">
                        {p.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'How Organise My Trip handles traveler data and communication privacy.',
      sections: [
        {
          heading: '1. Information We Collect',
          body: 'We collect customer names, phone numbers, email addresses, travel dates, passenger counts, and hotel preferences purely for itinerary planning and cab reservation purposes.'
        },
        {
          heading: '2. Zero Data Selling Commitment',
          body: 'Organise My Trip never sells, rents, or licenses your personal or travel contact information to third-party marketing firms or external agencies. Data is restricted strictly to assigned chauffeurs and verified partner hotels.'
        },
        {
          heading: '3. WhatsApp Communication',
          body: 'By initiating inquiry through our forms or WhatsApp button, you consent to receive itinerary updates, quotation documents, and on-trip coordination messages.'
        }
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      subtitle: 'Direct booking agreement for Rajasthan private tours and chauffeur taxi services.',
      sections: [
        {
          heading: '1. Booking & Confirmation',
          body: 'Tours are secured upon a 20% advance token deposit. The remaining 80% balance is payable either prior to arrival or in convenient tranches upon arrival at your first hotel in Rajasthan.'
        },
        {
          heading: '2. Private Tourist Vehicle Regulations',
          body: 'All vehicles provided carry commercial tourist taxi permits (yellow plate) with all-India permits. Chauffeur duties are limited to a maximum of 12 hours per day to ensure safe driving and passenger security.'
        },
        {
          heading: '3. Monument Tickets & Guides',
          body: 'Unless explicitly marked as included in your custom voucher, monument entrance tickets and local monument audio guides are to be purchased directly by the guest at monument ticket counters.'
        }
      ]
    },
    cancellation: {
      title: 'Cancellation & Refund Policy',
      subtitle: 'Transparent cancellation terms designed for traveler flexibility.',
      sections: [
        {
          heading: '1. Standard Cancellation Timeline',
          body: 'Cancellations received 15 or more days prior to tour commencement will receive a 90% refund of the advance token (10% retained for banking and processing costs).'
        },
        {
          heading: '2. Peak Season Policy (Diwali, Pushkar Fair & Dec 20 - Jan 5)',
          body: 'During peak festival dates, hotel partners enforce strict non-refundable clauses. Any cancellation during these specific holiday dates will be subject to the individual hotel policy.'
        },
        {
          heading: '3. Taxi Service Cancellation',
          body: 'Intercity point-to-point taxi bookings may be cancelled up to 24 hours prior to pick-up time with zero penalty fee.'
        }
      ]
    }
  };

  const doc = contentMap[type];

  const bannerImage = 
    type === 'privacy' ? 'images/packages/classic-rajasthan.webp' :
    type === 'terms' ? 'images/packages/jodhpur-blue-city.jpg' :
    'images/packages/udaipur-city-palace.jpg';

  return (
    <div className="w-full bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('${bannerImage}')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-amber-950/75 to-slate-900/90" />
          <div className="relative z-10 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white">{doc.title}</h1>
            <p className="text-xs text-slate-300">{doc.subtitle}</p>
          </div>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-xs space-y-6">
          <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {doc.sections.map((sec, i) => (
              <div key={i} className="space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">{sec.heading}</h3>
                <p>{sec.body}</p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-stone-100 text-xs text-slate-400">
            Last Updated: January 2026 · Organise My Trip (Jaipur · Rajasthan · India)
          </div>
        </div>
      </div>
    </div>
  );
};
