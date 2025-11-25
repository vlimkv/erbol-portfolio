import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, User, Download, Award, Trophy, Target, TrendingUp } from 'lucide-react';

const PlayerPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); // Не используется в текущей логике
  const [scrollProgress, setScrollProgress] = useState(0);

  // --- НОВЫЙ МАССИВ ДЛЯ НАВИГАЦИИ (включает иконки) ---
  const navItems = [
    { label: 'О себе', id: 'hero', Icon: User },
    { label: 'Статистика', id: 'stats', Icon: TrendingUp },
    { label: 'Матчи', id: 'matches', Icon: Target },
    { label: 'Достижения', id: 'achievements', Icon: Award },
    { label: 'Контакты', id: 'contact', Icon: Download },
  ];
  // ----------------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- ИСПРАВЛЕНО: УДАЛЕН useEffect, который блокировал скролл на body ---
  // Проблема была в том, что этот useEffect блокировал прокрутку всей страницы,
  // из-за чего казалось, что контент внизу "не виден".

  const stats = [
    { label: 'Матчей', value: '14' },
    { label: 'Голов', value: '0' },
    { label: 'Передач', value: '1' },
    { label: 'Минут', value: '201' }
  ];

  const matches = [
    { round: '22', opponent: 'Жас Кыран U18', result: '2-1', home: true, date: '25.10.2025', minutes: 4 },
    { round: '21', opponent: 'Ордабасы U18', result: '0-1', home: false, date: '18.10.2025', minutes: 1 },
    { round: '20', opponent: 'Тобол U18', result: '5-1', home: true, date: '05.10.2025', minutes: 33 },
    { round: '19', opponent: 'Шахтёр U18', result: '2-4', home: false, date: '27.09.2025', minutes: 2 },
    { round: '18', opponent: 'Кайсар U18', result: '1-1', home: false, date: '20.09.2025', minutes: 5 }
  ];

  const scrollToSection = (id) => {
    // Добавлен небольшой отступ, чтобы секция не пряталась под фиксированным хедером
    const element = document.getElementById(id);
    if (element) {
        const headerHeight = 60; // Примерная высота вашего хедера (60px)
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementPosition - headerHeight - 10, // Скролл чуть выше секции
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
                EA
              </div>
              <div>
                <h1 className="font-bold text-base sm:text-lg tracking-tight">Ербол Аманкелди</h1>
                <p className="text-xs sm:text-sm text-emerald-400 uppercase tracking-wider font-semibold">Центральный полузащитник</p>
              </div>
            </div>

            {/* Десктопное меню */}
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
              aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Мобильное меню - Исправлено: иконки добавлены, стили для скролла проверены */}
        {isMenuOpen && (
          <div 
            // Использование фиксированной высоты h-[calc(100vh-60px)] для гарантированной прокрутки
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

            {/* Изображение - первый элемент на мобильных устройствах */}
            <div className="relative order-2 md:order-1 max-w-sm mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-green-500/30 rounded-3xl blur-3xl animate-pulse" />
              <div className="relative">
                <img
                  src="https://api.qjl.kz/storage/profile-images/0bc7850a-0b56-4f40-935f-1df1e8612300.webp"
                  alt="Ербол Аманкелди"
                  className="relative rounded-3xl shadow-2xl w-full max-w-sm mx-auto border-4 border-emerald-500/30"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:-bottom-8 sm:-right-8 sm:w-32 sm:h-32 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center font-black text-4xl sm:text-5xl shadow-2xl shadow-emerald-500/50 border-4 border-black">
                  97
                </div>
              </div>
            </div>

            {/* Текстовый блок - второй элемент на мобильных устройствах */}
            <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
              <div className="inline-block px-4 py-1 sm:px-6 sm:py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full border-2 border-emerald-500/50 mb-4 backdrop-blur-sm">
                <span className="text-emerald-400 font-bold tracking-wider text-sm sm:text-base">#97 • АСТАНА U18</span>
              </div>

              {/* Адаптивные размеры шрифта для имени */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter">
                ЕРБОЛ
                <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                  АМАНКЕЛДИ
                </span>
              </h1>

              <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-emerald-500 to-green-500" />

              <p className="text-base sm:text-xl text-zinc-300 leading-relaxed max-w-lg">
                Центральный полузащитник с амбициями на большой футбол.
                Воспитанник клуба, стремящийся к совершенству каждый день.
              </p>

              <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4 text-zinc-400 text-sm sm:text-base">
                <div className="flex items-center space-x-3">
                  <Calendar size={20} className="text-emerald-400" />
                  <span className="font-medium">19.11.2008 (17 лет)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-emerald-400" />
                  <span className="font-medium">Казахстан</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User size={20} className="text-emerald-400" />
                  <span className="font-medium">177 см • 58 кг</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl font-bold uppercase tracking-wider hover:shadow-2xl hover:shadow-emerald-500/50 transition-all transform hover:scale-105 hover:-translate-y-1 text-sm sm:text-base"
                >
                  Связаться
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

      {/* Stats Section */}
      <section id="stats" className="relative py-16 sm:py-20 px-4 border-y border-emerald-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 to-black" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-emerald-400 uppercase tracking-widest text-xs sm:text-sm font-bold mb-3">СЕЗОН 2025</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter">
              СТАТИСТИКА <span className="text-emerald-400">QJL</span>
            </h2>
          </div>

          {/* Адаптивное отображение 4-х колонок - 2 на мобильном, 4 на md+ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-zinc-900 p-4 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-500 transition-all group-hover:transform group-hover:scale-105">
                  <div className="text-4xl sm:text-6xl font-black mb-1 sm:mb-2 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-zinc-400 uppercase tracking-wider font-semibold text-xs sm:text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Адаптивное отображение 3-х диаграмм - 1 на мобильном, 3 на md+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Диаграмма 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-zinc-900 p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/30">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                    <circle
                      cx="80" cy="80" r="70"
                      stroke="#18181b"
                      strokeWidth="14"
                      fill="none"
                    />
                    <circle
                      cx="80" cy="80" r="70"
                      stroke="url(#gradient)"
                      strokeWidth="14"
                      fill="none"
                      strokeDasharray="440"
                      strokeDashoffset={440 - (440 * 7) / 100}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#84cc16" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-black text-emerald-400">7%</div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">В основе</div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-zinc-400 font-medium text-sm sm:text-base">Процент игр в стартовом составе</p>
              </div>
            </div>

            {/* Диаграмма 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-zinc-900 p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/30">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                    <circle
                      cx="80" cy="80" r="70"
                      stroke="#18181b"
                      strokeWidth="14"
                      fill="none"
                    />
                    <circle
                      cx="80" cy="80" r="70"
                      stroke="url(#gradient2)"
                      strokeWidth="14"
                      fill="none"
                      strokeDasharray="440"
                      strokeDashoffset={440 - (440 * 73) / 100}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#84cc16" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-black text-emerald-400">73%</div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Передачи</div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-zinc-400 font-medium text-sm sm:text-base">Точность передач (64/88)</p>
              </div>
            </div>

            {/* Диаграмма 3 */}
            <div className="relative group col-span-full sm:col-span-1 md:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-zinc-900 p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/30">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                    <circle
                      cx="80" cy="80" r="70"
                      stroke="#18181b"
                      strokeWidth="14"
                      fill="none"
                    />
                    <circle
                      cx="80" cy="80" r="70"
                      stroke="url(#gradient3)"
                      strokeWidth="14"
                      fill="none"
                      strokeDasharray="440"
                      strokeDashoffset={440 - (440 * 37) / 100}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#84cc16" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-black text-emerald-400">37%</div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Дуэли</div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-zinc-400 font-medium text-sm sm:text-base">Успешность единоборств (26/71)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matches Section */}
      <section id="matches" className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-emerald-400 uppercase tracking-widest text-xs sm:text-sm font-bold mb-3">QJL 2025</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter">
              ПОСЛЕДНИЕ <span className="text-emerald-400">МАТЧИ</span>
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {matches.map((match, idx) => (
              <div
                key={idx}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-zinc-900 p-4 sm:p-6 rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-500/60 transition-all">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">

                    {/* Информация о матче */}
                    <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex-shrink-0 flex items-center justify-center font-black text-lg sm:text-xl shadow-lg shadow-emerald-500/30">
                        {match.round}
                      </div>
                      <div className='min-w-0'>
                        <div className="font-bold text-base sm:text-lg tracking-tight truncate">
                          {match.home ? 'Астана U18' : match.opponent} - {match.home ? match.opponent : 'Астана U18'}
                        </div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">{match.date}</div>
                      </div>
                    </div>

                    {/* Результат и минуты */}
                    <div className="flex items-center space-x-6 sm:space-x-8 w-full sm:w-auto justify-end">
                      <div className="text-2xl sm:text-3xl font-black text-emerald-400">{match.result}</div>
                      <div className="text-right">
                        <div className="text-2xl sm:text-3xl font-black text-white">{match.minutes}'</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">минут</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-16 sm:py-20 px-4 border-t border-emerald-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-emerald-400 uppercase tracking-widest text-xs sm:text-sm font-bold mb-3">КАРЬЕРА</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter">
              ДОСТИЖЕНИЯ <span className="text-emerald-400">& НАВЫКИ</span>
            </h2>
          </div>

          {/* Адаптивная сетка 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-zinc-900 p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-500/60 transition-all">
                <Award className="w-10 h-10 sm:w-14 sm:h-14 text-emerald-400 mb-4 sm:mb-6" strokeWidth={2.5} />
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 tracking-tight">Воспитанник клуба</h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">Прошел все ступени молодежной академии ФК Астана</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-zinc-900 p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-500/60 transition-all">
                <Trophy className="w-10 h-10 sm:w-14 sm:h-14 text-emerald-400 mb-4 sm:mb-6" strokeWidth={2.5} />
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 tracking-tight">QJ League 2025</h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">Активный участник молодежного первенства Казахстана</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-zinc-900 p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-500/60 transition-all">
                <Target className="w-10 h-10 sm:w-14 sm:h-14 text-emerald-400 mb-4 sm:mb-6" strokeWidth={2.5} />
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 tracking-tight">Универсальность</h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">Способен играть на различных позициях в центре поля</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-zinc-900 p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-500/60 transition-all">
                <TrendingUp className="w-10 h-10 sm:w-14 sm:h-14 text-emerald-400 mb-4 sm:mb-6" strokeWidth={2.5} />
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 tracking-tight">Перспектива</h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">Молодой талант с большим потенциалом для развития</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl blur-2xl" />
            <div className="relative bg-zinc-900 p-6 sm:p-10 rounded-2xl border-2 border-emerald-500/30">
              <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8 tracking-tight">КЛЮЧЕВЫЕ НАВЫКИ</h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { skill: 'Видение поля', value: 75 },
                  { skill: 'Техника', value: 70 },
                  { skill: 'Физическая подготовка', value: 80 },
                  { skill: 'Тактическая дисциплина', value: 85 }
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
            <p className="text-emerald-400 uppercase tracking-widest text-xs sm:text-sm font-bold mb-3">КОНТАКТ</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 sm:mb-6">
              СВЯЖИТЕСЬ <span className="text-emerald-400">СО МНОЙ</span>
            </h2>
            <p className="text-base sm:text-xl text-zinc-400 leading-relaxed">
              Открыт для предложений от клубов и агентов
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
                  Профиль на Transfermarkt
                </a>
              </div>

              {/* Измененный блок - теперь это ссылка mailto: */}
              <a
                href="mailto:erbol.amankeldi.contact@example.com?subject=Запрос%20по%20портфолио%20Ербола%20Аманкелди&body=Здравствуйте,%20мы%20заинтересованы%20в%20..."
                className="w-full px-6 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl font-black uppercase tracking-wider hover:shadow-2xl hover:shadow-emerald-500/50 transition-all transform hover:scale-105 hover:-translate-y-1 text-base sm:text-lg inline-block"
              >
                Отправить сообщение
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
              EA
            </div>
          </div>
          <p className="font-semibold text-zinc-400 text-sm sm:text-base mb-1 sm:mb-2">© 2025 Ербол Аманкелди</p>
          <p className="text-xs uppercase tracking-wider text-emerald-400/70">ФК Астана U18 • QJ League</p>
        </div>
      </footer>
    </div>
  );
};

export default PlayerPortfolio;