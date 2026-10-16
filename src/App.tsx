import { useRouter } from '@/hooks/useRouter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AppProvider } from '@/context/AppContext';

function AppContent() {
  const route = useRouter();

  let page: React.ReactNode;
  switch (route.name) {
    case 'home':
      page = <HomePage />;
      break;
    case 'services':
      page = <ServicesPage />;
      break;
    case 'service-detail':
      page = <ServiceDetailPage slug={route.slug} />;
      break;
    case 'about':
      page = <AboutPage />;
      break;
    case 'contact':
      page = <ContactPage />;
      break;
    default:
      page = <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar route={route} />
      <main>{page}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
