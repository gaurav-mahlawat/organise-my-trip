import React, { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { BLOG_POSTS } from '../data/blogData';
import { Search, BookOpen, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export const BlogIndexPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const categories = ['All', 'Travel Tips', 'Itineraries', 'Food Guide', 'Culture & Festivals', 'Heritage'];

  const filteredPosts = useMemo(() => {
    let list = [...BLOG_POSTS];
    if (selectedTag !== 'All') {
      list = list.filter(p => p.category === selectedTag);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [selectedTag, search]);

  return (
    <div className="w-full bg-stone-50 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('images/blog/rajasthan-tourism.webp')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-amber-950/75 to-slate-900/90" />
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>14 Insider Travel Guides & Blueprints</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif">
              Rajasthan Travel Guide & Blog
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Curated by local trip planners and historians. Discover packing advice, month-by-month weather charts, street food secrets, and heritage walks.
            </p>
          </div>
        </div>

        {/* Filter / Search */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedTag === cat ? 'bg-amber-700 text-white' : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search guides & advice..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
        </div>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col group cursor-pointer"
            >
              <div className="aspect-16/10 w-full overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900/80 text-amber-300">
                  {post.category}
                </span>
              </div>

              <div className="p-5 flex flex-col grow space-y-2.5">
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <span>{post.publishedDate}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-serif font-bold text-base text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed grow">
                  {post.excerpt}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400">By {post.author.split(' ')[0]}</span>
                  <span className="font-bold text-amber-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Read Article →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
