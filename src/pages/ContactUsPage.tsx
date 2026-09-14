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
              We operate two physical offices in Rajasthan. Reach out directly to discuss your custom vacation plan or intercity taxi requirements.
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
                <span>Head Office — Jaipur</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900">
                Organise My Trip (Jaipur HQ)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plot 42, Near Panch Batti, Mirza Ismail (MI) Road, C-Scheme, Jaipur, Rajasthan 302001
              </p>
              <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-stone-100">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>+91 98290 12345 / +91 141 2367890</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-700" />
                  <span>info@organisemytrip.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Open 7 Days: 8:00 AM – 10:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Udaipur Regional Desk */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>Regional Desk — Udaipur</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900">
                Organise My Trip (Udaipur Operations)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Opposite Rang Niwas Palace, Lake Palace Road, Kalaji Goraji, Udaipur, Rajasthan 313001
              </p>
              <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-stone-100">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>+91 98290 12346 / +91 294 2421100</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-700" />
                  <span>udaipur@organisemytrip.com</span>
                </div>
              </div>
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
              Fill in your dates and traveler count, and we will send a detailed customized itinerary and transparent quotation.
            </p>
            <EnquiryForm formType="tour" />
          </div>
        </div>
      </div>
    </div>
  );
};
