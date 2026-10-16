import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'light' | 'dark';
export type Lang = 'en' | 'ar';

interface AppContextValue {
  theme: Theme;
  toggleTheme: () => void;
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const AppContext = createContext<AppContextValue | null>(null);

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.scheduleCall': 'Schedule a Call',
    'tagline.agency': 'Software Housing & Digital Marketing Agency',
    'hero.line1': 'Twisted Ideas.',
    'hero.line2': 'Innovative Solutions.',
    'hero.desc': 'TwistyTech is specialized in developing, consulting, and managing web & mobile applications, ERP systems, and digital marketing services — customized to everyone\u2019s needs.',
    'hero.explore': 'Explore Our Services',
    'stat.coreServices': 'Core Services',
    'stat.marketingChannels': 'Marketing Channels',
    'stat.customBuilt': 'Custom Built',
    'stat.support': 'Dedicated Support',
    'about.tag': 'About TwistyTech',
    'about.heading': 'We are obsessed with developing new and twisting technologies',
    'about.p1': 'TwistyTech is a Software Housing and Digital Marketing Agency, specialized in developing, consulting, and managing web & mobile applications, ERP systems, and digital marketing services.',
    'about.p2': 'We are obsessed with developing new and twisting technologies that make these services more efficient, professional, creative, and customized to everyone\u2019s needs.',
    'about.p3': 'Twisty is our way of creativity! We combine different skills and mentalities to reach our goals, and yours as well. We are delighted to have powerful, experienced, passionate, and full of creative gurus.',
    'about.p4': 'Everything we do at TwistyTech starts from getting things done smart, not hard, till making you reach the best experience since day one.',
    'about.whyBtn': 'Why Choose TwistyTech?',
    'services.tag': 'Our Services',
    'services.heading': 'Focus on your dreams while we focus on transforming them into reality',
    'services.learnMore': 'Learn more',
    'services.more': 'more',
    'services.ctaHeading': 'Start Achieving Real Results for Your Business',
    'services.ctaBtn': 'Get in Touch',
    'why.tag': 'Why TwistyTech?',
    'why.heading': 'Because we care',
    'why.desc': 'We respect your career aspirations and your needs to help you write your success story.',
    'why.r1.title': 'We never promise what we can\u2019t deliver',
    'why.r1.text': 'Honest commitments and realistic timelines, every time.',
    'why.r2.title': 'Fresh, creative minds',
    'why.r2.text': 'Expert knowledge across several fields, always open to new ideas.',
    'why.r3.title': 'On top of latest trends',
    'why.r3.text': 'We stay current with the latest technologies and best practices.',
    'why.r4.title': 'Cost-efficient strategies',
    'why.r4.text': 'We manage your budget more effectively to maximize your ROI.',
    'cta.heading': 'If you are looking for success, look no further than TwistyTech!',
    'cta.desc': 'Let\u2019s create something great together.',
    'footer.desc': 'Twisted Ideas, Innovative Solutions. A Software Housing and Digital Marketing Agency specialized in developing, consulting, and managing web & mobile applications, ERP systems, and digital marketing services.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.getInTouch': 'Get in Touch',
    'footer.aboutUs': 'About Us',
    'footer.ourServices': 'Our Services',
    'footer.contact': 'Contact',
    'footer.backToTop': 'Back to top',
    'footer.rights': '© TwistyTech | All Rights Reserved',
    'aboutPage.heading': 'Why Choose TwistyTech for Your Business?',
    'aboutPage.intro': 'TwistyTech is a Software Housing and Digital Marketing Agency, specialized in developing, consulting, and managing web & mobile applications, ERP systems, and digital marketing services.',
    'aboutPage.philosophyTag': 'Our Philosophy',
    'aboutPage.philosophyHeading': 'Twisty is our way of creativity',
    'aboutPage.philosophyDesc': 'We combine different skills and mentalities to reach our goals, and yours as well. Everything we do at TwistyTech starts from getting things done smart, not hard, till making you reach the best experience since day one.',
    'aboutPage.v1': 'Because we care',
    'aboutPage.v2': 'We respect your career aspirations',
    'aboutPage.v3': 'We help you write your success story',
    'aboutPage.v4': 'Powerful, experienced, passionate team',
    'aboutPage.v5': 'Full of creative gurus',
    'aboutPage.v6': 'Smart work, not hard work',
    'contact.tag': 'Contact Us',
    'contact.heading1': 'Let\u2019s Create Something',
    'contact.heading2': 'Great Together',
    'contact.desc': 'Schedule a call or send us a message — we\u2019ll get back to you and start turning your ideas into reality.',
    'contact.emailUs': 'Email Us',
    'contact.emailDesc': 'We respond within 24 hours',
    'contact.scheduleCall': 'Schedule a Call',
    'contact.scheduleDesc': 'Book a free consultation with our team',
    'contact.requestSlot': 'Request a time slot',
    'contact.ourServices': 'Our Services',
    'contact.formHeading': 'Send us a message',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your full name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'you@example.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'What can we help you with?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us about your project...',
    'contact.send': 'Send Message',
    'contact.sent': 'Message Sent!',
    'contact.sentDesc': 'Thank you for reaching out. Our team will get back to you within 24 hours.',
    'contact.sendAnother': 'Send Another Message',
    'detail.allServices': 'All Services',
    'detail.getStarted': 'Get Started',
    'detail.whatWeOffer': 'What We Offer',
    'detail.nextService': 'Next Service',
    'detail.explore': 'Explore',
    'notfound.heading': 'Page Not Found',
    'notfound.desc': 'The page you are looking for doesn\u2019t exist or has been moved.',
    'notfound.back': 'Back to Home',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.about': 'من نحن',
    'nav.contact': 'تواصل معنا',
    'nav.scheduleCall': 'احجز مكالمة',
    'tagline.agency': 'وكالة برمجيات وتسويق رقمي',
    'hero.line1': 'أفكار ملتوية.',
    'hero.line2': 'حلول مبتكرة.',
    'hero.desc': 'تتيستي تيك متخصصة في تطوير واستشارات وإدارة تطبيقات الويب والجوال وأنظمة تخطيط موارد المؤسسات وخدمات التسويق الرقمي — مصممة لاحتياجات الجميع.',
    'hero.explore': 'استكشف خدماتنا',
    'stat.coreServices': 'الخدمات الأساسية',
    'stat.marketingChannels': 'قنوات التسويق',
    'stat.customBuilt': 'مخصصة بالكامل',
    'stat.support': 'دعم على مدار الساعة',
    'about.tag': 'عن تويستي تيك',
    'about.heading': 'نحن مهووسون بتطوير تقنيات جديدة وملتوية',
    'about.p1': 'تويستي تيك هي وكالة برمجيات وتسويق رقمي، متخصصة في تطوير واستشارات وإدارة تطبيقات الويب والجوال وأنظمة تخطيط موارد المؤسسات وخدمات التسويق الرقمي.',
    'about.p2': 'نحن مهووسون بتطوير تقنيات جديدة وملتوية تجعل هذه الخدمات أكثر كفاءة ومهنية وإبداعًا وتخصيصًا لاحتياجات الجميع.',
    'about.p3': 'تويستي هي طريقتنا في الإبداع! نجمع بين المهارات والعقليات المختلفة للوصول إلى أهدافنا وأهدافكم أيضًا. يسعدنا أن لدينا فريقًا قويًا وذو خبرة وشغوف ومليء بالخبراء الإبداعيين.',
    'about.p4': 'كل ما نقوم به في تويستي تيك يبدأ من إنجاز الأمور بذكاء وليس بجهد، حتى نوصلك لأفضل تجربة منذ اليوم الأول.',
    'about.whyBtn': 'لماذا تختار تويستي تيك؟',
    'services.tag': 'خدماتنا',
    'services.heading': 'ركز على أحلامك بينما نركز على تحويلها إلى واقع',
    'services.learnMore': 'اعرف المزيد',
    'services.more': 'المزيد',
    'services.ctaHeading': 'ابدأ بتحقيق نتائج حقيقية لعملك',
    'services.ctaBtn': 'تواصل معنا',
    'why.tag': 'لماذا تويستي تيك؟',
    'why.heading': 'لأننا نهتم',
    'why.desc': 'نحن نحترم طموحاتك المهنية واحتياجاتك لمساعدتك في كتابة قصة نجاحك.',
    'why.r1.title': 'لا نعد بما لا نستطيع تقديمه',
    'why.r1.text': 'التزامات صادقة وجداول زمنية واقعية في كل مرة.',
    'why.r2.title': 'عقول منعشة ومبدعة',
    'why.r2.text': 'معرفة خبراء في عدة مجالات، ومنفتحون دائمًا على أفكار جديدة.',
    'why.r3.title': 'نواكب أحدث الاتجاهات',
    'why.r3.text': 'نبقى على اطلاع بأحدث التقنيات وأفضل الممارسات.',
    'why.r4.title': 'استراتيجيات فعالة التكلفة',
    'why.r4.text': 'ندير ميزانيتك بشكل أكثر فعالية لتعظيم عائد استثمارك.',
    'cta.heading': 'إذا كنت تبحث عن النجاح، فلا تنظر إلى أبعد من تويستي تيك!',
    'cta.desc': 'لنصنع شيئًا رائعًا معًا.',
    'footer.desc': 'أفكار ملتوية، حلول مبتكرة. وكالة برمجيات وتسويق رقمي متخصصة في تطوير واستشارات وإدارة تطبيقات الويب والجوال وأنظمة تخطيط موارد المؤسسات وخدمات التسويق الرقمي.',
    'footer.services': 'الخدمات',
    'footer.company': 'الشركة',
    'footer.getInTouch': 'تواصل معنا',
    'footer.aboutUs': 'من نحن',
    'footer.ourServices': 'خدماتنا',
    'footer.contact': 'تواصل',
    'footer.backToTop': 'العودة للأعلى',
    'footer.rights': '© تويستي تيك | جميع الحقوق محفوظة',
    'aboutPage.heading': 'لماذا تختار تويستي تيك لعملك؟',
    'aboutPage.intro': 'تويستي تيك هي وكالة برمجيات وتسويق رقمي، متخصصة في تطوير واستشارات وإدارة تطبيقات الويب والجوال وأنظمة تخطيط موارد المؤسسات وخدمات التسويق الرقمي.',
    'aboutPage.philosophyTag': 'فلسفتنا',
    'aboutPage.philosophyHeading': 'تويستي هي طريقتنا في الإبداع',
    'aboutPage.philosophyDesc': 'نجمع بين المهارات والعقليات المختلفة للوصول إلى أهدافنا وأهدافكم. كل ما نقوم به في تويستي تيك يبدأ من إنجاز الأمور بذكاء وليس بجهد، حتى نوصلك لأفضل تجربة منذ اليوم الأول.',
    'aboutPage.v1': 'لأننا نهتم',
    'aboutPage.v2': 'نحترم طموحاتك المهنية',
    'aboutPage.v3': 'نساعدك في كتابة قصة نجاحك',
    'aboutPage.v4': 'فريق قوي وذو خبرة وشغوف',
    'aboutPage.v5': 'مليء بالخبراء الإبداعيين',
    'aboutPage.v6': 'عمل ذكي وليس عمل شاق',
    'contact.tag': 'تواصل معنا',
    'contact.heading1': 'لنصنع شيئًا',
    'contact.heading2': 'رائعًا معًا',
    'contact.desc': 'احجز مكالمة أو أرسل لنا رسالة — سنعاود التواصل معك لنبدأ بتحويل أفكارك إلى واقع.',
    'contact.emailUs': 'راسلنا',
    'contact.emailDesc': 'نرد خلال 24 ساعة',
    'contact.scheduleCall': 'احجز مكالمة',
    'contact.scheduleDesc': 'احجز استشارة مجانية مع فريقنا',
    'contact.requestSlot': 'اطلب موعدًا',
    'contact.ourServices': 'خدماتنا',
    'contact.formHeading': 'أرسل لنا رسالة',
    'contact.name': 'الاسم',
    'contact.namePlaceholder': 'اسمك الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.emailPlaceholder': 'you@example.com',
    'contact.subject': 'الموضوع',
    'contact.subjectPlaceholder': 'بم يمكننا مساعدتك؟',
    'contact.message': 'الرسالة',
    'contact.messagePlaceholder': 'أخبرنا عن مشروعك...',
    'contact.send': 'إرسال الرسالة',
    'contact.sent': 'تم إرسال الرسالة!',
    'contact.sentDesc': 'شكرًا لتواصلك معنا. سيعاود فريقنا التواصل معك خلال 24 ساعة.',
    'contact.sendAnother': 'إرسال رسالة أخرى',
    'detail.allServices': 'كل الخدمات',
    'detail.getStarted': 'ابدأ الآن',
    'detail.whatWeOffer': 'ما نقدمه',
    'detail.nextService': 'الخدمة التالية',
    'detail.explore': 'استكشف',
    'notfound.heading': 'الصفحة غير موجودة',
    'notfound.desc': 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
    'notfound.back': 'العودة للرئيسية',
  },
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const toggleLang = () => setLang((l) => (l === 'en' ? 'ar' : 'en'));
  const t = (key: string) => translations[lang][key] ?? key;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, toggleLang, t, dir }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
