import React from 'react';
import { 
  Compass, 
  Rocket, 
  Users, 
  TrendingUp, 
  Award, 
  Target, 
  Lightbulb, 
  ChevronRight,
  Sparkles,
  Zap,
  Activity,
  Cpu,
  ArrowUpRight
} from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { label: "Startups Showcased", value: "150+", glow: "from-[#FF5733] to-amber-400", shadow: "hover:shadow-[#FF5733]/25" },
    { label: "Footfall & Attendees", value: "25,000+", glow: "from-amber-400 to-orange-400", shadow: "hover:shadow-amber-400/25" },
    { label: "Angel & VC Investors", value: "60+", glow: "from-[#FF5733] to-amber-400", shadow: "hover:shadow-[#FF5733]/25" },
    { label: "Investment & Grants", value: "₹5 Cr+", glow: "from-emerald-400 to-amber-300", shadow: "hover:shadow-emerald-400/25" },
    { label: "Internships Offered", value: "200+", glow: "from-orange-400 to-[#FF5733]", shadow: "hover:shadow-orange-400/25" }
  ];

  const zones = [
    { 
      name: "DeepTech & AI", 
      pavilion: "Pavilion 01",
      desc: "Frontier technology, robotics, generative AI, machine intelligence, and automation.", 
      icon: Cpu,
      color: "text-[#FF5733]",
      borderGlow: "hover:border-[#FF5733]/60",
      bgGlow: "bg-[#FF5733]/15",
      shadow: "hover:shadow-[#FF5733]/20"
    },
    { 
      name: "FinTech & Web3", 
      pavilion: "Pavilion 02",
      desc: "Next-gen banking, DeFi, institutional digital payments, and cybersecurity.", 
      icon: TrendingUp,
      color: "text-amber-400",
      borderGlow: "hover:border-amber-400/60",
      bgGlow: "bg-amber-400/15",
      shadow: "hover:shadow-amber-400/20"
    },
    { 
      name: "AgriTech & Food", 
      pavilion: "Pavilion 03",
      desc: "Smart precision farming, farm-to-table supply chains, drone analytics, and food security.", 
      icon: Compass,
      color: "text-emerald-400",
      borderGlow: "hover:border-emerald-400/60",
      bgGlow: "bg-emerald-400/15",
      shadow: "hover:shadow-emerald-400/20"
    },
    { 
      name: "HealthTech & Bio", 
      pavilion: "Pavilion 04",
      desc: "Telemedicine, AI-assisted diagnostic innovations, biotechnology, and therapeutics.", 
      icon: Activity,
      color: "text-rose-400",
      borderGlow: "hover:border-rose-400/60",
      bgGlow: "bg-rose-400/15",
      shadow: "hover:shadow-rose-400/20"
    },
    { 
      name: "CleanTech & Green", 
      pavilion: "Pavilion 05",
      desc: "EV mobility, renewable grid power, battery storage, and circular waste solutions.", 
      icon: Award,
      color: "text-cyan-400",
      borderGlow: "hover:border-cyan-400/60",
      bgGlow: "bg-cyan-400/15",
      shadow: "hover:shadow-cyan-400/20"
    },
    { 
      name: "Student Innovation", 
      pavilion: "Pavilion 06",
      desc: "Breakthrough campus ventures, lab prototypes, young inventors, and student founders.", 
      icon: Rocket,
      color: "text-orange-400",
      borderGlow: "hover:border-orange-500/60",
      bgGlow: "bg-orange-400/15",
      shadow: "hover:shadow-orange-500/20"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-[#FF5733] selection:text-white overflow-hidden">
      
      {/* ===================== AMBIENT LIGHTING & GRID SYSTEM ===================== */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top Central Ambient Flare */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#FF5733]/25 via-amber-500/15 to-transparent blur-[140px] rounded-full" />
        
        {/* Left Side Rim Light (Cool Indigo/Cyan Contrast) */}
        <div className="absolute top-[22%] -left-32 w-[550px] h-[550px] bg-indigo-600/10 blur-[150px] rounded-full" />
        
        {/* Right Side Warm Flare */}
        <div className="absolute top-[48%] -right-32 w-[600px] h-[600px] bg-[#FF5733]/15 blur-[160px] rounded-full" />
        
        {/* Bottom Ambient Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full" />
        
        {/* Top Horizontal Laser Beam Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#FF5733] to-transparent shadow-[0_0_20px_#FF5733]" />
      </div>

      {/* Grid Pattern Overlay with Radial Mask */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 15%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 15%, #000 30%, transparent 100%)'
        }}
      />

      {/* ===================== MAIN CONTENT ===================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-24">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          
          {/* Status Badge with Live Pulsing Light */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#FF5733]/40 bg-gradient-to-r from-[#FF5733]/15 via-amber-500/10 to-transparent backdrop-blur-md text-xs font-semibold text-orange-400 mb-8 shadow-[0_0_25px_rgba(255,87,51,0.25)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5733] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5733]" />
            </span>
            <span className="tracking-wide uppercase text-[11px] font-bold">COEP Technological University • I&E-Cell</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-medium">PSF '27 Edition</span>
          </div>

          {/* Illuminated Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Empowering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5733] via-amber-400 to-[#FF7A45] drop-shadow-[0_0_30px_rgba(255,87,51,0.4)]">
              Innovators
            </span> of Tomorrow
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            <strong className="text-white font-semibold">Pune Startup Fest (PSF '27)</strong> is India's premier student-driven entrepreneurial summit. Catalyzing disruption into scalable commercial ventures across technology, capital, and governance.
          </p>

          {/* Theme Banner Card with Border Glow */}
          <div className="relative group bg-slate-900/70 border border-slate-800/90 rounded-2xl p-4 sm:p-5 backdrop-blur-xl max-w-2xl mx-auto shadow-2xl hover:border-[#FF5733]/50 transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF5733]/10 via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-medium">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF5733]/20 text-[#FF5733] shadow-[0_0_12px_rgba(255,87,51,0.3)]">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="text-slate-400">Official PSF '27 Theme:</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 font-bold tracking-tight">
                "Navigating the Digital Maze: From Disruption to Direction"
              </span>
            </div>
          </div>
        </div>

        {/* ===================== STATS GRID WITH LIGHT ACCENTS ===================== */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-24">
          {stats.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 text-center backdrop-blur-xl hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 shadow-lg ${item.shadow} ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              {/* Internal Top Glow on Hover */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-10 bg-[#FF5733]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className={`text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.glow} mb-1.5 tracking-tight drop-shadow-[0_0_20px_rgba(255,87,51,0.25)]`}>
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* ===================== VISION & MISSION (DUAL LIGHTING) ===================== */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          
          {/* Vision Card */}
          <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-[#0b101b] border border-slate-800/90 rounded-3xl p-8 sm:p-10 overflow-hidden group hover:border-[#FF5733]/50 hover:shadow-[0_0_45px_rgba(255,87,51,0.18)] transition-all duration-300">
            {/* Top Glow Strip */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF5733] to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
            {/* Internal Light Bloom */}
            <div className="absolute -right-16 -top-16 w-44 h-44 bg-[#FF5733]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FF5733]/25 transition-all" />
            
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF5733]/20 to-[#FF5733]/5 border border-[#FF5733]/30 flex items-center justify-center text-[#FF5733] mb-6 shadow-[0_0_20px_rgba(255,87,51,0.25)]">
              <Target className="w-7 h-7" />
            </div>
            
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5733] block mb-2">Direction & Scale</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Vision for PSF '27</h2>
            <p className="text-slate-300/90 leading-relaxed text-sm sm:text-base">
              To emerge as a transformative center of gravity in India's startup paradigm by nurturing grassroots 
              ingenuity, empowering student changemakers, and building an inclusive, high-impact entrepreneurial ecosystem.
            </p>
          </div>

          {/* Mission Card */}
          <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-[#0b101b] border border-slate-800/90 rounded-3xl p-8 sm:p-10 overflow-hidden group hover:border-amber-400/50 hover:shadow-[0_0_45px_rgba(245,158,11,0.18)] transition-all duration-300">
            {/* Top Glow Strip */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
            {/* Internal Light Bloom */}
            <div className="absolute -right-16 -top-16 w-44 h-44 bg-amber-400/15 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-400/25 transition-all" />
            
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-400/5 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
              <Rocket className="w-7 h-7" />
            </div>
            
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">Execution & Capital</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-300/90 leading-relaxed text-sm sm:text-base">
              To bridge the gap between academic innovation and market viability. We offer actionable mentorship, 
              institutional capital access, structured business validation, and direct networking with top venture leaders.
            </p>
          </div>

        </div>

        {/* ===================== STARTUP EXPO ZONES ===================== */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-800 bg-slate-900/80 text-slate-300 text-xs font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5733]" />
              <span>6 Flagship Arenas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              PSF '27 Flagship Zones
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Discover specialized domains shaping industries, emerging markets, and deep technological frontiers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone, idx) => {
              const Icon = zone.icon;
              return (
                <div 
                  key={idx} 
                  className={`group relative bg-slate-900/40 border border-slate-800/90 rounded-2xl p-7 hover:bg-slate-900/80 ${zone.borderGlow} ${zone.shadow} transition-all duration-300 hover:-translate-y-1 overflow-hidden backdrop-blur-sm`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${zone.bgGlow} border border-white/10 ${zone.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50">
                      {zone.pavilion}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors flex items-center gap-1.5">
                    {zone.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {zone.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================== LEGACY & ORGANIZERS (COMMAND CENTER CTA) ===================== */}
        <div className="relative bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-[#090D15] border border-slate-800/90 rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Subtle Glow Pod in Background */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-44 bg-gradient-to-r from-[#FF5733]/25 via-amber-500/20 to-transparent blur-3xl pointer-events-none rounded-full" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-5">
            COEP Heritage • 10+ Years of Innovation
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            Organized by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5733] to-amber-400">I&E-Cell, COEP Tech</span>
          </h2>

          <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Established at COEP Technological University (one of Asia's oldest and most prestigious engineering institutes), 
            the Innovation & Entrepreneurship Cell has been instrumental in seeding multi-million-dollar ventures, 
            incubation programs, and national industry-academia collaborations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a 
              href="#register" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF5733] via-[#ff6a48] to-amber-500 text-white font-bold text-sm shadow-[0_0_30px_rgba(255,87,51,0.4)] hover:shadow-[0_0_45px_rgba(255,87,51,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Register for PSF '27</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a 
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm hover:border-slate-500 transition-all duration-200"
            >
              Connect With Our Team
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
