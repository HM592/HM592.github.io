// Plain-text mirror of the CV content the AI assistant is grounded on.
//
// The site's real source of truth is ../../src/data/cv.js, but that file
// can't be imported directly here: it imports logo image files at the top
// level, and this Worker is a separate build target (Wrangler, not Vite)
// with no loader for those assets. Keep this file's text in sync by hand
// whenever src/data/cv.js content changes.

export const CV_NAME = 'Hussain Master'

export const CV_TEXT_SUMMARY = `
Name: Hussain Master
Role: Business Analyst
Contact email: hussainmaster43@gmail.com

PROFILE
Converting business needs into shipped decisions.
Collaborative Business Analyst with 6 years of experience within financial services, with a passion to drive and convert business needs into well-defined technical requirements and outcomes that stakeholders can actually sign off on.

EXPERIENCE

Business Analyst (BA4) — Barclays | Barclaycard Payments (2024 — Present)
Highly functional BA working on an end-to-end scale across projects from inception to sign-off. Operating within the Barclays Acquiring Design Services team responsible for leading and delivering analysis & design input for change delivery projects.
- 10 months of experience leading acquiring analysis on a regulatory programme -> Return to Standards Fin-Crime programme within Barclays Merchant Services
- Delivery of end-to-end core acquiring high-level and detailed requirements for the Fin-Crime initiative, ensuring acquiring compatibility & compliance
- Strong grasp of Identity & Verification (ID&V) processes & controls required for business customer due diligence (CDD), where he has led analysis to provide ID&V data for principals/individuals
- Well-versed in process modelling, creating numerous architectural diagrams illustrating areas of potential changes easily for programme stakeholders
- Consulted & advised senior stakeholders for application decisions that would best fit the fin-crime requirements
- Understanding of key concepts pertaining to financial crime changes, including mandatory data elements, trigger rules for key data elements when altered in servicing platforms and required alerts or controls which arise from those triggers
- Organised and led workshops with high-level stakeholders including Financial Crime Execution Managers, Product Owners, KYC Process & Team Managers and Component (development) Teams
- In-depth experience collaborating across multi-functional teams, working with financial crime, operational & technology SMEs throughout the delivery to fulfil regulatory needs & compliance
- Extensive experience capturing user stories & project documentation on Jira & Confluence, utilising accessible M365 macros to publish & view PowerPoints & Excels online, removing the need to download files locally
- Optimisation of project team task management, creating & managing a Kanban within Microsoft Lists
- Experience utilising automation capabilities within Microsoft Power Automate to generate alerts for Kanban task modifications, as well as creating weekly MI reports for senior leadership

Business Analyst (BA3) — Barclays | Barclaycard Payments (2022 — 2024)
Working at Barclaycard Payments Acquiring, delivering key analysis and design input for transformation projects, including a gateway platform migration.
- Led the analysis delivery for a successful merchant gateway platform migration consisting of over 2,000 merchants
- Led migration planning for the gateway platform migration, creating schedules & sequences in accordance with feasibility, deadlines, risk-appetite, customer classification, and volume
- Experience creating technical deployment plans with IT service management teams to ensure the relevant support teams and activity timelines were detailed for the migration
- Responsible for delivering analysis for changes into Core Acquiring Systems
- Extensive experience conducting detailed analysis for settlement processes, providing a clear view between as-is and to-be states for affected applications
- Provided numerous impact assessments for platform changes during triage, considering the financial, technical and operational implications of delivering

Apprentice Business Analyst — Barclays | Barclaycard Payments (2020 — 2022)
Working at Barclaycard Payments Acquiring, delivering key analysis and design input for funding products & tech changes to core processing platforms which underpin the transaction lifecycle, supporting businesses with end-to-end transaction management, ranging from capture & authorisation to fund settlement.
- Delivered analysis & requirements for a new acquiring funding product called "Barclaycard Business Cash Advance", granting access to a funding partner who has provided over £1 billion in funding to date
- Over 70% of approved applicants receiving funding within 1 working day
- Experience delivering small change requests to Barclaycard Platforms
- Exposure to working in large multi-functional teams & being mentored by well-seasoned Business Analysts

EDUCATION

BSc Digital & Technology Solutions — University of Strathclyde, First Class Honours (1:1) (2024)

A-Levels — Economics, Accounting, Computer Science (A, A, B) — Wyggeston and Queen Elizabeth I College (2020)

GCSEs — 10 GCSEs (Grade 5 and above) — Judgemeadow Community College (2018)

SKILLS
Requirements elicitation (group workshops, stakeholder interviews); User story & Acceptance Criteria Development; Gap Analysis; Data Modelling (conceptual & logical data modelling & data flow diagrams); User Acceptance Testing (UAT) — defining test scenarios, coordination with test & business teams, managing user acceptance & sign-off; Stakeholder Communication & Management; SDLC methodologies (Kanban, WAGILE, SCRUM); Requirements Management Tools (Jira, Confluence); BPMN & Process Flow Mapping (Visio); Wireframing & Diagramming (Figma); AI-assisted Development (Claude Code); Java & Python (object orientation concepts, code interpretation); SQL (basic/intermediate querying, data mapping); Microsoft 365 proficiency (Word, Excel, PowerPoint, OneNote).
`.trim()
