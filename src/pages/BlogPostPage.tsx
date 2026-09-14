import React from 'react';
import { useRouter } from '../context/RouterContext';
import { BLOG_POSTS } from '../data/blogData';
import { EnquiryForm } from '../components/common/EnquiryForm';
import { Clock, Calendar, User, Tag, Share2, ArrowLeft, MessageCircle } from 'lucide-react';

export const BlogPostPage: React.FC = () => {
  const { params, navigate, getWhatsAppLink } = useRouter();
  const slug = params.slug || 'best-time-to-visit-rajasthan-month-by-month-guide';

  const post = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="w-full bg-stone-50 pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigate('/')} className="hover:text-amber-800">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/blog')} className="hover:text-amber-800">Travel Guide</button>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate">{post.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 pt-10 pb-6 space-y-4">
        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
          {post.category}
        </span>

        <h1 className="text-2xl sm:text-4xl font-bold font-serif text-slate-900 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-amber-700" />
            <span>{post.author}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-700" />
            <span>{post.publishedDate}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="aspect-16/9 rounded-2xl overflow-hidden shadow-md">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Article Content & Lead Box */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-stone-200 shadow-xs space-y-6 text-sm text-slate-700 leading-relaxed">
          <p className="text-base font-medium text-slate-900 border-l-4 border-amber-600 pl-4 italic">
            {post.excerpt}
          </p>

          {post.content.map((paragraph, i) => (
            <p key={i} className="text-slate-700 leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Tags */}
          <div className="pt-6 border-t border-stone-200 flex flex-wrap gap-2 items-center">
            <Tag className="w-3.5 h-3.5 text-slate-400" />
            {post.tags.map((tag, i) => (
              <span key={i} className="text-[11px] bg-stone-100 text-slate-600 px-2.5 py-1 rounded-md">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Lead Magnet CTA */}
        <div className="mt-10 bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold font-serif text-amber-950">
              Planning a Rajasthan Trip Inspired by This Article?
            </h3>
            <p className="text-xs text-amber-800">
              Let our local travel team in Jaipur build your customized route with verified heritage stays and dedicated private chauffeur.
            </p>
          </div>
          <EnquiryForm formType="tour" />
        </div>

        {/* Related Articles */}
        <div className="mt-12 space-y-4">
          <h3 className="text-lg font-bold font-serif text-slate-900">
            More Rajasthan Travel Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedPosts.map((rp) => (
              <div
                key={rp.id}
                onClick={() => navigate(`/blog/${rp.slug}`)}
                className="bg-white p-4 rounded-xl border border-stone-200 hover:shadow-md transition-all cursor-pointer space-y-2"
              >
                <span className="text-[10px] text-amber-800 font-bold uppercase">{rp.category}</span>
                <h4 className="font-serif font-bold text-xs text-slate-900 hover:text-amber-800 line-clamp-2">
                  {rp.title}
                </h4>
                <span className="text-[11px] text-slate-400 block">{rp.readTime}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
