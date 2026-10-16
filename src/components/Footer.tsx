import { Mail, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { navigate } from '@/hooks/useRouter';
import { services } from '@/data/services';
import { useApp } from '@/context/AppContext';

export function Footer() {
  const { t, lang } = useApp();

  return (
    <footer className="relative border-t border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-neutral-950">
      <div className="container-app py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
              {t('footer.services')}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => navigate(`/services/${s.slug}`)}
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-300"
                  >
                    {s.title[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
              {t('footer.company')}
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="text-sm text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-300"
                >
                  {t('footer.aboutUs')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="text-sm text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-300"
                >
                  {t('footer.ourServices')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-sm text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-300"
                >
                  {t('footer.contact')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
              {t('footer.getInTouch')}
            </h4>
            <a
              href="mailto:info@Twisty-Tech.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-300"
            >
              <Mail size={16} />
              info@Twisty-Tech.com
            </a>
            <button onClick={() => navigate('/contact')} className="btn-primary mt-4 w-full">
              {t('nav.scheduleCall')}
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 dark:border-white/10 sm:flex-row">
          <p className="text-xs text-neutral-500">{t('footer.rights')}</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-xs text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            {t('footer.backToTop')}
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
