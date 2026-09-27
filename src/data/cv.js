// Single source of truth for all real CV content.
// Components read from this file — no CV text should be hardcoded elsewhere.

import barclaycardLogo from '../assets/logos/barclaycard.jpg'
import strathclydeLogo from '../assets/logos/strathclyde.jpg'
import wqeLogo from '../assets/logos/wqe.webp'
import judgemeadowLogo from '../assets/logos/judgemeadow.png'

export const cv = {
  name: 'Hussain Master',
  role: 'Business Analyst',

  contact: {
    email: 'hussainmaster43@gmail.com',
  },

  profile: {
    headline: 'Converting business needs into shipped decisions.',
    paragraph:
      'Collaborative Business Analyst with 6 years of experience within financial services, with a passion to drive and convert business needs into well-defined technical requirements and outcomes that stakeholders can actually sign off on.',
  },

  // Shown once, roughly midway through the Experience list — since both
  // roles below are at the same company. Set `src` to an imported image
  // once the logo file is added (see src/assets/logos/).
  experienceLogo: {
    src: barclaycardLogo,
    alt: 'Barclaycard company logo',
    background: '#ffffff',
  },

  experience: [
    {
      title: 'Business Analyst (BA4)',
      company: 'Barclays | Barclaycard Payments',
      dateRange: '2024 — Present',
      description:
        'Highly functional BA working on an end-to-end scale across projects from inception to sign-off. Operating within the Barclays Acquiring Design Services team responsible for leading and delivering analysis & design input for change delivery projects.',
      achievements: [
        '10 months of experience leading acquiring analysis on a regulatory programme -> Return to Standards Fin-Crime programme within Barclays Merchant Services',
        'Delivery of end-to-end core acquiring high-level and detailed requirements for the Fin-Crime initiative, ensuring acquiring compatibility & compliance',
        'Strong grasp of Identity & Verification (ID&V) processes & Controls required for business customer due diligence (CDD), where I have led analysis to provide ID&V data for principals/individuals',
        'Well-versed in process modelling, creating numerous architectural diagrams illustrating areas of potential changes easily for programme stakeholders',
        'Consulted & advised senior stakeholders for application decisions that would best fit the fin-crime requirements',
        'Understanding of key concepts pertaining to financial crime changes, including mandatory data elements, trigger rules for key data elements when altered in our servicing platforms and required alerts or controls which arise from those triggers',
        'Organised and led workshops with high-level stakeholders including Financial Crime Execution Managers, Product Owners, KYC Process & Team Managers and Component (development) Teams',
        'In-depth experience collaborating across multi-functional teams, working with financial crime, operational & technology SMEs throughout the delivery to fulfil regulatory needs & compliance',
        'Extensive experience capturing user stories & project documentation on Jira & Confluence, utilising accessible M365 macros to publish & view PowerPoints & Excels online removing the need to download files locally',
        'Optimisation of our project team task management, creating & managing a Kanban within Microsoft Lists',
        'Experience utilising automation capabilities within Microsoft Power Automate to generate alerts for Kanban task modifications, as well as creating weekly MI reports for senior leadership',
      ],
    },
    {
      title: 'Business Analyst (BA3)',
      company: 'Barclays | Barclaycard Payments',
      dateRange: '2022 — 2024',
      description:
        'Working at Barclaycard Payments Acquiring, delivering key analysis and design input for transformation projects, including a gateway platform migration.',
      achievements: [
        'Led the analysis delivery for a successful merchant gateway platform migration consisting of over 2,000 merchants',
        'Led migration planning for the gateway platform migration, creating schedules & sequences in accordance with feasibility, deadlines, risk-appetite, customer classification, and volume',
        'Experience creating technical deployment plans with IT service management teams to ensure the relevant support teams, and activity timelines were detailed for the migration',
        'Responsible for delivering analysis for changes into Core Acquiring Systems',
        'Extensive experience conducting detailed analysis for settlement processes, providing a clear view between as-is and to-be states for affected applications',
        'Provided numerous impact assessment for platform changes during triage to consider the financial, technical and operational implications of delivering',
      ],
    },
    {
      title: 'Apprentice Business Analyst',
      company: 'Barclays | Barclaycard Payments',
      dateRange: '2020 — 2022',
      description:
        'Working at Barclaycard Payments Acquiring, delivering key analysis and design input for funding products & tech changes to their core processing platforms which underpin the transaction lifecycle, supporting businesses with E-2-E transaction management, ranging from capture & authorisation to fund settlement.',
      achievements: [
        'Delivered analysis & requirements for a new acquiring funding product called ‘Barclaycard Business Cash Advance’ granting access to a funding partner who has provided over £1 billion in funding to date',
        'Over 70% of approved applicants receiving funding within 1 working day',
        'Experience delivering small change requests to Barclaycard Platforms',
        'Exposure to working in large multi-functional teams & being mentored by well-seasoned Business Analysts',
  ],

  education: [
    {
      title: 'BSc Digital & Technology Solutions',
      institution: 'University of Strathclyde · First Class Honours (1:1)',
      dateRange: '2024',
      logo: {
        src: strathclydeLogo,
        alt: 'University of Strathclyde logo',
        background: '#000000',
      },
    },
    {
      title: 'A-Levels — Economics, Accounting, Computer Science (A, A, B)',
      institution: 'Wyggeston and Queen Elizabeth I College',
      dateRange: '2020',
      logo: {
        src: wqeLogo,
        alt: 'Wyggeston and Queen Elizabeth I College logo',
        background: '#ffffff',
      },
    },
    {
      title: 'GCSEs — 10 GCSEs (Grade 5 and above)',
      institution: 'Judgemeadow Community College',
      dateRange: '2018',
      logo: {
        src: judgemeadowLogo,
        alt: 'Judgemeadow Community College logo',
        background: '#ffffff',
      },
    },
  ],

  skills: [
    'Requirements elicitation – Group workshops, stakeholder interviews',
    'User story & Acceptance Criteria Development',
    'Gap Analysis',
    'Data Modelling – Conceptual & logical data modelling & data flow diagrams',
    'User Acceptance Testing (UAT) – Defining test scenarios, coordination with test & business teams, managing user acceptance & sign-off',
    'Stakeholder Communication & Management',
    'SDLC methodologies – Kanban, WAGILE, SCRUM',
    'Requirements Management Tools – Jira, Confluence',
    'BPMN & Process Flow Mapping – Visio',
    'Wireframing & Diagramming – Figma',
    'AI-assisted Development – Claude Code',
    'Java & Python – Object orientation concepts, code interpretation',
    'SQL – Basic/Intermediate querying, data mapping',
    'Microsoft 365 proficiency – Word, Excel, PowerPoint, OneNote',
  ],
}
