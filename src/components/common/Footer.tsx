import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Clock, Award, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, getWhatsAppLink } = useRouter();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-slate-800">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Since 2011</h4>
              <p className="text-xs text-slate-400 mt-0.5">15+ years of verified Rajasthan inbound and domestic hospitality.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">100% Private Tours</h4>
              <p className="text-xs text-slate-400 mt-0.5">Dedicated vehicle, chauffeur, and flexible pace tailored only to your family.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">24/7 Local Concierge</h4>
              <p className="text-xs text-slate-400 mt-0.5">Physical offices in Jaipur & Udaipur with on-ground manager support.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Instant WhatsApp Assistance</h4>
              <p className="text-xs text-slate-400 mt-0.5">Get answers, itinerary suggestions, and direct quotes within minutes.</p>
            </div>
          </div>
        </div>

        {/* 4 Columns Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Col 1: Brand Info & Offices */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="images/logo.jpeg" 
                alt="Organise My Trip - Local Rajasthan travel company since 2011"
                className="h-14 w-auto object-contain bg-white rounded-md p-1"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-serif text-lg font-bold text-white block">
                  Organise My Trip
                </span>
                <span className="text-[10px] tracking-wider text-amber-400 uppercase font-semibold block">
                  Rajasthan journeys since 2011
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Local Rajasthan travel company & authorized destination management agency based in Jaipur and Udaipur. We craft private heritage tours, desert safaris, verified taxi transfers, and luxury palace vacations.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Jaipur Head Office:</strong>
                  Plot 14, Near Ganpati Plaza, MI Road, Jaipur, Rajasthan 302001
                </div>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Udaipur Office:</strong>
                  21, Lake Palace Road, Near Kalaji Goraji, Udaipur, Rajasthan 313001
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-300 pt-1">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919829012345" className="hover:text-amber-400">+91 98290 12345 / +91 94140 12345</a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:info@organisemytrip.com" className="hover:text-amber-400">info@organisemytrip.com</a>
              </div>
            </div>
          </div>

          {/* Col 2: Popular Tour Packages */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase border-b border-slate-800 pb-2">
              Tour Packages (29 Tours)
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => navigate('/package-detail/classic-rajasthan-7-days')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Classic Rajasthan Heritage (7 Days)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/package-detail/royal-rajasthan-10-days')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Royal Rajasthan Grand Odyssey (10 Days)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/package-detail/golden-triangle-with-ranthambore-wildlife')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Golden Triangle & Ranthambore Tigers (8 Days)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/package-detail/romantic-udaipur-mount-abu-honeymoon')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Romantic Udaipur & Mount Abu (5 Days)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/package-detail/grand-rajasthan-14-days-expedition')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Grand Rajasthan Expedition (14 Days)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/package-detail/desert-circuit-bikaner-jaisalmer-jodhpur')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Thar Desert Circuit (6 Days)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/package-detail/luxury-rajasthan-palace-train-and-heritage-stays')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Luxury 5-Star Palace Stays (8 Days)
                </button>
              </li>
              <li className="pt-1">
                <button 
                  onClick={() => navigate('/packages')} 
                  className="text-amber-400 font-semibold hover:underline flex items-center gap-1"
                >
                  View all 29 tour packages →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Taxi Services & Routes */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase border-b border-slate-800 pb-2">
              Taxi Service (~50 Routes)
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => navigate('/taxi-service/jaipur-to-jodhpur')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Jaipur to Jodhpur Cab (from ₹3,850)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/taxi-service/jaipur-to-udaipur')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Jaipur to Udaipur Cab (from ₹4,500)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/taxi-service/delhi-to-jaipur')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Delhi Airport to Jaipur Taxi (from ₹3,200)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/taxi-service/jaipur-to-agra')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Jaipur to Agra Cab (from ₹2,900)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/taxi-service/jodhpur-to-jaisalmer')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Jodhpur to Jaisalmer Cab (from ₹3,400)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/taxi-service/jodhpur-to-udaipur')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Jodhpur to Udaipur via Ranakpur (from ₹3,300)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/rajasthan-car-rental')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Rajasthan Car Rental & Chauffeur Fleet
                </button>
              </li>
              <li className="pt-1">
                <button 
                  onClick={() => navigate('/rajasthan-tour-taxi')} 
                  className="text-amber-400 font-semibold hover:underline flex items-center gap-1"
                >
                  Intercity Taxi Fare Search Hub →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Destinations & Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase border-b border-slate-800 pb-2">
              Destinations & Travel Guides
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigate('/tour-by-destination/jaipur')} className="hover:text-amber-400 text-left">
                  Jaipur (The Pink City) Guide
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/tour-by-destination/udaipur')} className="hover:text-amber-400 text-left">
                  Udaipur (City of Lakes) Guide
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/tour-by-destination/jodhpur')} className="hover:text-amber-400 text-left">
                  Jodhpur (The Blue City) Guide
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/tour-by-destination/jaisalmer')} className="hover:text-amber-400 text-left">
                  Jaisalmer (The Golden City) Guide
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/tour-by-destination/sawai-madhopur')} className="hover:text-amber-400 text-left">
                  Ranthambore Tiger Sanctuary Guide
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/activities')} className="hover:text-amber-400 text-left">
                  12 Experiences & Desert Safaris
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/b2b-rajasthan-dmc')} className="text-amber-300 font-medium hover:underline text-left">
                  B2B Travel Agents (DMC Tariffs)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about-us')} className="hover:text-amber-400 text-left">
                  About Organise My Trip
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/rajasthan-inbound-tour-operator')} className="hover:text-amber-400 text-left">
                  Rajasthan Inbound Tour Operator
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Blurb as per requirements */}
        <div className="bg-slate-900/80 rounded-xl p-6 border border-slate-800/80 text-slate-400 text-xs leading-relaxed space-y-2.5">
          <p className="font-semibold text-slate-200">
            About Organise My Trip - Local Rajasthan Travel Company · Since 2011
          </p>
          <p>
            Welcome to Organise My Trip, your trusted local Rajasthan destination specialist and premier tour operator. Since 2011, we have operated over 15,000 customized private journeys across Jaipur, Udaipur, Jodhpur, Jaisalmer, Bikaner, Pushkar, Mount Abu, and Ranthambore. Unlike generic aggregators, we maintain our own fleet of commercial tourist taxis (Sedan, Ertiga, Toyota Innova Crysta, and 12-17 Seater Tempo Travellers) driven by senior, verified chauffeurs.
          </p>
          <p>
            Whether you are booking a 7-day classic holiday, an all-inclusive desert camping safari under the stars in Sam sand dunes, or an intercity taxi between Jaipur and Jodhpur, every itinerary is supported by our physical guest relation offices in Jaipur and Udaipur. Contact our trip design specialists today for a free custom quotation with transparent, fair pricing and zero hidden charges.
          </p>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            © 2011 – 2026 Organise My Trip. All rights reserved. Tagline: Local Rajasthan travel company · Since 2011.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button onClick={() => navigate('/privacy-policy')} className="hover:text-slate-200">Privacy Policy</button>
            <span>·</span>
            <button onClick={() => navigate('/terms-and-conditions')} className="hover:text-slate-200">Terms & Conditions</button>
            <span>·</span>
            <button onClick={() => navigate('/cancellation-policy')} className="hover:text-slate-200">Cancellation Policy</button>
            <span>·</span>
            <button onClick={() => navigate('/contact-us')} className="hover:text-slate-200">Contact Us</button>
            <span>·</span>
            <button onClick={() => navigate('/sitemap')} className="hover:text-slate-200">Sitemap</button>
            <span>·</span>
            <button 
              onClick={() => navigate('/admin')} 
              className="flex items-center gap-1 text-slate-400 hover:text-amber-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800"
              title="Admin Portal (Leads & Enquiries)"
            >
              <Lock className="w-3 h-3" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
