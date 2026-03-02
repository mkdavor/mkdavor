import { useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { educationItems, githubActivity, profile, projects, socialLinks } from "./data/content";
import { experiences } from "./data/experiences";
import { languages } from "./data/languages";
import { skills } from "./data/skills";
import "./App.css";

function App() {
  const [activeExperienceId, setActiveExperienceId] = useState<string | null>(
    null,
  );
  const [githubWidgetFailed, setGithubWidgetFailed] = useState(false);

  const activeExperience =
    experiences.find((item) => item.id === activeExperienceId) ?? null;

  return (
    <main className="page">
      <section className="bento-grid">
        <article className="tile tile-hero">
          <div className="hero-top">
            <img
              className="profile-avatar"
              src={profile.avatar}
              alt={profile.avatarAlt}
              loading="lazy"
            />
            <div>
              <p className="eyebrow">{profile.role}</p>
              <h1>{profile.name}</h1>
              <p className="hero-subtitle">{profile.subtitle}</p>
              <p>{profile.summary}</p>
              <div className="cta-row">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    className="social-link"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.iconUrl ? (
                      <img src={link.iconUrl} alt="" aria-hidden="true" />
                    ) : (
                      link.usesDocumentIcon && (
                        <IoDocumentTextOutline aria-hidden="true" />
                      )
                    )}
                    {link.label}
                  </a>
                ))}
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
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    loading="lazy"
                  />
                )}
                <div className="experience-head-text">
                  <h3>{experience.company}</h3>
                  <p className="meta">
                    {experience.role} · {experience.location} ·{" "}
                    {experience.period}
                  </p>
                </div>
              </div>
              <div className="experience-actions">
                <button
                  type="button"
                  className="details-btn"
                  onClick={() => setActiveExperienceId(experience.id)}
                >
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
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <img src={project.logo} alt={project.logoAlt} loading="lazy" />
              <div>
                <p>
                  <strong>{project.name}:</strong> {project.description}
                </p>
                <a href={project.website} target="_blank" rel="noreferrer">
                  {project.websiteLabel}
                </a>
              </div>
            </div>
          ))}
        </article>

        <article className="tile tile-education">
          <h2>Education</h2>
          {educationItems.map((item) => (
            <div key={item.id} className="education-item">
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              <a href={item.website} target="_blank" rel="noreferrer">
                {item.websiteLabel}
              </a>
            </div>
          ))}
        </article>

        <article className="tile tile-languages">
          <h2>Languages</h2>
          <ul className="language-list">
            {languages.map((language) => (
              <li key={language.name}>
                <span className="language-name">
                  <img
                    className="language-flag"
                    src={language.flagUrl}
                    alt={language.flagAlt}
                    loading="lazy"
                  />
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
              src={githubActivity.chartUrl}
              alt={githubActivity.chartAlt}
              loading="lazy"
              onError={() => setGithubWidgetFailed(true)}
            />
          ) : (
            <a
              className="github-fallback-link"
              href={githubActivity.fallbackUrl}
              target="_blank"
              rel="noreferrer"
            >
              {githubActivity.fallbackLabel}
            </a>
          )}
        </article>
      </section>

      {activeExperience && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveExperienceId(null)}
        >
          <article
            className="experience-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="modal-header">
              <div>
                <div className="experience-head">
                  {activeExperience.logo && (
                    <img
                      className="experience-logo"
                      src={activeExperience.logo}
                      alt={`${activeExperience.company} logo`}
                      loading="lazy"
                    />
                  )}
                  <h3>{activeExperience.company}</h3>
                </div>
                <a
                  className="modal-company-link"
                  href={activeExperience.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  {activeExperience.websiteLabel}
                </a>
                <p className="meta">
                  {activeExperience.role} · {activeExperience.location} ·{" "}
                  {activeExperience.period}
                </p>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={() => setActiveExperienceId(null)}
              >
                Close
              </button>
            </header>
            {activeExperience.intro && (
              <p className="modal-intro">{activeExperience.intro}</p>
            )}
            {activeExperience.detailsHeading && (
              <p className="modal-details-heading">
                {activeExperience.detailsHeading}
              </p>
            )}
            <ul className="modal-details-list">
              {activeExperience.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        </div>
      )}
    </main>
  );
}

export default App;
