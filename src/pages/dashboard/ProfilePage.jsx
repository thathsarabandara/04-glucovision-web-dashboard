import { User, Mail, Shield, Bell, Key, Settings } from 'lucide-react';
import { useSelector } from 'react-redux';

export function ProfilePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">Account Settings</h1>
        <p className="text-slate-500 font-medium mt-1">Manage your profile and preferences.</p>
      </div>

      {/* Profile Header */}
      <div className="glass-card p-8 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brand-accent/20 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-accent to-brand-secondary flex items-center justify-center text-3xl text-white font-black shadow-xl shadow-brand-accent/30 ring-4 ring-white">
          {(user?.name || 'U')[0]}
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-black text-slate-900">{user?.name || 'Patient User'}</h2>
          <p className="text-slate-500 font-medium flex items-center justify-center sm:justify-start gap-2 mt-1">
            <Mail size={14} />
            {user?.email || 'patient@example.com'}
          </p>
          <div className="mt-4 flex gap-3 justify-center sm:justify-start">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider">Verified</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200">Patient Plan</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar Nav */}
        <div className="space-y-2">
          {[
            { icon: User, label: 'Personal Info', active: true },
            { icon: Shield, label: 'Security & Privacy' },
            { icon: Bell, label: 'Notifications' },
            { icon: Key, label: 'API Keys' },
            { icon: Settings, label: 'Preferences' }
          ].map((item, i) => (
            <button 
              key={i}
              className={`w-full flex items-center gap-3 p-4 rounded-xl font-bold text-sm transition-all ${
                item.active 
                ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' 
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="md:col-span-2 space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-black text-slate-900 mb-4 border-b border-slate-100 pb-4">Personal Information</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">First Name</label>
                  <input type="text" defaultValue="John" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 font-medium focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Last Name</label>
                  <input type="text" defaultValue="Doe" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 font-medium focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                <input type="email" defaultValue="patient@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 font-medium focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none" />
              </div>
              <button className="px-6 py-2 bg-slate-900 text-white font-bold rounded-xl mt-4 hover:bg-slate-800 transition-colors">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
