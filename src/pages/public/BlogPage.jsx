import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search,
  BookOpen,
  ChevronRight,
  TrendingUp,
  Filter,
  ArrowLeft
} from 'lucide-react';
import { blogPosts } from '../../utils/blogData';

export function BlogPage() {
  const contentRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  const categories = ['All', ...new Set(blogPosts.map(p => p.category))];
  const featuredPosts = blogPosts.filter(p => p.featured);
  
  // Carousel Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeaturedIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredPosts.length]);

  // Filtering Logic
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const highlights = filteredPosts.filter(p => p.featured).slice(0, 3);
  const standardPosts = filteredPosts.filter(p => !p.featured || !highlights.includes(p));

  useEffect(() => {
    const elements = contentRef.current?.querySelectorAll('[data-animate]');
    if (elements) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, [activeCategory, searchQuery]);

  return (
    <div ref={contentRef} className="space-y-16 pb-20 relative">
      <div className="absolute inset-0 pattern-dots opacity-[0.2] pointer-events-none"></div>

      {/* Search & Categories Bar */}
      <div data-animate className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
        <div className="space-y-2">
          <h1 className="text-4xl font-black tracking-tight text-slate-900">Technical Journal</h1>
          <p className="text-slate-500 font-medium">Engineering insights from the Glucovision core team.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:max-w-2xl">
          <div className="relative group flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-accent transition-colors" size={18} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation..." 
              className="w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all text-sm shadow-sm"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap shadow-sm border ${
                  activeCategory === cat 
                    ? 'bg-slate-900 text-white border-slate-900' 
                    : 'bg-white text-slate-500 border-slate-100 hover:border-brand-accent/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main High Post (Carousel) */}
      <section data-animate className="relative z-10">
        <div className="glass-card-vibrant overflow-hidden min-h-[500px] lg:h-[600px] flex flex-col lg:flex-row shadow-2xl shadow-slate-200 group">
          {/* Main Content Area */}
          <div className="flex-1 relative flex flex-col justify-end p-8 lg:p-16 overflow-hidden">
            {/* Carousel Items */}
            {featuredPosts.map((post, idx) => (
              <div 
                key={post.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  idx === currentFeaturedIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
              >
                <img src={post.coverImage} className="w-full h-full object-cover" alt={post.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 lg:p-16 space-y-6 w-full lg:max-w-3xl">
                  <span className="px-4 py-1.5 bg-brand-accent text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg inline-block">
                    Top Priority Transmission
                  </span>
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] hover:text-brand-accent transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-white/70 text-lg font-medium leading-relaxed hidden sm:block">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-8 pt-4">
                    <div className="flex items-center gap-2 text-white/50 text-[10px] font-black uppercase tracking-widest">
                      <Calendar size={14} /> {post.date}
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-brand-accent font-black text-[10px] uppercase tracking-[0.2em] group/btn"
                    >
                      Authorize Read <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel Indicators */}
            <div className="absolute top-10 right-10 flex gap-2 z-20">
              {featuredPosts.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentFeaturedIndex(idx)}
                  className={`h-1 transition-all duration-500 rounded-full ${
                    idx === currentFeaturedIndex ? 'w-10 bg-brand-accent' : 'w-4 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mini High Post Highlights */}
      <section data-animate className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <div className="md:col-span-3 flex items-center gap-4 mb-4">
          <div className="h-[2px] flex-1 bg-slate-100"></div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Core Highlights</h3>
          <div className="h-[2px] flex-1 bg-slate-100"></div>
        </div>
        {highlights.map((post) => (
          <article 
            key={post.id}
            className="glass-card-vibrant group p-6 flex flex-col hover:border-brand-accent/30 transition-all duration-500 shadow-xl shadow-slate-200/50 overflow-hidden"
          >
            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 relative">
              <img src={post.coverImage} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-accent">{post.category}</span>
                <span className="text-[9px] font-bold text-slate-400">{post.readTime}</span>
              </div>
              <Link to={`/blog/${post.slug}`}>
                <h4 className="text-xl font-black text-slate-900 leading-tight hover:text-brand-accent transition-colors line-clamp-2">
                  {post.title}
                </h4>
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Other Posts Below */}
      <section data-animate className="relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Archive Feed</h3>
          <div className="h-[1px] flex-1 bg-slate-100"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {standardPosts.map((post) => (
            <article
              key={post.id}
              className="glass-card group p-8 flex flex-col hover:border-brand-accent/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-slate-200"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 bg-slate-100 text-brand-accent rounded-xl group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                  <BookOpen size={20} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg">
                  {post.category}
                </span>
              </div>
              
              <Link to={`/blog/${post.slug}`}>
                <h3 className="text-lg font-bold mb-4 tracking-tight leading-snug group-hover:text-brand-accent transition-colors">
                  {post.title}
                </h3>
              </Link>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <Clock size={12} className="text-brand-secondary" /> {post.readTime}
                </div>
                <Link to={`/blog/${post.slug}`} className="text-slate-300 group-hover:text-brand-accent group-hover:translate-x-1 transition-all">
                   <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-white/50 backdrop-blur-sm rounded-[3rem] border-2 border-dashed border-slate-200">
            <Search size={48} className="mx-auto text-slate-200 mb-6" />
            <h4 className="text-2xl font-black text-slate-900 mb-2">No matching transmissions</h4>
            <p className="text-slate-500 font-medium">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="mt-8 text-brand-accent font-black text-xs uppercase tracking-widest hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Widget */}
      <section data-animate className="relative z-10 glass-card-vibrant p-12 lg:p-20 overflow-hidden group">
        <div className="absolute inset-0 pattern-grid opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-accent/10 to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-6 max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Get technical briefs <br /> delivered to your core.
            </h2>
            <p className="text-slate-500 text-lg font-medium">
              Join 5,000+ engineers receiving bi-weekly deep dives into robotics, AI, and edge compute.
            </p>
          </div>
          <div className="w-full lg:max-w-md">
             <div className="relative p-2 bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 flex items-center">
                <input 
                  type="email" 
                  placeholder="operator@email.io" 
                  className="flex-1 pl-6 pr-4 py-4 bg-transparent outline-none text-sm font-bold placeholder:text-slate-300"
                />
                <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-accent transition-all shadow-xl shadow-slate-900/20 active:scale-95">
                  Subscribe
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
