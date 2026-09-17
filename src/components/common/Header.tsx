import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  ChevronDown, 
  Menu, 
  X, 
  Compass, 
  Car, 
  Sparkles, 
  BookOpen, 
  Building2, 
  Calendar,
  ShieldCheck
} from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, navigate, openEnquiryModal, getWhatsAppLink } = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [packagesDropdown, setPackagesDropdown] = useState(false);
  const [taxiDropdown, setTaxiDropdown] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full bg-white shadow-xs z-50 sticky top-0 transition-all">
      {/* 1. Top Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Tagline & Trust Badge */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-medium text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Infinity Hospitality · Rajasthan Experiences
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300 text-[11px]">
              Jaipur · Rajasthan · India · 100% Private Customisable Circuits
            </span>
          </div>

          {/* Contact Direct Links */}
          <div className="flex items-center gap-4 text-[11px] font-medium ml-auto">
            <a 
              href="tel:+917728990407" 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              title="Call Rajasthan Trip Expert"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 77289 90407</span>
            </a>
            <span className="hidden sm:inline text-slate-500">·</span>
            <a 
              href="tel:+918905523568" 
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              title="Call Rajasthan Trip Expert"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 89055 23568</span>
            </a>
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
            <a 
              href="mailto:organisemytripdsr@gmail.com" 
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>organisemytripdsr@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-[88px]">
          {/* Logo with strict brand specifications - fixed block, fully inside navbar */}
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2.5 cursor-pointer group select-none shrink min-w-0"
            title="Infinity Hospitality - Home"
          >
            <img 
              src="images/logo.jpeg" 
              alt="Infinity Hospitality - Rajasthan Experiences" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02] shrink-0"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback styling if image is loading
                const target = e.currentTarget;
                target.style.display = 'none';
              }}
            />
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-serif text-[15px] sm:text-base font-bold tracking-tight text-slate-900 group-hover:text-amber-800 transition-colors truncate">
                Infinity Hospitality
              </span>
              <span className="hidden sm:block text-[8px] tracking-wide text-amber-800 font-semibold uppercase truncate">
                Rajasthan Experiences
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links - consistent flex spacing */}
          <nav className="hidden xl:flex items-center justify-center gap-3 flex-1 min-w-0">
            {/* Tour Packages Dropdown */}
            <div 
              className="relative shrink-0"
              onMouseEnter={() => setPackagesDropdown(true)}
              onMouseLeave={() => setPackagesDropdown(false)}
            >
              <button 
                onClick={() => navigate('/packages')}
                className={`flex items-center gap-1.5 px-0.5 py-2 text-[13px] font-semibold rounded-md transition-colors whitespace-nowrap ${
                  isActive('/packages') || isActive('/package-detail') || isActive('/rajasthan-tour-packages')
                    ? 'text-amber-800 bg-amber-50' 
                    : 'text-slate-700 hover:text-amber-800 hover:bg-slate-50'
                }`}
              >
                <Compass className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Tour Packages</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 shrink-0" />
              </button>

              {/* Dropdown Menu */}
              {packagesDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Popular Itineraries (8 Tours)
                  </div>
                  <button 
                    onClick={() => { navigate('/packages'); setPackagesDropdown(false); }}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-amber-800 hover:bg-amber-50 flex items-center justify-between"
                  >
                    <span>Browse All 8 Packages</span>
                    <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">Promo Circuits</span>
                  </button>
                  <div className="h-px bg-slate-100 my-1" />
                  <button 
                    onClick={() => { navigate('/package-detail/royal-rajasthan-highlights'); setPackagesDropdown(false); }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-amber-800"
                  >
                    Royal Rajasthan Highlights (7 Days) · Jaipur, Pushkar, Jodhpur, Jaisalmer
                  </button>
                  <button 
                    onClick={() => { navigate('/package-detail/royal-triangle-wildlife'); setPackagesDropdown(false); }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-amber-800"
                  >
                    Royal Triangle & Wildlife (8 Days)
                  </button>
                  <button 
                    onClick={() => { navigate('/package-detail/grand-rajasthan-circuit'); setPackagesDropdown(false); }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-amber-800"
                  >
                    Grand Rajasthan Circuit (11 Days)
                  </button>
                  <button 
                    onClick={() => { navigate('/package-detail/palaces-lakes-desert'); setPackagesDropdown(false); }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-amber-800"
                  >
                    Palaces, Lakes & Desert (9 Days)
                  </button>
                  <div className="h-px bg-slate-100 my-1" />
                  <button 
                    onClick={() => { navigate('/rajasthan-tour-packages/7-days-rajasthan-tour-packages'); setPackagesDropdown(false); }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-500 hover:text-slate-900"
                  >
                    7-Day Tours Hub →
                  </button>
                </div>
              )}
            </div>

            {/* Taxi Service Dropdown */}
            <div 
              className="relative shrink-0"
              onMouseEnter={() => setTaxiDropdown(true)}
              onMouseLeave={() => setTaxiDropdown(false)}
            >
              <button 
                onClick={() => navigate('/taxi-service')}
                className={`flex items-center gap-1.5 px-0.5 py-2 text-[13px] font-semibold rounded-md transition-colors whitespace-nowrap ${
                  isActive('/taxi-service') || isActive('/rajasthan-tour-taxi') || isActive('/rajasthan-car-rental')
                    ? 'text-amber-800 bg-amber-50' 
                    : 'text-slate-700 hover:text-amber-800 hover:bg-slate-50'
                }`}
              >
                <Car className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Taxi Service</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 shrink-0" />
              </button>

              {/* Dropdown Menu */}
              {taxiDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button 
                    onClick={() => { navigate('/taxi-service'); setTaxiDropdown(false); }}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-800"
                  >
                    Taxi Fleet & Rates Overview
                  </button>
                  <button 
                    onClick={() => { navigate('/rajasthan-tour-taxi'); setTaxiDropdown(false); }}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-amber-800 hover:bg-amber-50"
                  >
                    Rajasthan Intercity Fares Hub (~50 Routes)
                  </button>
                  <button 
                    onClick={() => { navigate('/rajasthan-car-rental'); setTaxiDropdown(false); }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                  >
                    Car Rental (Self-Drive & Chauffeur)
                  </button>
                  <div className="h-px bg-slate-100 my-1" />
                  <button 
                    onClick={() => { navigate('/taxi-service/jaipur-to-jodhpur'); setTaxiDropdown(false); }}
                    className="w-full text-left px-4 py-1.5 text-xs text-slate-600 hover:text-amber-800 hover:bg-slate-50"
                  >
                    Jaipur to Jodhpur Cab (₹3,850)
                  </button>
                  <button 
                    onClick={() => { navigate('/taxi-service/jaipur-to-udaipur'); setTaxiDropdown(false); }}
                    className="w-full text-left px-4 py-1.5 text-xs text-slate-600 hover:text-amber-800 hover:bg-slate-50"
                  >
                    Jaipur to Udaipur Cab (₹4,500)
                  </button>
                  <button 
                    onClick={() => { navigate('/taxi-service/delhi-to-jaipur'); setTaxiDropdown(false); }}
                    className="w-full text-left px-4 py-1.5 text-xs text-slate-600 hover:text-amber-800 hover:bg-slate-50"
                  >
                    Delhi Airport to Jaipur Cab (₹3,200)
                  </button>
                </div>
              )}
            </div>

            {/* Experiences */}
            <button 
              onClick={() => navigate('/activities')}
              className={`flex items-center gap-1.5 px-0.5 py-2 text-[13px] font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                isActive('/activities') || isActive('/activity-detail')
                  ? 'text-amber-800 bg-amber-50' 
                  : 'text-slate-700 hover:text-amber-800 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Experiences</span>
            </button>

            {/* Travel Guide */}
            <button 
              onClick={() => navigate('/blog')}
              className={`flex items-center gap-1.5 px-0.5 py-2 text-[13px] font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                isActive('/blog') 
                  ? 'text-amber-800 bg-amber-50' 
                  : 'text-slate-700 hover:text-amber-800 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Travel Guide</span>
            </button>

            {/* Destinations */}
            <button 
              onClick={() => navigate('/tour-by-destination/jaipur')}
              className={`flex items-center gap-1.5 px-0.5 py-2 text-[13px] font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                isActive('/tour-by-destination') || isActive('/attraction')
                  ? 'text-amber-800 bg-amber-50' 
                  : 'text-slate-700 hover:text-amber-800 hover:bg-slate-50'
              }`}
            >
              <span>Destinations</span>
            </button>

            {/* Travel Agents B2B - single clean line, no awkward wrapping */}
            <button 
              onClick={() => navigate('/b2b-rajasthan-dmc')}
              className={`flex items-center gap-1.5 px-0.5 py-2 text-[13px] font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                isActive('/b2b-rajasthan-dmc') 
                  ? 'text-amber-800 bg-amber-50' 
                  : 'text-slate-700 hover:text-amber-800 hover:bg-slate-50'
              }`}
            >
              <Building2 className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Travel Agents (B2B)</span>
            </button>
          </nav>

          {/* Right Action: Get a Free Quote CTA - vertically centered, fixed width */}
          <div className="hidden xl:flex items-center shrink-0">
            <button 
              onClick={() => openEnquiryModal()}
              className="inline-flex items-center justify-center gap-2 h-[56px] min-w-[170px] px-4 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              id="header-quote-cta-desktop"
            >
              <Calendar className="w-4 h-4" />
              <span>Get a Free Quote</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => openEnquiryModal()}
              className="px-2.5 py-1.5 rounded-md bg-amber-600 text-white text-[11px] font-bold"
            >
              Quote
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-1">
            <button 
              onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }}
              className={`text-left px-3 py-2.5 text-sm font-semibold rounded-lg ${
                isActive('/') ? 'bg-amber-50 text-amber-800' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => { navigate('/packages'); setIsMobileMenuOpen(false); }}
              className={`text-left px-3 py-2.5 text-sm font-semibold rounded-lg ${
                isActive('/packages') ? 'bg-amber-50 text-amber-800' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Tour Packages (8 Tours)
            </button>
            <button 
              onClick={() => { navigate('/taxi-service'); setIsMobileMenuOpen(false); }}
              className={`text-left px-3 py-2.5 text-sm font-semibold rounded-lg ${
                isActive('/taxi-service') ? 'bg-amber-50 text-amber-800' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Taxi Service & Intercity Fares
            </button>
            <button 
              onClick={() => { navigate('/rajasthan-car-rental'); setIsMobileMenuOpen(false); }}
              className="text-left px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50 pl-6"
            >
              ↳ Car Rental
            </button>
            <button 
              onClick={() => { navigate('/activities'); setIsMobileMenuOpen(false); }}
              className={`text-left px-3 py-2.5 text-sm font-semibold rounded-lg ${
                isActive('/activities') ? 'bg-amber-50 text-amber-800' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Experiences & Safaris (12)
            </button>
            <button 
              onClick={() => { navigate('/blog'); setIsMobileMenuOpen(false); }}
              className={`text-left px-3 py-2.5 text-sm font-semibold rounded-lg ${
                isActive('/blog') ? 'bg-amber-50 text-amber-800' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Travel Guide & Blogs (14)
            </button>
            <button 
              onClick={() => { navigate('/tour-by-destination/jaipur'); setIsMobileMenuOpen(false); }}
              className="text-left px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Destinations (8 Cities)
            </button>
            <button 
              onClick={() => { navigate('/b2b-rajasthan-dmc'); setIsMobileMenuOpen(false); }}
              className="text-left px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Travel Agents (B2B DMC)
            </button>
            <button 
              onClick={() => { navigate('/about-us'); setIsMobileMenuOpen(false); }}
              className="text-left px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
            >
              About Infinity Hospitality
            </button>
            <button 
              onClick={() => { navigate('/contact-us'); setIsMobileMenuOpen(false); }}
              className="text-left px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
            >
              Contact Us (Jaipur · Rajasthan · India)
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button 
              onClick={() => { openEnquiryModal(); setIsMobileMenuOpen(false); }}
              className="w-full py-3 text-center bg-amber-600 text-white rounded-lg font-bold text-sm shadow-sm"
            >
              Get a Free Trip Quotation
            </button>
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center bg-emerald-600 text-white rounded-lg font-semibold text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Direct WhatsApp Support
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
