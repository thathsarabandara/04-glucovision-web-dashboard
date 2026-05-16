import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { 
  Building2, 
  Users, 
  AlertTriangle, 
  BarChart4, 
  LogOut, 
  Settings, 
  Search,
  Bell,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

export function HospitalLayout() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 10 },
      { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
    );
  }, [location.pathname]);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  const navItems = [
    { icon: Building2, label: 'Overview', path: '/hospital/dashboard' },
    { icon: Users, label: 'Patient Roster', path: '/hospital/roster' },
    { icon: AlertTriangle, label: 'Critical Alerts', path: '/hospital/alerts' },
    { icon: BarChart4, label: 'Analytics Hub', path: '/hospital/analytics' },
    { icon: Settings, label: 'Settings', path: '/hospital/settings' },
  ];

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <div className="flex h-screen bg-[#0b1120] text-slate-100 font-sans overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        ${sidebarOpen ? 'w-64' : 'w-20'} 
        bg-slate-950 border-r border-slate-800 transition-all duration-300 flex flex-col fixed inset-y-0 left-0 z-50 lg:relative
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-20 flex items-center px-6 gap-4 border-b border-slate-800/50">
          <div className="p-2 bg-gradient-to-br from-teal-500 to-sky-500 rounded-xl text-white shrink-0">
            <Building2 size={24} />
          </div>
          {sidebarOpen && <span className="font-display font-black text-xl tracking-tight">HOSPITAL</span>}
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto mt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all group relative ${
                isActive(item.path)
                  ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                  : 'text-slate-500 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="font-bold text-sm">{item.label}</span>}
              {!sidebarOpen && (
                <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                   {item.label}
                </div>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800/50 space-y-2">
          <button onClick={handleLogout} className="flex items-center gap-3 p-3 w-full rounded-xl text-red-400 hover:bg-red-950 transition-colors">
            <LogOut size={20} />
            {sidebarOpen && <span className="font-bold text-sm">Logout</span>}
          </button>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden lg:flex items-center justify-center w-full p-2 text-slate-600 hover:text-slate-400"
          >
            {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <div className="absolute inset-0 pattern-grid opacity-[0.03] pointer-events-none"></div>

        {/* Top Header */}
        <header className="h-20 bg-[#0b1120]/80 backdrop-blur-md border-b border-slate-800 px-8 flex items-center justify-between shrink-0 z-30">
          <div className="flex items-center gap-6 flex-1">
            <button className="lg:hidden p-2 text-slate-400" onClick={() => setMobileOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 w-full max-w-md">
              <Search size={18} className="text-slate-500" />
              <input type="text" placeholder="Search patient database..." className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-600" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:block text-right">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">Admin Panel</h3>
              <p className="text-lg font-black text-white mt-1">Dr. {user?.name || 'Administrator'}</p>
            </div>
            
            <button className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0b1120]"></span>
            </button>
            
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-sky-500 flex items-center justify-center text-white font-black shadow-lg shadow-teal-500/20">
              GH
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8 relative" ref={contentRef}>
          <div className="max-w-[1400px] mx-auto min-h-full flex flex-col">
            <div className="flex-1">
              <Outlet />
            </div>
            
            {/* Minimal Dashboard Footer */}
            <footer className="mt-20 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 pb-10">
              <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
                <Link to="/features" className="hover:text-teal-400 transition-colors">Documentation</Link>
                <Link to="/repositories" className="hover:text-teal-400 transition-colors">API Keys</Link>
              </div>
              <p className="text-[10px] font-bold text-slate-600">Glucovision Hospital Network &copy; {new Date().getFullYear()}</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
