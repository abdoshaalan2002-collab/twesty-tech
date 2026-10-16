import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { navigate, type Route } from '@/hooks/useRouter';
import { useApp } from '@/context/AppContext';

interface NavbarProps {
  route: Route;
}

export function Navbar({ route }: NavbarProps) {
  const { theme, toggleTheme, lang, toggleLang, t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [route]);

  const links: { label: string; path: string; match: Route['name'][] }[] = [
    { label: t('nav.home'), path: '/', match: ['home'] },
    { label: t('nav.services'), path: '/services', match: ['services', 'service-detail'] },
    { label: t('nav.about'), path: '/about', match: ['about'] },
    { label: t('nav.contact'), path: '/contact', match: ['contact'] },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-neutral-200 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/80'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="container-app flex h-16 items-center justify-between sm:h-20">
          <button onClick={() => navigate('/')} className="transition-transform hover:scale-[1.03]">
            <Logo />
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = link.match.includes(route.name);
              return (
                <button
                  key={link.label}
                  onClick={() => navigate(link.path)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'text-primary-600 dark:text-white'
                      : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={toggleLang}
              className="flex h-9 items-center gap-1.5 rounded-full border border-neutral-200 px-3 text-sm font-medium text-neutral-600 transition-all hover:border-primary-400 hover:text-primary-600 dark:border-white/15 dark:text-neutral-300 dark:hover:border-primary-400 dark:hover:text-primary-300"
              aria-label="Toggle language"
            >
              <Globe size={16} />
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all hover:border-primary-400 hover:text-primary-600 dark:border-white/15 dark:text-neutral-300 dark:hover:border-primary-400 dark:hover:text-primary-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => navigate('/contact')} className="btn-primary ml-1">
              {t('nav.scheduleCall')}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLang}
              className="flex h-9 items-center gap-1 rounded-full border border-neutral-200 px-2.5 text-xs font-medium text-neutral-600 dark:border-white/15 dark:text-neutral-300"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 dark:border-white/15 dark:text-neutral-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="rounded-lg p-2 text-neutral-900 dark:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 md:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-neutral-950/40 backdrop-blur-sm transition-opacity duration-300 dark:bg-neutral-950/60 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute end-0 top-0 h-full w-72 bg-white p-6 shadow-2xl transition-transform duration-300 dark:bg-neutral-900 ${
            mobileOpen ? 'translate-x-0' : 'ltr:translate-x-full rtl:-translate-x-full'
          }`}
        >
          <div className="mt-16 flex flex-col gap-2">
            {links.map((link) => {
              const active = link.match.includes(route.name);
              return (
                <button
                  key={link.label}
                  onClick={() => navigate(link.path)}
                  className={`rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                    active
                      ? 'bg-primary-500/15 text-primary-600 dark:text-primary-300'
                      : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button onClick={() => navigate('/contact')} className="btn-primary mt-4 w-full">
              {t('nav.scheduleCall')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
