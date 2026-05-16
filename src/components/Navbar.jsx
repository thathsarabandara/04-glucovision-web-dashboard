import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse } from 'lucide-react';
import { useSelector } from 'react-redux';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'Repository', path: '/repositories' },
    { label: 'Blog', path: '/blog' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1100px] transition-all duration-300`}>
        <div className={`
          flex items-center justify-between px-6 py-3 rounded-full 
          ${isScrolled ? 'bg-white/70 backdrop-blur-3xl shadow-soft border border-white/50' : 'bg-white/40 backdrop-blur-md border border-white/20 shadow-sm'}
        `}>
          
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform">
              <HeartPulse size={20} className="text-teal-400" />
            </div>
            <span className="font-display font-black text-xl tracking-tight text-slate-900 hidden sm:block">GLUCOVISION</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 bg-slate-100/30 p-1 rounded-full border border-slate-200/30">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  location.pathname === link.path 
                    ? 'bg-white text-teal-600 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            {isAuthenticated ? (
              <Link to="/patient/overview" className="px-6 py-2.5 rounded-full bg-teal-600 text-white font-bold text-sm hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/20">
                Dashboard
              </Link>
            ) : (
              <Link to="/auth/login" className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors">
                Portal Login
              </Link>
            )}
          </div>

          <button 
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex lg:hidden">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-full max-w-[320px] bg-white h-full shadow-2xl flex flex-col p-8 animate-slide-right border-r border-slate-100">
            <div className="flex justify-between items-center mb-16">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                  <HeartPulse size={16} className="text-teal-400" />
                </div>
                <span className="font-display font-black text-lg tracking-tight text-slate-900">GLUCOVISION</span>
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <X size={20}/>
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`text-2xl font-black transition-colors ${
                    location.pathname === link.path ? 'text-teal-600' : 'text-slate-400 hover:text-slate-900'
                  }`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <span className="block animate-slide-up">{link.label}</span>
                </Link>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <div className="h-px w-full bg-slate-100 mb-8" />
              <Link 
                to={isAuthenticated ? "/patient/overview" : "/auth/login"} 
                onClick={() => setMobileMenuOpen(false)} 
                className="block w-full py-4 bg-slate-900 text-white text-center font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-slate-800 active:scale-95 transition-all shadow-xl shadow-slate-900/10"
              >
                {isAuthenticated ? "Go to Dashboard" : "Access Portal"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
