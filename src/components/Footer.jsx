import { HeartPulse } from 'lucide-react';
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden font-sans border-t border-white/5">
      <div className="absolute inset-0 pattern-grid opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-20">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-sky-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
                <HeartPulse size={24} className="text-white" />
              </div>
              <span className="font-display font-black text-2xl tracking-tight">GLUCOVISION</span>
            </div>
            <p className="text-slate-400 font-medium text-sm leading-relaxed max-w-sm">
              Pioneering the future of predictive metabolic health. Our AI-driven platform empowers patients and clinics with real-time biological insights.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all shadow-inner border border-white/5"><FiGithub size={18}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition-all shadow-inner border border-white/5"><FiTwitter size={18}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all shadow-inner border border-white/5"><FiLinkedin size={18}/></a>
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-teal-400">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/features" className="text-slate-400 hover:text-white font-bold text-sm transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform inline-block">Features</Link></li>
              <li><Link to="/repositories" className="text-slate-400 hover:text-white font-bold text-sm transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform inline-block">Technology</Link></li>
              <li><Link to="/gallery" className="text-slate-400 hover:text-white font-bold text-sm transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform inline-block">Visual Gallery</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white font-bold text-sm transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform inline-block">Health Blog</Link></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-sky-400">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-slate-400 hover:text-white font-bold text-sm transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform inline-block">Help Center</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-white font-bold text-sm transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform inline-block">API Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white font-bold text-sm transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform inline-block">HIPAA Security</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white font-bold text-sm transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform inline-block">Privacy Protocol</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-teal-400">Connection</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-teal-500 shadow-inner"><FiMail size={16}/></div>
                <span className="text-sm font-bold">ops@glucovision.health</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-teal-500 shadow-inner"><FiPhone size={16}/></div>
                <span className="text-sm font-bold">+1 (888) METABOLIC</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-teal-500 shadow-inner"><FiMapPin size={16}/></div>
                <span className="text-sm font-bold">Innovation Loop, CA</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Glucovision Health Systems.
          </p>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
                <span className="text-[10px] font-black text-teal-500 uppercase tracking-widest">Medical Layer Active</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest">Database Synced</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
