export const locales = ['zh-HK', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh-HK';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function withLocale(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${normalized === '/' ? '' : normalized}`;
}

export const messages = {
  'zh-HK': {
    langLabel: '語言',
    nav: {
      home: '首頁',
      about: '關於我',
      skills: '技能',
      career: '經歷',
      status: '系統狀態',
      blog: '部落格',
      github: 'GitHub',
    },
    hero: {
      badge: '全端工程師 ・ 香港',
      title: '打造穩定、可擴展、可交付的產品體驗',
      intro:
        '專注金融與企業級系統，涵蓋架構設計、交付流程與使用者體驗。重視品質、可維護性與跨團隊協作。',
      primaryCta: '查看職涯經歷',
      secondaryCta: '聯絡我',
      stats: [
        { label: '工作年資', value: '3+ 年' },
        { label: '系統模組', value: '10+ 個' },
        { label: '協作團隊', value: '20+ 人' },
      ],
    },
    about: {
      title: '關於我',
      summary:
        '我是 Elliot，專注於高可靠度系統與全端開發，擅長從需求分析到落地交付，並持續優化效能、測試與維運流程。',
      cards: [
        {
          title: '核心能力',
          body: 'Java / Spring Boot、Node.js、Next.js、REST API、微服務與資料模型設計。',
        },
        {
          title: '工作方式',
          body: '以可驗證結果驅動，重視規格清晰、技術決策透明與跨部門溝通效率。',
        },
      ],
    },
    skills: {
      title: '技術能力',
      categories: {
        backend: {
          title: '後端與架構',
          items: ['Java', 'Spring Boot', 'Node.js', 'RESTful API', 'GraphQL', 'MyBatis', 'JPA'],
        },
        frontend: {
          title: '前端工程',
          items: ['TypeScript', 'React', 'Next.js', 'Vue', 'Tailwind CSS', 'Redux'],
        },
        devops: {
          title: '交付與維運',
          items: ['GitLab CI/CD', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Grafana'],
        },
      },
    },
    career: {
      title: '職涯經歷',
      entries: [
        {
          role: 'Senior Programmer',
          company: 'Shanghai Commercial Bank',
          period: '2023.04 - 現在',
          points: [
            '參與核心銀行系統現代化，從 AS400 遷移至 Java 11 + Spring Boot 架構。',
            '落地 GitLab CI/CD 與部署流程，縮短交付週期並降低回歸風險。',
            '建置報表與對外整合介面，提升資料透明度與跨系統協作效率。',
          ],
        },
        {
          role: 'Svc Info Developer',
          company: 'DXC Technology',
          period: '2022.06 - 2023.04',
          points: [
            '開發與維護政府系統模組，涵蓋 J2EE、C# 與 SQL Server。',
            '參與 SIT / UAT / 壓測與正式上線支援，確保穩定營運。',
          ],
        },
      ],
    },
    status: {
      title: '系統狀態',
      subtitle: '即時監測服務可用性與延遲表現',
      provider: '監測服務由 HetrixTools 提供',
    },
    footer: {
      line: '專注交付可靠系統與清晰體驗。',
      rights: '版權所有。',
    },
  },
  en: {
    langLabel: 'Language',
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      career: 'Career',
      status: 'Status',
      blog: 'Blog',
      github: 'GitHub',
    },
    hero: {
      badge: 'Full-Stack Engineer ・ Hong Kong',
      title: 'Building reliable, scalable, and delivery-focused product experiences',
      intro:
        'I focus on banking and enterprise systems across architecture, delivery pipelines, and user experience with an emphasis on quality and maintainability.',
      primaryCta: 'View Career',
      secondaryCta: 'Contact Me',
      stats: [
        { label: 'Experience', value: '3+ years' },
        { label: 'System Modules', value: '10+' },
        { label: 'Team Collaboration', value: '20+' },
      ],
    },
    about: {
      title: 'About Me',
      summary:
        'I am Elliot, a full-stack engineer focused on high-reliability systems. I work from requirement analysis to production delivery and continuously improve performance, testing, and operations.',
      cards: [
        {
          title: 'Core Expertise',
          body: 'Java / Spring Boot, Node.js, Next.js, REST APIs, microservices, and data modeling.',
        },
        {
          title: 'How I Work',
          body: 'I drive outcomes with measurable results, clear specifications, transparent decisions, and cross-team communication.',
        },
      ],
    },
    skills: {
      title: 'Technical Capabilities',
      categories: {
        backend: {
          title: 'Backend & Architecture',
          items: ['Java', 'Spring Boot', 'Node.js', 'RESTful API', 'GraphQL', 'MyBatis', 'JPA'],
        },
        frontend: {
          title: 'Frontend Engineering',
          items: ['TypeScript', 'React', 'Next.js', 'Vue', 'Tailwind CSS', 'Redux'],
        },
        devops: {
          title: 'Delivery & Operations',
          items: ['GitLab CI/CD', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Grafana'],
        },
      },
    },
    career: {
      title: 'Career Journey',
      entries: [
        {
          role: 'Senior Programmer',
          company: 'Shanghai Commercial Bank',
          period: 'Apr 2023 - Present',
          points: [
            'Contributed to core banking modernization from AS400 to Java 11 + Spring Boot.',
            'Implemented GitLab CI/CD and deployment workflows to shorten release cycles.',
            'Delivered reporting and integration interfaces for better transparency and interoperability.',
          ],
        },
        {
          role: 'Svc Info Developer',
          company: 'DXC Technology',
          period: 'Jun 2022 - Apr 2023',
          points: [
            'Developed and maintained government modules using J2EE, C#, and SQL Server.',
            'Supported SIT/UAT/load testing and production go-live for stable operations.',
          ],
        },
      ],
    },
    status: {
      title: 'System Status',
      subtitle: 'Live monitoring for service availability and latency',
      provider: 'Monitoring powered by HetrixTools',
    },
    footer: {
      line: 'Focused on delivering reliable systems and clear experiences.',
      rights: 'All rights reserved.',
    },
  },
} as const;

export function getMessages(locale: Locale) {
  return messages[locale];
}
