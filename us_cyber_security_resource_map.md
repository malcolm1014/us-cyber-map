# US Cybersecurity Resource Map

This is a practical starter map of high-value US cybersecurity resources for practitioners, leadership teams, and organizations building or improving their security posture.

## 1. Core U.S. Government Cyber Resources

### Federal coordination and guidance
- **CISA — Cybersecurity and Infrastructure Security Agency**: https://www.cisa.gov
  - **Role**: Lead U.S. cybersecurity agency; daily operational cyber guidance
  - **Best for**: General guidance, alerts, ADA support, incident response, breach reporting
  - **Key resources**: Shields Up, KEV Catalog, Advisories (daily updates)
  - **Contact**: 1-855-292-3937 (CISA Cybersecurity HotLine) | Email: central@cisa.gov | Hours: 24/7
  - **Cliff notes**: Start here for most cyber events. CISA provides daily updates on active exploits. KnownExploited Vulnerabilities catalog is critical for patching prioritization.

- **NIST — National Institute of Standards and Technology**: https://www.nist.gov
  - **Role**: Standards development; foundational cyber frameworks
  - **Best for**: Framework development, control design, compliance architecture, research
  - **Key resources**: Cybersecurity Framework 2.0, SP 800-series (53, 171, 61, 86)
  - **Contact**: https://www.nist.gov/contact | NIST Cybersecurity hotline available through CISA
  - **Cliff notes**: NIST CSF 2.0 is the de facto U.S. framework. NIST SP 800-53 is mandatory for federal agencies (FISMA). SP 800-171 required for DoD contractors and CUI (Controlled Unclassified Information).

- **NSA Cybersecurity Collaboration Center**: https://www.nsa.gov/Press-Room/Cybersecurity-Collaboration-Center/
  - **Role**: Advanced threat intelligence; classified and unclassified advisories
  - **Best for**: Threat actor identification, advanced APT tactics, cloud/zero-trust guidance
  - **Key resources**: 60 Cybersecurity Principles, cloud security advisories, encrypted communication guidance
  - **Contact**: https://www.nsa.gov/contact-us/ | Email inquiries through NSA public liaison
  - **Cliff notes**: NSA provides threat-informed guidance but often slower to publish than CISA. Their "60 Cybersecurity Principles" is authoritative for critical infrastructure. Focus on their cloud advisories if moving to cloud.

- **FBI Internet Crime Complaint Center (IC3)**: https://www.ic3.gov
  - **Role**: Criminal reporting; cybercrime statistics and analysis
  - **Best for**: Reporting ransomware, extortion, phishing, credential theft; law enforcement coordination
  - **Contact**: Report online at https://www.ic3.gov | FBI Local field offices: https://www.fbi.gov/contact-us/field-offices
  - **Cliff notes**: IC3 accepts online reports only (no phone). Reports take 48-72 hours to appear in statistics. Valuable for trend analysis and actor identification.

- **DHS / US-CERT (now CISA)**: https://www.cisa.gov/news-events/cybersecurity-advisories
  - **Role**: Alerts and emergency notifications
  - **Best for**: Real-time threat notifications; coordinated vulnerability disclosure
  - **Contact**: Same as CISA (integrated agency)
  - **Cliff notes**: US-CERT is now part of CISA. Subscribe to alerts for your sector via CISA website.

### Key U.S. cybersecurity agencies and contact info
| Agency | Primary Contact | Hours | Best For |
|--------|-----------------|-------|----------|
| **CISA** | 1-855-292-3937 (HotLine) | 24/7 | Daily guidance, incident response, patching |
| **FBI** | Local field offices | Business hrs | Criminal investigation, ransomware reporting |
| **NSA** | Public liaison (web form) | Business hrs | Advanced threats, classified guidance |
| **NIST** | NIST contact page | Business hrs | Framework development, standards |
| **DHS** | Integrated with CISA | 24/7 | Critical infrastructure coordination |
| **DOJ Cyber Division** | https://www.justice.gov/opa | Business hrs | Legal/prosecution guidance |
| **DoD Cyber Exchange** | https://public.cyber.mil | Online 24/7 | Defense contractor guidance |

## 2. Frameworks and Standards

### Foundational frameworks
**Quick Decision Tree**:
- **Building a program from scratch?** → Start with NIST CSF 2.0
- **Federal agency or contractor?** → Mandatory: NIST SP 800-53 (and SP 800-171 if handling CUI)
- **Practical control selection?** → Use CIS Controls v8 alongside CSF
- **Threat modeling?** → Map using MITRE ATT&CK framework
- **Risk/compliance focus?** → Use NIST RMF (government agencies)

- **NIST Cybersecurity Framework (CSF 2.0)**: https://www.nist.gov/cyberframework
  - **When to use**: Primary governance framework for all orgs (federal, private, critical infrastructure)
  - **Cliff notes**: Updated Jan 2024. Uses 5 Functions: Govern, Identify, Protect, Detect, Respond, Recover. Free and voluntary. Basis for most U.S. regulations.

- **NIST SP 800-53 (Security and Privacy Controls)**: https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final
  - **When to use**: Federal agencies (FISMA mandatory) and federally funded R&D centers
  - **Cliff notes**: 700+ controls organized by 23 families. Rev. 5 published 2013, Rev. 6 draft available. Highly technical.

- **NIST SP 800-171 (Protecting Controlled Unclassified Info)**: https://www.nist.gov/itl/cybersecurity/managed-services-and-controls
  - **When to use**: DoD contractors, ITAR/CUI handling, prime and sub-contractors
  - **Cliff notes**: 110 controls. Mandatory for DFARS compliance. Lighter than 800-53. CMMC 2.0 based on this.

- **NIST Risk Management Framework (RMF)**: https://csrc.nist.gov/projects/risk-management
  - **When to use**: Federal agencies following FISMA; comprehensive risk assessment process
  - **Cliff notes**: 6-step cyclical process. Integrates with SP 800-53 for control selection.

- **CIS Controls v8**: https://www.cisecurity.org/controls
  - **When to use**: Practical implementation across any organization; prioritized controls
  - **Cliff notes**: 18 foundational controls, mapped to CSF 2.0. Free to download. Most implementable of all frameworks.

- **MITRE ATT&CK**: https://attack.mitre.org
  - **When to use**: Threat modeling, red team planning, detection capability mapping
  - **Cliff notes**: 200+ techniques across 14 tactics. Free. Used by threat intelligence community. Matrix updated regularly.

### Useful references for control design and vulnerability management
- **OWASP Top 10**: https://owasp.org/www-project-top-ten/
  - **Use for**: Application security vulnerabilities; dev team training
  - **Cliff notes**: Updated 2021. Focus on most critical web app risks (injection, broken auth, etc.).

- **CVE Program**: https://cve.mitre.org
  - **Use for**: Vulnerability naming standard; research and tracking
  - **Cliff notes**: Free, open-source. MITRE administers. Most vendors reference CVE IDs.

- **NVD (National Vulnerability Database)**: https://nvd.nist.gov
  - **Use for**: Searchable U.S. government repository of CVEs; CVSS scoring
  - **Cliff notes**: NIST maintained. Updated daily. CVSS 3.1 scoring adds context and severity.

- **CWE (Common Weakness Enumeration)**: https://cwe.mitre.org
  - **Use for**: Understanding software weaknesses (root causes, not specific CVEs)
  - **Cliff notes**: 300+ types of weaknesses. Useful for secure coding guidance.

- **Zero Trust Maturity Model (CISA)**: https://www.cisa.gov/zero-trust-maturity-model
  - **Use for**: Modernizing network architecture; cloud-first transition
  - **Cliff notes**: 6 pillars (identity, device, network, application, data, automation). Maturity levels 1-5.

## 3. Threat Intelligence, Alerts, and Vulnerability Tracking

### High-value sources
**Priority for daily use**:

- **CISA Known Exploited Vulnerabilities (KEV) Catalog**: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
  - **What it is**: List of vulnerabilities actively being exploited in the wild
  - **Use for**: Patching prioritization; enforcement deadline guidance (14 days for federal agencies)
  - **Contact/Update**: Updated daily, automated feeds available (CISA recommends checking weekly minimum)
  - **Cliff notes**: CRITICAL. If a CVE is on this list, it's being actively exploited. Highest patching priority.

- **CISA Alerts and Advisories**: https://www.cisa.gov/news-events/cybersecurity-advisories
  - **What it is**: Daily threat updates and technical guidance
  - **Use for**: Operational awareness; tactical response guidance
  - **Contact/Subscription**: Subscribe via website for daily email alerts
  - **Cliff notes**: Includes ransomware alerts, APT actor updates, supply chain risks. Subscribe by sector.

- **NVD Vulnerability Database**: https://nvd.nist.gov
  - **What it is**: Comprehensive CVE repository with CVSS scores and references
  - **Use for**: Vulnerability research, CVSS baseline comparison, impact analysis
  - **Update frequency**: Daily, typically 48-72 hours after CVE publication
  - **Cliff notes**: Official U.S. government repository. More authoritative than vendor sites for severity.

- **CISA Cyber Hygiene Hub**: https://www.cisa.gov/resources-tools/resources/cyber-hygiene
  - **What it is**: Assessment and hardening tools; maturity guidance
  - **Use for**: Self-assessment; establishing baseline security posture
  - **Cliff notes**: Includes tools like CSAT (Cyber Security Assessment Tool) for self-evaluation.

- **CISA Shields Up**: https://www.cisa.gov/shields-up
  - **What it is**: Crisis response guidance; emergency hardening checklist
  - **Use for**: Heightened threat environment; immediate defensive actions
  - **Contact**: Updated manually during active campaigns
  - **Cliff notes**: Activated during major threats (e.g., geopolitical events). Includes 20-30 immediate hardening actions.

### Monitoring active threats - Decision Matrix
| Threat Type | Primary Source | Secondary Source | Frequency |
|-------------|----------------|------------------|----------|
| **Known exploits** | CISA KEV Catalog | NVD | Weekly |
| **Ransomware** | CISA Alerts, FBI PIN | FBI IC3 statistics | Daily/Weekly |
| **APT Actor Activity** | NSA/CISA advisories | Vendor threat reports | As-published |
| **Zero-day risks** | CISA Shields Up | NSA guidance | Variable |
| **Supply chain** | CISA SCRM resources | Vendor advisories | Weekly minimum |
| **Sector-specific** | Sector ISACs | CISA advisories | Daily |

**Recommended monitoring cadence**:
- Daily (5 min): CISA Shields Up status, sector ISAC summaries
- Weekly (1 hr): KEV Catalog review, CISA Advisories digest, vendor advisories
- Monthly (2 hrs): Deeper threat research, ATT&CK mapping updates

## 4. Incident Reporting and Response

### Reporting and coordination
**Federal incident reporting requirements**:

- **FBI IC3 (Internet Crime Complaint Center)**: https://www.ic3.gov
  - **When to report**: Ransomware, extortion, credential theft, investment fraud
  - **Timeline**: Submit within 48 hours of incident discovery
  - **What happens**: Report appears in IC3 statistics (2-3 day lag); law enforcement notification if pattern detected
  - **Cliff notes**: Online reporting only. No phone reporting. Report ID provided for tracking.

- **CISA Incident Reporting**: https://www.cisa.gov/report
  - **When to report**: Any cyber incident; especially critical infrastructure impacts
  - **Timeline**: Report immediately upon discovery (within hours if possible)
  - **Contact**: 1-855-292-3937 (CISA HotLine) or online form | Available 24/7
  - **What CISA does**: Analysis, coordination, notification to affected parties, threat hunting support
  - **Cliff notes**: CISA may deploy resources to your organization if impact is significant.

- **CISA Cyber Incident Reporting for Critical Infrastructure (CIRCIA)**: https://www.cisa.gov/CIRCIA
  - **When to report**: Critical infrastructure entities experiencing ransomware/extortion
  - **Mandatory deadline**: Ransomware within 72 hours; Extortion within 24 hours (as of 2023)
  - **Reporting mechanism**: Log into CISA portal at https://central.cisa.gov (requires authentication)
  - **Cliff notes**: Legal requirement. Non-compliance can trigger fines. Includes reporting of ransom demands even if not paid.

### Sector-specific reporting and obligations
**Regulatory timelines and contacts**:

| Sector | Breach Notification | Primary Contact | Deadline |
|--------|-------------------|-----------------|----------|
| **Healthcare (HIPAA)** | HHS OCR | https://www.hhs.gov/hipaa/for-professionals/breach-notification/ | 60 days |
| **Public Companies (SEC)** | SEC + Investors | https://www.sec.gov/rules-regulations (Item 106) | 4 business days |
| **Financial Services (GLBA)** | FTC + Customers | https://www.ftc.gov/business-guidance/privacy-security | 60 days |
| **Critical Infrastructure** | CISA | https://www.cisa.gov/CIRCIA | 24-72 hours |
| **K-12 Schools** | State AG + Parents | Varies by state | 30-60 days |
| **Consumer Data (State)** | State Attorney General | Varies by state (CA: most stringent) | Varies (30-60 days) |

**Key contacts by sector**:
- **HHS OCR (Healthcare)**: 1-888-673-8994 | breach.notification@hhs.gov | Hours: 9 AM-5 PM ET, M-F
- **SEC (Public Companies)**: https://www.sec.gov/contact (Cybersecurity Disclosure Hotline)
- **FTC (Financial/Consumer)**: https://www.ftc.gov/faq/consumers/what-do-if-youre-scammed
- **State Attorneys General**: https://www.naag.org (directory of all 50 states)

## 5. Training, Workforce, and Certification Resources

### Government and public training
- **NICCS (National Initiative for Cybersecurity Careers and Studies)**: https://niccs.cisa.gov
  - **What it is**: CISA-sponsored career development resource
  - **Cost**: Free
  - **Best for**: Career mapping, job descriptions, educational pathway guidance
  - **Cliff notes**: Includes NICE Framework job role taxonomy (used by government)

- **US Cyber Challenge**: https://www.uscyberchallenge.org
  - **What it is**: Competition for high school and college students
  - **Cost**: Free for students
  - **Best for**: Pipeline development; college student recruitment
  - **Cliff notes**: Regional qualifiers leading to nationals. Winners often recruited by federal agencies.

- **DoD Cyber Exchange**: https://public.cyber.mil
  - **What it is**: Unclassified training, certifications, and resources for contractors
  - **Cost**: Free
  - **Best for**: DoD contractors, CMMC preparation, workforce planning
  - **Cliff notes**: Includes C3PAO (CMMC Third-Party Assessor Organization) training.

### Private and professional learning
**Training comparison**:

| Provider | Cost | Focus | Time/Format | Best For |
|----------|------|-------|-------------|----------|
| **SANS Institute** | $7K-$10K/course | Hands-on, deep technical | 5-6 days in-person/online | Advanced practitioners, incident response |
| **Cybrary** | Free-$500/yr | Breadth of topics | Self-paced | Entry-level, broad awareness |
| **Coursera** | $39-$199/course | University-partnered | 4-6 weeks | Theory, foundational knowledge |
| **A Cloud Guru** | $400/yr | Cloud-focused | Self-paced | Cloud security, DevSecOps |
| **Pluralsight** | $299-$499/yr | Technical breadth | Self-paced | Multiple technical disciplines |
| **Udemy** | $10-$15/course | Beginner-friendly | Self-paced, short | Quick skill pickup |

### Certification career path and requirements
**Entry Level (0-2 years)**:
- **Security+**: Vendor-neutral, DoD 8570 required for government jobs. $400 exam + study
- **CompTIA Network+**: Prerequisite for Security+

**Mid Level (3-5 years)**:
- **Certified Ethical Hacker (CEH)**: $450 exam; requires training or experience
- **Certified Information Security Manager (CISM)**: $749 exam; requires 5 years experience (waivable with advanced degree)

**Advanced (5+ years)**:
- **Certified Information Systems Security Professional (CISSP)**: $749 exam; requires 5 years experience; $450/3 yr renewal
- **GIAC certifications** (GSE, GCIA, GCIH): $300-$500 exams; highly technical; SANS-affiliated
- **Certified Information Systems Auditor (CISA)**: $575 exam; audit/compliance focus

**Specialized**:
- **CCSK (Certified Cloud Security Knowledge)**: $395; cloud-specific
- **CISSP-ISSAP/ISSEP**: Advanced specializations; CISSP prerequisite

**Cost consideration**: Average cost to fully certify (Security+ → CISSP): $2,500-$5,000 over 3-5 years

## 6. Information Sharing and Analysis Centers (ISACs)

### Sector-specific coordination
**When to join**: ISACs are peer-to-peer threat sharing networks. Invaluable for detecting threats targeting your sector.

| ISAC | Sector | Join Contact | Benefits | Cost |
|------|--------|--------------|----------|------|
| **Health-ISAC** | Healthcare | https://h-isac.org | HIPAA threats, ransomware trends, vendor advisories | Free |
| **FS-ISAC** | Financial Services | https://www.fsisac.com | Fraud, compliance, incident response | Member fees (varies) |
| **E-ISAC** | Electricity | https://www.eisac.com | Grid threats, SCADA/OT security | Tiered membership |
| **MS-ISAC** | State/Local Gov | https://www.cisecurity.org/ms-isac | Municipal cyber threats, best practices | Free |
| **IT-ISAC** | IT/Tech | https://www.it-isac.org | Software supply chain, data breaches | Free |
| **Comm-ISAC** | Communications | https://www.commsisac.org | Telecom threats, network attacks | Member-based |
| **InfraGard** | Critical Infrastructure | https://www.infragard.org | FBI-partnered; classified briefings available | Free to $500/yr |

**Cliff notes**: ISACs provide:
1. **Daily/Weekly threat briefings** from peer organizations
2. **Rapid indicator sharing** (IOCs, hashes, IPs)
3. **Sector-specific guidance** for emerging threats
4. **Community forums** for peer support and research
5. **Access to classified briefings** (InfraGard) for critical infrastructure

**Research value**: ISACs maintain historical threat databases and trend analysis. Use for:
- Threat landscape reports for your sector
- Incident response case studies
- Regulatory guidance interpretation

## 7. Sector-Specific U.S. Resources

### Healthcare
- **HHS Cybersecurity**: https://www.hhs.gov/hipaa/for-professionals/security/index.html
  - **Focus**: HIPAA Security Rule requirements, breach notification (60-day rule)
  - **Key resource**: HHS OCR (Office for Civil Rights) enforcement
  - **Contact**: 1-888-673-8994 (Breach Notification) | breach.notification@hhs.gov | 9 AM-5 PM ET
  - **Cliff notes**: All covered entities must comply. Exceptions: only if breach poses no reasonable risk to privacy. Penalties: $100-$50K per violation; $1.5M per calendar year per violation type.

- **HHS 405(d) Program**: https://405d.hhs.gov
  - **What it is**: Voluntary HIPAA compliance monitoring; free recommendations
  - **Cliff notes**: Provides confidential review without audit/enforcement. Good pre-compliance check.

### Energy and critical infrastructure
- **DOE Office of Cybersecurity, Energy Security, and Emergency Response (CESER)**: https://www.energy.gov/ceser
  - **Focus**: Grid resilience, SCADA security, incident coordination
  - **Contact**: https://www.energy.gov/contact-us
  - **Cliff notes**: Coordinates with FERC for reliability standards. NERC CIP compliance required for grid operators.

- **CISA Critical Infrastructure Guidance**: https://www.cisa.gov/topics/critical-infrastructure-security-and-resilience
  - **Contact**: CISA HotLine 1-855-292-3937 (24/7)
  - **Cliff notes**: 16 critical infrastructure sectors. Includes pipeline, water, transportation, communications.

### Financial services
- **FFIEC (Federal Financial Institutions Examination Council)**: https://www.ffiec.gov/
  - **Focus**: Banking cybersecurity standards; examination guidance
  - **Contact**: Coordinated through OCC, Fed, FDIC, NCUA
  - **Cliff notes**: Uses NIST as foundation. Regular updates on fraud, ransomware, third-party risk.

- **FinCEN (Financial Crimes Enforcement Network)**: https://www.fincen.gov
  - **Focus**: Anti-money laundering, reporting suspicious activities
  - **Contact**: https://www.fincen.gov/contact-fincen
  - **Cliff notes**: FinCEN also issues guidance on sanctions and illicit finance tied to cyber attacks.

### Education and research
- **EDUCAUSE**: https://www.educause.edu
  - **Focus**: Higher education cybersecurity, policy, research
  - **Membership**: Various tiers; many resources free
  - **Cliff notes**: Active research on campus security trends, student privacy, ransomware in education.

- **K-12 Cybersecurity Resources (CISA)**: https://www.cisa.gov/k-12
  - **Contact**: CISA Education Sector Coordinator (via CISA HotLine)
  - **Cliff notes**: K-12 schools increasingly targeted. Many states have reporting requirements for breaches affecting student data.

## 8. Helpful U.S. Cybersecurity Starting Points

### For different organizational profiles:

**Profile 1: New Security Program (0-12 months maturity)**
1. Take NIST CSF 2.0 Govern function as your charter (policies, roles, governance)
2. Map your systems using CSF Identify function
3. Select baseline controls using CIS Controls v8 (Safeguards 1-6 first)
4. Implement technical protections using NIST SP 800-53 (or 800-171 if contractor)
5. Build detection with MITRE ATT&CK tactics (Recon, Initial Access, Execution)
6. Join your sector ISAC for peer benchmarking and threat intel
7. Subscribe to CISA KEV for patching guidance

**Profile 2: Maturing Program (1-3 years)**
1. Assess current state against full NIST CSF (all 6 Functions)
2. Map findings to CIS Controls v8 Implementation Groups (IG1-IG3)
3. Use MITRE ATT&CK for threat-informed defense gaps
4. Establish incident response playbooks (use NIST SP 800-61)
5. Integrate with CISA advisories for continuous improvement
6. Engage MS-ISAC or sector ISAC for advanced threat intel
7. Consider compliance alignment (FISMA, HIPAA, PCI-DSS, etc.)

**Profile 3: Advanced Program (3+ years)**
1. Implement Zero Trust Maturity Model across 6 pillars
2. Advanced threat hunting using MITRE ATT&CK and your ISAC intel
3. Threat actor profiling and targeting based on your sector
4. Compliance automation (continuous monitoring)
5. Regular purple team exercises (red vs. blue simulations)
6. Executive risk dashboard using CSF Govern framework
7. Participate in CISA ADA (Automated Deployment of Advisories) program

**Profile 4: Critical Infrastructure Operator**
1. FISMA compliance (federal) or sector regulation (energy/finance)
2. Incident response coordination with CISA (CIRCIA if critical infrastructure)
3. NERC CIP (electricity) or equivalent sector standard
4. Sector ISAC membership (E-ISAC, FS-ISAC, etc.)
5. Coordination with FBI field office and InfraGard if available
6. Supply chain risk management (CISA SCRM framework)
7. 24/7 monitoring/SOC with incident response on-call team

## 9. Suggested Organization of This Map and Research Navigation

**For different use cases, navigate as follows**:

| Use Case | Start Here | Then Research | Final Action |
|----------|-----------|----------------|--------------|
| **Build new program** | Section 8 profile | Sections 2, 3, 5 | Adopt CSF 2.0 |
| **Incident response** | Section 4 + Section 15 | Section 3 (threat intel) | Activate response plan |
| **Compliance audit** | Sector-specific (Sec. 7) | Section 10 (federal reqs) | Document controls |
| **Patching/vulns** | Section 3 (KEV) | Section 2 (standards) | Prioritize CVEs |
| **Hiring/training** | Section 5 | Section 6 (ISACs) | Recruit practitioners |
| **Cloud migration** | Section 11 | Section 10 (FedRAMP) | Assess providers |
| **Ransomware prep** | Section 13 | Section 4 (reporting) | Test backups |
| **Threat modeling** | MITRE ATT&CK (Sec. 2) | Section 7 (sector threats) | Build detection |

**Practical resource buckets**:
- **Governance and policy**: CSF 2.0 (Govern function), OMB circulars, agency policies
- **Technical controls and hardening**: CIS Controls, NIST SP 800-53/171, vendor guides
- **Threat intelligence**: CISA KEV, alerts, NSA advisories, sector ISACs
- **Incident response**: NIST SP 800-61, FBI IC3, CISA incident coordination, legal considerations
- **Workforce and training**: NICCS, SANS, certifications, DoD Cyber Exchange
- **Sector-specific resources**: ISACs, regulatory requirements, audit frameworks
- **Compliance and reporting**: Breach notification rules, CIRCIA, FedRAMP, FISMA

## 10. Federal Procurement and Compliance Resources

### Federal cybersecurity compliance requirements
**Quick decision tree:**
- **Federal agency?** → FISMA (mandatory), NIST SP 800-53, FIPS standards
- **DoD contractor?** → DFARS + CMMC 2.0, NIST SP 800-171
- **Subcontractor?** → CMMC 2.0 (inherit from prime), flow-down requirements
- **Cloud service provider?** → FedRAMP authorization (ATO) required

- **FISMA (Federal Information Security Modernization Act)**: https://www.cisa.gov/federal-information-security-modernization-act
  - **Applies to**: All federal agencies, federal information systems
  - **Requirement**: Annual risk assessment, remediation, incident reporting
  - **Standards**: NIST SP 800-53, FIPS publications
  - **Enforcement**: OMB oversight; agency audit/compliance
  - **Cliff notes**: Drives most federal cyber policy. CISA coordinates compliance.

- **FedRAMP (Federal Risk and Authorization Management Program)**: https://www.fedramp.gov
  - **Applies to**: Cloud service providers; federal contractors providing cloud services
  - **Requirement**: Authority to Operate (ATO) before federal use
  - **Path**: Provisional ATO → Interim ATO → Full ATO (12-24 month process)
  - **Cost**: $50K-$300K+ for assessment and remediation
  - **Contact**: FedRAMP PMO, https://www.fedramp.gov/contact (business hours)
  - **Cliff notes**: Marketplace (https://www.fedramp.gov/marketplace/) lists authorized vendors. Without FedRAMP ATO, federal agencies cannot use your cloud service.

- **NIST SP 800-171 (Protection of Controlled Unclassified Information)**: https://www.nist.gov/itl/cybersecurity-managed-services-and-controls
  - **Applies to**: DoD contractors handling CUI (Controlled Unclassified Information)
  - **Requirements**: 110 controls across 14 families; assessment/monitoring
  - **Linked compliance**: CMMC 2.0 (see below)
  - **Cliff notes**: Lighter than 800-53 but still comprehensive. Rev. 2 updated Jan 2024.

- **DFARS Cybersecurity Compliance**: https://www.acq.osd.mil/asda/dars/dfars
  - **Applies to**: Defense Federal Acquisition Regulation Supplement; DoD contractors
  - **Key clause**: 252.204-7012 (Information Security in Federal Contract Performance)
  - **Requirements**: NIST SP 800-171 compliance + incident reporting
  - **Timeline**: Compliance deadline varies by award date (2025-2026 for most)
  - **Cliff notes**: Applies to prime and all subcontractors at any tier handling CUI.

- **CMMC 2.0 (Cybersecurity Maturity Model Certification)**: https://dodciso.defense.gov/CMMC/
  - **What it is**: Assessment/certification program for DoD contractor compliance
  - **Maturity levels**: Foundation (Level 1, basic), Advanced (Level 2, 800-171 controls), Expert (Level 3, advanced)
  - **Assessment**: Third-party C3PA (CMMC Third-Party Assessor Organization)
  - **Cost**: $5K-$50K depending on organization size and level
  - **Cliff notes**: Replaces previous CMMC 1.02. Mandatory for new DoD contracts (Phase-in through 2026).

- **National Standards on Cybersecurity for Federal Agencies**: https://www.cisa.gov/federal-cybersecurity-standards
  - **What it includes**: OMB standards, NIST guidelines, executive orders
  - **Contact**: CISA Policy Coordination, https://www.cisa.gov/contact
  - **Cliff notes**: Executive orders (EOs) frequently update requirements; monitor for changes.

### Procurement guidance and resources

- **GSA Cybersecurity and IT Supply Chain Risk Management**: https://www.gsa.gov/technology
  - **Contact**: GSA Technology Portfolio, https://www.gsa.gov/technology/contact
  - **Use for**: Federal procurement best practices, vendor evaluation
  - **Cliff notes**: GSA also manages FedRAMP and schedules for approved vendors.

- **SAM.gov (System for Award Management)**: https://www.sam.gov
  - **What it is**: Central government procurement, contract awards, compliance data
  - **Key data**: Contractor CAGE codes, award history, past performance
  - **Use for**: Vendor due diligence, contract history research
  - **Registration required**: For companies bidding on federal work
  - **Cliff notes**: Also searchable for learning about competitor contracts and awards.

- **CISA Supply Chain Risk Management (SCRM)**: https://www.cisa.gov/supply-chain-risk-management
  - **Focus**: Third-party risk, software/hardware security, vendor assessment
  - **Resources**: Guidance, tools, best practices
  - **Contact**: CISA Supply Chain team (available via main CISA contact)
  - **Cliff notes**: Increasingly important as breach impacts propagate through supply chains.

### Compliance and audit resources

- **OMB Circular A-130 (Information Management)**: https://www.whitehouse.gov/omb/memoranda
  - **Applies to**: Federal agencies; guides information security policy
  - **Key sections**: Information security, privacy, data governance
  - **Cliff notes**: Updates periodically; current version establishes Zero Trust principles.

- **CISA Federal Compliance Checklist and Resources**: https://www.cisa.gov/federal-compliance-resources
  - **Use for**: Agency compliance audits, self-assessment
  - **Contact**: CISA Compliance team
  - **Cliff notes**: CISA also conducts assessments and provides remediation support.

## 11. Cloud Security Guidance from U.S. Agencies

### Cloud security decision framework
**Before cloud migration, use this checklist**:
- [ ] Determine data classification (public, internal, confidential, classified)
- [ ] Check FedRAMP authorization status if federal agency
- [ ] Review cloud provider's compliance certifications (SOC 2 Type II, ISO 27001)
- [ ] Assess encryption requirements (in-transit, at-rest, key management)
- [ ] Plan identity and access management (IAM) architecture
- [ ] Define incident response procedures (cloud provider vs. your team)
- [ ] Review data residency requirements (geographic data localization)

### CISA cloud security resources
- **CISA Cloud Security Principles**: https://www.cisa.gov/cloud-security
  - **What it is**: 7 key principles for secure cloud architecture
  - **Principles**: Design for security, assume zero trust, minimize trust domains, etc.
  - **Use for**: Architecture review, RFI/RFP requirements, vendor assessment
  - **Cliff notes**: Applicable to AWS, Azure, Google Cloud, private clouds.

- **CISA Secure Cloud Practices**: https://www.cisa.gov/secure-cloud-practices
  - **What it includes**: Configuration guidance, common misconfigurations, incident response
  - **Contact for questions**: CISA Cloud Security team (via HotLine)
  - **Cliff notes**: Includes playbooks for common breach scenarios (compromised credentials, malware, etc.).

- **CISA Remote Work Security Guidance**: https://www.cisa.gov/telework
  - **Focus**: Cloud-based collaboration tools, VPN security, endpoint protection
  - **Use for**: Post-pandemic hybrid work architecture
  - **Cliff notes**: Includes vendor-specific guidance (Microsoft Teams, Zoom, etc.).

### NIST cloud security standards
**NIST standards hierarchy for cloud**:
1. **NIST SP 800-53** (broad security controls) → Map to cloud environment
2. **NIST SP 800-53B** (baseline configurations) → Cloud-specific profiles
3. **NIST SP 800-146** (cloud synopsis) → Context and cloud-specific interpretation
4. **NIST Cloud Computing Security Reference Architecture**: https://www.nist.gov/publications/cloud-computing-security-reference-architecture
   - **What it is**: Reference model for cloud security; includes threat examples
   - **Use for**: Understanding cloud attack surfaces and mitigations
   - **Cliff notes**: Defines cloud actors (provider, tenant, intermediary) and their responsibilities.

### NSA cloud guidance
**NSA publications for cloud**:
- **NSA/CISA Cybersecurity Advisories**: https://www.nsa.gov/Press-Room/Cybersecurity-Collaboration-Center/
  - **Topics**: Azure security, AWS security, encryption, identity
  - **Contact**: NSA public liaison (web form)
  - **Cliff notes**: NSA advisories often more technical and threat-informed than CISA.

- **NSA 60 Cybersecurity Principles Booklet**: https://media.defense.gov/Dec%202022/pdf/CISA-NSA-60-Cybersecurity-Principles-Booklet.pdf
  - **What it includes**: 60 foundational principles; applicable to cloud and on-premises
  - **Cliff notes**: Updated December 2022; includes zero trust principles.

### FedRAMP and federal cloud authorization
**FedRAMP process and timeline**:

| Phase | Duration | Activities | Authority |
|-------|----------|------------|----------|
| **Preparation** | 2-4 months | Vendor readiness, documentation | Vendor + FedRAMP PMO |
| **Request** | 1-2 months | Sponsorship, AO selection, cost negotiation | Sponsoring agency |
| **Assessment** | 4-6 months | Independent assessment, vulnerability scans, testing | 3PAO (Third-Party Assessor) |
| **Authorization** | 2-4 months | AO review, remediation, ATO award | Sponsoring AO |
| **Continuous Monitoring** | Ongoing | Annual assessment, weekly scans, incident reporting | Vendor + FedRAMP PMO |

**FedRAMP marketplace**: https://www.fedramp.gov/marketplace/
- **Use for**: Finding pre-authorized cloud services
- **Status levels**: Compliant (full ATO), In Process, Deprecated
- **Cliff notes**: If your needed service is "In Process," check expected completion date.

**GSA cloud services (GSA Schedule)**: https://www.gsa.gov/technology/government-it-initiatives/cloud-computing
- **Contact**: GSA Schedule Management Team
- **Use for**: Vetted federal procurement of cloud services
- **Cliff notes**: Vendors on GSA Schedule + FedRAMP authorized = safest federal cloud option.

### Best practices for cloud environments
**Multi-cloud vendor guidance**:

| Provider | Security Resource | Key Considerations |
|----------|-------------------|-------------------|
| **AWS** | AWS Security Center (https://aws.amazon.com/security/) | IAM (AWS), encryption key mgmt (KMS), compliance programs (FedRAMP, HIPAA) |
| **Microsoft Azure** | Azure Security Best Practices (https://learn.microsoft.com/en-us/azure/security/) | Entra ID (identity), Azure Disk Encryption, Defender (monitoring) |
| **Google Cloud** | Google Cloud Security (https://cloud.google.com/security) | IAM, Cloud KMS, Confidential Computing, BeyondCorp (zero trust) |
| **OWASP** | Cloud Security Top 10 (https://owasp.org/www-project-cloud-top-10/) | Misconfigurations, identity flaws, supply chain risks |

**OWASP Cloud Security Top 10**:
1. Insecure cloud infrastructure
2. Insecure configuration
3. Insecure authentication/authorization
4. Insufficient identity, credential, and access management
5. Insecure secrets management
6. Insecure API usage
7. Cloud native supply chain vulnerabilities
8. Improper data security
9. Lack of security visibility and monitoring
10. Unsafe infrastructure-as-code practices

**Cliff notes**: Use OWASP Top 10 + CSF 2.0 + NIST SP 800-53 for comprehensive cloud security architecture.

## 12. Small Business and Nonprofit Cybersecurity Resources

### Cost-benefit analysis for small organizations
**Budget constraints reality check**:
- **Typical SMB budget**: 0.5-2% of IT budget (often <$50K/year)
- **Typical enterprise budget**: 3-5% of IT budget (often >$1M/year)
- **Solution**: Focus on free/low-cost resources + high-impact controls

### Targeted small business resources
- **CISA Small Business Cyber Essentials**: https://www.cisa.gov/small-business-cyber-essentials
  - **Cost**: Free
  - **What it includes**: Playbooks for common threats, incident response templates, ROI calculator
  - **Best for**: <100 employees, limited IT staff
  - **Cliff notes**: Pre-made templates save 10-20 hours of policy development.

- **SBA Cybersecurity Guidance**: https://www.sba.gov/business-guide/manage-your-business/cybersecurity
  - **Contact**: SBA local office (https://www.sba.gov/about-sba/organization/offices) | 1-800-SBA-LOAN
  - **Services**: Free consulting, resources, disaster recovery guidance
  - **Cliff notes**: SBA also coordinates lending for cybersecurity investments (post-incident recovery).

- **NIST Small Business Cybersecurity**: https://www.nist.gov/itl/small-business-cybersecurity
  - **What it provides**: Tailored CSF 2.0 guidance, implementation roadmap
  - **Cost**: Free
  - **Cliff notes**: NIST CSF adapted for 20-100 person organizations.

- **Small Business Administration (SBA)**: https://www.sba.gov
  - **Contact**: 1-800-SBA-LOAN (also provides counseling)
  - **Programs**: Cybersecurity investment loans, disaster SBA loans post-breach
  - **Cliff notes**: SBA 7(a) loans can fund security infrastructure upgrades.

### Nonprofit-specific resources
- **Nonprofit Tech for Good**: https://www.techforgood.org
  - **Cost**: Free
  - **Focus**: Technology resources, capacity building
  - **Cliff notes**: Directory of free/discounted security tools for nonprofits.

- **Nonprofit Cybersecurity Resources (CISA)**: https://www.cisa.gov/nonprofit-cybersecurity
  - **What it includes**: Threat awareness, incident response, best practices
  - **Cost**: Free
  - **Contact**: CISA nonprofit liaison (available via CISA contact page)
  - **Cliff notes**: Nonprofits often targeted due to limited security and sensitive donor/client data.

- **TechSoup (free and discounted security tools)**: https://www.techsoup.org
  - **Cost**: Free membership; discounted tools ($200-$2K savings per organization)
  - **What it offers**: Microsoft Nonprofit licenses, Cisco security tools, backup solutions
  - **Eligibility**: 501(c)(3) status, no paid employees to exclude
  - **Cliff notes**: Single most valuable resource for nonprofit tech budgets. $500+ annual savings.

- **Internet Society Nonprofit Security**: https://www.internetsociety.org/
  - **Cost**: Free resources and guidance
  - **Focus**: Domain security, DNSSEC, internet policy
  - **Cliff notes**: Particularly useful for nonprofits running online platforms.

### Accessible training and tools
- **CISA Cyber Hygiene Hub**: https://www.cisa.gov/resources-tools/resources/cyber-hygiene
  - **Cost**: Free
  - **Tools included**: CSAT (self-assessment), vulnerability scanning, hardening guides
  - **Time to complete**: 2-4 hours for baseline assessment
  - **Cliff notes**: Excellent starting point; identifies quick wins.

- **SANS Institute Free Security Training**: https://www.sans.org/courses/free
  - **Cost**: Free
  - **Courses**: Network security, cloud security, incident response (rotates monthly)
  - **Format**: Online, 1-2 hours per course
  - **Cliff notes**: High-quality content from well-known SANS educators.

- **Cybrary free cybersecurity courses**: https://www.cybrary.it
  - **Cost**: Free (premium: $300/yr)
  - **Library**: 200+ courses, hands-on labs
  - **Format**: Self-paced, 1-40 hours per course
  - **Cliff notes**: Good breadth for building foundational knowledge.

- **Linux Academy (free tier)**: https://linuxacademy.com
  - **Cost**: Free tier + premium ($29/month)
  - **Focus**: Linux, cloud platforms, infrastructure security
  - **Cliff notes**: Valuable if team runs Linux/cloud environments.

### Low-cost compliance support
- **CIS Controls v8 free access**: https://www.cisecurity.org/cis-controls
  - **Cost**: Free (full framework PDF)
  - **What it includes**: 18 controls, implementation groups, automation guidance
  - **Time estimate**: 40-80 hours to implement for SMB
  - **Cliff notes**: Focus on Implementation Group 1 (IG1) controls first; highest ROI.

- **NIST Cybersecurity Framework (free)**: https://www.nist.gov/cyberframework
  - **Cost**: Free PDF + interactive tools
  - **Customization**: Can be adapted for SMB (Govern/Identify/Protect prioritized)
  - **Cliff notes**: De facto standard for government/procurement relationships.

- **Free security tools from CISA**: https://www.cisa.gov/resources-tools
  - **Included**: Vulnerability scanners, configuration tools, assessment templates
  - **Cost**: Free
  - **Cliff notes**: Updated regularly; often replaces commercial tools for basic needs.

### SMB/Nonprofit quick-start plan
**Month 1 (0 cost)**:
1. Assess using CISA Cyber Hygiene Hub (2-4 hrs)
2. Join sector ISAC if applicable (free)
3. Download CIS Controls IG1 (free)
4. Create basic incident response plan (use CISA template)

**Month 2-3 ($500-$1K)**:
1. Implement IG1 controls (MFA, patching, backups)
2. Cybersecurity training for staff (Cybrary or SANS free courses)
3. Subscribe to CISA alerts (free)

**Month 4-6 ($1-5K if vendor needed)**:
1. Basic vulnerability scanning (free tools or $1-2K managed service)
2. Backup/disaster recovery testing
3. Incident response tabletop exercise

**Year 2**: Pursue additional controls, assess SOC 2 Type II compliance if needed for clients

## 13. Ransomware-Specific Guidance and Reporting Channels

### Ransomware threat landscape (2024-2025 context)
**Key facts**:
- Average ransom demand: $500K-$5M (up from $100K in 2020)
- Healthcare: Most targeted sector (50% of attacks)
- Payment frequency: 25-30% of victims pay ransom (down from 60% as law enforcement increased)
- Recovery average cost: $4.5M (ransom + downtime + remediation)
- Time to identify: 200+ days average (detection lag critical)

### Federal ransomware guidance
- **CISA Ransomware Resources**: https://www.cisa.gov/ransomware
  - **What it includes**: Playbooks, threat actor profiles, recovery guidance
  - **Contact**: CISA Ransomware Team, 1-855-292-3937 (24/7)
  - **Cliff notes**: Most comprehensive U.S. resource. Updated weekly with new actor TTPs.

- **CISA Ransomware Response Checklist**: https://www.cisa.gov/sites/default/files/publications/Ransomware_Response_Checklist.pdf
  - **Use during/after incident**: 15-point checklist for incident response
  - **Cost**: Free
  - **Cliff notes**: Print and laminate for your incident response team.

- **FBI Ransomware Resources**: https://www.fbi.gov/investigate/cyber
  - **Contact**: FBI Cyber Division, 1-888-FBI-TIPS (local field office best for incidents)
  - **Hours**: 24/7 for emergency situations
  - **Cliff notes**: FBI offers technical assistance for active incidents. Call immediately if ransomware detected.

- **NSA Cybersecurity Advisory on Ransomware**: https://www.nsa.gov/Press-Room/Cybersecurity-Collaboration-Center/
  - **Focus**: Threat actor attribution, encryption analysis, defensive techniques
  - **Frequency**: Updates 2-3 times yearly with new actor intelligence
  - **Cliff notes**: More technical/classified threat data than CISA.

- **DOJ Ransomware Guidance**: https://www.justice.gov/opa/press-release/20210804-department-justice-announces-virtual-taskforce-dedicated-ransomware
  - **Focus**: Legal consequences, prosecution efforts, no-pay policy recommendations
  - **Contact**: DOJ Cybercrime Section (through field offices)
  - **Cliff notes**: U.S. discourages ransom payment (can violate OFAC sanctions if actor designated).

### Ransomware threat intelligence
**Daily intelligence sources**:

| Source | Update Frequency | Best For | Cost |
|--------|-----------------|----------|------|
| **CISA Ransomware Alerts** | Daily | New actor/variant identification | Free |
| **FBI Private Industry Notification (PIN)** | Weekly | Sector-specific campaigns | Free (requires IC3 account) |
| **Health-ISAC alerts** | Daily for healthcare | Healthcare-specific threats | Free (membership) |
| **Sector ISACs** | Daily/Weekly | Sector-specific attacks, mitigation steps | Free-$500/yr |
| **Vendor threat intelligence** | Real-time | Behavioral/technical signatures | Varies ($5K-$50K/yr) |
| **FBI Local field offices** | As-needed briefings | Regional/local threat context | Free for critical infrastructure |

- **CISA Ransomware Advisories**: https://www.cisa.gov/news-events/cybersecurity-advisories
  - **Format**: AAA/CAA alerts on specific ransomware families
  - **Examples**: LockBit 3.0, BlackCat/ALPHV, Cl0p
  - **Cliff notes**: Subscribe to alerts by ransomware family name.

- **FBI Private Industry Notification (PIN)**: https://www.fbi.gov/news/stories/notification-forms
  - **What it is**: FBI's threat notification program
  - **Frequency**: Weekly bulletins for active campaigns
  - **Cost**: Free; IC3 account required
  - **Cliff notes**: PIN also available for targeted companies (FBI reaches out proactively).

### Reporting channels and incident response
**Decision tree for reporting**:

```
Ransomware detected?
├─ YES, active exfiltration?
│  ├─ YES → Call FBI field office (1-888-FBI-TIPS) FIRST
│  └─ NO → Proceed to step 2
├─ Critical infrastructure? → Report to CISA (1-855-292-3937) + FBI
├─ Healthcare? → Report to HHS OCR + CISA + FBI IC3
├─ Financial services? → Report to FBI + CISA + Sector ISAC (FS-ISAC)
├─ Public company? → Report to SEC within 4 days (material events) + FBI + CISA
└─ Other? → Report to FBI IC3 (https://www.ic3.gov) + CISA
```

- **FBI IC3 (Internet Crime Complaint Center)**: https://www.ic3.gov
  - **When to use**: For general ransomware complaints and reporting
  - **Timeline**: Submit within 48 hours
  - **What you get**: Report ID, referral to FBI field office if high-impact
  - **Note**: Online reporting only; no phone
  - **Cliff notes**: IC3 reports help FBI identify trends and actor patterns.

- **CISA Incident Reporting**: https://www.cisa.gov/report
  - **Emergency**: 1-855-292-3937 (HotLine, 24/7)
  - **Web form**: https://central.cisa.gov (for CIRCIA if critical infrastructure)
  - **What CISA provides**: Technical support, coordination, threat hunting, remediation
  - **Cliff notes**: If infrastructure is critical (energy, water, finance, healthcare), CISA may deploy on-site team.

- **CISA Cyber Incident Reporting for Critical Infrastructure (CIRCIA)**: https://www.cisa.gov/CIRCIA
  - **Mandatory for**: Electric, communications, water, oil/gas, critical manufacturing, nuclear, healthcare, aviation, maritime
  - **Ransomware deadline**: 72 hours from discovery
  - **Extortion deadline**: 24 hours from discovery
  - **Reporting**: Log into https://central.cisa.gov (PIV card or federal ID required)
  - **Penalty for non-compliance**: Fines up to $40K (announced enforcement as of 2024)
  - **Cliff notes**: Even if paying ransom or incident resolved, must still report within deadline.

- **FBI Local field offices**: https://www.fbi.gov/contact-us/field-offices
  - **When to call**: Active ransomware encryption in progress (emergency)
  - **What to do**: Call office, ask for Cyber Squad or Cyber Division
  - **What they offer**: Active incident support, technical analysis, potential disruption efforts
  - **Cliff notes**: FBI Cyber squads in major cities have 24/7 on-call teams.

### Ransomware prevention and recovery
**Technical countermeasures (priority order)**:

| Control | Implementation Time | Cost | Impact |
|---------|-------------------|------|--------|
| **Backups (offline/3-2-1 rule)** | 1-2 weeks | $2-5K | Critical - enables recovery |
| **Multi-factor Authentication (MFA)** | 2-4 weeks | $500-2K | Critical - prevents initial access |
| **Email filtering (advanced)** | 1 week | $1-3K/yr | High - stops phishing |
| **Endpoint Detection/Response (EDR)** | 2-4 weeks | $10-50K/yr | High - detects lateral movement |
| **Network segmentation** | 4-8 weeks | $5-20K | High - limits spread |
| **Vulnerability patching (prioritize KEV)** | Ongoing | $2-5K/yr | High - closes initial access |
| **Incident response plan testing** | 1 week to plan; 1/yr test | $0-10K | Essential - reduces chaos |

- **CISA Ransomware Prevention and Recovery Tools**: https://www.cisa.gov/resources-tools/tools
  - **Tools included**: Log analysis, malware detection, recovery playbooks
  - **Cost**: Free
  - **Cliff notes**: "StopRansomware" kit includes technical controls and response playbooks.

- **CISA Decrypt Tools (No More Ransom Project)**: https://www.cisa.gov/no-more-ransom
  - **What it is**: Database of ransomware decryption keys
  - **Use case**: Your organization encrypted by discovered/defeated ransomware family
  - **Cost**: Free
  - **Cliff notes**: Check here before paying ransom; your ransomware may be already broken.

- **Backup and recovery best practices (NIST SP 800-34)**: https://csrc.nist.gov/publications/detail/sp/800-34/rev-1/final
  - **Focus**: Disaster recovery planning; includes ransomware scenarios
  - **Cost**: Free
  - **Cliff notes**: 3-2-1 backup rule: 3 copies, 2 media types, 1 offsite.

- **Incident response planning (NIST SP 800-61)**: https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final
  - **Focus**: Detection, containment, eradication, recovery
  - **Cost**: Free
  - **Key phase for ransomware**: Containment (first 24 hrs critical)
  - **Cliff notes**: Ransomware IR plan should include isolation procedures and decryption testing.

### Ransomware-as-a-Service (RaaS) and actor-specific alerts
**Major ransomware families (2024)**:

| Family | Primary Targets | Notable Demand | Reporting Portal | Notes |
|--------|----------------|----------------|-------------------|-------|
| **LockBit 3.0** | Healthcare, manufacturing | $500K-$10M | Double extortion site | Most active; strongest encryption |
| **BlackCat/ALPHV** | Finance, tech, healthcare | $300K-$5M | Dark web + leak site | Advanced TTPs; Rust-based |
| **Cl0p** | SaaS, financial | $200K-$3M | Dark web | Targets zero-day exploits |
| **Cl0p** | Healthcare | $100K-$2M | Sector ISAC portal | Opportunistic; less sophisticated |
| **Akira** | Manufacturing | $1-5M | Custom site | Recent emergence; growing |

**Monitor these alerts**:
- CISA Ransomware Family Advisories (search by name)
- FBI Flash Alerts on LockBit, BlackCat, etc.
- Your sector ISAC weekly notifications
- Ransomware tracker feeds (abuse.ch, Twitter @redemptionSOC)

- **CISA Alerts on specific ransomware families**: https://www.cisa.gov/news-events/cybersecurity-advisories
  - **Search for**: "Ransomware", "LockBit", "BlackCat", "Cl0p" (search box on CISA)
  - **Frequency**: New alerts 2-5x per week
  - **Use**: Actor attribution, IOC updates, defensive steps

- **FBI Flash Alerts on active ransomware campaigns**: https://www.fbi.gov/news/stories
  - **Frequency**: 1-2 per week during active campaigns
  - **Format**: Technical indicators, target sectors, payment tactics
  - **Cliff notes**: FBI sometimes names actors (e.g., "Akira Ransomware Group").

- **Ransomware threat briefings from NSA**: https://www.nsa.gov/Press-Room/Cybersecurity-Collaboration-Center/
  - **Frequency**: Quarterly deep-dive reports
  - **Focus**: Attribution, advanced techniques, zero-day exploitation
  - **Access**: Public advisories or classified briefings (for cleared personnel/agencies)

## 14. Bug Bounties and Vulnerability Disclosure

### Federal bug bounty program directory
**Active federal programs** (as of 2024):

| Agency | Platform | Focus | Payout Range | Program Status |
|--------|----------|-------|--------------|----------------|
| **Department of Defense (DoD)** | HackerOne | Defense.gov systems, weapons platforms | $500-$50K | Active (largest) |
| **Department of Health & Human Services** | HackerOne | HHS.gov, healthcare systems | $250-$25K | Active |
| **General Services Administration (GSA)** | GSA bugbounty.gsa.gov | Federal IT systems, 18F | $100-$10K | Active |
| **Department of Homeland Security (DHS/CISA)** | HackerOne | CISA.gov, critical infrastructure tools | $250-$25K | Active |
| **Department of Transportation** | HackerOne | DOT systems | $100-$5K | Active |
| **Social Security Administration** | HackerOne | SSA systems | $100-$5K | Limited scope |
| **National Science Foundation** | HackerOne | NSF systems | $100-$5K | Limited scope |
| **National Institutes of Health** | HackerOne | NIH systems | $250-$15K | Limited scope |

**How to participate**:
1. Register on platform (HackerOne, Bugcrowd, etc.)
2. Review scope and rules (important: out-of-scope = no payment)
3. Test and report vulnerabilities through private channel
4. Agency triages, validates, pays for confirmed issues
5. 90-day coordinated disclosure period

- **Department of Defense (DoD) HackerOne program**: https://www.hackerone.com/public/departments/dod
  - **Scope**: Defense.gov, military networks, systems
  - **Process**: 1099 form for U.S. citizens only (foreign researchers restricted)
  - **Average payout**: $2-5K per valid issue
  - **Reputation**: Known for quick triage and payment
  - **Cliff notes**: DoD program largest in government; can process 5+ reports/day.

- **HHS Bug Bounty program**: https://www.hackerone.com/public/departments/hhs
  - **Scope**: HHS.gov, some CDC systems (excludes medical devices)
  - **Process**: W-9 required; 1099 for payment
  - **Average payout**: $500-$5K
  - **Cliff notes**: Healthcare data sensitivity means strict scoping; medical devices out-of-scope.

- **GSA 18F/TTS Bug Bounties**: https://bugbounty.gsa.gov
  - **Scope**: Federal IT systems, open-source projects
  - **Process**: Private HackerOne instance; international participants allowed
  - **Average payout**: $100-$2K
  - **Cliff notes**: Often includes open-source bugs; good for finding GSA contract vendor vulnerabilities.

- **DHS/CISA Bug Bounty**: https://www.hackerone.com/public/departments/dhs-cisa
  - **Scope**: CISA.gov, critical infrastructure resources
  - **Process**: Similar to DoD; U.S. citizens/green card holders preferred
  - **Average payout**: $500-$10K
  - **Cliff notes**: CISA's platform; focus on infrastructure protection tools.

### Private sector bug bounty platforms
**Comparison of major platforms**:

| Platform | Focus | Fee Structure | Payment Terms | Best For |
|----------|-------|----------------|----------------|----------|
| **HackerOne** | Government + enterprise | 25% commission | 30-90 days | Security experience, government work |
| **Bugcrowd** | Private + government | 20% commission | 30-60 days | Diverse programs, international |
| **Intigriti** | European focus + U.S. | 25% commission | 45-90 days | EU companies, advanced testers |
| **Synack** | Managed security testing | 50/50 split | 30-60 days | Vetting required; professional testers |
| **Yeswehack** | European/French focus | 20% commission | 30-60 days | EU-focused programs |

- **HackerOne**: https://www.hackerone.com
  - **What it is**: Largest bug bounty platform globally
  - **Programs**: 2,000+ including Fortune 500, government
  - **Payouts**: $100-$100K+ depending on program
  - **Researcher tiers**: Novice, Competent, Expert (affects invitations)
  - **Cliff notes**: Fastest growing program for security researchers. Reputation score essential for higher payouts.

- **Bugcrowd**: https://www.bugcrowd.com
  - **What it is**: Vulnerability management + bug bounty platform
  - **Differentiation**: Managed vulnerability testing (not self-service)
  - **Programs**: 1,000+ including government
  - **Payouts**: $50-$50K+
  - **Cliff notes**: Often offers managed security testing alongside bounties; larger payouts.

- **Intigriti**: https://www.intigriti.com
  - **What it is**: Bug bounty platform; strong European presence
  - **Programs**: 500+ (growing in U.S.)
  - **Payouts**: EUR 50-EUR 50K+
  - **Researcher support**: Strong community, training resources
  - **Cliff notes**: Good for EU companies; increasingly U.S. presence.

- **Synack**: https://www.synack.com
  - **What it is**: Managed penetration testing platform
  - **Model**: Testers accepted through vetting process; managed engagements
  - **Payouts**: $0.05-$0.50 per minute (varies by skill tier) + bounties
  - **Requirements**: Background check, technical screening
  - **Cliff notes**: Professional researchers only; consistent income model vs. per-bug bounty.

### Responsible disclosure guidance and best practices
**When to disclose vulnerabilities**:

**Private disclosure process**:
1. Discover vulnerability in vendor/organization
2. Find responsible disclosure contact (usually security@company.com or security.txt)
3. Report details privately (no public disclosure)
4. Wait 30-90 days for vendor response (varies by severity)
5. Vendor patches; coordinates disclosure timeline
6. Public disclosure after patch release (CVE assigned)

**Key contacts**:
- **CISA Coordinated Vulnerability Disclosure (CVD) Program**: https://www.cisa.gov/coordinated-vulnerability-disclosure
  - **Role**: Coordinates disclosure between researchers and vendors
  - **Timeline guidance**: 90-day standard; 24 hours for critical vulnerabilities
  - **Contact**: vuln-coordination@cisa.dhs.gov
  - **Cliff notes**: CISA can facilitate disclosure if vendor unresponsive.

- **DHS Cybersecurity Vulnerability Disclosure**: https://www.cisa.gov/vulnerability-disclosure
  - **For**: Non-federal vendors; CISA can mediate disputes
  - **Process**: Reporter → CISA → Vendor (if needed)
  - **Cliff notes**: Use if vendor is unresponsive after 30 days.

- **NIST Guidelines for Responsible Disclosure**: https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final
  - **Standards**: Best practices for disclosure timelines and processes
  - **Cost**: Free
  - **Cliff notes**: NIST SP 800-53 Section SI-4 covers incident handling expectations.

### Building vulnerability disclosure programs
**For organizations wanting to establish their own program**:

1. **Publish security.txt file**
   - Location: /.well-known/security.txt on your website
   - Contents: Email (security@yourcompany.com), response timeline, acknowledgment policy
   - Standard: RFC 9116

2. **Create disclosure policy**
   - Timeline: 30-90 days for vendor response and patch
   - Scope: Which systems/services in-scope
   - Out-of-scope: Physical security, social engineering (often), DoS
   - Response: Who gets credit, payment terms (if bounty program)

3. **Set up intake and triage**
   - Email: security@company.com (monitored 24/5 minimum)
   - Response time: 24-48 hours for initial response
   - Process: Triage (valid?), assign owner, track remediation

4. **Choose compensation model** (if offering bounties)
   - **Critical (RCE, auth bypass)**: $5K-$50K
   - **High (data exposure, logic flaw)**: $1K-$5K
   - **Medium (info disclosure, bypass)**: $250-$1K
   - **Low (advisory)**: $0-$250 (or recognition only)

5. **Use platform or self-managed**
   - **Self-managed**: Lower cost; more control; less marketing reach
   - **Platform (HackerOne, Bugcrowd)**: Commission paid; built-in researcher base; managed workflow

- **OWASP Responsible Disclosure Best Practices**: https://owasp.org/www-community/Responsible_Disclosure
  - **Use for**: Creating your disclosure policy
  - **Includes**: Timelines, communication, acknowledgment
  - **Cost**: Free

- **RFC 9116 (CVE Numbering Authority Program)**: https://www.rfc-editor.org/rfc/rfc9116.html
  - **Focus**: How CNAs assign CVE IDs
  - **Use for**: Understanding CVE assignment process
  - **Cliff notes**: If you discover vuln, CISA CNAs can assign CVE ID during disclosure.

- **CISA Vulnerability Disclosure Best Practices**: https://www.cisa.gov/vulnerability-disclosure
  - **Topics**: Timeline recommendations, communication, coordination
  - **Contact**: CISA Coordination team
  - **Cliff notes**: CISA publishes updated guidance quarterly.

## 15. Incident Response and Post-Incident Actions\n\n### Core incident response guidance\n**NIST 5-phase IR model** (standard across U.S. government):\n\n| Phase | Timeline | Goals | Key Resources |\n|-------|----------|-------|----------------|\n| **Preparation** | Ongoing | Detection tools, playbooks, trained team | NIST SP 800-61, CIS Controls |\n| **Detection** | Real-time | Identify incident, validate alert | EDR, SIEM, IDS/IPS, CISA Shields Up |\n| **Containment** | 1-24 hrs | Stop spread; isolate affected systems | Incident Response Plan, Playbooks |\n| **Eradication** | 1-7 days | Remove attacker access; close entry points | Forensics, patch management, credential reset |\n| **Recovery** | 1-30+ days | Restore systems; return to operations | Backups, testing, monitoring |\n| **Lessons Learned** | Post-incident | Document findings; update controls | After-action review (AAR); update playbooks |\n\n- **NIST SP 800-61 (Computer Security Incident Handling Guide)**: https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final\n  - **When to use**: Baseline for all U.S. incident response programs\n  - **Cost**: Free\n  - **Implementation**: 2-3 months for typical organization\n  - **Cliff notes**: Foundational; every CISO references this. Rev. 3 in development (draft available).\n\n- **CISA Incident Response Planning**: https://www.cisa.gov/incident-response\n  - **What it includes**: Templates, playbooks, role definitions, communication plans\n  - **Cost**: Free\n  - **Contact**: CISA IR team (via HotLine 1-855-292-3937)\n  - **Cliff notes**: CISA provides direct support during active incidents.\n\n- **CISA Incident Response and Recovery Guidance**: https://www.cisa.gov/resources-tools/resources/incident-response-and-recovery\n  - **Specific guidance**: Ransomware, phishing, lateral movement, cloud incidents\n  - **Format**: Step-by-step playbooks with technical details\n  - **Cost**: Free\n  - **Cliff notes**: Sector-specific guidance also available (healthcare, energy, etc.).\n\n### Federal incident reporting requirements by deadline\n**Critical timelines** (violating deadlines can trigger penalties):\n\n| Incident Type | Timeline | Who to Report | Contact | Penalty for Non-Compliance |\n|---------------|----------|---------------|---------|----------------------------|\n| **Critical Infrastructure Ransomware** | 72 hours | CISA (CIRCIA) | https://central.cisa.gov | Up to $40K fine |\n| **Critical Infrastructure Extortion** | 24 hours | CISA (CIRCIA) | https://central.cisa.gov | Up to $40K fine |\n| **HIPAA Breach (Healthcare)** | 60 days | HHS OCR + patients | https://www.hhs.gov/hipaa | $100-$50K per violation |\n| **Public Company Breach** | 4 business days | SEC + investors | https://www.sec.gov | Fines; investor lawsuits |\n| **Financial Institution Breach** | 60 days | FTC + consumers | https://www.ftc.gov | Up to $43K per day |\n| **Payment Card Data Breach** | Immediate | Payment networks | Visa/MC/AMEX | Up to $100K+ per occurrence |\n| **State Data Breach Laws** | 30-60 days (varies) | State AG + consumers | https://www.naag.org | $1K-$5K per record |\n| **Education (K-12) Breach** | 30-60 days (varies) | State AG + parents | State education dept | Varies by state |\n\n- **CISA Cyber Incident Reporting for Critical Infrastructure Act (CIRCIA)**: https://www.cisa.gov/CIRCIA\n  - **Legal status**: Enacted 2023; now enforceable law\n  - **Applies to**: 16 critical infrastructure sectors (energy, water, finance, healthcare, etc.)\n  - **Mandatory reporting portal**: https://central.cisa.gov (requires HSPD-12 PIV or federal ID)\n  - **Reporting method**: Online form in federal portal (no phone reporting)\n  - **Cliff notes**: CISA may deploy Cyber Rapid Response Team (CRRT) to your organization.\n\n- **HHS Breach Notification Rule (HIPAA)**: https://www.hhs.gov/hipaa/for-professionals/breach-notification/\n  - **Applies to**: Healthcare providers, health plans, business associates handling ePHI\n  - **Deadline**: 60 calendar days from discovery\n  - **Notification**: Individual patients + HHS OCR + media (if 500+ affected)\n  - **Contact**: HHS OCR Breach Notification Team, 1-888-673-8994 (M-F 9-5 ET)\n  - **Penalties**: $100-$50K per violation; up to $1.5M per violation type per year\n  - **Cliff notes**: Even suspected breach (not confirmed) requires notification within 60 days. Best to over-report.\n\n- **SEC Cybersecurity Disclosure Requirements**: https://www.sec.gov/rules-regulations\n  - **Item 106**: Rule 13a-15 requires public companies to disclose material cybersecurity incidents\n  - **Timeline**: Material events within 4 business days\n  - **Definition of material**: Incident likely to impact stock price or investor decisions\n  - **Contact**: SEC Enforcement Division; no central hotline (submit through EDGAR)\n  - **Penalties**: SEC enforcement actions; shareholder lawsuits; stock delisting\n  - **Cliff notes**: Legal counsel + IR team should jointly assess materiality with CFO.\n\n- **FTC Safeguards Rule (financial institutions)**: https://www.ftc.gov/business-guidance/privacy-security\n  - **Applies to**: Banks, credit unions, mortgage lenders, non-bank financial companies\n  - **Requirements**: Multi-factor authentication, encryption, access controls, incident response\n  - **Enforcement**: FTC can fine up to $43K per day for violations\n  - **Cliff notes**: Often stricter than other regulations; FTC actively enforcing (2024+).\n\n### Forensics and digital evidence handling\n**Chain of custody requirements**:\n1. Preserve evidence (don't turn off affected systems without forensic imaging)\n2. Document everything (timestamps, observers, photos)\n3. Maintain access logs (who accessed evidence and when)\n4. Avoid contamination (use write-blockers; don't boot from compromised drive)\n5. Secure storage (encrypted, access-controlled)\n\n- **NIST SP 800-86 (Guide to Integrating Forensic Techniques into Incident Response)**: https://csrc.nist.gov/publications/detail/sp/800-86/final\n  - **Focus**: Digital forensics best practices; evidence handling\n  - **Key sections**: Acquisition, examination, analysis, reporting\n  - **Cost**: Free\n  - **Cliff notes**: Admissible in court if followed correctly; chain of custody is critical.\n\n- **DOJ Computer Forensics Resource Guide**: https://www.justice.gov/opa\n  - **Audience**: Law enforcement; useful for prosecutors working with your IR team\n  - **Contact**: DOJ Computer Crime Section (through local field office)\n  - **Cliff notes**: If prosecuting threat actor, DOJ will specify forensic requirements.\n\n- **FBI Cybercrime Support**: https://www.fbi.gov/investigate/cyber\n  - **Services**: Forensic analysis (for high-impact incidents), actor attribution, international coordination\n  - **How to request**: Contact FBI field office or FBI IC3\n  - **Cliff notes**: FBI forensic team can assist during major incidents; limited availability.\n\n### Communication and legal considerations\n**Critical communication sequence during incident**:\n\n1. **Hour 0-1**: Activate Incident Response Team internally; notify CISO/CRO\n2. **Hour 1-4**: Assess scope/severity; begin containment; notify CEO/Board if material\n3. **Hour 4-8**: Notify legal counsel; retain forensic firm if needed; assess regulatory reporting needs\n4. **Hour 8-24**: Contact law enforcement (FBI) if criminal/ransomware; notify regulators if required\n5. **Hour 24+**: Begin breach notifications (per regulatory timelines); media outreach (if public disclosure required)\n\n- **FBI IC3 Reporting**: https://www.ic3.gov\n  - **When to contact**: Ransomware, extortion, credential theft\n  - **How**: Online reporting + optional phone consultation\n  - **FBI contact**: FBI field office Cyber Squad (call main switchboard, ask for Cyber Division)\n  - **Cliff notes**: FBI can provide threat intelligence, disruption assistance, victim support.\n\n- **State Attorney General Cybersecurity Resources**: https://www.naag.org\n  - **What it is**: Directory of all 50 state AGs and their cybersecurity contacts\n  - **Roles**: Breach notification enforcement, investigation authority, victim assistance\n  - **Timeline**: Notification deadlines vary by state (30-60 days typical)\n  - **Contact**: Your state's AG website (search \"data breach notification\")\n  - **Cliff notes**: Some states require notice to AG before public notification.\n\n- **Legal and insurance considerations**:\n  - **Cyber insurance**: Review policy for incident notification requirements (typically 30-48 hrs)\n  - **Insurance counsel**: May recommend specific forensic firms; know if insurer requires specific processes\n  - **General counsel**: Advise on attorney-client privilege (forensic reports may be discoverable if litigation)\n  - **Outside counsel**: Consider engaging outside counsel for major incidents (privilege protection)\n  - **Cliff notes**: Document legal advice separately from incident response documentation.\n\n- **Media and public communication guidance**:\n  - **CISA resources**: https://www.cisa.gov (includes communications templates)\n  - **Messaging**: Acknowledge incident, explain response steps, provide resources for affected parties\n  - **Timing**: Coordinate with regulatory notifications; don't announce before notifying individuals\n  - **Cliff notes**: Third-party PR firm often valuable; script key messages with legal counsel.\n\n### Post-incident recovery and lessons learned\n**After-Action Review (AAR) process** (schedule 1-2 weeks post-incident):\n\n**AAR Agenda**:\n1. **Objective recap**: What was the incident? Impact timeline?\n2. **Response assessment**: What worked well? What didn't?\n3. **Control gaps**: What failed? Why?\n4. **Corrective actions**: What to fix? Owner? Deadline?\n5. **Communication review**: Who informed? Timing? Quality?\n6. **Update playbooks**: New indicators, new procedures?\n7. **Training needs**: Team skills gaps?\n8. **Follow-up meeting**: 30 days post-AAR to verify corrective actions\n\n- **CISA Recovery Guidance**: https://www.cisa.gov/topics/cyber-threats-and-advisories/cyber-incident-reporting\n  - **What it includes**: System restoration, validation, monitoring\n  - **Timelines**: Varies by incident scope (hours to months)\n  - **Contact**: CISA Recovery team (available post-incident)\n  - **Cliff notes**: Don't rush recovery; verify attacker completely removed first.\n\n- **SANS Incident Handler Handbook**: https://www.sans.org/reading-room/whitepapers/incident/\n  - **Focus**: Incident handling best practices, lessons learned templates\n  - **Cost**: Free (SANS white paper)\n  - **Use for**: AAR template, incident documentation standard\n  - **Cliff notes**: Industry standard; cite if litigation occurs.\n\n- **Building organizational resilience (CISA)**: https://www.cisa.gov/resilience\n  - **Focus**: Systemic resilience; avoiding repeat incidents\n  - **Includes**: Governance, culture, partnerships, continuous improvement\n  - **Cliff notes**: Resilience = ability to withstand and recover from incidents quickly.\n\n### Continuous improvement: Monitoring and updating controls\n**Monthly IR team activities**:\n- Review new threat intelligence (CISA, sector ISACs)\n- Update incident playbooks based on emerging TTPs\n- Test 1-2 playbooks monthly (tabletop or drill)\n- Track metrics: MTTR (Mean Time to Respond), containment time, detection time\n\n**Annual activities**:\n- Tabletop exercise (full incident response simulation)\n- Forensic firm engagement review and update\n- Incident response plan review and update\n- Team training and certification renewal\n- Insurance policy review and update\n- Communication plan updates (contact lists, approval chains)\n\n---\n\nThis map is intended to be expanded over time with links, notes, and priority recommendations for specific use cases.\n\n---\n\n## Quick Reference: Contact Numbers & Escalation Paths\n\n**For active cybersecurity emergencies**:\n- **CISA Cybersecurity HotLine**: 1-855-292-3937 (24/7) | central@cisa.gov\n- **FBI Cybercrime**: 1-888-FBI-TIPS | FBI field office Cyber Squad (emergency)\n- **HHS Breach Notification**: 1-888-673-8994 (M-F 9-5 ET) | breach.notification@hhs.gov\n- **State Attorney General**: https://www.naag.org (state-specific hotline)\n- **IC3 Ransomware Reporting**: https://www.ic3.gov (online only; no phone)\n\n**For guidance and non-emergency support**:\n- **CISA**: https://www.cisa.gov/contact | 1-855-292-3937 (non-emergency)\n- **NIST**: https://www.nist.gov/contact\n- **GSA/FedRAMP**: https://www.fedramp.gov/contact\n- **Your Sector ISAC**: See Section 6 contact table\n\n---\n\n## Next Additions to Consider\n\nPossible follow-on additions for this map:\n- State-level cyber agencies and fusion centers\n- State and local government incident response contacts\n- International cybersecurity frameworks and partnerships\n- Emerging threat landscapes and AI-related cybersecurity\n- Zero Trust implementation resources\n- Supply chain security frameworks and practices
