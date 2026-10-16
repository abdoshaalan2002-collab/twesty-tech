import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'services' }
  | { name: 'service-detail'; slug: string }
  | { name: 'about' }
  | { name: 'contact' };

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#\/?/, '');
  const parts = hash.split('/').filter(Boolean);

  if (parts.length === 0) return { name: 'home' };
  if (parts[0] === 'services') {
    if (parts[1]) return { name: 'service-detail', slug: parts[1] };
    return { name: 'services' };
  }
  if (parts[0] === 'about' || parts[0] === 'about-us') return { name: 'about' };
  if (parts[0] === 'contact') return { name: 'contact' };
  return { name: 'home' };
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(parseHash());

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

export function navigate(path: string) {
  window.location.hash = path;
}
