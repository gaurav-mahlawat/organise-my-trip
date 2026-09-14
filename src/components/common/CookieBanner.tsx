import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Shield } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const { navigate } = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('organise_my_trip_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('organise_my_trip_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('organise_my_trip_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md text-white border-t border-slate-800 py-3 px-4 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <Shield className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            We use essential cookies to deliver custom trip quotations and optimize your private tour booking experience.
          </span>
          <button 
            onClick={() => navigate('/privacy-policy')}
            className="text-amber-400 hover:underline shrink-0"
          >
            Learn more
          </button>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleDecline}
            className="px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};
