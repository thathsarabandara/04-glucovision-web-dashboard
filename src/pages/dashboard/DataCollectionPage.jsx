import { Database, Upload, Download, RefreshCw, CheckCircle2 } from 'lucide-react';

export function DataCollectionPage() {
  const datasets = [
    { name: 'Food Image Dataset', items: 12450, status: 'Synced', lastUpdated: '10m ago' },
    { name: 'CGM Telemetry Logs', items: 8402, status: 'Syncing...', lastUpdated: 'Just now' },
    { name: 'Patient Meal Logs', items: 310, status: 'Synced', lastUpdated: '1h ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Data Collection Hub</h1>
          <p className="text-slate-500 font-medium mt-1">Manage integration with the Glucovision Data Collect App.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-brand-accent text-white rounded-xl font-bold text-sm shadow-xl shadow-brand-accent/20 flex items-center gap-2 hover:bg-brand-secondary transition-colors">
            <RefreshCw size={16} />
            Force Sync
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card-vibrant p-8 flex flex-col items-center justify-center text-center group cursor-pointer">
          <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Upload size={32} />
          </div>
          <h3 className="text-xl font-black text-slate-900 mb-2">Upload Dataset</h3>
          <p className="text-slate-500 font-medium text-sm">Manually upload CSV or JSON data exported from the mobile collector.</p>
        </div>
        <div className="glass-card-vibrant p-8 flex flex-col items-center justify-center text-center group cursor-pointer">
          <div className="w-16 h-16 rounded-2xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Download size={32} />
          </div>
          <h3 className="text-xl font-black text-slate-900 mb-2">Export Data</h3>
          <p className="text-slate-500 font-medium text-sm">Download aggregated, anonymized datasets for ML model training.</p>
        </div>
      </div>

      <div className="glass-card mt-8 p-6">
        <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
          <Database size={20} className="text-slate-400" />
          Active Data Streams
        </h2>
        <div className="space-y-4">
          {datasets.map((ds, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${ds.status === 'Synced' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
                  {ds.status === 'Synced' ? <CheckCircle2 size={18} /> : <RefreshCw size={18} className="animate-spin" />}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{ds.name}</h4>
                  <p className="text-xs font-medium text-slate-500">{ds.items.toLocaleString()} records • Last updated: {ds.lastUpdated}</p>
                </div>
              </div>
              <button className="text-sm font-bold text-brand-accent hover:underline mt-2 sm:mt-0">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
