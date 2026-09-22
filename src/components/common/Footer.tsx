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
              <h4 className="text-white font-semibold text-sm">Curated Promotional Circuits</h4>
              <p className="text-xs text-slate-400 mt-0.5">8 ready-to-sell Rajasthan itineraries · Heritage, Wildlife, Lakes, Desert & Luxury.</p>
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
              <h4 className="text-white font-semibold text-sm">Fully Customisable</h4>
              <p className="text-xs text-slate-400 mt-0.5">Hotel category, vehicle, meal plan, safari availability and travel dates — your way.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Call / WhatsApp: +91 89055 23568</h4>
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
                alt="Organise My Trip - Rajasthan Experiences"
                className="h-14 w-auto object-contain bg-white rounded-md p-1"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-serif text-lg font-bold text-white block">
                  Organise My Trip
                </span>
                <span className="text-[10px] tracking-wider text-amber-400 uppercase font-semibold block">
                  Rajasthan Experiences
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Make your Rajasthan journey your way — private tours, family holidays, honeymoons, luxury escapes, corporate groups and destination weddings. Ready-to-sell circuits customisable by hotel category, vehicle, meal plan, safari availability and travel dates.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Organise My Trip:</strong>
                  910, 7th Floor, Anchor Mall, Nr. Civil Lines Metro Station, Ajmer Road, Jaipur – 302006
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-300 pt-1">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+917728990407" className="hover:text-amber-400">Call: +91 77289 90407</a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+918905523568" className="hover:text-amber-400">Call / WhatsApp: +91 89055 23568</a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:organisemytripdsr@gmail.com" className="hover:text-amber-400">organisemytripdsr@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="https://www.organisemytrip.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">www.organisemytrip.com</a>
              </div>
            </div>
          </div>

          {/* Col 2: Popular Tour Packages */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase border-b border-slate-800 pb-2">
              Tour Packages (8 Tours)
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => navigate('/package-detail/royal-rajasthan-highlights')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Royal Rajasthan Highlights (7 Days)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/package-detail/royal-triangle-wildlife')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Royal Triangle & Wildlife (8 Days)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/package-detail/grand-rajasthan-circuit')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Grand Rajasthan Circuit (11 Days)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/package-detail/palaces-lakes-desert')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Palaces, Lakes & Desert (9 Days)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/package-detail/luxury-rajasthan-escape')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Luxury Rajasthan Escape (12 Days)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/package-detail/rajasthan-family-explorer')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Rajasthan Family Explorer (10 Days)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/package-detail/ultimate-rajasthan-experience')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Ultimate Rajasthan Experience (14 Days)
                </button>
              </li>
              <li className="pt-1">
                <button 
                  onClick={() => navigate('/packages')} 
                  className="text-amber-400 font-semibold hover:underline flex items-center gap-1"
                >
                  View all 8 tour packages →
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
                  Jaipur to Jodhpur Cab
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/taxi-service/jaipur-to-udaipur')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Jaipur to Udaipur Cab
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/taxi-service/delhi-to-jaipur')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Delhi Airport to Jaipur Taxi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/taxi-service/jaipur-to-agra')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Jaipur to Agra Cab
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/taxi-service/jodhpur-to-jaisalmer')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Jodhpur to Jaisalmer Cab
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/taxi-service/jodhpur-to-udaipur')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Jodhpur to Udaipur via Ranakpur
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
                  Intercity Taxi Route Directory →
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
                <button onClick={() => navigate('/tour-by-destination')} className="text-amber-400 font-semibold hover:underline text-left">
                  All 9 Destination Guides →
                </button>
              </li>
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
                <button onClick={() => navigate('/tour-by-destination/ajmer')} className="hover:text-amber-400 text-left">
                  Ajmer (Sufi Pilgrimage City) Guide
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/tour-by-destination/pushkar')} className="hover:text-amber-400 text-left">
                  Pushkar (Holy Lake Town) Guide
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
            About Organise My Trip - Rajasthan Experiences · Jaipur, Rajasthan, India
          </p>
          <p>
            Welcome to Organise My Trip, your local Rajasthan travel specialist. Our Rajasthan Curated Tour Collection features 8 promotional, ready-to-sell itineraries across Jaipur, Pushkar, Ranthambhore, Udaipur, Jawai, Jodhpur, Jaisalmer and Bikaner — covering Heritage, Wildlife, Lakes, Desert and Luxury.
          </p>
          <p>
            Every circuit can be customised by hotel category (3*/4*/5*), vehicle, meal plan (breakfast or MAP), safari availability and travel dates. Make your Rajasthan journey your way — private tours, family holidays, honeymoons, luxury escapes, corporate groups and destination weddings. Rates, hotel availability, safari permits and sightseeing access are date-dependent; final quotations are prepared after confirming travel dates, pax, rooming and hotel category.
          </p>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            © 2026 Organise My Trip · Jaipur · Rajasthan · India. All rights reserved. Make your Rajasthan journey your way.
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
