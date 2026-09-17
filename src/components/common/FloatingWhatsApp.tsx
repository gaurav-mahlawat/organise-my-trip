import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { getWhatsAppLink } = useRouter();
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 select-none">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="bg-white text-slate-800 text-xs px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <p className="font-medium text-[11px] leading-tight">
            Planning a Rajasthan trip? Chat with our local expert on WhatsApp!
          </p>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 active:scale-95 relative group"
        title="Chat on WhatsApp with Organise My Trip"
        id="floating-whatsapp-cta"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
        {/* Active badge */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-amber-500 text-slate-950 font-black text-[9px] rounded-full flex items-center justify-center border-2 border-white shadow-xs">
          1
        </span>
      </a>
    </div>
  );
};
