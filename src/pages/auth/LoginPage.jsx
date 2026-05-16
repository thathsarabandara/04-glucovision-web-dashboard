import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../../store/slices/authSlice';
import gsap from 'gsap';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Loader2,
  Fingerprint
} from 'lucide-react';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const formRef = useRef(null);

  useEffect(() => {
    const elements = formRef.current?.querySelectorAll('input, button, a, label, h2, p, .logo-icon');
    if (elements) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ email, password }));
    if (result.payload) {
      navigate('/patient/overview');
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 font-display">
          Welcome
        </h2>
        <p className="text-slate-500 mt-2 font-medium text-sm">
          Please enter your credentials to continue.
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
            Email Address
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-600 transition-colors">
              <Mail size={18} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-teal-500/5 focus:border-teal-500 outline-none transition-all font-bold text-sm text-slate-900 placeholder:text-slate-400 shadow-sm"
              placeholder="name@example.com"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between ml-1">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Passcode
            </label>
            <Link to="/auth/forgot-password" size={18} className="text-[10px] font-black uppercase tracking-widest text-teal-600 hover:underline underline-offset-4 decoration-2">
              Lost Access?
            </Link>
          </div>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-600 transition-colors">
              <Lock size={18} />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-teal-500/5 focus:border-teal-500 outline-none transition-all font-bold text-sm text-slate-900 placeholder:text-slate-400 shadow-sm"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-[11px] font-black uppercase tracking-widest text-center">
            Verification Failed: {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black uppercase tracking-widest text-xs py-5 rounded-2xl shadow-xl shadow-slate-900/10 flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-70 group"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              <Fingerprint size={20} className="text-teal-400 group-hover:scale-110 transition-transform" />
              <span>Initialize Access</span>
            </>
          )}
        </button>
      </form>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-100"></div>
        </div>
        <div className="relative flex justify-center text-[10px] uppercase font-black tracking-[0.2em]">
          <span className="bg-white px-4 text-slate-400">New Account</span>
        </div>
      </div>

      <Link
        to="/auth/register"
        className="block w-full text-center py-5 px-4 rounded-2xl border-2 border-slate-100 bg-white font-black uppercase tracking-widest text-[10px] text-slate-600 hover:bg-slate-50 hover:border-teal-500/20 hover:text-teal-600 transition-all active:scale-[0.98]"
      >
        Request Membership
      </Link>
    </div>
  );
}
