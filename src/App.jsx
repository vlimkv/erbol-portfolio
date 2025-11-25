import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, User, Download, Award, Trophy, Target, TrendingUp } from 'lucide-react';

const PlayerPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { label: 'About', id: 'hero', Icon: User },
    { label: 'Achievements', id: 'achievements', Icon: Award },
    { label: 'Contact', id: 'contact', Icon: Download },
  ];

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
        const headerHeight = 60;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementPosition - headerHeight - 10,
            behavior: 'smooth'
        });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Animated Football Pattern Background */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #10b981 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-green-400 to-lime-400 transition-all duration-300 shadow-lg shadow-emerald-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/98 backdrop-blur-xl z-40 border-b border-emerald-500/20 pt-1">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg shadow-emerald-500/30">
                YA
              </div>
              <div>
                <h1 className="font-bold text-base sm:text-lg tracking-tight">Yerbol Amankeldi</h1>
                <p className="text-xs sm:text-sm text-emerald-400 uppercase tracking-wider font-semibold">Central Midfielder</p>
              </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-emerald-400 transition-colors font-medium uppercase text-xs lg:text-sm tracking-wider"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed left-0 right-0 bg-zinc-950/98 backdrop-blur-md z-50 overflow-y-auto pt-4 pb-20 transition-transform duration-300"
            style={{ top: '60px', height: 'calc(100vh - 60px)' }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-4 w-full text-left px-6 py-4 text-xl hover:bg-emerald-500/10 transition-colors uppercase tracking-wider font-semibold border-b border-zinc-800"
              >
                <item.Icon size={24} className="text-emerald-400 flex-shrink-0" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

            {/* Image */}
            <div className="relative order-2 md:order-1 max-w-sm mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-green-500/30 rounded-3xl blur-3xl animate-pulse" />
              <div className="relative">
                <img
                  src="/src/assets/photo.webp"
                  alt="Yerbol Amankeldi"
                  className="relative rounded-3xl shadow-2xl w-full max-w-sm mx-auto border-4 border-emerald-500/30"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:-bottom-8 sm:-right-8 sm:w-32 sm:h-32 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center font-black text-4xl sm:text-5xl shadow-2xl shadow-emerald-500/50 border-4 border-black">
                  97
                </div>
              </div>
            </div>

            {/* Text block */}
            <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
              <div className="inline-block px-4 py-1 sm:px-6 sm:py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full border-2 border-emerald-500/50 mb-4 backdrop-blur-sm">
                <span className="text-emerald-400 font-bold tracking-wider text-sm sm:text-base">#97 • FC ASTANA / VIKTORIA KÖLN</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter">
                YERBOL
                <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                  AMANKELDI
                </span>
              </h1>

              <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-emerald-500 to-green-500" />

              <p className="text-base sm:text-xl text-zinc-300 leading-relaxed max-w-lg">
                Central midfielder with ambitions for professional football.
                Academy graduate striving for excellence every day.
              </p>

              <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4 text-zinc-400 text-sm sm:text-base">
                <div className="flex items-center space-x-3">
                  <Calendar size={20} className="text-emerald-400" />
                  <span className="font-medium">19.11.2008 (17 years old)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-emerald-400" />
                  <span className="font-medium">Kazakhstan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User size={20} className="text-emerald-400" />
                  <span className="font-medium">181 cm / 5'11" • 71 kg / 157 lbs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy size={20} className="text-emerald-400" />
                  <span className="font-medium">Position: CM / CAM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target size={20} className="text-emerald-400" />
                  <span className="font-medium">Preferred foot: Both</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl font-bold uppercase tracking-wider hover:shadow-2xl hover:shadow-emerald-500/50 transition-all transform hover:scale-105 hover:-translate-y-1 text-sm sm:text-base"
                >
                  Get in Touch
                </button>
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-zinc-900 border-2 border-emerald-500/30 rounded-xl font-bold uppercase tracking-wider hover:bg-zinc-800 hover:border-emerald-500/50 transition-all flex items-center space-x-2 text-sm sm:text-base">
                  <Download size={20} />
                  <span>CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-16 sm:py-20 px-4 border-t border-emerald-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-emerald-400 uppercase tracking-widest text-xs sm:text-sm font-bold mb-3">CAREER</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter">
              ACHIEVEMENTS <span className="text-emerald-400">& SKILLS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-zinc-900 p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-500/60 transition-all">
                <Award className="w-10 h-10 sm:w-14 sm:h-14 text-emerald-400 mb-4 sm:mb-6" strokeWidth={2.5} />
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 tracking-tight">Academy Graduate</h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">Completed all stages of FC Astana youth academy</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-zinc-900 p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-500/60 transition-all">
                <Trophy className="w-10 h-10 sm:w-14 sm:h-14 text-emerald-400 mb-4 sm:mb-6" strokeWidth={2.5} />
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 tracking-tight">International Experience</h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">Experience at Viktoria Köln, Germany</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-zinc-900 p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-500/60 transition-all">
                <Target className="w-10 h-10 sm:w-14 sm:h-14 text-emerald-400 mb-4 sm:mb-6" strokeWidth={2.5} />
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 tracking-tight">Versatility</h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">Capable of playing multiple positions in midfield</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-zinc-900 p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-500/60 transition-all">
                <TrendingUp className="w-10 h-10 sm:w-14 sm:h-14 text-emerald-400 mb-4 sm:mb-6" strokeWidth={2.5} />
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 tracking-tight">High Potential</h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">Young talent with significant room for development</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl blur-2xl" />
            <div className="relative bg-zinc-900 p-6 sm:p-10 rounded-2xl border-2 border-emerald-500/30">
              <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8 tracking-tight">KEY SKILLS</h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { skill: 'Vision & Awareness', value: 75 },
                  { skill: 'Technical Ability', value: 70 },
                  { skill: 'Physical Fitness', value: 80 },
                  { skill: 'Tactical Discipline', value: 85 }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2 sm:mb-3">
                      <span className="font-bold text-base sm:text-lg uppercase tracking-wide">{item.skill}</span>
                      <span className="text-emerald-400 font-black text-lg sm:text-xl">{item.value}%</span>
                    </div>
                    <div className="h-2 sm:h-3 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full transition-all duration-1000 shadow-lg shadow-emerald-500/50"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 border-t border-emerald-500/20">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="mb-10 sm:mb-12">
            <p className="text-emerald-400 uppercase tracking-widest text-xs sm:text-sm font-bold mb-3">CONTACT</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 sm:mb-6">
              GET IN <span className="text-emerald-400">TOUCH</span>
            </h2>
            <p className="text-base sm:text-xl text-zinc-400 leading-relaxed">
              Open to offers from clubs and agents
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur-2xl" />
            <div className="relative bg-zinc-900 p-6 sm:p-10 rounded-2xl border-2 border-emerald-500/30">
              <div className="space-y-4 mb-6 sm:mb-8">
                <a
                  href="https://www.transfermarkt.world/erbol-amankeldy/profil/spieler/1399833"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 sm:px-8 sm:py-4 bg-zinc-800 border-2 border-emerald-500/30 rounded-xl hover:bg-zinc-700 hover:border-emerald-500/60 transition-all font-bold uppercase tracking-wider text-sm sm:text-base"
                >
                  Transfermarkt Profile
                </a>
              </div>

              <a
                href="mailto:erbol.amankeldi.contact@example.com?subject=Inquiry%20about%20Yerbol%20Amankeldi&body=Hello,%20we%20are%20interested%20in%20..."
                className="w-full px-6 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl font-black uppercase tracking-wider hover:shadow-2xl hover:shadow-emerald-500/50 transition-all transform hover:scale-105 hover:-translate-y-1 text-base sm:text-lg inline-block"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 px-4 border-t border-emerald-500/20 bg-black">
        <div className="container mx-auto text-center text-zinc-500">
          <div className="flex items-center justify-center space-x-3 mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center font-bold text-base sm:text-xl shadow-lg shadow-emerald-500/30">
              YA
            </div>
          </div>
          <p className="font-semibold text-zinc-400 text-sm sm:text-base mb-1 sm:mb-2">© 2025 Yerbol Amankeldi</p>
          <p className="text-xs uppercase tracking-wider text-emerald-400/70">FC Astana / Viktoria Köln</p>
        </div>
      </footer>
    </div>
  );
};

export default PlayerPortfolio;