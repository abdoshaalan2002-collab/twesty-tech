import { Megaphone, TrendingUp, BarChart3, Mail, Share2, Video, Search, Palette } from 'lucide-react';
import { Code2, Smartphone, Server, Layers } from 'lucide-react';
import { Database, Workflow, ShieldCheck, Gauge } from 'lucide-react';
import type { Lang } from '@/context/AppContext';

export type ServiceSlug = 'digital-marketing' | 'web-app-development' | 'erp-system-development';

type LocalizedText = Record<Lang, string>;

export interface ServiceFeature {
  title: LocalizedText;
  description: LocalizedText;
  icon: typeof Megaphone;
}

export interface ServiceDetail {
  slug: ServiceSlug;
  title: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  longDescription: Record<Lang, string[]>;
  image: string;
  icon: typeof Megaphone;
  features: ServiceFeature[];
}

export const services: ServiceDetail[] = [
  {
    slug: 'digital-marketing',
    title: { en: 'Digital Marketing', ar: 'التسويق الرقمي' },
    tagline: {
      en: 'Grow your brand and stand out from the competition',
      ar: 'ازرع علامتك التجارية وتميز عن المنافسين',
    },
    description: {
      en: 'Digital marketing is vital for your business and brand awareness. We help you overcome increasing competition and drive the desired marketing results.',
      ar: 'التسويق الرقمي حيوي لعملك ووعي بعلامتك التجارية. نساعدك على التغلب على المنافسة المتزايدة وتحقيق نتائج التسويق المرجوة.',
    },
    longDescription: {
      en: [
        'Businesses nowadays face many challenges like increasing competition daily, so you must embrace aspects of digital marketing to compete powerfully in a crowded market.',
        'Our digital marketing services will help you overcome these challenges and drive the desired marketing results for your business. We provide marketing services and solutions that match and exceed your business needs.',
        'With our cutting-edge techniques and up-to-date knowledge of the latest trends and best practices, we will help your brand shine and stand out from the competition.',
      ],
      ar: [
        'تواجه الشركات اليوم العديد من التحديات مثل تزايد المنافسة يوميًا، لذا يجب أن تتبنى جوانب من التسويق الرقمي للمنافسة بقوة في سوق مزدحم.',
        'ستساعدك خدمات التسويق الرقمي لدينا على التغلب على هذه التحديات وتحقيق نتائج التسويق المرجوة لعملك. نقدم خدمات وحلول تسويقية تواكب وتتجاوز احتياجات عملك.',
        'بفضل تقنياتنا المتطورة ومعرفتنا المحدثة بأحدث الاتجاهات وأفضل الممارسات، سنساعد علامتك التجارية على التألق والتميز عن المنافسة.',
      ],
    },
    image: 'https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Megaphone,
    features: [
      {
        title: { en: 'Branding & Creative Services', ar: 'خدمات العلامة التجارية والإبداع' },
        description: { en: 'Craft a memorable brand identity that resonates with your audience and sets you apart.', ar: 'اصنع هوية علامة تجارية لا تُنسى تتوافق مع جمهورك وتميزك عن غيرك.' },
        icon: Palette,
      },
      {
        title: { en: 'Media Production', ar: 'إنتاج الوسائط' },
        description: { en: 'High-quality photo, video, and graphic production that tells your story beautifully.', ar: 'إنتاج عالي الجودة للصور والفيديو والرسومات يروي قصتك بشكل جميل.' },
        icon: Video,
      },
      {
        title: { en: 'Social Media Marketing', ar: 'تسويق وسائل التواصل الاجتماعي' },
        description: { en: 'Engage and grow your community across all major social platforms with data-driven campaigns.', ar: 'تفاعل ونمِّ مجتمعك عبر جميع منصات التواصل الاجتماعي بحملات مدعومة بالبيانات.' },
        icon: Share2,
      },
      {
        title: { en: 'Email Marketing', ar: 'تسويق البريد الإلكتروني' },
        description: { en: 'Reach your audience directly with targeted, high-converting email campaigns.', ar: 'اوصل لجمهورك مباشرة بحملات بريد إلكتروني مستهدفة وعالية التحويل.' },
        icon: Mail,
      },
      {
        title: { en: 'WhatsApp Marketing', ar: 'تسويق واتساب' },
        description: { en: 'Connect with customers on the platform they already use every day.', ar: 'تواصل مع عملاءك على المنصة التي يستخدمونها يوميًا.' },
        icon: Megaphone,
      },
      {
        title: { en: 'Content Marketing', ar: 'تسويق المحتوى' },
        description: { en: 'Build authority and trust with valuable, relevant content that attracts and retains customers.', ar: 'ابنِ السلطة والثقة بمحتوى قيم وذ صلة يجذب العملاء ويحافظ عليهم.' },
        icon: TrendingUp,
      },
      {
        title: { en: 'Search Engine Optimization (SEO)', ar: 'تحسين محركات البحث (SEO)' },
        description: { en: 'Climb the rankings and get found by customers actively searching for what you offer.', ar: 'تصدّر نتائج البحث وكن في متناول العملاء الذين يبحثون عمّا تقدمه.' },
        icon: Search,
      },
    ],
  },
  {
    slug: 'web-app-development',
    title: { en: 'Website & Application Development', ar: 'تطوير المواقع والتطبيقات' },
    tagline: {
      en: 'Your digital presence, built to impress and perform',
      ar: 'حضورك الرقمي، مصمم للإبهار والأداء',
    },
    description: {
      en: 'We offer premium website and application development services that are custom-built to meet your unique needs, empowering your business and increasing profits.',
      ar: 'نقدم خدمات تطوير مواقع وتطبيقات مميزة ومخصصة لتلبية احتياجاتك الفريدة، مما يمكّن عملك ويزيد أرباحك.',
    },
    longDescription: {
      en: [
        'At TwistyTech, we believe that your website or application is the foundation of your digital presence. That is why we offer premium website and application development services that are custom-built to meet your unique needs.',
        'While considering the project scope, your business will be empowered and your profits will increase. Our certified and trained gurus will help you create a digital presence that will leave a lasting impression on your customers.',
        'From concept to launch and beyond, we ensure your platform is fast, secure, scalable, and designed with your users in mind.',
      ],
      ar: [
        'في تويستي تيك، نؤمن بأن موقعك أو تطبيقك هو أساس حضورك الرقمي. لهذا نقدم خدمات تطوير مواقع وتطبيقات مميزة ومخصصة لتلبية احتياجاتك الفريدة.',
        'مع مراعاة نطاق المشروع، سيمكن عملك وتزداد أرباحك. سيساعدك خبراؤنا المعتمدون والمدربون على إنشاء حضور رقمي يترك انطباعًا دائمًا لدى عملائك.',
        'من الفكرة إلى الإطلاق وما بعده، نضمن أن منصتك سريعة وآمنة وقابلة للتوسع ومصممة مع وضع مستخدميك في الاعتبار.',
      ],
    },
    image: 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Code2,
    features: [
      {
        title: { en: 'Website Development', ar: 'تطوير المواقع' },
        description: { en: 'Beautiful, responsive, and fast websites tailored to your brand and business goals.', ar: 'مواقع جميلة ومتجاوبة وسريعة مصممة لعلامتك التجارية وأهداف عملك.' },
        icon: Layers,
      },
      {
        title: { en: 'Web & Mobile Application Development', ar: 'تطوير تطبيقات الويب والجوال' },
        description: { en: 'Cross-platform applications that deliver seamless experiences on any device.', ar: 'تطبيقات متعددة المنصات تقدم تجارب سلسة على أي جهاز.' },
        icon: Smartphone,
      },
      {
        title: { en: 'Application Management', ar: 'إدارة التطبيقات' },
        description: { en: 'Ongoing maintenance, updates, and optimization to keep your apps running flawlessly.', ar: 'صيانة وتحديثات وتحسين مستمر للحفاظ على تشغيل تطبيقاتك بسلاسة.' },
        icon: Server,
      },
    ],
  },
  {
    slug: 'erp-system-development',
    title: { en: 'ERP System Development', ar: 'تطوير أنظمة تخطيط الموارد' },
    tagline: {
      en: 'Streamline operations with custom enterprise solutions',
      ar: 'بسّط عملياتك بحلول مؤسسية مخصصة',
    },
    description: {
      en: 'We analyze and understand your business requirements to evaluate potential ERP solutions and deliver systems that unify your operations.',
      ar: 'نحلل ونفهم متطلبات عملك لتقييم حلول ERP المحتملة وتقديم أنظمة توحد عملياتك.',
    },
    longDescription: {
      en: [
        'We analyze and understand your business requirements to evaluate potential ERP solutions that align with your operational goals and budget.',
        'We provide end-to-end solutions, from building an ERP system from scratch to taking over an existing development project or developing innovative strategies to improve what you already have.',
        'Our ERP systems bring your departments, data, and workflows together so your team can work smarter and your leadership can make decisions with confidence.',
      ],
      ar: [
        'نحلل ونفهم متطلبات عملك لتقييم حلول ERP المحتملة التي تتوافق مع أهدافك التشغيلية وميزانيتك.',
        'نقدم حلولًا شاملة، من بناء نظام ERP من الصفر إلى تولي مشروع تطوير قائم أو تطوير استراتيجيات مبتكرة لتحسين ما لديك بالفعل.',
        'أنظمة ERP لدينا تجمع أقسامك وبياناتك وسير عملك معًا حتى يتمكن فريقك من العمل بذكاء وقيادتك من اتخاذ القرارات بثقة.',
      ],
    },
    image: 'https://images.pexels.com/photos/5380618/pexels-photo-5380618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Database,
    features: [
      {
        title: { en: 'Custom ERP Architecture', ar: 'بنية ERP مخصصة' },
        description: { en: 'Tailored system design built around your specific workflows and industry requirements.', ar: 'تصميم نظام مخصص مبني حول سير عملك ومتطلبات صناعتك.' },
        icon: Workflow,
      },
      {
        title: { en: 'Data Security & Compliance', ar: 'أمان البيانات والامتثال' },
        description: { en: 'Enterprise-grade security protecting your most sensitive business data at every layer.', ar: 'أمان بمستوى المؤسسات يحمي بياناتك الحساسة في كل طبقة.' },
        icon: ShieldCheck,
      },
      {
        title: { en: 'Performance at Scale', ar: 'أداء قابل للتوسع' },
        description: { en: 'Optimized infrastructure that grows with your organization without slowing down.', ar: 'بنية تحتية محسّنة تنمو مع مؤسستك دون تباطؤ.' },
        icon: Gauge,
      },
    ],
  },
];

export const servicesMap = Object.fromEntries(services.map((s) => [s.slug, s])) as Record<ServiceSlug, ServiceDetail>;
