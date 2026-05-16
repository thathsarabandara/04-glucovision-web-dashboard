import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  HeartPulse, 
  Activity, 
  Box, 
  BrainCircuit, 
  Utensils, 
  ShieldCheck,
  ChevronRight,
  Zap,
  Brain,
  Layers,
  Smartphone,
  Network
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function FeaturesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const steps = containerRef.current?.querySelectorAll('.feature-step');
    
    steps.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
          }
        }
      );
    });

    gsap.fromTo(
      '.step-line',
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          scrub: 1,
        }
      }
    );
  }, []);

  const features = [
    {
      icon: HeartPulse,
      title: 'CGM Integration',
      description: 'Medical-grade sensor synchronization via 14-glucovision-cgm-integration-service. Supports BLE and medical protocols.',
      status: 'Active',
      phase: 'Interface',
      repo: 'https://github.com/thathsarabandara/14-glucovision-cgm-integration-service'
    },
    {
      icon: Brain,
      title: 'AI Food Recognition',
      description: 'Sub-100ms visual classification powered by 09-glucovision-food-recognition-service using deep temporal modeling.',
      status: 'High Def',
      phase: 'Perception',
      repo: 'https://github.com/thathsarabandara/09-glucovision-food-recognition-service'
    },
    {
      icon: Activity,
      title: 'Health HUD',
      description: 'Real-time metabolic monitoring via 04-glucovision-web-dashboard, providing patients with critical health telemetry.',
      status: 'Real-time',
      phase: 'Monitoring',
      repo: 'https://github.com/thathsarabandara/04-glucovision-web-dashboard'
    },
    {
      icon: Layers,
      title: 'Metabolic Digital Twin',
      description: 'High-fidelity physiological simulations from 19-glucovision-digital-twin-service mapping unique biological responses.',
      status: '3D Render',
      phase: 'Simulation',
      repo: 'https://github.com/thathsarabandara/19-glucovision-digital-twin-service'
    },
    {
      icon: BrainCircuit,
      title: 'Predictive Logic',
      description: 'Neural-assisted glycemic forecasting by 12-glucovision-prediction-service with autonomous risk alert generation.',
      status: 'AI Assisted',
      phase: 'Intelligence',
      repo: 'https://github.com/thathsarabandara/12-glucovision-prediction-service'
    },
    {
      icon: Utensils,
      title: 'Cooking AI',
      description: 'Personalized nutritional optimization from 11-glucovision-cooking-ai-service, creating custom meal plans with instant impact estimation.',
      status: 'Precise',
      phase: 'Planning',
      repo: 'https://github.com/thathsarabandara/11-glucovision-cooking-ai-service'
    },
    {
      icon: Smartphone,
      title: 'Mobile Companion',
      description: 'The 03-glucovision-mobile application provides seamless on-the-go management and real-time sync with clinical services.',
      status: 'Stable',
      phase: 'Accessibility',
      repo: 'https://github.com/thathsarabandara/03-glucovision-mobile'
    },
    {
      icon: Network,
      title: 'Federated Learning',
      description: 'Privacy-preserving AI training at scale using 20-glucovision-federated-learning, ensuring data remains on patient nodes.',
      status: 'Secure',
      phase: 'Research',
      repo: 'https://github.com/thathsarabandara/20-glucovision-federated-learning'
    },
  ];

  return (
    <div ref={containerRef} className="pb-32 pattern-circuit">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-8 mb-32 pt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-4">
          <Zap size={14} className="text-brand-accent" />
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">System Specification</span>
        </div>
        <h1 className="text-6xl font-black tracking-tighter text-slate-900">Diagnostic <span className="text-brand-accent underline decoration-slate-200 underline-offset-8">Capabilities</span></h1>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Explore the sophisticated layers of technology that enable precise health monitoring and autonomous predictive care across the Glucovision ecosystem.
        </p>
        
        <div className="pt-8 flex justify-center">
          <div className="w-10 h-16 rounded-full border-2 border-slate-200 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-brand-accent rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Stepper Timeline */}
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2">
          <div className="step-line absolute top-0 left-0 w-full bg-brand-accent origin-top scale-y-0" />
        </div>

        <div className="space-y-24">
          {features.map((feature, idx) => (
            <div key={idx} className={`feature-step flex flex-col md:flex-row items-start md:items-center gap-12 relative ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Feature Content */}
              <div className="flex-1 w-full">
                <div className="glass-card group p-10 hover:border-brand-accent/30 transition-all duration-500 relative bg-white/60 backdrop-blur-xl">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-xl font-black text-xs shadow-xl rotate-12 group-hover:rotate-0 transition-transform">
                    {idx + 1}
                  </div>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-4 bg-brand-accent/5 text-brand-accent rounded-2xl group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                      <feature.icon size={24} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 px-3 py-1 bg-slate-50 rounded-full">
                      {feature.phase}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-brand-accent transition-colors text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">
                    {feature.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent/60">
                      Status: {feature.status}
                    </span>
                    <a 
                      href={feature.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-accent transition-colors"
                    >
                      Repo Link <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-[39px] md:left-1/2 -translate-x-1/2 z-10 hidden md:block">
                <div className="w-16 h-16 rounded-full bg-white border-8 border-slate-50 shadow-2xl flex items-center justify-center group-hover:scale-125 transition-transform duration-500">
                   <div className="w-3 h-3 rounded-full bg-brand-accent" />
                </div>
              </div>

              {/* Spacer for MD screens */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>

      {/* Hardware Note */}
      <div className="max-w-5xl mx-auto mt-40 px-6">
        <div className="glass-card-vibrant p-16 text-center">
          <h2 className="text-4xl font-black tracking-tight mb-8 text-slate-900">Cross-Device Synchronization</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Glucovision's data layer supports all modern standard wearables, including Apple Watch, Fitbit, Garmin, and specialized clinical CGM devices via the 14-glucovision-cgm-integration-service.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {['HIPAA-COMPLIANT', 'AES-256', 'FHIR-READY', 'ISO-27001'].map(tag => (
                <div key={tag} className="p-6 bg-white/50 backdrop-blur-md rounded-2xl border border-white font-black italic tracking-tighter text-slate-400 hover:text-brand-accent hover:border-brand-accent/20 transition-all cursor-default shadow-sm">
                  {tag}
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
