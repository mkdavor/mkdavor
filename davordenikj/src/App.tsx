import { useState } from 'react'
import { IoDocumentTextOutline } from 'react-icons/io5'
import './App.css'

function App() {
  const assetUrl = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`
  const [activeExperienceId, setActiveExperienceId] = useState<string | null>(null)
  const [githubWidgetFailed, setGithubWidgetFailed] = useState(false)
  type Experience = {
    id: string
    company: string
    role: string
    location: string
    period: string
    summary: string
    website: string
    websiteLabel: string
    details: string[]
    intro?: string
    detailsHeading?: string
    logo?: string
  }

  const skills = [
    {
      name: '.NET / C# / Xamarin / MAUI',
      icon: 'https://cdn.simpleicons.org/dotnet/512BD4',
      alt: '.NET',
    },
    {
      name: 'Swift / SwiftUI',
      icon: 'https://cdn.simpleicons.org/swift/F05138',
      alt: 'Swift',
    },
    {
      name: 'Mobile Architecture',
      icon: 'https://cdn.simpleicons.org/apple/1F2937',
      alt: 'Mobile',
    },
    {
      name: 'Clean Architecture',
      icon: assetUrl('clean-architecture.svg'),
      alt: 'Clean Architecture',
    },
    {
      name: 'REST APIs',
      icon: 'https://cdn.simpleicons.org/fastapi/009688',
      alt: 'API',
    },
    {
      name: 'Docker & Kubernetes',
      icon: 'https://cdn.simpleicons.org/docker/2496ED',
      alt: 'Docker',
    },
    {
      name: 'Azure DevOps / CI-CD',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg',
      alt: 'Azure DevOps',
    },
    {
      name: 'Bluetooth (BLE)',
      icon: 'https://cdn.simpleicons.org/bluetooth/0082FC',
      alt: 'Bluetooth',
    },
    {
      name: 'SQL Server / Postgres',
      icon: 'https://cdn.simpleicons.org/postgresql/4169E1',
      alt: 'PostgreSQL',
    },
  ]

  const languages = [
    { name: 'English', level: 'C1', flagUrl: 'https://flagcdn.com/w40/gb.png', flagAlt: 'United Kingdom flag' },
    { name: 'German', level: 'B2', flagUrl: 'https://flagcdn.com/w40/de.png', flagAlt: 'Germany flag' },
    { name: 'Macedonian', level: 'Native', flagUrl: 'https://flagcdn.com/w40/mk.png', flagAlt: 'North Macedonia flag' },
    { name: 'Croatian', level: 'C1', flagUrl: 'https://flagcdn.com/w40/hr.png', flagAlt: 'Croatia flag' },
  ]

  const experiences: Experience[] = [
    {
      id: 'lmz',
      company: 'Landesmedienzentrum Baden-Württemberg',
      role: 'Lead Software Engineer',
      location: 'Stuttgart',
      period: '07/2024 - Present',
      summary:
        'Lead the full lifecycle of product development from concept through delivery, with end-to-end ownership across architecture, implementation, infrastructure, and release management.',
      website: 'https://lmz-bw.de',
      websiteLabel: 'lmz-bw.de',
      logo: 'lmzLogo.png',
      details: [
        'Product Ownership from Zero to Release: Build and release the iOS and iPadOS applications, and set up the full development foundation from acquiring licenses and defining the architecture to planning the roadmap and publishing releases to the App Store.',
        'Technical Leadership & Team Management: Lead and mentor the development team, define coding standards and best practices, coordinate workstreams, and conduct technical reviews to ensure long-term maintainability.',
        'Backend & API Development: Design and implement backend services for mobile and web applications with a focus on security, scalability, and clean architecture.',
        'Cross-Team Coordination: Act as the main technical contact between design, backend, infrastructure, product owners, and management to ensure alignment and effective decision-making.',
        'DevOps & Infrastructure: Develop and maintain CI/CD pipelines and manage containerized environments using Docker, Kubernetes, and Azure DevOps for reliable deployments.',
        'Strategic Feature Planning: Research and evaluate new features and technologies, and present architectural and feasibility assessments to stakeholders.',
        'Long-Term Architecture & Scalability: Ensure modern and future-proof technical decisions that balance maintainability, performance, and business needs.',
      ],
      intro:
        'In my current role at LMZ BW, I lead the full lifecycle of product development from concept through delivery, with end-to-end ownership across architecture, implementation, infrastructure, and release management. I am responsible for steering product direction, coordinating across teams, and ensuring technical excellence throughout the stack.',
      detailsHeading: 'Key responsibilities and achievements:',
    },
    {
      id: 'wsa',
      company: 'WS Audiology',
      role: 'Lead Software Engineer for Mobile Applications',
      location: 'Erlangen',
      period: '07/2021 - 06/2024',
      summary:
        'Spearheaded critical mobile initiatives using .NET, Swift, and Bluetooth to deliver production-grade innovation.',
      website: 'https://wsa.com',
      websiteLabel: 'wsa.com',
      logo: 'wsaLogo.png',
      intro:
        'As the Lead Developer for Mobile Applications at WS Audiology, I spearheaded various critical initiatives, leveraging my expertise in .NET, Swift, and Bluetooth technology to drive innovation and deliver exceptional results:',
      details: [
        'Swift SDK Development and Architectural Design: Led the development of a groundbreaking SDK tailored to facilitate seamless communication between smartphones and hearing aids via Bluetooth technology. This involved not only the conceptualization, design, implementation, and testing phases of the SDK but also the detailed architectural design to ensure scalability, reliability, and adherence to industry standards',
        'Xamarin SDK Development: Extended the capabilities of the Xamarin SDK and smoothly migrated it to the MAUI framework, guaranteeing enhanced performance, scalability, and cross-platform compatibility',
        'Recruitment and Leadership: Played a pivotal role in the recruitment process by conducting interviews for both .NET and Swift senior candidates, ensuring the team was equipped with top-tier talent to meet project demands',
        'Technology Proficiency: Demonstrated extensive knowledge of Bluetooth technology, which was instrumental in the successful execution of projects requiring wireless communication capabilities',
        'Collaborative Endeavors: Collaborated closely with a diverse, cross-platform international team, fostering synergy and driving collective success through effective communication and collaboration',
        'Innovative Ventures: During designated innovation periods, conceptualized and developed various projects, including an Apple Vision Pro app and a Live Translator App, showcasing creativity, initiative, and a commitment to pushing technological boundaries',
      ],
    },
    {
      id: 'mathema',
      company: 'Mathema',
      role: 'Senior Software Engineer',
      location: 'Nürnberg',
      period: '07/2019 - 06/2021',
      summary: 'Built enterprise C#/.NET systems and improved quality through test adoption.',
      website: 'https://mathema.de',
      websiteLabel: 'mathema.de',
      logo: 'mathemaLogo.svg',
      details: [
        'Enhanced and maintained enterprise applications for workforce and production management.',
        'Built C#/.NET MVC applications with SQL Server and stored procedures.',
        'Introduced unit testing to improve stability and code quality.',
        'Translated business requirements into scalable technical solutions.',
      ],
    },
    {
      id: 'endava',
      company: 'Endava',
      role: 'Senior Software Engineer',
      location: 'Skopje',
      period: '10/2017 - 01/2019',
      summary: 'Delivered large C# integrations for insurance with strong TDD and automation practices.',
      website: 'https://endava.com',
      websiteLabel: 'endava.com',
      logo: 'endavaLogo.png',
      details: [
        'Delivered large system integrations for a UK insurance group using C# and TDD practices.',
        'Worked directly with client stakeholders on architecture and delivery status.',
        'Improved automated testing flows and supported junior engineers.',
        'Contributed to integration and automation testing for production reliability.',
      ],
    },
    {
      id: 'musala',
      company: 'Musala Soft (acquired by Avenga)',
      role: 'Software Engineer',
      location: 'Skopje',
      period: '04/2016 - 10/2017',
      summary: 'Developed Windows mobile/UWP and ASP.NET MVC applications across healthcare and insurance.',
      website: 'https://linkedin.com/company/musala-soft/',
      websiteLabel: 'linkedin.com/company/musala-soft',
      logo: 'musalaLogo.png',
      details: [
        'Built Windows Mobile and UWP apps with C#, XAML, and MVVM architecture.',
        'Developed ASP.NET MVC web applications with HTML5, CSS3, and JavaScript.',
        'Delivered healthcare and insurance domain solutions with focus on stability and performance.',
      ],
    },
    {
      id: 'in2',
      company: 'IN2',
      role: 'Software Engineer',
      location: 'Skopje / Nuremberg',
      period: '01/2015 - 04/2016',
      summary: 'Implemented healthcare-focused WPF enterprise systems and reporting/data layers.',
      website: 'https://in2.eu/en/home-en/',
      websiteLabel: 'in2.eu',
      logo: 'in2Logo.png',
      details: [
        'Developed enterprise WPF applications for healthcare use cases.',
        'Designed SQL Server database structures and stored procedures.',
        'Delivered reporting solutions with Crystal Reports and XML/XSL transformations.',
        'Supported internal training and bank integration solutions.',
      ],
    },
  ]

  const activeExperience = experiences.find((item) => item.id === activeExperienceId) ?? null

  return (
    <main className="page">
      <section className="bento-grid">
        <article className="tile tile-hero">
          <div className="hero-top">
            <img className="profile-avatar" src={assetUrl('me.png')} alt="Davor Denikj" loading="lazy" />
            <div>
              <p className="eyebrow">Lead Software Engineer</p>
              <h1>Davor Denikj</h1>
              <p className="hero-subtitle">.NET, Swift, Mobile & Backend Architecture</p>
              <p>
                Lead Software Engineer with 12+ years of experience in backend and mobile development,
                specializing in .NET and Swift. Architect of scalable mobile and backend systems, with
                proven experience leading cross-functional teams and delivering production-grade
                applications from concept to release. Strong focus on clean architecture, long-term
                maintainability, and aligning technical execution with business objectives.
              </p>
              <div className="cta-row">
                <a className="social-link" href="https://linkedin.com/in/davordenikj" target="_blank" rel="noreferrer">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt=""
                    aria-hidden="true"
                  />
                  LinkedIn
                </a>
                <a className="social-link" href="https://github.com/mkdavor" target="_blank" rel="noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" aria-hidden="true" />
                  GitHub
                </a>
                <a className="social-link" href="https://rxresu.me/mkdavor/davor-denikj" target="_blank" rel="noreferrer">
                  <IoDocumentTextOutline aria-hidden="true" />
                  CV
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="tile tile-experience">
          <h2>Experience</h2>
          {experiences.map((experience) => (
            <div key={experience.id} className="experience-item">
              <div className="experience-head">
                {experience.logo && (
                  <img
                    className="experience-logo"
                    src={assetUrl(experience.logo)}
                    alt={`${experience.company} logo`}
                    loading="lazy"
                  />
                )}
                <div className="experience-head-text">
                  <h3>{experience.company}</h3>
                  <p className="meta">
                    {experience.role} · {experience.location} · {experience.period}
                  </p>
                </div>
              </div>
              <div className="experience-actions">
                <button type="button" className="details-btn" onClick={() => setActiveExperienceId(experience.id)}>
                  View details
                </button>
                <a href={experience.website} target="_blank" rel="noreferrer">
                  {experience.websiteLabel}
                </a>
              </div>
            </div>
          ))}
        </article>

        <article className="tile tile-skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill.name}>
                <img src={skill.icon} alt={skill.alt} loading="lazy" />
                {skill.name}
              </span>
            ))}
          </div>
        </article>

        <article className="tile tile-projects">
          <h2>Hobby Projects</h2>
          <div className="project-item">
            <img src={assetUrl('mklive-radio-logo.png')} alt="MK Live Radio logo" loading="lazy" />
            <div>
              <p>
                <strong>MK Live Radio:</strong> Independently developed and maintained iOS and Android
                app streaming 70+ Macedonian radio stations worldwide.
              </p>
              <a href="https://mkliveradio.app" target="_blank" rel="noreferrer">
                mkliveradio.app
              </a>
            </div>
          </div>
          <div className="project-item">
            <img src={assetUrl('tomatoCardsLogo.svg')} alt="Tomato Cards logo" loading="lazy" />
            <div>
              <p>
                <strong>Tomato Cards:</strong> Digital business card SaaS platform focused on scalable
                backend architecture and modern web technologies.
              </p>
              <a href="https://tomatocards.com" target="_blank" rel="noreferrer">
                tomatocards.com
              </a>
            </div>
          </div>
        </article>

        <article className="tile tile-education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>BSc, Computer Science and Engineering</h3>
            <p>Faculty of Computer Science and Engineering, Ss. Cyril and Methodius University of Skopje</p>
            <a href="https://www.finki.ukim.mk/en" target="_blank" rel="noreferrer">
              finki.ukim.mk
            </a>
          </div>
          <div className="education-item">
            <h3>Electrical Engineering and Information Technologies</h3>
            <p>Faculty of Electrical Engineering and Information Technologies, UKIM Skopje</p>
            <a href="https://feit.ukim.edu.mk/en/" target="_blank" rel="noreferrer">
              feit.ukim.edu.mk
            </a>
          </div>
        </article>

        <article className="tile tile-languages">
          <h2>Languages</h2>
          <ul className="language-list">
            {languages.map((language) => (
              <li key={language.name}>
                <span className="language-name">
                  <img className="language-flag" src={language.flagUrl} alt={language.flagAlt} loading="lazy" />
                  {language.name}
                </span>
                <strong className="language-level">{language.level}</strong>
              </li>
            ))}
          </ul>
        </article>

        <article className="tile tile-github">
          <h2>GitHub Activity</h2>
          {!githubWidgetFailed ? (
            <img
              className="github-widget"
              src="https://ghchart.rshah.org/0071e3/mkdavor"
              alt="GitHub contribution chart for mkdavor"
              loading="lazy"
              onError={() => setGithubWidgetFailed(true)}
            />
          ) : (
            <a className="github-fallback-link" href="https://github.com/mkdavor" target="_blank" rel="noreferrer">
              View GitHub activity on github.com/mkdavor
            </a>
          )}
        </article>
      </section>

      {activeExperience && (
        <div className="modal-backdrop" onClick={() => setActiveExperienceId(null)}>
          <article className="experience-modal" onClick={(event) => event.stopPropagation()}>
            <header className="modal-header">
              <div>
                <div className="experience-head">
                  {activeExperience.logo && (
                    <img
                      className="experience-logo"
                      src={assetUrl(activeExperience.logo)}
                      alt={`${activeExperience.company} logo`}
                      loading="lazy"
                    />
                  )}
                  <h3>{activeExperience.company}</h3>
                </div>
                <a className="modal-company-link" href={activeExperience.website} target="_blank" rel="noreferrer">
                  {activeExperience.websiteLabel}
                </a>
                <p className="meta">
                  {activeExperience.role} · {activeExperience.location} · {activeExperience.period}
                </p>
              </div>
              <button type="button" className="modal-close" onClick={() => setActiveExperienceId(null)}>
                Close
              </button>
            </header>
            {activeExperience.intro && <p className="modal-intro">{activeExperience.intro}</p>}
            {activeExperience.detailsHeading && <p className="modal-details-heading">{activeExperience.detailsHeading}</p>}
            <ul className="modal-details-list">
              {activeExperience.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        </div>
      )}
    </main>
  )
}

export default App
