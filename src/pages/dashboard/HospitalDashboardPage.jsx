import { Users, AlertTriangle, Activity, Search, Filter } from 'lucide-react';

export function HospitalDashboardPage() {
  const patients = [
    { id: 'P-1042', name: 'Sarah Jenkins', glucose: 105, status: 'Stable', risk: 'Low', lastSync: '2m ago' },
    { id: 'P-1043', name: 'Marcus Chen', glucose: 240, status: 'Hyperglycemic', risk: 'High', lastSync: '1m ago' },
    { id: 'P-1044', name: 'Elena Rodriguez', glucose: 82, status: 'Trending Down', risk: 'Medium', lastSync: '5m ago' },
    { id: 'P-1045', name: 'James Wilson', glucose: 112, status: 'Stable', risk: 'Low', lastSync: 'Just now' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Hospital Portal</h1>
          <p className="text-slate-500 font-medium mt-1">Real-time patient monitoring and risk assessment.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-xl flex items-center gap-2 cursor-pointer hover:bg-slate-800 transition-colors">
            <Users size={16} />
            Add Patient
          </div>
        </div>
      </div>

      {/* Aggregate Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 border-l-4 border-l-brand-accent">
          <div className="flex justify-between items-center mb-2">
            <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">Active Patients</p>
            <Users size={20} className="text-brand-accent" />
          </div>
          <p className="text-4xl font-black text-slate-900">124</p>
        </div>
        <div className="glass-card p-6 border-l-4 border-l-red-500 bg-red-50/30">
          <div className="flex justify-between items-center mb-2">
            <p className="text-red-600 font-bold text-sm uppercase tracking-wider">Critical Alerts</p>
            <AlertTriangle size={20} className="text-red-500 animate-pulse" />
          </div>
          <p className="text-4xl font-black text-red-600">3</p>
        </div>
        <div className="glass-card p-6 border-l-4 border-l-brand-success">
          <div className="flex justify-between items-center mb-2">
            <p className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Avg TIR (Cohort)</p>
            <Activity size={20} className="text-brand-success" />
          </div>
          <p className="text-4xl font-black text-emerald-600">78%</p>
        </div>
      </div>

      {/* Patient List */}
      <div className="glass-card flex flex-col mt-8">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl font-black text-slate-900">Patient Roster</h2>
          <div className="flex gap-2">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search ID or Name" 
                className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent w-full sm:w-64"
              />
            </div>
            <button className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
              <Filter size={18} />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Patient</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Current BG (mg/dL)</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Risk Level</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Last Sync</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p, i) => (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900">{p.name}</p>
                    <p className="text-xs font-medium text-slate-400">{p.id}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`font-black text-lg ${p.glucose > 180 ? 'text-red-500' : p.glucose < 70 ? 'text-orange-500' : 'text-slate-900'}`}>
                      {p.glucose}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-slate-600">{p.status}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      p.risk === 'High' ? 'bg-red-100 text-red-600' : 
                      p.risk === 'Medium' ? 'bg-amber-100 text-amber-600' : 
                      'bg-emerald-100 text-emerald-600'
                    }`}>
                      {p.risk}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-400">{p.lastSync}</td>
                  <td className="px-6 py-4">
                    <button className="text-brand-accent font-bold text-sm hover:underline">View Profile</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
