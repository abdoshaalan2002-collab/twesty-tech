import { useState } from 'react';
import { Mail, Send, Check, Phone } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useApp } from '@/context/AppContext';
import { services } from '@/data/services';

export function ContactPage() {
  const { t, lang } = useApp();
  const reveal = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-300/30 blur-[120px] dark:bg-primary-600/20" />
        </div>
        <div className="container-app text-center">
          <span className="section-tag">{t('contact.tag')}</span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-neutral-900 dark:text-white sm:text-5xl">
            {t('contact.heading1')}{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              {t('contact.heading2')}
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-neutral-600 dark:text-neutral-300">{t('contact.desc')}</p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16">
        <div ref={reveal.ref} className={`container-app reveal ${reveal.visible ? 'is-visible' : ''}`}>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Info cards */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-400/10 ring-1 ring-primary-400/20 dark:bg-primary-500/10 dark:ring-primary-500/20">
                  <Mail size={22} className="text-primary-600 dark:text-primary-300" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-neutral-900 dark:text-white">
                  {t('contact.emailUs')}
                </h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{t('contact.emailDesc')}</p>
                <a
                  href="mailto:info@Twisty-Tech.com"
                  className="mt-3 inline-block text-sm font-medium text-primary-600 transition-colors hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-200"
                >
                  info@Twisty-Tech.com
                </a>
              </div>

              <div className="glass-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-400/10 ring-1 ring-accent-400/20 dark:bg-accent-500/10 dark:ring-accent-500/20">
                  <Phone size={22} className="text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-neutral-900 dark:text-white">
                  {t('contact.scheduleCall')}
                </h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{t('contact.scheduleDesc')}</p>
                <a
                  href="mailto:info@Twisty-Tech.com?subject=Schedule a Call"
                  className="mt-3 inline-block text-sm font-medium text-accent-600 transition-colors hover:text-accent-500 dark:text-accent-300 dark:hover:text-accent-200"
                >
                  {t('contact.requestSlot')}
                </a>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-display text-base font-semibold text-neutral-900 dark:text-white">
                  {t('contact.ourServices')}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                  {services.map((s) => (
                    <li key={s.slug}>{s.title[lang]}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8 lg:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-400/15 ring-1 ring-green-400/30 dark:bg-green-500/15 dark:ring-green-500/30">
                      <Check size={30} className="text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-neutral-900 dark:text-white">
                      {t('contact.sent')}
                    </h3>
                    <p className="mt-2 max-w-sm text-neutral-500 dark:text-neutral-400">{t('contact.sentDesc')}</p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="btn-secondary mt-6"
                    >
                      {t('contact.sendAnother')}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-display text-xl font-semibold text-neutral-900 dark:text-white">
                      {t('contact.formHeading')}
                    </h3>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {t('contact.name')}
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={update('name')}
                          className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-primary-500/50 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-neutral-500 dark:focus:border-primary-500/50 dark:focus:bg-white/10"
                          placeholder={t('contact.namePlaceholder')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {t('contact.email')}
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={update('email')}
                          className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-primary-500/50 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-neutral-500 dark:focus:border-primary-500/50 dark:focus:bg-white/10"
                          placeholder={t('contact.emailPlaceholder')}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {t('contact.subject')}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={update('subject')}
                        className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-primary-500/50 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-neutral-500 dark:focus:border-primary-500/50 dark:focus:bg-white/10"
                        placeholder={t('contact.subjectPlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {t('contact.message')}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={update('message')}
                        className="mt-1.5 w-full resize-none rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-primary-500/50 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-neutral-500 dark:focus:border-primary-500/50 dark:focus:bg-white/10"
                        placeholder={t('contact.messagePlaceholder')}
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full group">
                      {t('contact.send')}
                      <Send size={16} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
