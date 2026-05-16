export const blogPosts = [
  {
    id: 1,
    slug: 'deploying-glucovision-kernel',
    title: 'Operational Readiness: Deploying the Glucovision Kernel',
    date: 'May 10, 2026',
    author: 'Chief Architect',
    category: 'Tutorial',
    readTime: '8 min',
    featured: true,
    excerpt: 'Comprehensive architecture overview for the initial deployment of the Glucovision medical ecosystem.',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    content: [
      { type: 'paragraph', text: 'The Glucovision Kernel is the central nervous system of our medical ecosystem. It handles everything from low-level sensor sync to high-level metabolic modeling and neural processing.' },
      { type: 'heading', level: 2, text: 'Initial Setup' },
      { type: 'code', language: 'bash', code: '# Clone the Glucovision architecture repository\ngit clone https://github.com/thathsarabandara/01-glucovision-platform-architecture.git\n\n# Initialize the build environment\ncd 01-glucovision-platform-architecture && ./setup-env.sh' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', caption: 'Kernel Initialization Sequence Demo' },
      { type: 'paragraph', text: 'Once configured, you can start the primary metabolic monitoring loop.' },
    ]
  },
  {
    id: 2,
    slug: 'metabolic-optimization',
    title: 'Metabolic Optimization & Path Planning',
    date: 'May 8, 2026',
    author: 'Lead Engineer',
    category: 'Guide',
    readTime: '12 min',
    featured: true,
    excerpt: 'Deep dive into sub-millisecond data processing and metabolic prediction solvers.',
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    content: [
      { type: 'paragraph', text: 'Predicting glucose drift in clinical environments requires absolute precision and efficiency.' },
      { type: 'code', language: 'javascript', code: 'async function calculateDrift(target) {\n  const currentGlucose = await sensors.getLatest();\n  const model = await predictionEngine.loadModel();\n  const forecast = model.predict(currentGlucose);\n  return forecast.applyTemporalCorrection();\n}' },
    ]
  },
  {
    id: 3,
    slug: 'neural-vision-food',
    title: 'Neural Vision Core: Food Recognition v4.2',
    date: 'May 5, 2026',
    author: 'AI Specialist',
    category: 'Feature',
    readTime: '6 min',
    featured: true,
    excerpt: 'Exploring the new computer vision models for autonomous macronutrient classification.',
    coverImage: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=2032&auto=format&fit=crop',
    content: [
      { type: 'paragraph', text: 'The latest update to our Neural Vision Core brings significant improvements to edge detection and nutritional perception.' },
    ]
  },
  {
    id: 4,
    slug: 'global-sync-protocol',
    title: 'Data Sync: Synchronizing Global Patient Clusters',
    date: 'May 3, 2026',
    author: 'DevOps Lead',
    category: 'Technical',
    readTime: '10 min',
    featured: false,
    excerpt: 'How to manage global patient data using our decentralized edge computing protocol.',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070&auto=format&fit=crop',
    content: [
      { type: 'paragraph', text: 'Scaling a patient data mesh across multiple geographic regions requires a robust synchronization protocol.' },
    ]
  },
  {
    id: 5,
    slug: 'predictive-risk-alerts',
    title: 'Predictive Risk Alerts via Telemetry',
    date: 'May 1, 2026',
    author: 'Medical Lead',
    category: 'Technical',
    readTime: '15 min',
    featured: false,
    excerpt: 'Using biometric data and thermal sensors to predict health crises before they happen.',
    coverImage: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2040&auto=format&fit=crop',
    content: [
      { type: 'paragraph', text: 'Biological fatigue is the enemy of wellness. Our new predictive risk engine analyzes millions of biometric data points.' },
    ]
  },
  {
    id: 6,
    slug: 'security-protocols-fhir',
    title: 'Security Protocols: Hardening the Patient Buffer',
    date: 'April 28, 2026',
    author: 'Security Expert',
    category: 'Feature',
    readTime: '7 min',
    featured: false,
    excerpt: 'New end-to-end encryption standards for all HIPAA-compliant transmissions.',
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    content: [
      { type: 'paragraph', text: 'Patient data lines must be secured against all forms of interference and unauthorized access.' },
    ]
  }
];
