import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { navigate } from '@/hooks/useRouter';
import { servicesMap, type ServiceSlug } from '@/data/services';
import { useReveal } from '@/hooks/useReveal';
import { useApp } from '@/context/AppContext';
import { NotFoundPage } from './NotFoundPage';

interface ServiceDetailPageProps {
  slug: string;
}

export function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const { t, lang, dir } = useApp();
  const service = servicesMap[slug as ServiceSlug];
  const heroReveal = useReveal<HTMLDivElement>();
  const featuresReveal = useReveal<HTMLDivElement>();
  const ctaReveal = useReveal<HTMLDivElement>();

  if (!service) return <NotFoundPage />;

  const Icon = service.icon;
  const currentIndex = Object.keys(servicesMap).indexOf(slug);
  const slugs = Object.keys(servicesMap) as ServiceSlug[];
  const nextService = servicesMap[slugs[(currentIndex + 1) % slugs.length]];
  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
          <div className="absolute right-1/4 top-1/4 h-72 w-72 rounded-full bg-primary-300/30 blur-[120px] dark:bg-primary-600/20" />
        </div>
        <div ref={heroReveal.ref} className={`container-app reveal ${heroReveal.visible ? 'is-visible' : ''}`}>
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            <BackIcon size={16} />
            {t('detail.allServices')}
          </button>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-400/20 to-primary-600/20 ring-1 ring-primary-400/30 dark:from-primary-500/20 dark:to-primary-700/20 dark:ring-primary-500/30">
                <Icon size={30} className="text-primary-600 dark:text-primary-300" />
              </div>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-neutral-900 dark:text-white sm:text-5xl">
                {service.title[lang]}
              </h1>
              <p className="mt-3 text-lg font-medium text-primary-600 dark:text-primary-300">
                {service.tagline[lang]}
              </p>
              <p className="mt-5 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                {service.description[lang]}
              </p>
              <button onClick={() => navigate('/contact')} className="btn-primary mt-8 group">
                {t('detail.getStarted')}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-400/20 to-accent-400/20 blur-2xl dark:from-primary-600/20 dark:to-accent-600/20" />
              <img
                src={service.image}
                alt={service.title[lang]}
                className="relative w-full rounded-3xl border border-neutral-200 object-cover shadow-2xl dark:border-white/10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Long description */}
      <section className="py-16">
        <div className="container-app">
          <div className="mx-auto max-w-3xl space-y-4">
            {service.longDescription[lang].map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary-50/50 to-transparent dark:via-primary-950/10" />
        <div ref={featuresReveal.ref} className={`container-app reveal ${featuresReveal.visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-tag">{t('detail.whatWeOffer')}</span>
            <h2 className="mt-5 font-display text-3xl font-bold text-neutral-900 dark:text-white">
              {service.title[lang]}
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={feature.title.en} className="glass-card p-6 transition-all hover:border-primary-400/30 dark:hover:border-primary-500/30">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-400/10 ring-1 ring-primary-400/20 dark:bg-primary-500/10 dark:ring-primary-500/20">
                      <FeatureIcon size={20} className="text-primary-600 dark:text-primary-300" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-neutral-900 dark:text-white">
                        {feature.title[lang]}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {feature.description[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Next service + CTA */}
      <section className="py-20">
        <div ref={ctaReveal.ref} className={`container-app reveal ${ctaReveal.visible ? 'is-visible' : ''}`}>
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 p-10 dark:border-white/10 dark:from-neutral-900 dark:to-neutral-900 sm:p-14">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary-300/20 blur-[100px] dark:bg-primary-600/15" />
            <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{t('detail.nextService')}</p>
                <h3 className="mt-1 font-display text-2xl font-bold text-neutral-900 dark:text-white">
                  {nextService.title[lang]}
                </h3>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button onClick={() => navigate(`/services/${nextService.slug}`)} className="btn-secondary group">
                  {t('detail.explore')}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </button>
                <button onClick={() => navigate('/contact')} className="btn-primary group">
                  {t('nav.scheduleCall')}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
