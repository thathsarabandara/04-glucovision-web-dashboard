import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Activity,
  Shield,
  Zap,
  Globe,
  Cpu,
  Smartphone,
  Database,
  BarChart3,
  HeartPulse,
  Brain,
  Layers,
  LineChart,
  CheckCircle2,
  AlertCircle,
  Network
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function HomePage() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

      tl.fromTo(
        '.hero-text',
        { opacity: 0, x: -60, filter: 'blur(10px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', stagger: 0.15 }
      ).fromTo(
        '.hero-card',
        { opacity: 0, scale: 0.8, y: 40, filter: 'blur(10px)' },
        { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', stagger: 0.12, ease: 'back.out(1.7)' },
        '-=1'
      );

      gsap.from('.stats-section', {
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 85%',
        },
        opacity: 0,
        y: 60,
        duration: 1.5,
        ease: 'power3.out'
      });

      // Reveal other sections on scroll
      gsap.utils.toArray('.reveal-on-scroll').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power2.out'
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="space-y-16 pb-32 font-sans ">

      {/* Hero Section - Asymmetric Layout */}
      <section className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[90vh] lg:min-h-screen pt-24 lg:pt-0">
        <div className="flex-1 space-y-6 lg:space-y-8 relative z-10 px-6 lg:px-0 text-center lg:text-left">
          <div className="hero-text inline-flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 bg-teal-50 border border-teal-100 rounded-full text-teal-600 font-black text-[9px] lg:text-[10px] uppercase tracking-widest">
            <Zap size={14} className="animate-pulse" /> Next-Gen Metabolic Intelligence
          </div>
          <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900">
            Predict Your <span className="text-teal-600 italic">Biological</span> Future.
          </h1>
          <p className="hero-text text-lg lg:text-xl text-slate-500 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Glucovision integrates medical-grade CGM data with AI-driven predictive modeling to transform metabolic management into an autonomous experience.
          </p>
          <div className="hero-text flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <Link to="/auth/register" className="px-8 lg:px-10 py-4 lg:py-5 bg-slate-900 text-white rounded-2xl font-black text-[10px] lg:text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl shadow-slate-900/20 flex items-center gap-3 group">
              Start Monitoring <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/features" className="px-8 lg:px-10 py-4 lg:py-5 bg-white border border-slate-200 text-slate-600 rounded-2xl font-black text-[10px] lg:text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition-all">
              Explore Tech
            </Link>
          </div>
        </div>

        {/* Enhanced Hero Visual Composition - Overlapping Items */}
        <div className="flex-1 w-full relative h-[500px] lg:h-[650px] flex items-center justify-center mt-12 lg:mt-0 px-4">
          
          {/* Background Decorative Blur & Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-sky-500/20 blur-[100px] lg:blur-[140px] rounded-full -z-10 animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[550px] h-[300px] lg:h-[550px] border border-slate-100 rounded-full -z-20 opacity-40"></div>

          {/* Widget Cluster Center: 3D Twin Preview */}
          <div className="hero-card absolute z-20 w-[240px] lg:w-[300px] h-[340px] lg:h-[400px] widget-glass bg-white/40 p-6 lg:p-8 shadow-2xl border border-white/50 rotate-3 hover:rotate-0 transition-all duration-700 glow-teal group">
            <div className="flex justify-between items-center mb-4 lg:mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform">
                <Activity size={20} className="text-white lg:hidden" />
                <Activity size={24} className="text-white hidden lg:block" />
              </div>
              <div className="flex flex-col items-end">
                <div className="px-2 py-0.5 bg-teal-50 rounded text-[7px] lg:text-[8px] font-black text-teal-600 uppercase tracking-widest border border-teal-100">Live Engine</div>
                <div className="text-[9px] lg:text-[10px] font-mono text-slate-400 mt-1">ID: GV_ALPHA_9</div>
              </div>
            </div>
            <div className="space-y-6 lg:space-y-8">
              <div className="h-32 lg:h-44 w-full bg-slate-900 rounded-2xl lg:rounded-3xl flex items-center justify-center relative overflow-hidden border border-slate-800">
                <div className="absolute inset-0 pattern-grid opacity-30 animate-data-flow"></div>
                <div className="relative z-10 w-full h-full p-3 lg:p-4 flex flex-col justify-between">
                   <div className="flex justify-between items-start">
                     <span className="text-[7px] lg:text-[8px] font-mono text-teal-400">0.02s LATENCY</span>
                     <div className="flex gap-1">
                        {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-teal-400 rounded-full animate-pulse" />)}
                     </div>
                   </div>
                   <Activity size={48} className="text-teal-400 self-center opacity-40 lg:hidden" />
                   <Activity size={64} className="text-teal-400 self-center opacity-40 hidden lg:block" />
                   <div className="h-6 lg:h-8 w-full bg-teal-400/10 rounded-lg flex items-center px-2 lg:px-3 border border-teal-400/20">
                      <div className="w-full h-1 bg-teal-900/50 rounded-full overflow-hidden">
                         <div className="w-[65%] h-full bg-teal-400"></div>
                      </div>
                   </div>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-slate-400">Metabolic State</p>
                  <div className="flex items-baseline gap-1 lg:gap-2 mt-1">
                    <span className="text-3xl lg:text-5xl font-black text-slate-900 leading-none">98</span>
                    <span className="text-[10px] lg:text-xs font-bold text-slate-400 italic">Score</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                   <span className="text-[8px] lg:text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                      <ArrowRight size={10} className="-rotate-45" /> STABLE
                   </span>
                </div>
              </div>
            </div>
          </div>

          {/* Overlapping Item 1: Prediction HUD (Bottom Right) */}
          <div className="hero-card absolute z-30 -bottom-4 -right-4 lg:-bottom-8 lg:-right-12 w-[200px] lg:w-[260px] widget-glass p-4 lg:p-6 shadow-2xl -rotate-6 hover:rotate-0 transition-all duration-500 glow-sky translate-x-4 lg:translate-x-0">
            <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
              <div className="p-2 lg:p-2.5 bg-sky-50 text-sky-600 rounded-xl shadow-sm"><LineChart size={14} className="lg:hidden" /><LineChart size={18} className="hidden lg:block" /></div>
              <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-slate-400">AI Horizon Predictor</span>
            </div>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex justify-between items-end h-12 lg:h-16 gap-1 lg:gap-1.5">
                {[30, 50, 40, 75, 60, 95, 85, 90].map((h, i) => (
                  <div key={i} className="flex-1 bg-sky-100 rounded-t-lg hover:bg-sky-500 transition-all cursor-pointer" style={{ height: `${h}%` }}></div>
                ))}
              </div>
              <div className="p-2 lg:p-3 bg-slate-50/50 rounded-xl border border-slate-100 flex justify-between items-center">
                 <span className="text-[8px] lg:text-[10px] font-bold text-slate-500 italic uppercase">Next Event</span>
                 <span className="text-[10px] lg:text-xs font-black text-sky-600 tracking-tight">114 mg/dL @ 14:30</span>
              </div>
            </div>
          </div>

          {/* Overlapping Item 2: Perception Overlay (Top Left) */}
          <div className="hero-card absolute z-10 -top-8 -left-4 lg:-top-12 lg:-left-16 w-[180px] lg:w-[220px] widget-glass p-4 lg:p-5 shadow-xl rotate-12 hover:rotate-0 transition-all duration-500 glow-emerald -translate-x-4 lg:translate-x-0">
            <div className="flex items-center gap-2 mb-3 lg:mb-4">
              <div className="p-1.5 lg:p-2 bg-emerald-50 text-emerald-600 rounded-xl"><Brain size={12} className="lg:hidden" /><Brain size={14} className="hidden lg:block" /></div>
              <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-slate-400">Nutrient Perception</span>
            </div>
            <div className="space-y-2 lg:space-y-3">
              <div className="bg-slate-50/80 rounded-xl p-2 lg:p-3 border border-slate-100 group">
                <div className="flex justify-between items-center mb-1 lg:mb-2">
                  <span className="text-[8px] lg:text-[10px] font-bold text-slate-600">Avocado Salad</span>
                  <span className="text-[8px] lg:text-[10px] font-black text-emerald-600">98.4%</span>
                </div>
                <div className="w-full h-1 lg:h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-[98%] h-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                </div>
              </div>
              <div className="flex gap-2">
                 <div className="flex-1 p-1.5 lg:p-2 bg-teal-50/50 rounded-lg border border-teal-100 text-center">
                    <div className="text-[7px] lg:text-[8px] font-bold text-teal-600 uppercase">GLUCOSE</div>
                    <div className="text-[10px] lg:text-xs font-black text-teal-800 leading-none mt-1">+12</div>
                 </div>
                 <div className="flex-1 p-1.5 lg:p-2 bg-sky-50/50 rounded-lg border border-sky-100 text-center">
                    <div className="text-[7px] lg:text-[8px] font-bold text-sky-600 uppercase">FIBER</div>
                    <div className="text-[10px] lg:text-xs font-black text-sky-800 leading-none mt-1">High</div>
                 </div>
              </div>
            </div>
          </div>

          {/* New Widget: Clinician Sync Bubble (Top Right) */}
          <div className="hero-card absolute z-30 -top-12 -right-4 lg:-top-20 lg:right-4 w-[150px] lg:w-[180px] widget-glass p-3 lg:p-4 shadow-lg -rotate-3 hover:rotate-0 transition-all duration-500 glow-sky">
             <div className="flex items-center gap-2 lg:gap-3">
                <div className="relative">
                   <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                      <img src="https://ui-avatars.com/api/?name=Dr+Sarah&background=0D9488&color=fff" alt="Clinician" className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="flex-1 min-w-0">
                   <p className="text-[8px] lg:text-[10px] font-black text-slate-900 truncate">Dr. Sarah Johnson</p>
                   <p className="text-[7px] lg:text-[8px] font-bold text-slate-400">Reviewing Data...</p>
                </div>
             </div>
             <div className="mt-2 lg:mt-3 py-1 lg:py-1.5 px-2 lg:px-3 bg-teal-50 text-[7px] lg:text-[9px] font-black text-teal-700 rounded-lg border border-teal-100 text-center uppercase tracking-wider">
                Sync Established
             </div>
          </div>

          {/* New Widget: Device Status (Bottom Left) */}
          <div className="hero-card absolute z-0 -bottom-16 -left-4 lg:-bottom-24 lg:-left-12 w-[160px] lg:w-[200px] widget-glass p-3 lg:p-4 shadow-xl rotate-6 hover:rotate-0 transition-all duration-500 border-dashed">
             <div className="flex items-center justify-between mb-2 lg:mb-3">
                <span className="text-[7px] lg:text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">Device Grid</span>
                <div className="flex gap-1">
                   <div className="w-1 h-1 bg-teal-500 rounded-full"></div>
                   <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                </div>
             </div>
             <div className="space-y-1.5 lg:space-y-2">
                {[
                  { name: 'CGM SENSOR 7', status: 'ACTIVE', battery: '82%' },
                  { name: 'PUMP INTERFACE', status: 'PAUSED', battery: '14%' }
                ].map((d, i) => (
                   <div key={i} className="flex items-center justify-between p-1.5 lg:p-2 bg-white/50 rounded-lg border border-slate-100">
                      <div className="flex flex-col">
                         <span className="text-[7px] lg:text-[8px] font-bold text-slate-500">{d.name}</span>
                         <span className={`text-[7px] lg:text-[8px] font-black ${d.status === 'ACTIVE' ? 'text-teal-600' : 'text-slate-400'}`}>{d.status}</span>
                      </div>
                      <span className="text-[8px] lg:text-[10px] font-mono font-bold text-slate-700">{d.battery}</span>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* Statistics Section - New */}
      <section className="stats-section py-20 px-10 glass-card-vibrant bg-slate-900 text-white rounded-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-[0.05]"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="space-y-2">
            <h3 className="text-5xl font-black tracking-tighter text-teal-400">99.9%</h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Uptime Data Integrity</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-black tracking-tighter text-sky-400">12k+</h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Monitored Bio-Markers</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-black tracking-tighter text-emerald-400">0.8s</h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Predictive Response Latency</p>
          </div>
        </div>
      </section>

      {/* The Science Section */}
      <section className="reveal-on-scroll space-y-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-emerald-100">
               <Brain size={14} /> Predictive Neuro-Models
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Biologically Inspired, <br /> <span className="text-emerald-600">Computationally</span> Driven.
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              At the core of Glucovision lies a sophisticated Neural Temporal Engine. We utilize a combination of LSTM (Long Short-Term Memory) networks and Transformer architectures to process multi-modal biometric data.
            </p>
            <ul className="space-y-4">
              {[
                { title: 'Temporal Feature Extraction', desc: 'Analyzing glucose velocity and acceleration in 5-minute epochs.' },
                { title: 'Circadian Weighting', desc: 'Models adjusted for individual metabolic rhythms and sleep cycles.' },
                { title: 'Exogenous Input Integration', desc: 'Real-time factoring of carbohydrates, insulin, and physical exertion.' }
              ].map((feature, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-emerald-600" />
                  </div>
                  <div>
                    <h5 className="font-black text-slate-900 text-sm uppercase tracking-wide">{feature.title}</h5>
                    <p className="text-slate-500 text-sm">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full lg:max-w-md">
             <div className="widget-glass p-8 rotate-2 border-dashed border-2">
                <div className="h-64 bg-slate-900 rounded-2xl p-6 relative overflow-hidden">
                   <div className="absolute inset-0 pattern-dots opacity-20"></div>
                   <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-mono text-emerald-400">MODEL_V4_RUNNING</span>
                         <div className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-[8px] rounded uppercase font-black">99.2% ACC</div>
                      </div>
                      <div className="space-y-2">
                         {[60, 80, 40, 90].map((w, i) => (
                            <div key={i} className="h-1.5 bg-emerald-500/10 rounded-full overflow-hidden">
                               <div className="h-full bg-emerald-500/60" style={{ width: `${w}%` }}></div>
                            </div>
                         ))}
                      </div>
                      <p className="text-[10px] font-mono text-slate-400 text-center uppercase tracking-widest">Processing Metabolic Drift...</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Infinite Ecosystem Slide - NEW */}
      <section className="reveal-on-scroll py-16 lg:py-24 overflow-hidden bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-teal-600">
              <Network size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">System Architecture</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter text-slate-900">21 Interconnected Services</h2>
          </div>
          <Link to="/repositories" className="hidden sm:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-teal-600 transition-colors">
            View Repos <ArrowRight size={14} />
          </Link>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="flex animate-slide-left-infinite gap-6 whitespace-nowrap">
            {[
              "01-Platform Architecture", "02-Data Collect", "03-Mobile App", "04-Web Dashboard", 
              "05-API Gateway", "06-Auth Service", "07-User Service", "08-Notification", 
              "09-Food Recognition", "10-Portion Estimation", "11-Cooking AI", "12-Prediction", 
              "13-Risk Alert", "14-CGM Integration", "15-Recommendation", "16-Assistant", 
              "17-ESP32 Streaming", "18-Wearable Sync", "19-Digital Twin", "20-Federated Learning", 
              "21-DevOps Infra"
            ].map((module, i) => (
              <div key={i} className="flex-none px-8 py-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-teal-200 transition-all group min-w-[300px]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <Cpu size={24} />
                  </div>
                  <span className="text-[10px] font-black text-slate-300 group-hover:text-teal-600 transition-colors uppercase tracking-widest">Module_{i+1 < 10 ? `0${i+1}` : i+1}</span>
                </div>
                <h4 className="text-xl font-black tracking-tight text-slate-900 mb-2">{module}</h4>
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Operational Readiness: 100%</p>
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {[
              "01-Platform Architecture", "02-Data Collect", "03-Mobile App", "04-Web Dashboard", 
              "05-API Gateway", "06-Auth Service", "07-User Service", "08-Notification", 
              "09-Food Recognition", "10-Portion Estimation", "11-Cooking AI", "12-Prediction", 
              "13-Risk Alert", "14-CGM Integration", "15-Recommendation", "16-Assistant", 
              "17-ESP32 Streaming", "18-Wearable Sync", "19-Digital Twin", "20-Federated Learning", 
              "21-DevOps Infra"
            ].map((module, i) => (
              <div key={i+"dup"} className="flex-none px-8 py-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-teal-200 transition-all group min-w-[300px]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <Cpu size={24} />
                  </div>
                  <span className="text-[10px] font-black text-slate-300 group-hover:text-teal-600 transition-colors uppercase tracking-widest">Module_{i+1 < 10 ? `0${i+1}` : i+1}</span>
                </div>
                <h4 className="text-xl font-black tracking-tight text-slate-900 mb-2">{module}</h4>
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Operational Readiness: 100%</p>
              </div>
            ))}
          </div>
          
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none"></div>
        </div>
      </section>

      {/* Patient Workflow */}
      <section className="reveal-on-scroll py-24 space-y-16 px-6 lg:px-0">
         <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 text-center lg:text-left">
            <div className="max-w-xl space-y-4">
               <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">The Path to Autonomy.</h2>
               <p className="text-slate-500 font-medium">From initial sensor sync to clinical insight, we've optimized every millisecond of the patient journey.</p>
            </div>
            <Link to="/features" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-3">
               Full Documentation <Layers size={16} />
            </Link>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {[
               { step: '01', title: 'Telemetry Sync', desc: 'Connect any medical-grade CGM via our secure integration service.', icon: Smartphone },
               { step: '02', title: 'Neural Analysis', desc: 'Our AI engine builds your metabolic digital twin in real-time.', icon: Activity },
               { step: '03', title: 'Clinical Action', desc: 'Receive actionable insights and clinician-validated alerts.', icon: HeartPulse },
            ].map((w, i) => (
               <div key={i} className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-soft-xl relative group hover:border-teal-200 transition-all">
                  <div className="absolute -top-4 -left-4 w-10 h-10 lg:w-12 lg:h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black italic text-lg shadow-xl group-hover:scale-110 group-hover:bg-teal-600 transition-all">
                     {w.step}
                  </div>
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-slate-50 rounded-2xl lg:rounded-3xl flex items-center justify-center mb-8">
                     <w.icon size={28} className="text-slate-900" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4">{w.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm">{w.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* Call to Action Section - New */}
      <section className="relative py-24 rounded-[3rem] bg-gradient-to-br from-teal-600 to-sky-700 text-white overflow-hidden shadow-2xl shadow-teal-900/20">
        <div className="absolute inset-0 pattern-dots opacity-[0.1]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10 px-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
            <HeartPulse size={20} className="text-teal-300" />
            <span className="text-xs font-black uppercase tracking-widest">Clinically Validated Infrastructure</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight">
            Elevate your health to <br /> <span className="text-teal-200 underline decoration-teal-400 underline-offset-8">computational</span> precision.
          </h2>
          <p className="text-lg text-teal-50/80 font-medium max-w-2xl mx-auto">
            Join the first wave of patients and hospitals integrating Glucovision into their daily metabolic workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Link to="/auth/register" className="px-12 py-6 bg-white text-teal-900 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
              Join the Grid
            </Link>
            <Link to="/contact" className="px-12 py-6 bg-teal-800/30 border border-white/20 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-xl">
              Contact Ops
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section - New */}
      <section className="py-12 border-y border-slate-100">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 mb-10">Trusted Infrastructure Partners</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {['DEXCOM', 'MEDTRONIC', 'ABBOTT', 'OMNIPOD', 'TANDEM'].map(p => (
            <span key={p} className="text-2xl font-black tracking-tighter text-slate-900">{p}</span>
          ))}
        </div>
      </section>

    </div>
  );
}
