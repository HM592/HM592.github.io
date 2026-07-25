// Single source of truth for all real CV content.
// Components read from this file — no CV text should be hardcoded elsewhere.

import barclaycardLogo from '../assets/logos/barclaycard.jpg'
import strathclydeLogo from '../assets/logos/strathclyde.jpg'
import wqeLogo from '../assets/logos/wqe.webp'
import judgemeadowLogo from '../assets/logos/judgemeadow.png'

export const cv = {
  name: 'Hussain Master',
  role: 'Business Analyst',

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
      title: 'Business Analyst',
      company: 'Barclays | Barclaycard Payments',
      dateRange: '2022 — Present',
      description:
        'Working at Barclaycard payments acquiring division, leading and owning BA workstreams across cross-functional initiatives including merchant platform migrations, financial crime process improvement, new SME funding products and more.',
      achievements: [
        'Requirements and analysis delivery for a new financial product (Barclaycard Business Cash Advance), enabling funding access to over 10,000 customers',
        'Managed end-to-end merchant migration to a new gateway platform, successfully transitioning over 2,000 merchants without disruption',
        'Defined and implemented new financial crime data requirements, supporting KYC review processes for 600+ cases monthly and strengthening regulatory compliance of new key financial crime data within our systems to better support the 700 monthly cases of KYC',
      ],
    },
    {
      title: 'Associate Business Analyst',
      company: 'Barclays | Barclaycard Payments',
      dateRange: '2020 — 2022',
      description:
        'Working at Barclaycard payments acquiring, delivering key analysis and design input for numerous changes to our core processing platforms which underpin the transaction lifecycle, supporting businesses with E-2-E transaction management, ranging from capture & authorisation to fund settlement.',
      achievements: [
        'Drove iterative enhancements to core processing systems, contributing to zero major incidents across 2021, improving settlement stability and reducing operational risk',
        'Led E-2-E analysis for a new UI to the internal manual-settlement management platform, improving case handling experience and response times for the operational agent colleagues',
        'Delivered requirements analysis and AS-IS, TO-BE gap analysis for an automation initiative, which streamlined pre-authorisation transaction MI reporting which used to be a manual process, thereby reducing operational overhead for the business',
      ],
    },
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
