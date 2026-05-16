import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { 
  LayoutDashboard, 
  Database,
  Building2, 
  User, 
  LogOut, 
  Menu, 
  X, 
  HeartPulse,
  Bell
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

export function DashboardLayout() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );
  }, [location.pathname]);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Patient Dashboard', path: '/dashboard' },
    { icon: Building2, label: 'Hospital Portal', path: '/dashboard/hospital' },
    { icon: Database, label: 'Data Hub', path: '/dashboard/data' },
  ];

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col relative overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none -z-10"></div>
      
      {/* Floating Top Navigation */}
      <div className="pt-6 px-6 sm:px-10 sticky top-0 z-50">
        <header className="h-20 glass-card px-6 flex items-center justify-between shadow-soft w-full max-w-[1400px] mx-auto">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-teal-500 to-sky-500 p-2.5 rounded-xl shadow-lg shadow-teal-500/20">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900 hidden sm:block">
              Glucovision
            </span>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isActive(item.path) && item.path !== '/dashboard/profile'
                    ? 'bg-white text-teal-600 shadow-sm ring-1 ring-slate-200/50'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: User Actions & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button className="p-2.5 bg-slate-100/50 hover:bg-slate-200 rounded-xl transition text-slate-500 relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-50"></span>
            </button>
            
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            
            <div className="hidden sm:flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-black text-slate-900 leading-none">{user?.name || 'Patient'}</p>
              </div>
              <Link to="/dashboard/profile" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer">
                {(user?.name || 'P')[0]}
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 bg-slate-100/50 hover:bg-slate-200 rounded-xl transition text-slate-600"
            >
              <Menu size={24} />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="absolute top-0 right-0 w-72 h-full bg-white shadow-2xl p-6 flex flex-col animate-[slideInRight_0.3s_ease-out]">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-black tracking-tight text-slate-900">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-xl"><X size={20}/></button>
            </div>
            <nav className="flex-col flex gap-2 flex-1">
              {[...navItems, { icon: User, label: 'Profile Settings', path: '/dashboard/profile' }].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-bold transition-all ${
                    isActive(item.path)
                      ? 'bg-teal-50 text-teal-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <item.icon size={20} />
                  {item.label}
                </Link>
              ))}
            </nav>
            <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full p-4 text-red-500 font-bold bg-red-50 rounded-xl mt-auto">
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto p-6 sm:px-10 sm:py-8">
        <div ref={contentRef}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
