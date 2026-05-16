import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Star, 
  GitFork, 
  ExternalLink,
  Terminal,
  Code2,
  Cpu,
  Smartphone,
  Layout,
  Network,
  ShieldCheck,
  Bot,
  Activity,
  Brain,
  Cloud,
  Database,
  AlertCircle,
  MessageSquare,
  Camera,
  Layers,
  Globe,
  Utensils,
  Zap,
  Box
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

export function RepositoriesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('.timeline-item');
    
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { 
          opacity: 0, 
          x: index % 2 === 0 ? -30 : 30,
          y: 20 
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      // Animate the vertical line
      if (index === 0) {
        gsap.fromTo(
          '.timeline-line',
          { scaleY: 0 },
          { 
            scaleY: 1, 
            duration: 2, 
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1,
            }
          }
        );
      }
    });
  }, []);

  const repos = [
    {
      id: '01',
      name: '01-glucovision-platform-architecture',
      description: 'System-wide architecture blueprint defining microservice boundaries, data contracts, and security protocols.',
      language: 'MARKDOWN',
      icon: Cpu,
      tech: ['Architecture', 'C4 Model', 'Mermaid'],
      stars: 12,
      url: 'https://github.com/thathsarabandara/01-glucovision-platform-architecture'
    },
    {
      id: '02',
      name: '02-glucovision-data-collect-app',
      description: 'Dataset collection tool designed for clinical environments to gather high-fidelity metabolic and nutritional data.',
      language: 'REACT',
      icon: Database,
      tech: ['Vite', 'Express', 'CSV Export'],
      stars: 15,
      url: 'https://github.com/thathsarabandara/02-glucovision-data-collect-app'
    },
    {
      id: '03',
      name: '03-glucovision-mobile',
      description: 'The patient companion app for real-time monitoring, meal logging, and autonomous health alerts.',
      language: 'FLUTTER',
      icon: Smartphone,
      tech: ['Dart', 'Riverpod', 'BLE'],
      stars: 28,
      url: 'https://github.com/thathsarabandara/03-glucovision-mobile'
    },
    {
      id: '04',
      name: '04-glucovision-web-dashboard',
      description: 'Professional monitoring terminal with 3D digital twin simulations and comprehensive population analytics.',
      language: 'REACT',
      icon: Layout,
      tech: ['Vite', 'GSAP', 'Three.js'],
      stars: 45,
      url: 'https://github.com/thathsarabandara/04-glucovision-web-dashboard'
    },
    {
      id: '05',
      name: '05-glucovision-api-gateway',
      description: 'Central entry point orchestrating secure communication between 21 microservices.',
      language: 'NODE',
      icon: Network,
      tech: ['Express', 'Reverse Proxy', 'Redis'],
      stars: 22,
      url: 'https://github.com/thathsarabandara/05-glucovision-api-gateway'
    },
    {
      id: '06',
      name: '06-glucovision-auth-service',
      description: 'Identity management system handling OAuth2, JWT validation, and RBAC for patients and clinicians.',
      language: 'NODE',
      icon: ShieldCheck,
      tech: ['Passport', 'JWT', 'PostgreSQL'],
      stars: 19,
      url: 'https://github.com/thathsarabandara/06-glucovision-auth-service'
    },
    {
      id: '07',
      name: '07-glucovision-user-service',
      description: 'Management of patient health profiles, clinical permissions, and historical record access.',
      language: 'NODE',
      icon: Code2,
      tech: ['Sequelize', 'Redis', 'Express'],
      stars: 14,
      url: 'https://github.com/thathsarabandara/07-glucovision-user-service'
    },
    {
      id: '08',
      name: '08-glucovision-notification-service',
      description: 'High-availability alert engine for real-time risk notifications via Push, SMS, and Email.',
      language: 'NODE',
      icon: Activity,
      tech: ['Firebase', 'Twilio', 'Nodemailer'],
      stars: 17,
      url: 'https://github.com/thathsarabandara/08-glucovision-notification-service'
    },
    {
      id: '09',
      name: '09-glucovision-food-recognition-service',
      description: 'Neural vision service for automated macronutrient classification from meal images.',
      language: 'PYTHON',
      icon: Brain,
      tech: ['PyTorch', 'OpenCV', 'FastAPI'],
      stars: 36,
      url: 'https://github.com/thathsarabandara/09-glucovision-food-recognition-service'
    },
    {
      id: '10',
      name: '10-portion-estimation-service',
      description: 'Geometric volume estimation for accurate calorie and glycemic load calculation.',
      language: 'PYTHON',
      icon: Box,
      tech: ['NumPy', 'SciPy', 'Point Cloud'],
      stars: 24,
      url: 'https://github.com/thathsarabandara/10-portion-estimation-service'
    },
    {
      id: '11',
      name: '11-glucovision-cooking-ai-service',
      description: 'Generative AI service for health-optimized meal plans and recipe generation.',
      language: 'PYTHON',
      icon: Utensils,
      tech: ['LangChain', 'OpenAI', 'RAG'],
      stars: 29,
      url: 'https://github.com/thathsarabandara/11-glucovision-cooking-ai-service'
    },
    {
      id: '12',
      name: '12-glucovision-prediction-service',
      description: 'The core neural engine forecasting glucose trends using temporal metabolic modeling.',
      language: 'PYTHON',
      icon: Zap,
      tech: ['TensorFlow', 'LSTM', 'Keras'],
      stars: 52,
      url: 'https://github.com/thathsarabandara/12-glucovision-prediction-service'
    },
    {
      id: '13',
      name: '13-glucovision-risk-alert-engine',
      description: 'Immediate hazard detection using complex event processing for hypoglycemic risk.',
      language: 'GO',
      icon: AlertCircle,
      tech: ['Kafka', 'Stream Processing', 'Go'],
      stars: 21,
      url: 'https://github.com/thathsarabandara/13-glucovision-risk-alert-engine'
    },
    {
      id: '14',
      name: '14-glucovision-cgm-integration-service',
      description: 'Direct drivers and protocols for integrating diverse medical-grade CGM sensors.',
      language: 'C++',
      icon: Terminal,
      tech: ['Bluetooth LE', 'WebBluetooth', 'IoT'],
      stars: 18,
      url: 'https://github.com/thathsarabandara/14-glucovision-cgm-integration-service'
    },
    {
      id: '15',
      name: '15-glucovision-recomondation-engine',
      description: 'Personalized lifestyle and activity recommendations based on metabolic drift.',
      language: 'PYTHON',
      icon: Bot,
      tech: ['Scikit-learn', 'Recommender Sys', 'Pandas'],
      stars: 23,
      url: 'https://github.com/thathsarabandara/15-glucovision-recomondation-engine'
    },
    {
      id: '16',
      name: '16-glucovision-assistant-service',
      description: 'LLM-powered patient support bot providing contextual medical guidance.',
      language: 'PYTHON',
      icon: MessageSquare,
      tech: ['FastAPI', 'ChromaDB', 'LLM'],
      stars: 31,
      url: 'https://github.com/thathsarabandara/16-glucovision-assistant-service'
    },
    {
      id: '17',
      name: '17-glucovision-esp32-cam-streaming-service',
      description: 'Low-latency video streaming bridge for hardware-based meal monitoring.',
      language: 'C++',
      icon: Camera,
      tech: ['WebRTC', 'ESP32', 'FreeRTOS'],
      stars: 25,
      url: 'https://github.com/thathsarabandara/17-glucovision-esp32-cam-streaming-service'
    },
    {
      id: '18',
      name: '18-glucovision-wearable-sync-service',
      description: 'Continuous background synchronization for multi-vendor wearable ecosystems.',
      language: 'GO',
      icon: Cloud,
      tech: ['Go', 'Worker Pool', 'PostgreSQL'],
      stars: 16,
      url: 'https://github.com/thathsarabandara/18-glucovision-wearable-sync-service'
    },
    {
      id: '19',
      name: '19-glucovision-digital-twin-service',
      description: 'The 3D metabolic simulation core generating predictive biological avatars.',
      language: 'JAVASCRIPT',
      icon: Layers,
      tech: ['Three.js', 'WebGL', 'Physiological Model'],
      stars: 34,
      url: 'https://github.com/thathsarabandara/19-glucovision-digital-twin-service'
    },
    {
      id: '20',
      name: '20-glucovision-federated-learning',
      description: 'Privacy-preserving AI training across distributed patient nodes.',
      language: 'PYTHON',
      icon: Globe,
      tech: ['Flower', 'Differential Privacy', 'PyTorch'],
      stars: 27,
      url: 'https://github.com/thathsarabandara/20-glucovision-federated-learning'
    },
    {
      id: '21',
      name: '21-glucovision-devops-infra',
      description: 'Automated CI/CD pipelines, K8s orchestration, and cloud infrastructure as code.',
      language: 'K8S',
      icon: Cloud,
      tech: ['Terraform', 'Helm', 'GitHub Actions'],
      stars: 39,
      url: 'https://github.com/thathsarabandara/21-glucovision-devops-infra'
    }
  ];

  return (
    <div ref={containerRef} className="pb-32 relative pattern-dots">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center space-y-8 mb-24 pt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-4 animate-pulse-slow">
          <Code2 size={14} className="text-brand-accent" />
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">Infrastructure Blueprint</span>
        </div>
        <h1 className="text-6xl font-black tracking-tighter leading-tight">
          System <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">Microservices</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          The Glucovision platform is composed of 21 specialized repositories, each engineered for maximum efficiency and medical-grade reliability.
        </p>
        
        <div className="flex items-center justify-center gap-6 pt-4">
          <a 
            href="https://github.com/thathsarabandara" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-slate-900/20"
          >
            <FaGithub size={18} /> View Organization
          </a>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 hidden lg:block">
          <div className="timeline-line absolute top-0 left-0 w-full bg-gradient-to-b from-brand-accent via-brand-secondary to-brand-accent origin-top scale-y-0" />
        </div>

        <div className="space-y-12 lg:space-y-0">
          {repos.map((repo, idx) => (
            <div 
              key={repo.id}
              className={`timeline-item flex flex-col lg:flex-row items-center gap-8 lg:gap-0 lg:mb-24 relative ${
                idx % 2 === 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Card */}
              <div className="w-full lg:w-[45%]">
                <div className="glass-card-vibrant group p-8 lg:p-10 hover:border-brand-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-4 bg-slate-50 text-slate-400 group-hover:bg-brand-accent group-hover:text-white rounded-2xl transition-all duration-500 rotate-0 group-hover:-rotate-6">
                      <repo.icon size={28} />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-4xl font-black text-slate-100 group-hover:text-brand-accent/20 transition-colors duration-500 leading-none">
                        {repo.id}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2 px-2 py-1 bg-slate-50 rounded-lg">
                        {repo.language}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-brand-accent transition-colors">
                    {repo.name}
                  </h3>
                  
                  <p className="text-slate-500 font-medium leading-relaxed mb-8 text-sm lg:text-base">
                    {repo.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {repo.tech.map(t => (
                      <span key={t} className="text-[9px] font-black uppercase tracking-tighter px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-md text-slate-400 group-hover:border-brand-accent/20 group-hover:text-brand-accent transition-all">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 group/stat">
                        <Star size={16} className="text-amber-400 fill-amber-400" />
                        <span className="text-xs font-black text-slate-500">{repo.stars}</span>
                      </div>
                      <div className="flex items-center gap-2 group/stat">
                        <GitFork size={16} className="text-slate-400" />
                        <span className="text-xs font-black text-slate-500">Fork</span>
                      </div>
                    </div>
                    <a 
                      href={repo.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-900 text-white hover:bg-brand-accent rounded-xl transition-all shadow-lg shadow-slate-900/10"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Timeline Node (Middle) */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 rounded-2xl bg-white border-4 border-slate-100 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="w-3 h-3 rounded-full bg-brand-accent group-hover:bg-brand-secondary transition-colors" />
                </div>
              </div>

              {/* Empty Space for the other side */}
              <div className="hidden lg:block lg:w-[45%]" />
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto mt-32 px-6">
        <div className="glass-card p-12 bg-slate-900 border-none text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-secondary/20 opacity-50" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl font-black text-white tracking-tight">Ready to Contribute?</h2>
            <p className="text-slate-400 font-medium max-w-xl mx-auto">
              We maintain a high engineering standard across all repositories. Review our protocol before opening a Pull Request.
            </p>
            <button className="px-10 py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
              Developer Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
