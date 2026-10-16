import { ArrowRight, Sparkles, Rocket, Target, Zap } from 'lucide-react';
import { navigate } from '@/hooks/useRouter';
import { services } from '@/data/services';
import { useReveal } from '@/hooks/useReveal';
import { useApp } from '@/context/AppContext';

export function HomePage() {
  const { t, lang, dir } = useApp();
  const heroReveal = useReveal<HTMLDivElement>();
  const aboutReveal = useReveal<HTMLDivElement>();
  const servicesReveal = useReveal<HTMLDivElement>();
  const whyReveal = useReveal<HTMLDivElement>();
  const ctaReveal = useReveal<HTMLDivElement>();

  const stats = [
    { value: '3', label: t('stat.coreServices') },
    { value: '7+', label: t('stat.marketingChannels') },
    { value: '100%', label: t('stat.customBuilt') },
    { value: '24/7', label: t('stat.support') },
  ];

  const reasons = [
    { icon: Target, title: t('why.r1.title'), text: t('why.r1.text') },
    { icon: Sparkles, title: t('why.r2.title'), text: t('why.r2.text') },
    { icon: Zap, title: t('why.r3.title'), text: t('why.r3.text') },
    { icon: Rocket, title: t('why.r4.title'), text: t('why.r4.text') },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary-300/30 blur-[120px] dark:bg-primary-600/20" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent-300/25 blur-[120px] dark:bg-accent-600/15" />
          <div className="absolute inset-0 bg-grid-pattern-light bg-[size:40px_40px] opacity-60 dark:bg-grid-pattern-dark dark:opacity-40" />
        </div>

        <div ref={heroReveal.ref} className={`container-app reveal ${heroReveal.visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-4xl text-center">
            <span className="section-tag">
              <Sparkles size={14} />
              {t('tagline.agency')}
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 dark:text-white sm:text-6xl lg:text-7xl">
              {t('hero.line1')}
              <br />
              <span className="bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 bg-clip-text text-transparent">
                {t('hero.line2')}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              {t('hero.desc')}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button onClick={() => navigate('/services')} className="btn-primary group">
                {t('hero.explore')}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </button>
              <button onClick={() => navigate('/contact')} className="btn-secondary">
                {t('nav.scheduleCall')}
              </button>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-5 text-center">
                <div className="font-display text-3xl font-bold text-primary-600 dark:text-primary-400">{stat.value}</div>
                <div className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="relative py-24">
        <div ref={aboutReveal.ref} className={`container-app reveal ${aboutReveal.visible ? 'is-visible' : ''}`}>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="section-tag">{t('about.tag')}</span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 dark:text-white sm:text-4xl">
                {t('about.heading')}
              </h2>
              <div className="mt-6 space-y-4 text-neutral-600 dark:text-neutral-300">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p>{t('about.p3')}</p>
                <p>{t('about.p4')}</p>
              </div>
              <button onClick={() => navigate('/about')} className="btn-primary mt-8 group">
                {t('about.whyBtn')}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-400/20 to-accent-400/20 blur-2xl dark:from-primary-600/20 dark:to-accent-600/20" />
              <img
                src="https://images.pexels.com/photos/7988745/pexels-photo-7988745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="TwistyTech team collaborating"
                className="relative rounded-3xl border border-neutral-200 object-cover shadow-2xl dark:border-white/10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary-50 to-transparent dark:via-primary-950/20" />
        <div ref={servicesReveal.ref} className={`container-app reveal ${servicesReveal.visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-tag">{t('services.tag')}</span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 dark:text-white sm:text-4xl">
              {t('services.heading')}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.slug}
                  onClick={() => navigate(`/services/${service.slug}`)}
                  className="group glass-card relative overflow-hidden p-8 text-left transition-all hover:border-primary-400/40 hover:shadow-lg dark:hover:border-primary-500/30 dark:hover:bg-white/[0.05]"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-400/10 blur-2xl transition-all group-hover:bg-primary-400/20 dark:bg-primary-500/10 dark:group-hover:bg-primary-500/20" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-400/20 to-primary-600/20 ring-1 ring-primary-400/30 dark:from-primary-500/20 dark:to-primary-700/20 dark:ring-primary-500/30">
                    <Icon size={26} className="text-primary-600 dark:text-primary-300" />
                  </div>
                  <h3 className="relative mt-6 font-display text-xl font-semibold text-neutral-900 dark:text-white">
                    {service.title[lang]}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {service.description[lang]}
                  </p>
                  <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors group-hover:text-primary-500 dark:text-primary-300 dark:group-hover:text-primary-200">
                    {t('services.learnMore')}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why TwistyTech */}
      <section className="relative py-24">
        <div ref={whyReveal.ref} className={`container-app reveal ${whyReveal.visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-tag">{t('why.tag')}</span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 dark:text-white sm:text-4xl">
              {t('why.heading')}
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">{t('why.desc')}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="glass-card p-6 transition-all hover:border-neutral-300 dark:hover:border-white/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-400/10 ring-1 ring-accent-400/20 dark:bg-accent-500/10 dark:ring-accent-500/20">
                    <Icon size={22} className="text-accent-600 dark:text-accent-400" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-neutral-900 dark:text-white">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{reason.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div ref={ctaReveal.ref} className={`container-app reveal ${ctaReveal.visible ? 'is-visible' : ''}`}>
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-primary-100 via-white to-neutral-100 p-10 text-center dark:border-white/10 dark:from-primary-900/40 dark:via-neutral-900 dark:to-neutral-900 sm:p-16">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary-300/30 blur-[100px] dark:bg-primary-600/20" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent-300/30 blur-[100px] dark:bg-accent-600/20" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
                {t('cta.heading')}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-neutral-600 dark:text-neutral-300">{t('cta.desc')}</p>
              <button onClick={() => navigate('/contact')} className="btn-primary mt-8 group">
                {t('nav.scheduleCall')}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
