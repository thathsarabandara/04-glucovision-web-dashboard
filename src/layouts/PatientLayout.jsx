import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { 
  Activity, 
  Apple, 
  History, 
  User, 
  LogOut, 
  Menu, 
  X, 
  HeartPulse,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

export function PatientLayout() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
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
    { icon: Activity, label: 'Overview', path: '/patient/overview' },
    { icon: Apple, label: 'Meal Tracker', path: '/patient/meals' },
    { icon: History, label: 'Glucose History', path: '/patient/history' },
    { icon: User, label: 'My Profile', path: '/patient/settings' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        ${sidebarOpen ? 'w-64' : 'w-20'} 
        bg-white border-r border-slate-200 transition-all duration-300 flex flex-col fixed inset-y-0 left-0 z-50 lg:relative
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-20 flex items-center px-6 gap-3 border-b border-slate-100">
          <div className="p-2 bg-teal-600 rounded-lg text-white shrink-0">
            <HeartPulse size={24} />
          </div>
          {sidebarOpen && <span className="font-display font-black text-xl tracking-tight">GLUCOVISION</span>}
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                isActive(item.path)
                  ? 'bg-teal-50 text-teal-600 shadow-sm'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon size={20} className={isActive(item.path) ? 'text-teal-600' : ''} />
              {sidebarOpen && <span className="font-bold text-sm">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 space-y-2">
          <button onClick={handleLogout} className="flex items-center gap-3 p-3 w-full rounded-xl text-red-500 hover:bg-red-50 transition-colors">
            <LogOut size={20} />
            {sidebarOpen && <span className="font-bold text-sm">Logout</span>}
          </button>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden lg:flex items-center justify-center w-full p-2 text-slate-400 hover:text-slate-600"
          >
            {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 sm:px-10 flex items-center justify-between shrink-0 z-30">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-slate-600" onClick={() => setMobileOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="hidden sm:block">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">Patient Portal</h2>
              <h3 className="text-xl font-black text-slate-900 mt-1">Hello, {user?.name || 'Thathsara'}!</h3>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2.5 bg-slate-50 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-1"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden md:block">
                <p className="text-sm font-black leading-none">{user?.name || 'User'}</p>
                <p className="text-[10px] font-bold text-teal-600 uppercase tracking-widest mt-1">Patient Account</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold shadow-lg border-2 border-white overflow-hidden">
                {(user?.name || 'P')[0]}
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 sm:p-10 relative" ref={contentRef}>
          <div className="max-w-[1200px] mx-auto min-h-full flex flex-col">
            <div className="flex-1">
              <Outlet />
            </div>
            
            {/* Minimal Dashboard Footer */}
            <footer className="mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 pb-10">
              <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
                <Link to="/features" className="hover:text-teal-600 transition-colors">Platform</Link>
                <Link to="/repositories" className="hover:text-teal-600 transition-colors">Technology</Link>
                <Link to="/contact" className="hover:text-teal-600 transition-colors">Support</Link>
              </div>
              <p className="text-[10px] font-medium">&copy; {new Date().getFullYear()} Glucovision Health. Data encrypted.</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
