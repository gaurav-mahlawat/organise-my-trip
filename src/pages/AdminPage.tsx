import React, { useState } from 'react';
import { useRouter, EnquiryRecord } from '../context/RouterContext';
import { useData, CollectionName } from '../context/DataContext';
import { 
  Users, 
  MessageCircle, 
  Phone, 
  Mail, 
  Calendar, 
  Search, 
  Download, 
  Trash2, 
  Plus,
  Pencil,
  LayoutDashboard,
  Database,
  X,
  Save,
  Wifi,
  WifiOff
} from 'lucide-react';

type FieldType = 'text' | 'number' | 'boolean' | 'textarea' | 'lines' | 'json';

interface FieldDef {
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
}

interface CollectionDef {
  key: CollectionName;
  label: string;
  singular: string;
  titleKey: string;
  fields: FieldDef[];
}

const COLLECTIONS: CollectionDef[] = [
  {
    key: 'destinations',
    label: 'Destinations',
    singular: 'Destination',
    titleKey: 'name',
    fields: [
      { key: 'name', label: 'Name', type: 'text', required: true },
      { key: 'slug', label: 'Slug (URL)', type: 'text', required: true },
      { key: 'nickname', label: 'Nickname', type: 'text' },
      { key: 'image', label: 'Image Path', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'bestTimeToVisit', label: 'Best Time to Visit', type: 'text' },
      { key: 'tourCount', label: 'Tour Count', type: 'number' },
      { key: 'popularFor', label: 'Popular For (one per line)', type: 'lines' },
      { key: 'topAttractions', label: 'Top Attractions (JSON array)', type: 'json' }
    ]
  },
  {
    key: 'packages',
    label: 'Tour Packages',
    singular: 'Package',
    titleKey: 'title',
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'slug', label: 'Slug (URL)', type: 'text', required: true },
      { key: 'tagline', label: 'Tagline', type: 'text' },
      { key: 'category', label: 'Category', type: 'text' },
      { key: 'durationDays', label: 'Duration Days', type: 'number' },
      { key: 'durationNights', label: 'Duration Nights', type: 'number' },
      { key: 'startingPrice', label: 'Starting Price (INR)', type: 'number' },
      { key: 'featured', label: 'Featured', type: 'boolean' },
      { key: 'destinations', label: 'Destinations (one per line)', type: 'lines' },
      { key: 'route', label: 'Route', type: 'text' },
      { key: 'image', label: 'Image Path', type: 'text' },
      { key: 'gallery', label: 'Gallery (one per line)', type: 'lines' },
      { key: 'overview', label: 'Overview', type: 'textarea' },
      { key: 'highlights', label: 'Highlights (one per line)', type: 'lines' },
      { key: 'itinerary', label: 'Itinerary (JSON array)', type: 'json' },
      { key: 'inclusions', label: 'Inclusions (one per line)', type: 'lines' },
      { key: 'exclusions', label: 'Exclusions (one per line)', type: 'lines' },
      { key: 'hotels', label: 'Hotels (JSON object)', type: 'json' },
      { key: 'bestSeason', label: 'Best Season', type: 'text' },
      { key: 'pickupDrop', label: 'Pickup / Drop', type: 'text' }
    ]
  },
  {
    key: 'activities',
    label: 'Activities',
    singular: 'Activity',
    titleKey: 'title',
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'slug', label: 'Slug (URL)', type: 'text', required: true },
      { key: 'category', label: 'Category', type: 'text' },
      { key: 'location', label: 'Location', type: 'text' },
      { key: 'duration', label: 'Duration', type: 'text' },
      { key: 'pricePerPerson', label: 'Price Per Person (INR)', type: 'number' },
      { key: 'image', label: 'Image Path', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'highlights', label: 'Highlights (one per line)', type: 'lines' },
      { key: 'includes', label: 'Includes (one per line)', type: 'lines' },
      { key: 'idealFor', label: 'Ideal For', type: 'text' },
      { key: 'timing', label: 'Timing', type: 'text' }
    ]
  },
  {
    key: 'blogs',
    label: 'Blog Posts',
    singular: 'Blog Post',
    titleKey: 'title',
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'slug', label: 'Slug (URL)', type: 'text', required: true },
      { key: 'category', label: 'Category', type: 'text' },
      { key: 'readTime', label: 'Read Time', type: 'text' },
      { key: 'publishedDate', label: 'Published Date', type: 'text' },
      { key: 'author', label: 'Author', type: 'text' },
      { key: 'image', label: 'Image Path', type: 'text' },
      { key: 'excerpt', label: 'Excerpt', type: 'textarea' },
      { key: 'content', label: 'Content (one paragraph per line)', type: 'lines' },
      { key: 'tags', label: 'Tags (one per line)', type: 'lines' }
    ]
  },
  {
    key: 'taxiRoutes',
    label: 'Taxi Routes',
    singular: 'Taxi Route',
    titleKey: 'slug',
    fields: [
      { key: 'slug', label: 'Slug (URL)', type: 'text', required: true },
      { key: 'fromCity', label: 'From City', type: 'text', required: true },
      { key: 'toCity', label: 'To City', type: 'text', required: true },
      { key: 'distanceKm', label: 'Distance (km)', type: 'number' },
      { key: 'durationHours', label: 'Duration', type: 'text' },
      { key: 'highway', label: 'Highway', type: 'text' },
      { key: 'popularStops', label: 'Popular Stops (one per line)', type: 'lines' },
      { key: 'sedanFare', label: 'Sedan Fare (INR)', type: 'number' },
      { key: 'suvFare', label: 'SUV Fare (INR)', type: 'number' },
      { key: 'crystaFare', label: 'Innova Fare (INR)', type: 'number' },
      { key: 'tempoFare', label: 'Tempo Fare (INR)', type: 'number' },
      { key: 'overview', label: 'Overview', type: 'textarea' }
    ]
  },
  {
    key: 'taxiVehicles',
    label: 'Taxi Vehicles',
    singular: 'Vehicle',
    titleKey: 'name',
    fields: [
      { key: 'name', label: 'Name', type: 'text', required: true },
      { key: 'category', label: 'Category', type: 'text' },
      { key: 'models', label: 'Models', type: 'text' },
      { key: 'seatingCapacity', label: 'Seating Capacity', type: 'number' },
      { key: 'luggageCapacity', label: 'Luggage Capacity', type: 'number' },
      { key: 'ac', label: 'AC', type: 'boolean' },
      { key: 'ratePerKm', label: 'Rate Per Km (INR)', type: 'number' },
      { key: 'minKmPerDay', label: 'Min Km Per Day', type: 'number' },
      { key: 'image', label: 'Image Path', type: 'text' },
      { key: 'features', label: 'Features (one per line)', type: 'lines' }
    ]
  }
];

export const AdminPage: React.FC = () => {
  const { enquiries, updateEnquiryStatus, clearEnquiries, addEnquiry } = useRouter();
  const data = useData();

  const [tab, setTab] = useState<'leads' | 'content'>('leads');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  // Content manager state
  const [activeCollection, setActiveCollection] = useState<CollectionDef>(COLLECTIONS[0]);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [formDraft, setFormDraft] = useState<Record<string, any>>({});

  const collectionData: any[] = (data as any)[
    activeCollection.key === 'packages' ? 'tourPackages' :
    activeCollection.key === 'blogs' ? 'blogPosts' : activeCollection.key
  ] || [];

  const filtered = enquiries.filter(item => {
    if (statusFilter !== 'all' && item.status !== statusFilter) return false;
    if (typeFilter !== 'all' && item.type !== typeFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        (item.fullName || '').toLowerCase().includes(q) ||
        (item.phone || '').toLowerCase().includes(q) ||
        (item.email || '').toLowerCase().includes(q) ||
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

  const openCreate = () => {
    const draft: Record<string, any> = {};
    for (const f of activeCollection.fields) {
      draft[f.key] = f.type === 'lines' ? [] : f.type === 'json' ? [] : f.type === 'number' ? 0 : f.type === 'boolean' ? false : '';
    }
    setFormDraft(draft);
    setIsNew(true);
    setEditingItem(null);
  };

  const openEdit = (item: any) => {
    setFormDraft({ ...item });
    setIsNew(false);
    setEditingItem(item);
  };

  const closeForm = () => {
    setEditingItem(null);
    setIsNew(false);
    setFormDraft({});
  };

  const handleFieldChange = (field: FieldDef, value: string | boolean) => {
    setFormDraft(prev => {
      const next = { ...prev };
      if (field.type === 'lines') {
        next[field.key] = String(value).split('\n').map(s => s.trim()).filter(Boolean);
      } else if (field.type === 'json') {
        next[field.key] = String(value);
      } else if (field.type === 'number') {
        next[field.key] = value === '' ? undefined : Number(value);
      } else {
        next[field.key] = value;
      }
      return next;
    });
  };

  const saveItem = async () => {
    const payload: any = { ...formDraft };
    for (const f of activeCollection.fields) {
      if (f.type === 'json' && typeof payload[f.key] === 'string') {
        try {
          payload[f.key] = JSON.parse(payload[f.key] || '[]');
        } catch {
          alert(`Invalid JSON in "${f.label}". Please fix before saving.`);
          return;
        }
      }
    }
    try {
      if (isNew) {
        await data.createItem(activeCollection.key, payload);
      } else {
        await data.updateItem(activeCollection.key, { ...payload, id: editingItem.id });
      }
      closeForm();
    } catch (e) {
      alert('Could not save item: ' + (e as Error).message);
    }
  };

  const deleteContentItem = async (item: any) => {
    if (!confirm(`Delete "${item[activeCollection.titleKey] || item.id}"? This cannot be undone.`)) return;
    const ok = await data.deleteItem(activeCollection.key, item.id);
    if (!ok) alert('Delete failed on server.');
  };

  const renderFieldInput = (field: FieldDef) => {
    const value = formDraft[field.key];
    const label = (
      <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wide block">
        {field.label}{field.required && <span className="text-rose-500"> *</span>}
      </label>
    );
    switch (field.type) {
      case 'boolean':
        return (
          <div>
            {label}
            <label className="flex items-center gap-2 mt-1 text-xs text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={Boolean(value)}
                onChange={e => handleFieldChange(field, e.target.checked)}
                className="w-4 h-4 accent-amber-600"
              />
              <span>Yes</span>
            </label>
          </div>
        );
      case 'textarea':
        return (
          <div>
            {label}
            <textarea
              value={value ?? ''}
              onChange={e => handleFieldChange(field, e.target.value)}
              rows={3}
              className="w-full mt-1 px-3 py-2 text-xs rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
        );
      case 'lines':
        return (
          <div>
            {label}
            <textarea
              value={Array.isArray(value) ? value.join('\n') : (value ?? '')}
              onChange={e => handleFieldChange(field, e.target.value)}
              rows={4}
              className="w-full mt-1 px-3 py-2 text-xs rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500 outline-none font-mono"
            />
          </div>
        );
      case 'json':
        return (
          <div>
            {label}
            <textarea
              value={typeof value === 'string' ? value : JSON.stringify(value ?? [], null, 2)}
              onChange={e => handleFieldChange(field, e.target.value)}
              rows={6}
              className="w-full mt-1 px-3 py-2 text-xs rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500 outline-none font-mono"
            />
          </div>
        );
      case 'number':
        return (
          <div>
            {label}
            <input
              type="number"
              value={value ?? ''}
              onChange={e => handleFieldChange(field, e.target.value)}
              className="w-full mt-1 px-3 py-2 text-xs rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
        );
      default:
        return (
          <div>
            {label}
            <input
              type="text"
              value={value ?? ''}
              onChange={e => handleFieldChange(field, e.target.value)}
              className="w-full mt-1 px-3 py-2 text-xs rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
        );
    }
  };

  return (
    <div className="w-full bg-stone-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Admin Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('images/hero/rajasthan-hero-v1.webp')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/95" />
          <div className="relative z-10 space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Internal Operations CRM</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif">
              Admin Dashboard
            </h1>
            <p className="text-xs text-slate-400">
              Organise My Trip · Lead management & website content CRUD with REST API backend.
            </p>
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold ${
              data.apiAvailable ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
            }`}>
              {data.apiAvailable ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
              <span>{data.apiAvailable ? 'Backend API Connected' : 'Offline Mode (Local Fallback)'}</span>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="relative z-10 flex gap-2 bg-white/10 border border-white/10 p-1.5 rounded-2xl">
            <button
              onClick={() => setTab('leads')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                tab === 'leads' ? 'bg-amber-600 text-white shadow' : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Leads CRM</span>
            </button>
            <button
              onClick={() => setTab('content')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                tab === 'content' ? 'bg-amber-600 text-white shadow' : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Content Manager</span>
            </button>
          </div>
        </div>

        {tab === 'leads' ? (
          <>
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

                <button
                  onClick={addSampleLead}
                  className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Simulate Lead</span>
                </button>
                <button
                  onClick={exportCSV}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Export CSV</span>
                </button>
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
                  const waReplyMsg = `Hello ${enq.fullName}, greetings from Organise My Trip (Jaipur, Rajasthan)! Thank you for your inquiry regarding ${enq.packageInterest || `${enq.pickupCity || ''} taxi`}. Our trip coordinator has prepared your itinerary and quote.`;
                  const waLink = `https://wa.me/${(enq.phone || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(waReplyMsg)}`;

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

                      {enq.message && (
                        <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 text-xs text-slate-700 italic">
                          "{enq.message}"
                        </div>
                      )}

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
          </>
        ) : (
          <>
            {/* Content Manager */}
            <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs flex flex-col md:flex-row gap-3 justify-between items-start md:items-center">
              <div className="flex flex-wrap gap-2">
                {COLLECTIONS.map(c => (
                  <button
                    key={c.key}
                    onClick={() => { setActiveCollection(c); closeForm(); }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
                      activeCollection.key === c.key
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
                    }`}
                  >
                    {c.label} <span className="opacity-60">({collectionData?.length ?? 0})</span>
                  </button>
                ))}
              </div>
              <button
                onClick={openCreate}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Add {activeCollection.singular}</span>
              </button>
            </div>

            {/* Edit / Create Form */}
            {(editingItem !== null || isNew) && (
              <div className="bg-white rounded-2xl border-2 border-amber-300 shadow-lg p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                    {isNew ? <Plus className="w-4 h-4 text-amber-700" /> : <Pencil className="w-4 h-4 text-amber-700" />}
                    {isNew ? `New ${activeCollection.singular}` : `Edit ${activeCollection.singular}`}
                    {!isNew && <span className="text-[11px] font-mono text-slate-400">(id: {editingItem?.id})</span>}
                  </h3>
                  <button onClick={closeForm} className="p-1.5 rounded-lg hover:bg-stone-100 text-slate-500">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCollection.fields.map(field => (
                    <div key={field.key} className={field.type === 'json' || field.type === 'textarea' || field.type === 'lines' ? 'md:col-span-2' : ''}>
                      {renderFieldInput(field)}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end gap-2 pt-2 border-t border-stone-100">
                  <button
                    onClick={closeForm}
                    className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-bold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveItem}
                    className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>{isNew ? 'Create' : 'Save Changes'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Records List */}
            <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
              <div className="p-4 border-b border-stone-100 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4 text-amber-700" />
                  <span>{activeCollection.label} ({collectionData?.length ?? 0})</span>
                </h3>
                <span className="text-[11px] text-slate-400">
                  Changes are saved to the backend API and reflect live on the website.
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-50 text-slate-500 font-semibold border-b border-stone-100">
                    <tr>
                      <th className="p-3">Name / Title</th>
                      <th className="p-3">Slug</th>
                      <th className="p-3 hidden md:table-cell">Details</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-slate-700">
                    {collectionData.length === 0 && (
                      <tr>
                        <td colSpan={4} className="p-8 text-center text-slate-400">
                          No records. Click "Add {activeCollection.singular}" to create the first one.
                        </td>
                      </tr>
                    )}
                    {collectionData.map((item: any) => (
                      <tr key={item.id} className="hover:bg-stone-50/60">
                        <td className="p-3 font-semibold text-slate-900">
                          {item[activeCollection.titleKey] || item.id}
                        </td>
                        <td className="p-3 font-mono text-[11px] text-slate-500">{item.slug || '—'}</td>
                        <td className="p-3 hidden md:table-cell text-[11px] text-slate-500 max-w-xs truncate">
                          {activeCollection.key === 'destinations' && `${item.nickname || ''} · ${item.tourCount || 0} tours`}
                          {activeCollection.key === 'packages' && `${item.durationDays || 0}D/${item.durationNights || 0}N · ${item.category || ''}`}
                          {activeCollection.key === 'activities' && `${item.location || ''}`}
                          {activeCollection.key === 'blogs' && `${item.publishedDate || ''} · ${item.readTime || ''}`}
                          {activeCollection.key === 'taxiRoutes' && `${item.fromCity || ''} → ${item.toCity || ''} · ${item.distanceKm || 0} km`}
                          {activeCollection.key === 'taxiVehicles' && `${item.category || ''} · ${item.seatingCapacity || 0} seats`}
                        </td>
                        <td className="p-3">
                          <div className="flex justify-end gap-1.5">
                            <button
                              onClick={() => openEdit(item)}
                              className="p-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 transition-colors"
                              title="Edit"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => deleteContentItem(item)}
                              className="p-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
