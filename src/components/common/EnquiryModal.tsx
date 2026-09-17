import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { EnquiryForm } from './EnquiryForm';
import { X, ShieldCheck, Sparkles } from 'lucide-react';

export const EnquiryModal: React.FC = () => {
  const { isEnquiryModalOpen, closeEnquiryModal, modalInitialData } = useRouter();

  if (!isEnquiryModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-6 relative">
          <button
            onClick={closeEnquiryModal}
            className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Infinity Hospitality · Rajasthan Experiences</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-serif">
            {modalInitialData?.type === 'taxi'
              ? 'Book Private Intercity Taxi'
              : modalInitialData?.type === 'b2b'
              ? 'Request B2B Travel Agent Tariff'
              : 'Plan Your Custom Rajasthan Journey'}
          </h2>

          <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Transparent pricing · Guaranteed private vehicle · No middlemen markup</span>
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          <EnquiryForm
            formType={modalInitialData?.type || 'tour'}
            defaultPackageName={modalInitialData?.packageInterest}
            defaultPickup={modalInitialData?.pickupCity}
            defaultDrop={modalInitialData?.dropCity}
          />
        </div>
      </div>
    </div>
  );
};
