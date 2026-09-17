import React from 'react';
import { useRouter } from '../context/RouterContext';
import { EnquiryForm } from '../components/common/EnquiryForm';
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

export const ContactUsPage: React.FC = () => {
  const { getWhatsAppLink } = useRouter();

  return (
    <div className="w-full bg-stone-50 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('images/packages/udaipur-city-palace.jpg')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-amber-950/75 to-slate-900/90" />
          <div className="relative z-10 max-w-3xl space-y-3">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif">
              Contact Organise My Trip
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Travel with Organise My Trip — Rajasthan Experiences. Reach out directly to discuss your custom vacation plan, curated tour collection, or intercity taxi requirements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Office details */}
          <div className="lg:col-span-6 space-y-6">
            {/* Jaipur HQ */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>Organise My Trip</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900">
                Rajasthan Experiences · Jaipur Office
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Jaipur · Rajasthan · India
              </p>
              <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-stone-100">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Call: +91 77289 90407</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Call / WhatsApp: +91 89055 23568</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-700" />
                  <span>organisemytripdsr@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  <span>www.organisemytrip.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Open 7 Days: 8:00 AM – 10:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Curated Collection Box */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Rajasthan Curated Tour Collection</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900">
                8 Promotional Itineraries
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Heritage · Wildlife · Lakes · Desert · Luxury. Designed for promotional use, these ready-to-sell Rajasthan circuits can be customised by hotel category, vehicle, meal plan, safari availability and travel dates.
              </p>
            </div>

            {/* Direct WhatsApp Box */}
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 space-y-3">
              <h4 className="font-bold text-sm text-emerald-950 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Instant Travel Support via WhatsApp</span>
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Need urgent quote or flight delay assistance? Chat directly with our senior trip coordinators on WhatsApp. Average response time: under 5 minutes.
              </p>
              <a
                href={getWhatsAppLink("Hello Organise My Trip, I need assistance with travel planning in Rajasthan.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
              >
                <span>Chat with Trip Coordinator</span>
              </a>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-xl space-y-4">
            <h3 className="text-2xl font-bold font-serif text-slate-900">
              Send an Enquiry
            </h3>
            <p className="text-xs text-slate-500">
              Fill in your dates, traveller count, rooming and hotel category, and we will send a detailed customized itinerary and final quotation.
            </p>
            <EnquiryForm formType="tour" />
          </div>
        </div>
      </div>
    </div>
  );
};
