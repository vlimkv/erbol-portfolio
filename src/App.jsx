import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Calendar, MapPin, User, Download, 
  Award, Trophy, Target, TrendingUp, ChevronRight, 
  ExternalLink, Mail
} from 'lucide-react';

const WhatsAppIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className={className}
    fill="currentColor"
  >
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
);

const PlayerPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Profile', id: 'hero' },
    { label: 'Stats & Skills', id: 'stats' },
    { label: 'Journey', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  const stats = [
    { label: 'Matches Played', value: '85+' },
    { label: 'Pass Accuracy', value: '88%' },
    { label: 'Goals/Assists', value: '12/18' },
    { label: 'Distance/90min', value: '11.2km' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      
      {/* --- Background Ambience --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle noise texture could be added here via CSS */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* --- Scroll Progress Bar --- */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 via-green-400 to-lime-400 shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* --- Navigation --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center font-black text-black text-xl shadow-lg shadow-emerald-900/20 group-hover:shadow-emerald-500/40 transition-all duration-300">
              YA
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg tracking-tight leading-none group-hover:text-emerald-400 transition-colors">YERBOL AMANKELDI</h1>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">Midfielder</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium uppercase tracking-wider text-zinc-400 hover:text-white transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button className="px-5 py-2 bg-white text-black text-sm font-bold uppercase tracking-wide rounded hover:bg-emerald-400 transition-colors duration-300">
              Download CV
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-zinc-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`md:hidden absolute top-20 left-0 w-full bg-zinc-950 border-b border-zinc-800 shadow-2xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl font-black text-white/80 hover:text-emerald-400 text-left uppercase tracking-tight"
              >
                {item.label}
              </button>
            ))}
            <button className="mt-4 w-full py-4 bg-emerald-600 text-white font-bold uppercase rounded-xl">
              Download CV
            </button>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content */}
            <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Available for Transfer</span>
              </div>

              {/* Main Heading */}
              <div className="relative">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white">
                  YERBOL
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400">
                    AMANKELDI
                  </span>
                </h1>
                
                {/* Decorative Elements behind text */}
                <div className="absolute -z-10 top-1/2 left-0 w-64 h-64 bg-emerald-500/20 blur-[100px]" />
              </div>

              <p className="text-lg sm:text-xl text-zinc-400 max-w-xl leading-relaxed border-l-4 border-emerald-500 pl-6">
                A dynamic <strong>Central Midfielder</strong> combining tactical intelligence with technical excellence. Academy graduate of FC Astana with international experience in Germany.
              </p>

              {/* Bio Data Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {[
                  { icon: Calendar, label: 'Age', value: '17 Years' },
                  { icon: MapPin, label: 'Nation', value: 'Kazakhstan' },
                  { icon: User, label: 'Height', value: '181 cm' },
                  { icon: Target, label: 'Foot', value: 'Both' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-white/5">
                    <item.icon className="text-emerald-500 w-5 h-5" />
                    <div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wider">{item.label}</div>
                      <div className="font-bold text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-1"
                >
                  Contact Agent
                </button>
                <button 
                   onClick={() => scrollToSection('achievements')}
                   className="px-8 py-4 bg-zinc-900 border border-zinc-700 rounded-lg font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center gap-2"
                >
                  View Career <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Hero Image / Jersey Number */}
            <div className={`lg:col-span-5 relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative z-10">
                {/* Abstract Card Shape behind image */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-3xl transform rotate-3 scale-95 border border-white/5" />
                
                {/* Main Image Card */}
                <div className="relative bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  {/* Jersey Number Badge */}
                  <div className="absolute top-6 right-6 z-20 w-20 h-20 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                    <span className="text-4xl font-black text-black">97</span>
                  </div>

                  {/* Gradient Overlay for photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 opacity-80" />
                  
                  {/* Placeholder for Player Image - using a gradient div if no image */}
                  <div className="aspect-[4/5] w-full bg-zinc-800 relative">
                     <img 
                      src="/photo.webp" 
                      alt="Yerbol Amankeldi" 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('bg-gradient-to-b', 'from-zinc-700', 'to-zinc-900', 'flex', 'items-center', 'justify-center');
                        e.target.parentElement.innerHTML = '<span class="text-zinc-600 font-black text-6xl uppercase opacity-20">Player Img</span>';
                      }}
                    />
                  </div>

                  <div className="absolute bottom-6 left-6 z-20">
                     <p className="text-emerald-400 font-bold tracking-widest text-sm uppercase mb-1">Current Club</p>
                     <p className="text-2xl font-black text-white">FC ASTANA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Key Statistics Strip --- */}
      <section id="stats" className="py-12 border-y border-white/5 bg-zinc-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group cursor-default">
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- Skills & Achievements --- */}
      <section id="achievements" className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
             <div>
                <span className="text-emerald-500 font-bold tracking-widest uppercase mb-2 block">Career Highlights</span>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  SKILLS & <br/> <span className="text-zinc-600">EXPERIENCE</span>
                </h2>
             </div>
             <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed text-right md:text-left">
                Versatile playmaker capable of dictating tempo or attacking the box. Educated in modern European pressing tactics.
             </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Col: Skill Bars */}
            <div className="space-y-10">
               <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 shadow-2xl">
                 <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                   <TrendingUp className="text-emerald-500" /> Technical Analysis
                 </h3>
                 <div className="space-y-8">
                   {[
                     { skill: 'Vision & Passing', val: 88 },
                     { skill: 'Ball Control', val: 85 },
                     { skill: 'Tactical Awareness', val: 90 },
                     { skill: 'Stamina / Workrate', val: 92 }
                   ].map((item, i) => (
                     <div key={i}>
                       <div className="flex justify-between mb-2">
                         <span className="font-bold text-sm uppercase tracking-wider">{item.skill}</span>
                         <span className="text-emerald-400 font-mono font-bold">{item.val}/100</span>
                       </div>
                       <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                         <div 
                           className="h-full bg-gradient-to-r from-emerald-600 to-lime-400 rounded-full"
                           style={{ width: `${item.val}%`, transition: 'width 1.5s ease-out' }} 
                         />
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            {/* Right Col: Experience Cards */}
            <div className="grid gap-6">
              {[
                { 
                  icon: Trophy, 
                  title: "Viktoria Köln", 
                  sub: "International Experience", 
                  desc: "Gained valuable experience in the German football system, adapting to high-intensity pressing and tactical discipline." 
                },
                { 
                  icon: Award, 
                  title: "FC Astana Academy", 
                  sub: "Youth Development", 
                  desc: "Completed full academy cycle with one of Kazakhstan's premier clubs. Consistent starter for U17/U19 squads." 
                },
                { 
                  icon: Target, 
                  title: "Tactical Versatility", 
                  sub: "Midfield General", 
                  desc: "Comfortable operating as a #8 (Box-to-Box), #10 (Playmaker), or #6 (Deep Lying Playmaker) depending on team needs." 
                }
              ].map((card, idx) => (
                <div key={idx} className="group p-6 md:p-8 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
                      <card.icon className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{card.title}</h4>
                      <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 block">{card.sub}</span>
                      <p className="text-zinc-400 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-zinc-950 pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-block p-2 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">
              Open for Opportunities
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
            READY TO MAKE AN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">
              IMPACT
            </span>
          </h2>

          <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
            Currently available for trials and transfer negotiations.
            Representative inquiries are welcome via WhatsApp or email.
          </p>

          {/* Блок с кнопками */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            {/* Основные CTA: WhatsApp + Email */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a
                href="https://wa.me/77761206418"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-5 bg-emerald-500 text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 hover:bg-emerald-400 transition-all duration-300 shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-3"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp</span>
                <span className="hidden xl:inline text-xs font-semibold tracking-[0.25em] opacity-70">
                  +7 776 120 64 18
                </span>
              </a>

              <a
                href="mailto:amankeldierbol1@gmail.com"
                className="w-full sm:w-auto px-8 py-5 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 hover:bg-zinc-100 transition-all duration-300 shadow-xl shadow-white/10 flex items-center justify-center gap-3"
              >
                <Mail size={20} />
                <span>Email</span>
                <span className="hidden xl:inline text-[11px] font-semibold tracking-[0.22em] opacity-70">
                  amankeldierbol1@gmail.com
                </span>
              </a>
            </div>

            {/* Transfermarkt – отдельная кнопка */}
            <a
              href="https://www.transfermarkt.world"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto px-10 py-5 bg-zinc-900 border border-zinc-700 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-800 hover:border-emerald-500/50 transition-all flex items-center justify-center gap-3"
            >
              Transfermarkt <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-black border-t border-zinc-900 py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-zinc-500">
               YA
             </div>
             <div>
               <p className="text-white font-bold tracking-wide">YERBOL AMANKELDI</p>
               <p className="text-zinc-600 text-xs uppercase tracking-widest">Professional Footballer</p>
             </div>
          </div>
          
          <div className="text-zinc-600 text-sm">
             © 2025. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlayerPortfolio;