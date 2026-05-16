import { Activity, Apple, Droplet, HeartPulse, Box, ChevronRight, Clock } from 'lucide-react';

export function PatientDashboardPage() {
  const recentEvents = [
    { time: '10:45 AM', type: 'Meal', value: 'Oatmeal & Berries', extra: '45g Carbs', icon: Apple, color: 'text-sky-500', bg: 'bg-sky-50' },
    { time: '09:30 AM', type: 'Glucose Spike', value: '145 mg/dL', extra: 'Predicted normal recovery', icon: Activity, color: 'text-amber-500', bg: 'bg-amber-50' },
    { time: '08:00 AM', type: 'Reading', value: '95 mg/dL', extra: 'Fasting Glucose', icon: Droplet, color: 'text-teal-500', bg: 'bg-teal-50' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      
      {/* Main Left Content Area */}
      <div className="flex-1 w-full space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Good Morning, Patient!</h1>
            <p className="text-slate-500 font-medium mt-1 text-lg">Your metabolic stability is looking great today.</p>
          </div>
          <div className="px-4 py-2 bg-teal-50 text-teal-700 rounded-xl font-bold text-sm border border-teal-100 flex items-center gap-2 w-fit">
            <div className="w-2 h-2 rounded-full bg-teal-500 animate-ping"></div>
            CGM Active
          </div>
        </div>

        {/* Primary Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: 'Current BG', value: '105', unit: 'mg/dL', icon: Droplet, trend: 'Stable' },
            { label: 'Time In Range', value: '92', unit: '%', icon: Activity, trend: '+2% Today' },
            { label: 'Carbs Intake', value: '45', unit: 'g', icon: Apple, trend: '105g remaining' },
            { label: 'Resting HR', value: '72', unit: 'bpm', icon: HeartPulse, trend: 'Normal' },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-5 hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-center mb-3 text-slate-500">
                <span className="text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                <stat.icon size={16} />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-slate-900">{stat.value}</span>
                <span className="text-xs font-bold text-slate-400">{stat.unit}</span>
              </div>
              <p className="text-[10px] font-bold text-teal-600 mt-2">{stat.trend}</p>
            </div>
          ))}
        </div>

        {/* Main Chart Area */}
        <div className="glass-card-vibrant p-6 flex flex-col min-h-[350px]">
          <div className="flex justify-between items-center mb-6 relative z-10">
            <h2 className="text-xl font-black text-slate-900">Continuous Glucose Trend</h2>
            <div className="flex gap-2">
              {['12H', '24H', '7D'].map(range => (
                <button key={range} className="px-3 py-1 bg-white/50 hover:bg-white text-xs font-bold rounded-lg text-slate-600 transition-colors">
                  {range}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-slate-50/50 rounded-2xl border border-slate-100/50 flex flex-col items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 pattern-dots opacity-[0.3]"></div>
             <Activity size={48} className="text-teal-500/30" />
             <p className="absolute bottom-4 text-xs font-bold text-slate-400">Visualization Engine Loading...</p>
          </div>
        </div>

        {/* Timeline Area */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
             <h2 className="text-xl font-black text-slate-900">Health Event Timeline</h2>
             <button className="text-sm font-bold text-teal-600 hover:text-teal-700 flex items-center">View All <ChevronRight size={16}/></button>
          </div>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-100">
            {recentEvents.map((event, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Marker */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white ${event.bg} ${event.color} shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}>
                  <event.icon size={16} />
                </div>
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-4 hover:border-teal-200 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${event.color}`}>{event.type}</span>
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1"><Clock size={12}/> {event.time}</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900">{event.value}</h4>
                  <p className="text-sm font-medium text-slate-500 mt-1">{event.extra}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Right Sidebar (Digital Twin) */}
      <div className="w-full lg:w-[350px] shrink-0 sticky top-28 space-y-6">
        <div className="glass-card p-6 flex flex-col items-center text-center h-[500px]">
          <h2 className="text-xl font-black text-slate-900 mb-2 w-full text-left">Metabolic Twin</h2>
          <p className="text-xs font-medium text-slate-500 w-full text-left mb-6">Real-time 3D simulation of your physiological state.</p>
          
          <div className="flex-1 w-full bg-slate-950 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group shadow-inner">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.15),transparent)] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="w-24 h-24 rounded-full border border-teal-500/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
               <div className="w-16 h-16 rounded-full border border-teal-500/50 flex items-center justify-center animate-[spin_5s_linear_infinite_reverse]">
                  <Box size={24} className="text-teal-400 animate-pulse" />
               </div>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 flex justify-between">
               <div className="text-left">
                  <p className="text-[9px] font-black text-white/40 uppercase">Status</p>
                  <p className="text-xs font-mono text-teal-400">SYNC_OK</p>
               </div>
               <div className="text-right">
                  <p className="text-[9px] font-black text-white/40 uppercase">Engine</p>
                  <p className="text-xs font-mono text-slate-300">THREE.JS</p>
               </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-4 mt-6">
             <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hydration</p>
                <p className="text-sm font-black text-sky-600">Optimal</p>
             </div>
             <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Energy</p>
                <p className="text-sm font-black text-teal-600">Peak</p>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
}
