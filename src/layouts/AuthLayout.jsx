import { Outlet, Navigate, useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { HeartPulse } from 'lucide-react';

export function AuthLayout() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.95, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
  }, [location.pathname]);

  if (isAuthenticated) {
    return <Navigate to="/patient/overview" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white relative overflow-hidden font-sans">
      {/* Soft Light Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.08),transparent_50%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.08),transparent_50%)]"></div>
      
      {/* Animated Subtle Orbs */}
      <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-teal-100/40 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] left-[10%] w-96 h-96 bg-sky-100/40 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div ref={containerRef} className="relative w-full max-w-lg z-10">
        
        {/* Floating White Glass Pod */}
        <div className="bg-white/60 backdrop-blur-3xl border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden">
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"></div>
          
          {/* Brand Header - Now Clickable */}
          <Link to="/" className="block text-center mb-10 relative z-10 group hover:opacity-80 transition-opacity">
            <div className="inline-flex items-center justify-center p-4 bg-slate-900 rounded-2xl shadow-xl mb-6 group-hover:scale-105 transition-transform">
              <HeartPulse className="w-8 h-8 text-teal-400" />
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-slate-900 font-display uppercase">
              Glucovision
            </h1>
            <p className="text-slate-400 mt-2 text-xs font-black tracking-[0.2em] uppercase">
              Secure Metabolic Access
            </p>
          </Link>

          {/* Form Content */}
          <div className="relative z-10">
            <Outlet />
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="mt-8 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Glucovision Health. End-to-End Encryption.
          </p>
        </div>
      </div>
    </div>
  );
}
