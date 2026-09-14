import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Enquiry } from '../../types';
import { CheckCircle2, MessageCircle, Send, AlertCircle, Phone, Calendar, User, Mail, Users, MapPin, Car } from 'lucide-react';

interface EnquiryFormProps {
  formType?: 'tour' | 'taxi' | 'b2b';
  defaultPackageName?: string;
  defaultPickup?: string;
  defaultDrop?: string;
  onSuccess?: () => void;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  formType = 'tour',
  defaultPackageName = '',
  defaultPickup = '',
  defaultDrop = '',
  onSuccess,
  className = ''
}) => {
  const { addEnquiry, getWhatsAppLink } = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    travelMonth: 'November 2026',
    arrivalDate: '',
    departureDate: '',
    travellers: 2,
    hotelTier: 'Deluxe (4 Star)' as Enquiry['hotelTier'],
    packageInterest: defaultPackageName,
    pickupCity: defaultPickup,
    dropCity: defaultDrop,
    tripType: 'One Way' as Enquiry['tripType'],
    vehicleType: 'Toyota Innova Crysta',
    travelDate: '',
    companyName: '',
    agencyType: 'Travel Agent / Outbound Tour Operator',
    message: '',
    consent: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<Enquiry | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your full name.';
    if (!formData.phone.trim() || formData.phone.length < 8) return 'Please enter a valid phone or WhatsApp number.';
    if (!formData.email.trim() || !formData.email.includes('@')) return 'Please enter a valid email address.';
    if (!formData.consent) return 'Please accept the privacy consent to receive quotation.';
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setErrorMessage(error);
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const created = addEnquiry({
          type: formType,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          travelMonth: formData.travelMonth,
          arrivalDate: formData.arrivalDate,
          departureDate: formData.departureDate,
          travellers: Number(formData.travellers) || 2,
          hotelTier: formData.hotelTier,
          packageInterest: formData.packageInterest || defaultPackageName,
          pickupCity: formData.pickupCity,
          dropCity: formData.dropCity,
          tripType: formData.tripType,
          vehicleType: formData.vehicleType,
          travelDate: formData.travelDate,
          companyName: formData.companyName,
          agencyType: formData.agencyType,
          message: formData.message || (formType === 'taxi' ? `Taxi enquiry from ${formData.pickupCity || 'Jaipur'} to ${formData.dropCity || 'Jodhpur'}` : 'Custom Rajasthan trip inquiry')
        });

        setIsSubmitting(false);
        setSubmittedEnquiry(created);
        if (onSuccess) onSuccess();
      } catch (err) {
        setIsSubmitting(false);
        setErrorMessage('Failed to submit enquiry. Please try again or WhatsApp us directly.');
      }
    }, 450);
  };

  if (submittedEnquiry) {
    const waText = `Hi Organise My Trip, I submitted enquiry #${submittedEnquiry.id} for ${
      formType === 'taxi'
        ? `taxi from ${submittedEnquiry.pickupCity || 'Jaipur'} to ${submittedEnquiry.dropCity || 'Jodhpur'}`
        : (submittedEnquiry.packageInterest || 'Rajasthan Tour')
    }. Please share the detailed itinerary & quotation.`;

    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-900 font-serif">
            Quotation Request Received!
          </h3>
          <p className="text-sm text-slate-600">
            Thank you, <strong className="text-slate-800">{submittedEnquiry.name}</strong>. Reference: <span className="font-mono font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">{submittedEnquiry.id}</span>
          </p>
        </div>
        <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
          Our local travel planner in Jaipur is reviewing your dates and vehicle preferences. We usually reply with custom options via WhatsApp and Email within 15–30 minutes.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getWhatsAppLink(waText)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp Instantly</span>
          </a>
          <button
            onClick={() => setSubmittedEnquiry(null)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 text-slate-800 ${className}`}>
      {errorMessage && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Package or Service Banner if prefilled */}
      {defaultPackageName && formType === 'tour' && (
        <div className="p-3 bg-amber-50/80 border border-amber-200/80 rounded-lg text-xs flex items-center justify-between">
          <span className="text-amber-900 font-medium">Selected Package: <strong>{defaultPackageName}</strong></span>
          <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded">Customizable</span>
        </div>
      )}

      {/* B2B specific row */}
      {formType === 'b2b' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Agency Name *</label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={e => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="e.g. Royal Travels Pvt Ltd"
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Agency Type</label>
            <select
              value={formData.agencyType}
              onChange={e => setFormData({ ...formData, agencyType: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white"
            >
              <option value="Travel Agent">Retail Travel Agent</option>
              <option value="Outbound Tour Operator">Outbound Tour Operator</option>
              <option value="Corporate MICE Planner">Corporate / MICE Planner</option>
              <option value="Online Travel Agency (OTA)">Online Travel Agency (OTA)</option>
            </select>
          </div>
        </div>
      )}

      {/* Taxi specific fields */}
      {formType === 'taxi' && (
        <div className="space-y-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                Pickup City / Location *
              </label>
              <input
                type="text"
                required
                value={formData.pickupCity}
                onChange={e => setFormData({ ...formData, pickupCity: e.target.value })}
                placeholder="e.g. Jaipur Airport / Hotel"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                Drop City / Destination *
              </label>
              <input
                type="text"
                required
                value={formData.dropCity}
                onChange={e => setFormData({ ...formData, dropCity: e.target.value })}
                placeholder="e.g. Jodhpur / Udaipur / Local"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Trip Type</label>
              <select
                value={formData.tripType}
                onChange={e => setFormData({ ...formData, tripType: e.target.value as any })}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white"
              >
                <option value="One Way">One Way Drop</option>
                <option value="Round Trip">Round Trip</option>
                <option value="Multi-City Tour">Multi-Day Rajasthan Tour</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <Car className="w-3.5 h-3.5 text-amber-600" />
                Vehicle Model
              </label>
              <select
                value={formData.vehicleType}
                onChange={e => setFormData({ ...formData, vehicleType: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white"
              >
                <option value="Sedan (Dzire / Etios)">Comfort Sedan (4 Seater)</option>
                <option value="Maruti Ertiga (6 Seater)">Maruti Ertiga SUV (6 Seater)</option>
                <option value="Toyota Innova Crysta">Toyota Innova Crysta (7 Seater)</option>
                <option value="Tempo Traveller (12 Seater)">Tempo Traveller (12 Seater)</option>
                <option value="Tempo Traveller (17 Seater)">Tempo Traveller (17 Seater)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                Travel Date
              </label>
              <input
                type="date"
                value={formData.travelDate}
                onChange={e => setFormData({ ...formData, travelDate: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* Traveler Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-amber-600" />
            Your Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Rahul Verma"
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            Phone / WhatsApp Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +91 98290 XXXXX"
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@example.com"
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            Number of Travellers
          </label>
          <input
            type="number"
            min="1"
            max="100"
            value={formData.travellers}
            onChange={e => setFormData({ ...formData, travellers: parseInt(e.target.value) || 1 })}
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>
      </div>

      {/* Tour Specific Preferences (Month, Hotel, Dates) */}
      {formType !== 'taxi' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Travel Month</label>
            <select
              value={formData.travelMonth}
              onChange={e => setFormData({ ...formData, travelMonth: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white"
            >
              <option value="October 2026">October 2026</option>
              <option value="November 2026">November 2026 (Pushkar Fair)</option>
              <option value="December 2026">December 2026 (Peak Winter)</option>
              <option value="January 2027">January 2027</option>
              <option value="February 2027">February 2027 (Desert Festival)</option>
              <option value="March 2027">March 2027 (Holi Special)</option>
              <option value="April - September 2026">Monsoon / Summer 2026</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Hotel Category</label>
            <select
              value={formData.hotelTier}
              onChange={e => setFormData({ ...formData, hotelTier: e.target.value as any })}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white"
            >
              <option value="Deluxe (4 Star)">Deluxe (4 Star Boutique)</option>
              <option value="Luxury Heritage (5 Star)">Luxury Heritage (5 Star Palaces)</option>
              <option value="Budget (3 Star)">Comfort Budget (3 Star)</option>
              <option value="Vehicle Only / No Hotel">Vehicle Only / No Hotels Needed</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Arrival Date (Approx)</label>
            <input
              type="date"
              value={formData.arrivalDate}
              onChange={e => setFormData({ ...formData, arrivalDate: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
        </div>
      )}

      {/* Message / Special Requests */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Tell Us More About Your Plans (Optional)
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          placeholder="Any specific cities you want to add, elderly family members, vegetarian food preferences, or pickup flight details..."
          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none resize-none"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-2 pt-1">
        <input
          type="checkbox"
          id="privacy-consent"
          checked={formData.consent}
          onChange={e => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 h-3.5 w-3.5"
        />
        <label htmlFor="privacy-consent" className="text-[11px] text-slate-500 leading-tight">
          I agree to be contacted by Organise My Trip local specialists via WhatsApp/Email for the customized quotation. We never spam.
        </label>
      </div>

      {/* Submit CTA */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 rounded-lg bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? (
            <span>Sending to Rajasthan Operations...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>
                {formType === 'b2b' ? 'Request B2B Tariff Quotation' : 'Get Free Rajasthan Quotation'}
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
