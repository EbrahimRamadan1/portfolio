import type { PortfolioContent } from '@/types/portfolio';

export const portfolio: PortfolioContent = {
  name: 'Ebrahim Ramadan',
  title: 'Frontend Engineer',
  tagline:
    'Building scalable financial systems with precision, performance, and product-first engineering.',
  location: 'Giza, Egypt',
  experienceYears: '1+',
  currentCompany: 'eVision Empowering Financial',
  about: [
    'Frontend engineer specializing in enterprise financial and banking systems. I architect and build applications that handle critical financial operations — reconciliation, payments, SWIFT messaging, and user management — using React, TypeScript, and scalable frontend architectures.',
    'My work focuses on performance, maintainability, and reusable component systems. I design interfaces that reduce cognitive load for operators managing high-stakes financial data, and I build architecture that scales across products without accumulating tech debt.',
    "Every system I build treats performance as a feature, security as a prerequisite, and developer experience as a first-class concern. I don't just build UIs — I build frontend platforms that enable product teams to move faster.",
  ],
  stats: [
    { value: '1+', label: 'Years Experience' },
    { value: '4+', label: 'Enterprise Systems' },
    { value: '25%', label: 'Efficiency Improved' },
    { value: '8+', label: 'Tech Stacks' },
  ],
  skills: [
    {
      category: 'Core',
      skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      category: 'State Management',
      skills: ['Redux', 'Zustand', 'Context API'],
    },
    {
      category: 'UI & Styling',
      skills: ['Material UI', 'Tailwind CSS', 'SCSS', 'Bootstrap', 'PrimeReact'],
    },
    {
      category: 'Data & APIs',
      skills: ['React Query', 'REST APIs', 'WebSocket'],
    },
    {
      category: 'Forms & Validation',
      skills: ['React Hook Form', 'Formik', 'Yup', 'Zod'],
    },
    {
      category: 'Architecture',
      skills: [
        'Component Architecture',
        'Scalable Frontend Systems',
        'Performance Optimization',
        'Code Splitting',
        'Clean Code',
      ],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub Actions', 'AWS', 'Postman', 'Figma', 'DBeaver'],
    },
    {
      category: 'Methodologies',
      skills: ['Agile/Scrum'],
    },
  ],
  experience: [
    {
      company: 'eVision Empowering Financial',
      role: 'Frontend Engineer',
      startDate: 'April 2025',
      endDate: 'Present',
      location: 'Cairo, Egypt',
      achievements: [
        'Architected and built enterprise financial and banking applications using React, TypeScript, and Material UI, serving critical reconciliation and payment operations.',
        'Contributed to the frontend architecture of a next-generation Reconciliation System handling complex financial data matching and dispute workflows.',
        'Improved maintainability and development efficiency by 25% through component abstraction, shared hooks, and standardized patterns across the frontend codebase.',
        'Implemented Keycloak-based authentication with OAuth2 flows, enabling secure SSO integration across enterprise applications.',
        'Built a comprehensive RBAC system with granular permission controls, supporting role hierarchies and dynamic feature gating.',
        'Developed user and role management modules with full CRUD workflows, audit logging, and bulk operations.',
        'Integrated SWIFT message workflows for secure financial messaging between banking institutions, handling MT/MX message formats.',
        'Built advanced enterprise data tables with server-side pagination, multi-column filtering, sorting, and CSV/Excel export capabilities.',
        'Led migration from MUI DataGrid to TanStack Table, preserving all server-side features while eliminating licensing costs and improving customization flexibility.',
        'Reduced licensing costs by eliminating paid vendor dependencies through strategic migration to open-source alternatives.',
        'Worked in Agile teams with two-week sprints, daily stand-ups, and quarterly planning cycles.',
      ],
      techStack: [
        'React',
        'TypeScript',
        'Material UI',
        'TanStack Table',
        'React Query',
        'Redux',
        'Keycloak',
        'REST APIs',
      ],
    },
  ],
  projects: [
    {
      title: 'Reconciliation System',
      subtitle: 'Financial Data Matching Platform',
      problem:
        'Financial institutions process millions of transactions daily. Discrepancies between internal and external records require manual investigation, causing operational bottlenecks and settlement delays.',
      solution:
        'Architected a next-gen reconciliation dashboard with real-time data matching, automated dispute detection, and streamlined resolution workflows. Built a component system that renders complex financial data with clarity.',
      architecture:
        'Feature-based React architecture with TypeScript strict mode. Modular components for data ingestion, matching logic visualization, dispute management, and reporting. TanStack Query for server-state synchronization with optimistic updates on resolution actions.',
      stack: ['React', 'TypeScript', 'Material UI', 'TanStack Table', 'React Query', 'Redux'],
      impact:
        'Reduced manual reconciliation effort through automated matching. Improved data visibility for financial operators handling critical settlement workflows.',
      metrics: [
        'Automated matching workflows',
        'Real-time discrepancy detection',
        'Streamlined resolution process',
      ],
    },
    {
      title: 'RBAC Management Platform',
      subtitle: 'Role-Based Access Control System',
      problem:
        'Enterprise applications require fine-grained access control. Managing permissions across multiple products, user roles, and organizational hierarchies without a unified system creates security gaps and administrative overhead.',
      solution:
        'Built a comprehensive RBAC platform with a hierarchical permission model, role templates, dynamic feature gating, and full audit trail. Integrated with Keycloak for enterprise-grade authentication.',
      architecture:
        'Layered permission architecture with role-based access, attribute-based conditions, and hierarchical inheritance. Admin interface for role creation, permission assignment, and user provisioning with bulk operations.',
      stack: ['React', 'TypeScript', 'Material UI', 'Keycloak', 'REST APIs'],
      impact:
        'Eliminated security gaps from manual permission management. Reduced administrative overhead for user provisioning across enterprise applications.',
      metrics: ['Granular permission controls', 'Role hierarchy management', 'Full audit trail'],
    },
    {
      title: 'SWIFT Operations Dashboard',
      subtitle: 'Secure Financial Messaging Interface',
      problem:
        'SWIFT financial messaging involves complex MT/MX message formats, strict security requirements, and real-time processing needs. Operators need a clear interface to monitor, manage, and troubleshoot message flows.',
      solution:
        'Developed a secure operations dashboard for SWIFT message monitoring with real-time status tracking, message format validation, and workflow management for financial messaging operations.',
      architecture:
        'Event-driven architecture with WebSocket connections for real-time message status updates. Modular message viewer supporting MT and MX formats with syntax highlighting and validation. Secure API layer with message-level encryption.',
      stack: ['React', 'TypeScript', 'Material UI', 'WebSocket', 'REST APIs'],
      impact:
        'Enabled secure, real-time monitoring of financial message flows between banking institutions. Improved operator efficiency for message troubleshooting.',
      metrics: ['Real-time message tracking', 'MT/MX format support', 'Secure messaging pipeline'],
    },
    {
      title: 'Enterprise Data Platform',
      subtitle: 'Scalable Data Infrastructure',
      problem:
        'Enterprise applications generate massive datasets that require efficient presentation, filtering, and export. MUI DataGrid licensing costs and customization limitations hindered product scalability.',
      solution:
        'Led migration from MUI DataGrid to TanStack Table, rebuilding the entire data layer with server-side operations, preserved all features, and gained full customization control. Eliminated vendor lock-in.',
      architecture:
        'Abstracted data layer with TanStack Query for server-state synchronization. TanStack Table with custom virtualization for rendering thousands of rows. Server-side pagination, sorting, and filtering pipeline. CSV and Excel export service layer.',
      stack: ['React', 'TypeScript', 'TanStack Table', 'TanStack Query', 'Material UI'],
      impact:
        'Eliminated licensing costs while improving customization capabilities. Maintained enterprise-grade data features including server-side pagination, filtering, sorting, and export functionality.',
      metrics: [
        'Licensing cost eliminated',
        'Server-side pagination',
        'Multi-column filtering',
        'CSV/Excel export',
      ],
    },
  ],
  philosophy: [
    {
      title: 'Scalability',
      description:
        'Architecture that grows with product complexity. Modular systems, clear boundaries, and patterns that prevent tech debt accumulation at scale.',
    },
    {
      title: 'Maintainability',
      description:
        'Code that tells a story. Clean abstractions, consistent conventions, and minimal surprise. Every file has one job and does it well.',
    },
    {
      title: 'Developer Experience',
      description:
        'The frontend platform should make product teams faster. Strong typing, reusable primitives, clear documentation, and fast feedback loops.',
    },
    {
      title: 'Performance',
      description:
        'Performance is a feature, not an afterthought. Bundle budgets, code splitting, lazy loading, and rendering optimization from day one.',
    },
    {
      title: 'Reusable Systems',
      description:
        'Build once, use everywhere. Component systems, shared hooks, and extracted utilities that compose into any feature without duplication.',
    },
    {
      title: 'Security',
      description:
        'Security is a prerequisite for enterprise systems. RBAC, input validation, secure authentication flows, and defense-in-depth from the frontend layer.',
    },
  ],
  social: [
    {
      label: 'Email',
      url: 'mailto:ebrahimramadan18@gmail.com',
      icon: 'email',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/EbrahimRamadan1',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ebrahim-ramadann/',
      icon: 'linkedin',
    },
  ],
  email: 'ebrahimramadan18@gmail.com',
};

export const portfolioMetadata = {
  title: 'Ebrahim Ramadan — Frontend Engineer',
  description:
    'Enterprise frontend engineer specializing in financial systems, React, TypeScript, and scalable architecture. Building critical systems for banking and financial institutions.',
  url: 'https://ebrahimramadan.dev',
};
