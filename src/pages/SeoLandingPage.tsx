import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useData } from '../context/DataContext';
import { EnquiryForm } from '../components/common/EnquiryForm';
import { ShieldCheck, Sparkles, Check, ChevronRight, MessageCircle, MapPin, Calendar, HelpCircle } from 'lucide-react';

export const SeoLandingPage: React.FC = () => {
  const { params, navigate, openEnquiryModal, getWhatsAppLink } = useRouter();
  const { seoLandings: SEO_LANDINGS, tourPackages: TOUR_PACKAGES } = useData();
  const slug = params.slug || '7-days-rajasthan-tour-packages';

  const landing = SEO_LANDINGS.find(s => s.slug === slug) || SEO_LANDINGS[0];

  const matchedPackages = TOUR_PACKAGES.filter(p => 
    landing.recommendedPackageSlugs.includes(p.slug)
  );

  return (
    <div className="w-full bg-stone-50 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('images/hero/rajasthan-banner-wide.webp')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-amber-950/75 to-slate-900/90" />
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Organise My Trip · Rajasthan Experiences</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif">
              {landing.h1}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {landing.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                Duration: <strong className="text-amber-300">{landing.targetDuration}</strong>
              </div>
              <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                Pricing: <strong className="text-amber-300">On Request (Date-Dependent)</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights & Lead Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <h2 className="text-xl font-bold font-serif text-slate-900">
                Why Choose This Itinerary?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {landing.overviewHtml}
              </p>

              <div className="space-y-2 pt-2">
                {landing.highlightPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-stone-50 p-3 rounded-xl border border-stone-100">
                    <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Packages */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-serif text-slate-900">
                Recommended Handcrafted Packages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {matchedPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => navigate(`/package-detail/${pkg.slug}`)}
                    className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col"
                  >
                    <div className="aspect-16/10 relative overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">
                        {pkg.durationDays}D / {pkg.durationNights}N
                      </span>
                    </div>
                    <div className="p-4 flex flex-col grow space-y-1">
                      <h4 className="font-serif font-bold text-sm text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-1">
                        {pkg.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 grow">{pkg.route}</p>
                      <div className="pt-2 border-t border-stone-100 flex justify-between items-center text-xs">
                        <strong className="text-amber-700">Price on Request</strong>
                        <span className="text-amber-800 font-bold text-[11px]">View Details →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Accordion */}
            {landing.faqs.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
                <h3 className="text-base font-bold font-serif text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-700" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-3">
                  {landing.faqs.map((faq, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 space-y-1">
                      <h4 className="font-semibold text-xs text-slate-900">{faq.question}</h4>
                      <p className="text-xs text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Lead Capture Box */}
          <div className="lg:col-span-5 sticky top-24 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xl space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider block">
                Direct Local Booking
              </span>
              <h3 className="text-xl font-bold font-serif text-slate-900">
                Customise {landing.title}
              </h3>
              <p className="text-xs text-slate-500">
                Personalized quote with dedicated AC car and handpicked hotels within 30 minutes.
              </p>
            </div>

            <EnquiryForm formType="tour" defaultPackageName={landing.title} />

            <div className="pt-2">
              <a
                href={getWhatsAppLink(`Hi Organise My Trip, I am inquiring about "${landing.title}". Please share details and best quotation.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
