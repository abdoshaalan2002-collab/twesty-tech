import { Target, Sparkles, Zap, Rocket, ArrowRight, Check } from 'lucide-react';
import { navigate } from '@/hooks/useRouter';
import { useReveal } from '@/hooks/useReveal';
import { useApp } from '@/context/AppContext';

export function AboutPage() {
  const { t } = useApp();
  const heroReveal = useReveal<HTMLDivElement>();
  const whyReveal = useReveal<HTMLDivElement>();
  const valuesReveal = useReveal<HTMLDivElement>();
  const ctaReveal = useReveal<HTMLDivElement>();

  const reasons = [
    { icon: Target, title: t('why.r1.title'), text: t('why.r1.text') },
    { icon: Sparkles, title: t('why.r2.title'), text: t('why.r2.text') },
    { icon: Zap, title: t('why.r3.title'), text: t('why.r3.text') },
    { icon: Rocket, title: t('why.r4.title'), text: t('why.r4.text') },
  ];

  const values = [
    t('aboutPage.v1'),
    t('aboutPage.v2'),
    t('aboutPage.v3'),
    t('aboutPage.v4'),
    t('aboutPage.v5'),
    t('aboutPage.v6'),
  ];

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
          <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-primary-300/30 blur-[120px] dark:bg-primary-600/20" />
          <div className="absolute right-1/3 bottom-1/4 h-72 w-72 rounded-full bg-accent-300/25 blur-[120px] dark:bg-accent-600/15" />
        </div>
        <div ref={heroReveal.ref} className={`container-app reveal ${heroReveal.visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-tag">{t('nav.about')}</span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-neutral-900 dark:text-white sm:text-5xl">
              {t('aboutPage.heading')}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              {t('aboutPage.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Why TwistyTech */}
      <section className="py-16">
        <div ref={whyReveal.ref} className={`container-app reveal ${whyReveal.visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-tag">{t('why.tag')}</span>
            <h2 className="mt-5 font-display text-3xl font-bold text-neutral-900 dark:text-white">{t('why.heading')}</h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">{t('why.desc')}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="glass-card flex gap-5 p-7 transition-all hover:border-neutral-300 dark:hover:border-white/20">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400/15 to-primary-600/15 ring-1 ring-primary-400/25 dark:from-primary-500/15 dark:to-primary-700/15 dark:ring-primary-500/25">
                    <Icon size={22} className="text-primary-600 dark:text-primary-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-white">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{reason.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What drives us */}
      <section className="py-16">
        <div ref={valuesReveal.ref} className={`container-app reveal ${valuesReveal.visible ? 'is-visible' : ''}`}>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-400/15 to-accent-400/15 blur-2xl dark:from-primary-600/15 dark:to-accent-600/15" />
              <img
                src="https://images.pexels.com/photos/6803554/pexels-photo-6803554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="TwistyTech team at work"
                className="relative w-full rounded-3xl border border-neutral-200 object-cover shadow-2xl dark:border-white/10"
                loading="lazy"
              />
            </div>
            <div>
              <span className="section-tag">{t('aboutPage.philosophyTag')}</span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 dark:text-white">
                {t('aboutPage.philosophyHeading')}
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">{t('aboutPage.philosophyDesc')}</p>
              <ul className="mt-6 space-y-3">
                {values.map((v) => (
                  <li key={v} className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-200">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-400/20 ring-1 ring-primary-400/30 dark:bg-primary-500/20 dark:ring-primary-500/30">
                      <Check size={12} className="text-primary-600 dark:text-primary-300" />
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div ref={ctaReveal.ref} className={`container-app reveal ${ctaReveal.visible ? 'is-visible' : ''}`}>
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-primary-100 via-white to-neutral-100 p-10 text-center dark:border-white/10 dark:from-primary-900/40 dark:via-neutral-900 dark:to-neutral-900 sm:p-14">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary-300/30 blur-[100px] dark:bg-primary-600/20" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent-300/30 blur-[100px] dark:bg-accent-600/20" />
            <h2 className="relative font-display text-3xl font-bold text-neutral-900 dark:text-white">
              {t('cta.heading')}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-neutral-600 dark:text-neutral-300">{t('cta.desc')}</p>
            <button onClick={() => navigate('/contact')} className="btn-primary relative mt-8 group">
              {t('nav.scheduleCall')}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
