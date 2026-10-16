import { ArrowRight } from 'lucide-react';
import { navigate } from '@/hooks/useRouter';
import { services } from '@/data/services';
import { useReveal } from '@/hooks/useReveal';
import { useApp } from '@/context/AppContext';

export function ServicesPage() {
  const { t, lang } = useApp();
  const reveal = useReveal<HTMLDivElement>();
  const ctaReveal = useReveal<HTMLDivElement>();

  return (
    <div className="overflow-hidden pt-20">
      {/* Header */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-300/30 blur-[120px] dark:bg-primary-600/20" />
        </div>
        <div className="container-app text-center">
          <span className="section-tag">{t('services.tag')}</span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-neutral-900 dark:text-white sm:text-5xl">
            {t('services.heading').split(' ').slice(0, -4).join(' ')}
            <br />
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              {t('services.heading').split(' ').slice(-4).join(' ')}
            </span>
          </h1>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16">
        <div ref={reveal.ref} className={`container-app reveal ${reveal.visible ? 'is-visible' : ''}`}>
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const reversed = index % 2 === 1;
              return (
                <div
                  key={service.slug}
                  className="glass-card group relative grid items-center gap-8 overflow-hidden p-8 lg:grid-cols-2 lg:p-10"
                >
                  <div className={`relative ${reversed ? 'lg:order-2' : ''}`}>
                    <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-primary-400/15 to-accent-400/15 blur-xl dark:from-primary-600/15 dark:to-accent-600/15" />
                    <img
                      src={service.image}
                      alt={service.title[lang]}
                      className="relative w-full rounded-2xl border border-neutral-200 object-cover shadow-xl dark:border-white/10"
                      loading="lazy"
                    />
                  </div>
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-400/20 to-primary-600/20 ring-1 ring-primary-400/30 dark:from-primary-500/20 dark:to-primary-700/20 dark:ring-primary-500/30">
                      <Icon size={26} className="text-primary-600 dark:text-primary-300" />
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-bold text-neutral-900 dark:text-white">
                      {service.title[lang]}
                    </h2>
                    <p className="mt-2 text-sm font-medium text-primary-600 dark:text-primary-300">
                      {service.tagline[lang]}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {service.description[lang]}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.features.slice(0, 4).map((f) => (
                        <span
                          key={f.title.en}
                          className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
                        >
                          {f.title[lang]}
                        </span>
                      ))}
                      {service.features.length > 4 && (
                        <span className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-500 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400">
                          +{service.features.length - 4} {t('services.more')}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => navigate(`/services/${service.slug}`)}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-200"
                    >
                      {t('services.learnMore')}
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div ref={ctaReveal.ref} className={`container-app reveal ${ctaReveal.visible ? 'is-visible' : ''}`}>
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-primary-100 via-white to-neutral-100 p-10 text-center dark:border-white/10 dark:from-primary-900/40 dark:via-neutral-900 dark:to-neutral-900 sm:p-14">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent-300/30 blur-[100px] dark:bg-accent-600/20" />
            <h2 className="relative font-display text-3xl font-bold text-neutral-900 dark:text-white">
              {t('services.ctaHeading')}
            </h2>
            <button onClick={() => navigate('/contact')} className="btn-primary mt-6 group">
              {t('services.ctaBtn')}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
