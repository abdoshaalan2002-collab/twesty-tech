import { Home as HomeIcon } from 'lucide-react';
import { navigate } from '@/hooks/useRouter';
import { useApp } from '@/context/AppContext';

export function NotFoundPage() {
  const { t } = useApp();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-950 dark:to-neutral-900" />
      <div className="font-display text-8xl font-bold text-primary-500/30">404</div>
      <h1 className="mt-4 font-display text-2xl font-bold text-neutral-900 dark:text-white">{t('notfound.heading')}</h1>
      <p className="mt-2 max-w-sm text-neutral-500 dark:text-neutral-400">{t('notfound.desc')}</p>
      <button onClick={() => navigate('/')} className="btn-primary mt-8 group">
        <HomeIcon size={18} />
        {t('notfound.back')}
      </button>
    </div>
  );
}
