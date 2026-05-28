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
  },
  {
    id: 7,
    slug: 'git-submodules-microservices',
    title: 'Git Submodules: Managing Microservices',
    date: 'May 28, 2026',
    author: 'Platform Architect',
    category: 'Git',
    readTime: '5 min',
    featured: false,
    excerpt: 'Learn how to link multiple repositories into a single super-repository without losing their independent version histories.',
    coverImage: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2076&auto=format&fit=crop',
    content: [
      { type: 'paragraph', text: 'In a massive project like GlucoVision with 22+ separate repositories, managing dependencies and keeping everything organized is crucial. Git Submodules allow you to keep a Git repository as a subdirectory of another Git repository.' },
      { type: 'heading', level: 2, text: 'Why Use Submodules?' },
      { type: 'paragraph', text: 'Instead of manually tracking all 22 repositories or putting them all in a single monolithic repo, you can create a "Super-Repository". This repository will just contain references to the specific commits of your microservices.' },
      { type: 'heading', level: 2, text: 'Adding a Submodule' },
      { type: 'code', language: 'bash', code: 'git submodule add <remote-url> <target-directory>\n\n# Example:\ngit submodule add https://github.com/thathsara/03-glucovision-mobile.git 03-glucovision-mobile' },
      { type: 'heading', level: 2, text: 'Cloning and Updating' },
      { type: 'paragraph', text: 'To clone a repository along with its submodules, you must pass a specific flag:' },
      { type: 'code', language: 'bash', code: 'git clone --recurse-submodules <super-repo-url>' },
      { type: 'paragraph', text: 'To pull upstream changes across all submodules simultaneously:' },
      { type: 'code', language: 'bash', code: 'git submodule update --remote --merge' }
    ]
  },
  {
    id: 8,
    slug: 'git-worktrees-parallel-dev',
    title: 'Git Worktrees: Parallel Development',
    date: 'May 28, 2026',
    author: 'Platform Architect',
    category: 'Git',
    readTime: '6 min',
    featured: false,
    excerpt: 'Learn how to check out multiple branches simultaneously to hotfix production bugs without abandoning your feature branch.',
    coverImage: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2089&auto=format&fit=crop',
    content: [
      { type: 'paragraph', text: 'A common problem when working on complex architectures like GlucoVision is context switching. Imagine you are in the middle of implementing a complex feature, and suddenly a critical bug is reported in production.' },
      { type: 'paragraph', text: 'Git Worktrees solve this by allowing you to check out multiple branches of the same repository into different directories simultaneously.' },
      { type: 'heading', level: 2, text: 'Creating a Worktree' },
      { type: 'paragraph', text: 'To create a parallel directory for your hotfix without touching your current working directory:' },
      { type: 'code', language: 'bash', code: '# Syntax: git worktree add <path> <branch>\ngit worktree add ../glucovision-prediction-hotfix main' },
      { type: 'paragraph', text: 'This creates a new folder linked to your Git repository where you can run the server and fix the bug completely isolated from your feature work.' },
      { type: 'heading', level: 2, text: 'Managing Worktrees' },
      { type: 'list', items: ['git worktree list - See all active worktrees', 'git worktree remove <path> - Remove a worktree safely', 'git worktree prune - Clean up dangling references'] }
    ]
  },
  {
    id: 9,
    slug: 'git-rebase-stash',
    title: 'Git Rebase & Stash: Keeping History Clean',
    date: 'May 28, 2026',
    author: 'Platform Architect',
    category: 'Git',
    readTime: '7 min',
    featured: false,
    excerpt: 'Advanced usage of interactive rebasing to squash commits and keep microservice history clean.',
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    content: [
      { type: 'paragraph', text: 'With 22+ services in GlucoVision, having a linear, readable commit history makes debugging and tracking features significantly easier. While `git merge` takes two divergent branches and ties them together, `git rebase` takes your feature branch commits and replays them on top of the target branch.' },
      { type: 'heading', level: 2, text: 'Interactive Rebase' },
      { type: 'code', language: 'bash', code: 'git rebase -i HEAD~4' },
      { type: 'paragraph', text: 'This opens your default text editor where you can "squash", "reword", or "drop" commits. It\'s perfect for combining minor "WIP" commits into one cohesive feature commit.' },
      { type: 'heading', level: 2, text: 'Advanced Stashing' },
      { type: 'paragraph', text: '`git stash` temporarily shelves changes you\'ve made to your working copy. You can save specific files, list stashes, and apply them dynamically.' },
      { type: 'code', language: 'bash', code: 'git stash save "WIP: integrating CGM API"\ngit stash list\ngit stash pop\ngit stash apply stash@{1}' }
    ]
  },
  {
    id: 10,
    slug: 'git-bisect-hunting-bugs',
    title: 'Git Bisect: Hunting Down Bugs',
    date: 'May 28, 2026',
    author: 'Platform Architect',
    category: 'Git',
    readTime: '4 min',
    featured: false,
    excerpt: 'Use binary search to quickly pinpoint exactly which commit introduced a regression.',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
    content: [
      { type: 'paragraph', text: 'When a bug is discovered in one of GlucoVision\'s microservices, and it\'s unclear when or where the bug was introduced, `git bisect` uses a binary search algorithm to quickly find the exact commit.' },
      { type: 'heading', level: 2, text: 'The Bisect Workflow' },
      { type: 'code', language: 'bash', code: 'git bisect start\ngit bisect bad                 # Current commit is bad\ngit bisect good 1a2b3c4        # Known good commit in the past' },
      { type: 'paragraph', text: 'Git will automatically check out a commit exactly in the middle. You test the app, tell Git if that middle commit is "good" or "bad", and Git will halve the search space again.' },
      { type: 'heading', level: 2, text: 'Automating Bisect' },
      { type: 'paragraph', text: 'If you have an automated script or a unit test that fails when the bug is present, you don\'t even have to test manually!' },
      { type: 'code', language: 'bash', code: 'git bisect run ./test_script.sh' }
    ]
  },
  {
    id: 11,
    slug: 'git-hooks-multi-repo',
    title: 'Global Git Hooks & Multi-Repo Management',
    date: 'May 28, 2026',
    author: 'Platform Architect',
    category: 'Git',
    readTime: '6 min',
    featured: false,
    excerpt: 'Instructions for setting up global linting rules and using bash scripts across all 22+ GlucoVision repositories.',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    content: [
      { type: 'paragraph', text: 'Managing 22 separate repositories means enforcing code quality can become tedious if done manually for each repo. Global Git Hooks are scripts that run automatically whenever a specific event occurs across ALL your local repositories.' },
      { type: 'heading', level: 2, text: 'Setting up Global Hooks' },
      { type: 'code', language: 'bash', code: 'mkdir -p ~/.git-templates/hooks\ngit config --global core.hooksPath ~/.git-templates/hooks' },
      { type: 'paragraph', text: 'Now, any pre-commit or pre-push script you place in this directory will apply to every GlucoVision microservice on your machine.' },
      { type: 'heading', level: 2, text: 'Multi-Repo Shell Scripts' },
      { type: 'code', language: 'bash', code: '#!/bin/bash\nfor d in */ ; do\n    cd "$d"\n    git status -s\n    cd ..\ndone' }
    ]
  },
  {
    id: 12,
    slug: 'federated-learning-food-ai',
    title: 'Federated Learning for Food AI',
    date: 'May 25, 2026',
    author: 'AI Research Lead',
    category: 'AI',
    readTime: '9 min',
    featured: true,
    excerpt: 'How GlucoVision uses federated learning to improve food recognition models without compromising patient privacy.',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop',
    content: [
      { type: 'paragraph', text: 'Privacy is paramount in healthcare applications. To continuously improve our food recognition AI without sending raw images to the cloud, GlucoVision employs Federated Learning.' },
      { type: 'heading', level: 2, text: 'Edge Computation' },
      { type: 'paragraph', text: 'Instead of centralized training, the model weights are downloaded to the user\'s device. The device trains on local data and only sends the updated weight gradients back to the server.' },
      { type: 'code', language: 'python', code: 'def aggregate_weights(global_model, client_models):\n    # Federated Averaging (FedAvg)\n    for layer in global_model.layers:\n        layer.weights = mean([m.get_weights(layer) for m in client_models])\n    return global_model' }
    ]
  },
  {
    id: 13,
    slug: 'digital-twin-metabolism',
    title: 'Digital Twin: Simulating Metabolism',
    date: 'May 22, 2026',
    author: 'Bioinformatics Lead',
    category: 'Architecture',
    readTime: '11 min',
    featured: false,
    excerpt: 'Architecting a real-time digital twin to simulate patient glucose responses to various macronutrients.',
    coverImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
    content: [
      { type: 'paragraph', text: 'The GlucoVision Digital Twin service creates a mathematical model of a patient\'s metabolism, allowing us to simulate "what-if" scenarios before they eat.' },
      { type: 'list', items: ['Insulin Sensitivity Factor (ISF)', 'Carbohydrate-to-Insulin Ratio (CIR)', 'Basal Metabolic Rate (BMR)'] },
      { type: 'image', url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop', caption: 'Digital Twin Simulation Dashboard' }
    ]
  },
  {
    id: 14,
    slug: 'wearable-sync-optimization',
    title: 'Wearable Sync: Battery Optimization',
    date: 'May 18, 2026',
    author: 'IoT Edge Engineer',
    category: 'IoT',
    readTime: '6 min',
    featured: false,
    excerpt: 'Techniques used to minimize Bluetooth Low Energy (BLE) overhead when syncing with continuous glucose monitors.',
    coverImage: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=2070&auto=format&fit=crop',
    content: [
      { type: 'paragraph', text: 'Polling a Continuous Glucose Monitor (CGM) every 5 minutes can severely degrade the battery life of both the wearable and the smartphone. We implemented a batched GATT protocol to solve this.' },
      { type: 'heading', level: 2, text: 'GATT Characteristic Batching' },
      { type: 'paragraph', text: 'Instead of individual read requests, the wearable batches 3 readings into a single notification payload.' },
      { type: 'code', language: 'c', code: 'void send_batched_glucose_data() {\n    uint8_t payload[6];\n    payload[0] = reading_1 >> 8;\n    payload[1] = reading_1 & 0xFF;\n    // ... (repeat for other readings)\n    esp_ble_gatts_send_indicate(gatts_if, conn_id, attr_handle, sizeof(payload), payload, false);\n}' }
    ]
  }
];
