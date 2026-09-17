import React, { useState } from 'react';
import { useRouter, EnquiryRecord } from '../context/RouterContext';
import { 
  Users, 
  MessageCircle, 
  Phone, 
  Mail, 
  Calendar, 
  Car, 
  Building, 
  Search, 
  Filter, 
  Download, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  Plus
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const { enquiries, updateEnquiryStatus, clearEnquiries, addEnquiry } = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const filtered = enquiries.filter(item => {
    if (statusFilter !== 'all' && item.status !== statusFilter) return false;
    if (typeFilter !== 'all' && item.type !== typeFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.fullName.toLowerCase().includes(q) ||
        item.phone.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q) ||
        (item.packageInterest && item.packageInterest.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const stats = {
    total: enquiries.length,
    new: enquiries.filter(e => e.status === 'new').length,
    contacted: enquiries.filter(e => e.status === 'contacted').length,
    quoted: enquiries.filter(e => e.status === 'quoted').length,
    confirmed: enquiries.filter(e => e.status === 'confirmed').length
  };

  const exportCSV = () => {
    if (enquiries.length === 0) {
      alert('No leads to export.');
      return;
    }
    const headers = ['ID', 'Date', 'Type', 'Status', 'Name', 'Phone', 'Email', 'TravelDate', 'Adults', 'Children', 'Details', 'Message'];
    const rows = enquiries.map(e => [
      e.id,
      new Date(e.createdAt).toLocaleDateString(),
      e.type,
      e.status,
      `"${e.fullName}"`,
      `"${e.phone}"`,
      e.email,
      e.travelDate || '',
      e.adults || '',
      e.children || '',
      `"${e.packageInterest || `${e.pickupCity || ''} to ${e.dropCity || ''}` || e.agencyName || ''}"`,
      `"${(e.message || '').replace(/"/g, '""')}"`
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `organise-my-trip-leads-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const addSampleLead = () => {
    addEnquiry({
      type: 'tour',
      fullName: 'Vikram Malhotra',
      email: 'vikram.m@gmail.com',
      phone: '+91 98765 43210',
      travelDate: '2026-11-15',
      adults: 2,
      children: 1,
      packageInterest: 'Royal Rajasthan Heritage Circuit (10D/9N)',
      hotelCategory: 'deluxe',
      message: 'Looking for a private tour starting from Jaipur and ending at Udaipur with Innova Crysta.'
    });
  };

  return (
    <div className="w-full bg-stone-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Admin Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Internal Operations CRM</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif">
              Lead & Booking Inquiries Desk
            </h1>
            <p className="text-xs text-slate-400">
              Infinity Hospitality · Direct customer enquiries from website quotation forms and WhatsApp links.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={addSampleLead}
              className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Simulate Lead</span>
            </button>
            <button
              onClick={exportCSV}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors border border-white/10"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
            {enquiries.length > 0 && (
              <button
                onClick={() => {
                  if (confirm('Clear all stored inquiries in browser storage?')) clearEnquiries();
                }}
                className="px-3.5 py-2 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* CRM Pipeline Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
            <span className="text-xs text-slate-400 block font-medium">Total Inquiries</span>
            <div className="text-2xl font-bold font-serif text-slate-900 mt-1">{stats.total}</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-amber-200 bg-amber-50/40 shadow-xs">
            <span className="text-xs text-amber-800 block font-bold">New & Unread</span>
            <div className="text-2xl font-bold font-serif text-amber-900 mt-1">{stats.new}</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-xs">
            <span className="text-xs text-blue-700 block font-medium">Contacted</span>
            <div className="text-2xl font-bold font-serif text-blue-900 mt-1">{stats.contacted}</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-purple-100 shadow-xs">
            <span className="text-xs text-purple-700 block font-medium">Quote Dispatched</span>
            <div className="text-2xl font-bold font-serif text-purple-900 mt-1">{stats.quoted}</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-emerald-200 bg-emerald-50/40 shadow-xs">
            <span className="text-xs text-emerald-800 block font-bold">Confirmed Booking</span>
            <div className="text-2xl font-bold font-serif text-emerald-900 mt-1">{stats.confirmed}</div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs flex flex-col md:flex-row gap-3 justify-between items-center">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by guest name, phone, or email..."
              className="w-full pl-10 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded-xl text-xs font-semibold border border-stone-300 bg-stone-50 outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="quoted">Quote Sent</option>
              <option value="confirmed">Confirmed</option>
              <option value="closed">Closed</option>
            </select>

            {/* Type Filter */}
            <select
              value={typeFilter}
              onChange={e => setTypeFilter(e.target.value)}
              className="px-3 py-2 rounded-xl text-xs font-semibold border border-stone-300 bg-stone-50 outline-none"
            >
              <option value="all">All Types</option>
              <option value="tour">Tour Packages</option>
              <option value="taxi">Taxi & Intercity</option>
              <option value="b2b">B2B DMC Agency</option>
            </select>
          </div>
        </div>

        {/* Inquiries Table / Cards */}
        {filtered.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-stone-200 text-center space-y-3">
            <Users className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="font-bold text-base text-slate-800">No enquiries found</h3>
            <p className="text-xs text-slate-500">
              When customers fill out quotation forms on any page or click WhatsApp, inquiries will be stored here in real-time.
            </p>
            <button
              onClick={addSampleLead}
              className="px-4 py-2 bg-amber-600 text-white font-bold rounded-xl text-xs mt-2"
            >
              Generate Test Lead
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((enq) => {
              const waReplyMsg = `Hello ${enq.fullName}, greetings from Infinity Hospitality (Jaipur, Rajasthan)! Thank you for your inquiry regarding ${enq.packageInterest || `${enq.pickupCity || ''} taxi`}. Our trip coordinator has prepared your itinerary and quote.`;
              const waLink = `https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(waReplyMsg)}`;

              return (
                <div
                  key={enq.id}
                  className={`bg-white rounded-2xl border p-5 transition-all shadow-xs space-y-3 ${
                    enq.status === 'new' ? 'border-amber-400 ring-1 ring-amber-300' : 'border-stone-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-stone-100 pb-3">
                    <div className="flex items-center gap-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        enq.type === 'tour' ? 'bg-amber-100 text-amber-900' :
                        enq.type === 'taxi' ? 'bg-blue-100 text-blue-900' :
                        'bg-purple-100 text-purple-900'
                      }`}>
                        {enq.type}
                      </span>
                      <h3 className="font-bold text-base text-slate-900">{enq.fullName}</h3>
                      {enq.agencyName && (
                        <span className="text-xs text-purple-800 font-semibold bg-purple-50 px-2 py-0.5 rounded">
                          Agency: {enq.agencyName}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-400">
                        {new Date(enq.createdAt).toLocaleString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </span>
                      {/* Status Selector */}
                      <select
                        value={enq.status}
                        onChange={e => updateEnquiryStatus(enq.id, e.target.value as any)}
                        className={`text-xs font-bold px-2.5 py-1 rounded-lg border outline-none cursor-pointer ${
                          enq.status === 'new' ? 'bg-amber-100 text-amber-950 border-amber-300' :
                          enq.status === 'contacted' ? 'bg-blue-50 text-blue-900 border-blue-200' :
                          enq.status === 'quoted' ? 'bg-purple-50 text-purple-900 border-purple-200' :
                          enq.status === 'confirmed' ? 'bg-emerald-100 text-emerald-900 border-emerald-300' :
                          'bg-stone-100 text-slate-600 border-stone-200'
                        }`}
                      >
                        <option value="new">● New Lead</option>
                        <option value="contacted">● Contacted</option>
                        <option value="quoted">● Quote Sent</option>
                        <option value="confirmed">● Confirmed</option>
                        <option value="closed">● Closed</option>
                      </select>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="font-semibold text-slate-800">{enq.phone}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{enq.email}</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      {enq.travelDate && (
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>Travel Date: <strong>{enq.travelDate}</strong></span>
                        </div>
                      )}
                      {(enq.adults || enq.children) && (
                        <div>
                          <span>Guests: <strong>{enq.adults || 0} Adults</strong>, {enq.children || 0} Kids</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-1">
                      {enq.packageInterest && (
                        <div>Package: <strong className="text-amber-800">{enq.packageInterest}</strong></div>
                      )}
                      {enq.pickupCity && (
                        <div>Route: <strong>{enq.pickupCity} → {enq.dropCity || 'Local'}</strong></div>
                      )}
                      {enq.vehicleType && (
                        <div>Vehicle: <strong>{enq.vehicleType}</strong></div>
                      )}
                    </div>
                  </div>

                  {/* Message Note */}
                  {enq.message && (
                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 text-xs text-slate-700 italic">
                      "{enq.message}"
                    </div>
                  )}

                  {/* Actions Bar */}
                  <div className="flex justify-end gap-2 pt-1">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Reply on WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${enq.phone}`}
                      className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Client</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
