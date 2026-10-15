import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Code, 
  Cpu, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  Copy, 
  Check, 
  Layers, 
  Bot, 
  FileText, 
  BookOpen, 
  Terminal, 
  Activity,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Download,
  UserCheck,
  Camera,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);

  // You can place your actual photo in `public/profile.jpg` or `src/assets/profile.jpg`
  // If the custom photo fails to load, it automatically falls back gracefully.
  const profilePhotoUrl = "./profile.jpg"; 
  const fallbackAvatarUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const skillsData = {
    frontend: [
      "ReactJS", "Next.js", "TypeScript", "Micro Frontend (MFE)", 
      "Apollo GraphQL v4", "Nx Monorepo", "JavaScript (ES6+)", 
      "AngularJS / Angular", "HTML5/CSS3", "Tailwind CSS", "Bootstrap"
    ],
    ai: [
      "Cursor AI (Migration)", "Google Gemini API", "LLM Prompt Engineering", 
      "ChatGPT Integration", "Voice Fluency Scoring AI", "Autonomous Workflows"
    ],
    backend: [
      "Node.js", "ExpressJS", "Python", "REST APIs", 
      "Supabase", "MongoDB", "MySQL", "SQL Server"
    ],
    testingDevops: [
      "Jest", "Cypress", "Unit Testing", "Azure DevOps CI/CD", 
      "Docker", "Agile / Scrum (PSD, PSM)", "Performance Optimization"
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-indigo-600/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-[26rem] h-[26rem] bg-emerald-600/15 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0f1d]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 p-[1.5px] transition group-hover:scale-105">
              <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">VS</span>
              </div>
            </div>
            <div>
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition">Venkatraj Selvakumar</span>
              <span className="block text-[10px] tracking-wider uppercase text-cyan-400 font-medium">Technical Lead & AI Solutions</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#featured-ai" className="hover:text-cyan-400 transition">Karpi AI</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills Matrix</a>
            <a href="#education" className="hover:text-cyan-400 transition">Research & Degrees</a>
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:brightness-110 shadow-lg shadow-cyan-500/20 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
        
        {/* HERO SECTION WITH PROFILE PHOTO */}
        <section id="hero" className="pt-6 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                <span>8+ Years Industry Experience • AI-Enabled Frontend Architect</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Architecting Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Micro Frontends</span> & Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">AI Applications</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Technical Lead at Cognizant driving monolith-to-Micro-Frontend migrations, Nx monorepo patterns, Apollo GraphQL architectures, and high-impact AI innovations like <strong>Karpi AI</strong>.
              </p>

              {/* Quick Contact & Metadata */}
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-slate-300 pt-1">
                <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Perungudi, Chennai, India</span>
                </div>
                
                <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800 group">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>venkatraj1996@gmail.com</span>
                  <button 
                    onClick={() => copyToClipboard('venkatraj1996@gmail.com', 'email')}
                    className="p-1 hover:text-cyan-400 transition text-slate-400"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800 group">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+91 8667252480</span>
                  <button 
                    onClick={() => copyToClipboard('8667252480', 'phone')}
                    className="p-1 hover:text-cyan-400 transition text-slate-400"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-3">
                <a 
                  href="#featured-ai" 
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-medium flex items-center gap-2 hover:shadow-cyan-500/25 hover:shadow-xl transition transform hover:-translate-y-0.5"
                >
                  <Bot className="w-5 h-5 text-cyan-200" />
                  <span>Explore Karpi AI</span>
                </a>

                <a 
                  href="#experience" 
                  className="px-6 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 font-medium flex items-center gap-2 hover:border-cyan-400/50 hover:bg-slate-800/80 transition transform hover:-translate-y-0.5"
                >
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  <span>Track Record</span>
                </a>

                <a 
                  href="mailto:venkatraj1996@gmail.com?subject=Opportunity%20Discussion%20with%20Venkatraj" 
                  className="px-5 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium flex items-center gap-2 hover:bg-emerald-500/20 transition"
                >
                  <Zap className="w-5 h-5" />
                  <span>Hire Me</span>
                </a>
              </div>
            </div>

            {/* Right Profile Photo Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                
                {/* Glowing Outer Rings */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative rounded-3xl bg-slate-950 p-3 ring-1 ring-slate-800 shadow-2xl">
                  {/* Photo Container */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
                    
                    {!imageError ? (
                      <img
                        src={profilePhotoUrl}
                        alt="Venkatraj Selvakumar"
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                      />
                    ) : (
                      // Fallback with clean gradient avatar if local file isn't uploaded yet
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 text-center">
                        <div className="w-24 h-24 rounded-full bg-cyan-500/10 border-2 border-cyan-400/50 flex items-center justify-center mb-3 text-cyan-300 font-bold text-3xl shadow-inner">
                          VS
                        </div>
                        <h4 className="text-white font-bold text-lg">Venkatraj Selvakumar</h4>
                        <p className="text-xs text-cyan-400 font-medium mt-1">Lead Frontend & AI Architect</p>
                        {/* <p className="text-[11px] text-slate-500 mt-2 italic flex items-center gap-1">
                          <Camera className="w-3 h-3" /> Place your photo as public/profile.jpg
                        </p> */}
                      </div>
                    )}

                    {/* Gradient Overlay for Sleek Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-75"></div>

                    {/* Badges on Photo */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs backdrop-blur-md bg-slate-950/80 p-2.5 rounded-xl border border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="font-medium text-slate-200">Open to Tech Lead roles</span>
                      </div>
                      <span className="text-[10px] text-cyan-400 font-mono font-semibold">8+ Yrs Exp</span>
                    </div>
                  </div>

                  {/* Quick Card Metrics Bar */}
                  <div className="mt-3 pt-2 px-2 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                      <div className="text-sm font-bold text-white">8+</div>
                      <div className="text-[10px] text-slate-400">Years Exp</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                      <div className="text-sm font-bold text-emerald-400">9.04</div>
                      <div className="text-[10px] text-slate-400">VIT CGPA</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                      <div className="text-sm font-bold text-cyan-400">2</div>
                      <div className="text-[10px] text-slate-400">Papers</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ABOUT & LEADERSHIP SECTION */}
        <section id="about" className="scroll-mt-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-4 flex flex-col items-center text-center p-6 bg-slate-950/80 rounded-2xl border border-slate-800/80">
                <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-lg shadow-cyan-500/20 mb-4 bg-slate-900 flex items-center justify-center">
                  {!imageError ? (
                    <img 
                      src={profilePhotoUrl} 
                      alt="Venkatraj" 
                      className="w-full h-full object-cover" 
                      onError={() => setImageError(true)} 
                    />
                  ) : (
                    <span className="text-2xl font-bold text-cyan-400">VS</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white">Venkatraj Selvakumar</h3>
                <span className="text-xs text-cyan-400 font-mono mt-0.5">M.Tech (Software Engineering)</span>
                <span className="text-xs text-slate-400 mt-2">Technical Lead at Cognizant</span>
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Scrum PSD</span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Scrum PSM</span>
                  <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">AI Prompt Certified</span>
                </div>
              </div>

              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <UserCheck className="w-4 h-4" /> About My Engineering Philosophy
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Bridging Enterprise Architecture with Modern AI Acceleration
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  With over 8 years in product engineering across <strong>Cognizant</strong> and <strong>Danfoss Industries</strong>, I specialize in eliminating architectural bottlenecks, decomposing monolithic frontends into high-velocity <strong>Micro Frontends (MFE)</strong>, and implementing domain-level type safety across monorepos.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Beyond core React and TypeScript, I actively integrate LLMs and automation into daily software engineering workflows—leveraging tools like <strong>Cursor AI</strong> for code modernization and architecting full-stack AI solutions like <strong>Karpi AI</strong> to address real-world education challenges.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* FEATURED AI SPOTLIGHT: KARPI AI */}
        <section id="featured-ai" className="scroll-mt-20">
          <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/20 via-indigo-500/10 to-transparent blur-3xl pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold tracking-wide uppercase">
                  <Bot className="w-4 h-4 text-cyan-400" /> Featured Innovation Project
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                  Karpi AI 
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Active AI Production Project
                  </span>
                </h2>

                <p className="text-slate-300 text-base leading-relaxed">
                  An advanced <span className="text-cyan-300 font-semibold">bilingual AI-powered learning and communication assistant</span> engineered to empower language mastery and interactive curriculum discovery. Built to bridge foundational fluency gaps through real-time feedback and intelligent conversational agents.
                </p>

                {/* Key Features of Karpi AI */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Voice & Fluency Scoring</h4>
                      <p className="text-xs text-slate-400">Real-time pronunciation evaluation, speech rate, and acoustic feedback.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Grammar & Syntax Evaluation</h4>
                      <p className="text-xs text-slate-400">Contextual grammar corrections and instant localized explanations.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 mt-0.5">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Bilingual Syllabus Exploration</h4>
                      <p className="text-xs text-slate-400">Interactive multilingual study tracks for students and professionals.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">AI-Driven Adaptive Learning</h4>
                      <p className="text-xs text-slate-400">Personalized micro-quizzes powered by Gemini LLM reasoning.</p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-3">
                  <span className="text-xs text-slate-400 font-medium">Built with:</span>
                  {["React", "Next.js", "Google Gemini API", "Prompt Engineering", "Web Speech API", "Supabase", "Node.js", "Tailwind CSS"].map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-[11px] font-mono text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Card */}
              <div className="w-full lg:w-72 bg-slate-950/80 border border-slate-800/90 rounded-2xl p-5 flex flex-col justify-between shrink-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-semibold text-slate-400">Architecture</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Production-Ready</span>
                  </div>
                  <div className="text-sm text-slate-300">
                    Designed with serverless edge handlers, resilient audio streams, and strict token-budget prompt architecture.
                  </div>
                </div>
                
                <div className="pt-6 space-y-2">
                  <a
                    href="#contact"
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-xs flex items-center justify-center gap-2 hover:brightness-110 transition shadow-lg shadow-cyan-500/20"
                  >
                    <span>Request Demo & Code Walkthrough</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-[10px] text-center text-slate-400">Recruiter walkthroughs & technical design available on request</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="scroll-mt-20 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Briefcase className="w-4 h-4" /> Track Record
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Professional Leadership & Experience</h2>
            <p className="text-slate-400 text-sm max-w-2xl mt-1">
              8 years leading frontend innovation, orchestrating large-scale enterprise micro frontends, and automating complex engineering pipelines.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-7 before:w-0.5 before:bg-slate-800">
            
            {/* ROLE 1: COGNIZANT */}
            <div className="relative pl-10 md:pl-16 group">
              <div className="absolute left-2.5 md:left-5.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-[#0a0f1d] group-hover:scale-125 transition"></div>

              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition">Technical Lead</h3>
                    <div className="text-slate-300 font-medium text-sm">Cognizant Technology Solutions • Chennai, Tamil Nadu</div>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-semibold w-fit">
                    05/2025 - Present
                  </div>
                </div>

                {/* Sub-project 1: Rhapsody Portal - Chewy */}
                <div className="mt-4 pt-4 border-t border-slate-800 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base font-semibold text-cyan-300 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      Rhapsody Portal — Chewy (Vet Care Management System)
                    </h4>
                    <span className="text-xs text-slate-400 font-mono bg-slate-950 px-2 py-1 rounded border border-slate-800">
                      MFE • Nx Monorepo • Apollo GraphQL v4 • Cursor AI
                    </span>
                  </div>
                  
                  <ul className="text-sm text-slate-300 space-y-2 list-disc list-outside ml-4 leading-relaxed">
                    <li>Led the migration from a monolithic frontend into an agile <strong className="text-white">Micro Frontend (MFE) architecture</strong> utilizing Module Federation and boundary enforcement in an Nx monorepo.</li>
                    <li>Upgraded the application to <strong className="text-white">Apollo Client v4</strong>, modernizing the GraphQL state layer and testing infrastructure.</li>
                    <li>Established reusable UI type contracts defining public interfaces for cross-domain widgets and dialogs.</li>
                    <li>Refactored legacy dialog orchestration into component-owned controlled dialogs for clean independent deployments.</li>
                    <li>Accelerated migration workflows using <strong className="text-cyan-400">Cursor AI</strong> while rigorously enforcing test coverage and PR standards.</li>
                  </ul>
                </div>

                {/* Sub-project 2: Food For Hungry */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base font-semibold text-indigo-300 flex items-center gap-2">
                      <Code className="w-4 h-4 text-indigo-400" />
                      Food For Hungry — Global Ecosystem Platform
                    </h4>
                    <span className="text-xs text-slate-400 font-mono bg-slate-950 px-2 py-1 rounded border border-slate-800">
                      React • Node.js • ES6+ • Table Perf Optimization
                    </span>
                  </div>
                  
                  <ul className="text-sm text-slate-300 space-y-2 list-disc list-outside ml-4 leading-relaxed">
                    <li>Took end-to-end ownership of core React features, resolving performance bottlenecks and state bottlenecks.</li>
                    <li>Implemented high-speed client-side and server-side pagination with complex table data virtualization.</li>
                    <li>Collaborated closely with backend teams to streamline payload responses for faster page render cycles.</li>
                    <li>Authored comprehensive Technical Design Documents (TDD) and mentored junior associates on modern UI standards.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ROLE 2: DANFOSS */}
            <div className="relative pl-10 md:pl-16 group">
              <div className="absolute left-2.5 md:left-5.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-600 ring-4 ring-[#0a0f1d] group-hover:scale-125 group-hover:bg-cyan-500 transition"></div>

              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition">Engineer - Software Products</h3>
                    <div className="text-slate-300 font-medium text-sm">Danfoss Industries • Chennai, Tamil Nadu</div>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold w-fit">
                    05/2018 - 05/2025 (7 Years)
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-3 font-mono">
                  Stack: React.js, TypeScript, Angular, Node.js, Cypress, Azure DevOps, CI/CD, Microservices
                </p>

                <ul className="text-sm text-slate-300 space-y-2 list-disc list-outside ml-4 leading-relaxed">
                  <li>Engineered enterprise-grade React and Angular applications handling complex JSON/XML real-time industrial API streams.</li>
                  <li>Configured continuous integration and deployment pipelines on <strong className="text-white">Azure DevOps</strong>, increasing delivery reliability.</li>
                  <li>Architected and scaled custom microservices and RESTful CRUD endpoints for software product integrations.</li>
                  <li>Provided system-level performance optimization solutions, reducing load times across global multi-tenant tools.</li>
                  <li>Spearheaded early AI integration evaluations and LLM tooling to modernize legacy Danfoss codebases.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS MATRIX */}
        <section id="skills" className="scroll-mt-20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Terminal className="w-4 h-4" /> Technical Competencies
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Skills & Tech Stack</h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Technologies' },
                { id: 'frontend', label: 'Frontend & MFE' },
                { id: 'ai', label: 'AI & Next-Gen' },
                { id: 'backend', label: 'Backend & APIs' },
                { id: 'testingDevops', label: 'Testing & Cloud' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition ${
                    activeTab === tab.id 
                      ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30' 
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* FRONTEND */}
            {(activeTab === 'all' || activeTab === 'frontend') && (
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 transition">
                <div className="flex items-center gap-2.5 text-cyan-400 font-bold mb-3 text-sm">
                  <Layers className="w-4 h-4" />
                  <span>Frontend Architecture</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillsData.frontend.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 text-slate-200 border border-slate-700/60">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* AI CAPABILITIES */}
            {(activeTab === 'all' || activeTab === 'ai') && (
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 transition">
                <div className="flex items-center gap-2.5 text-teal-400 font-bold mb-3 text-sm">
                  <Bot className="w-4 h-4" />
                  <span>AI & Automation</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillsData.ai.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-xs bg-teal-950/40 text-teal-200 border border-teal-800/40 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* BACKEND */}
            {(activeTab === 'all' || activeTab === 'backend') && (
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 transition">
                <div className="flex items-center gap-2.5 text-indigo-400 font-bold mb-3 text-sm">
                  <Code className="w-4 h-4" />
                  <span>Backend & Data</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillsData.backend.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 text-slate-200 border border-slate-700/60">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* TESTING & DEVOPS */}
            {(activeTab === 'all' || activeTab === 'testingDevops') && (
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 transition">
                <div className="flex items-center gap-2.5 text-sky-400 font-bold mb-3 text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>Testing & DevOps</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillsData.testingDevops.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-xs bg-slate-800/80 text-slate-200 border border-slate-700/60">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>

        {/* EDUCATION, RESEARCH & CERTIFICATIONS */}
        <section id="education" className="scroll-mt-20 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4" /> Academic Rigor & Research
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Education, Research & Certifications</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Degree Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    CGPA 9.04 / 10
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">M.Tech - Software Engineering</h3>
                <p className="text-slate-300 text-sm mt-1">Vellore Institute of Technology (VIT)</p>
                <p className="text-xs text-slate-400">Chennai, Tamil Nadu • Graduated 08/2018</p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                Strong theoretical foundation in software architecture, distributed systems, and test frameworks.
              </div>
            </div>

            {/* Research Papers Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-indigo-400 mb-3">
                  <FileText className="w-6 h-6" />
                  <span className="text-xs uppercase font-bold tracking-wider">Published Research</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="text-xs font-semibold text-white">Development of Test Automation Framework for REST API Testing</div>
                    <div className="text-[11px] text-slate-400 mt-1">Journal of Computational and Theoretical Nanoscience</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="text-xs font-semibold text-white">Project Based Learning: An Innovative Teaching Approach</div>
                    <div className="text-[11px] text-slate-400 mt-1">Conceptual Learning and Engineering Problem Solving</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-2 text-[11px] text-indigo-300 font-medium">
                Applied research in production API testing automation.
              </div>
            </div>

            {/* Certifications Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 mb-3">
                  <Award className="w-6 h-6" />
                  <span className="text-xs uppercase font-bold tracking-wider">Industry Certifications</span>
                </div>
                <div className="space-y-2">
                  {[
                    "Professional Scrum Developer (PSD)",
                    "Mastering React",
                    "Professional Scrum Master (PSM)",
                    "AI Prompts & Prompt Engineering"
                  ].map((cert, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/90 text-xs text-slate-200 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-2 text-[11px] text-emerald-400 font-medium">
                Scrum-certified delivery with AI-accelerated workflows.
              </div>
            </div>

          </div>
        </section>

        {/* CALL TO ACTION / CONTACT */}
        <section id="contact" className="scroll-mt-20">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-cyan-900/30 via-slate-900 to-indigo-900/30 border border-slate-800 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Accelerate Your Engineering Team?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
              Whether you need someone to lead a complex Micro Frontend migration, optimize React web apps, or integrate custom AI capabilities, let's connect.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a 
                href="mailto:venkatraj1996@gmail.com" 
                className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold flex items-center gap-2 transition shadow-lg shadow-cyan-500/25"
              >
                <Mail className="w-4 h-4" />
                <span>venkatraj1996@gmail.com</span>
              </a>

              <a 
                href="tel:8667252480" 
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold flex items-center gap-2 border border-slate-700 transition"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+91 8667252480</span>
              </a>
            </div>
            
            <div className="text-xs text-slate-500 pt-4">
              Located in Perungudi, Chennai, Tamil Nadu • Open to Leadership & Principal Engineering roles.
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-slate-800/80 bg-[#080c18] py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Venkatraj Selvakumar. Crafted for recruiters & engineering teams.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Opportunities
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}