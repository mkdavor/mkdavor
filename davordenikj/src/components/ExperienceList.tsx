"use client";

import Image from "next/image";
import { IoClose, IoOpenOutline } from "react-icons/io5";
import { experiences } from "../data/experiences";

function openExperience(id: string) {
  const dialog = document.getElementById(`experience-dialog-${id}`);
  if (dialog instanceof HTMLDialogElement) dialog.showModal();
}

function closeExperience(id: string) {
  const dialog = document.getElementById(`experience-dialog-${id}`);
  if (dialog instanceof HTMLDialogElement) dialog.close();
}

export function ExperienceList() {
  return (
    <div className="experience-list">
      {experiences.map((experience) => (
        <article key={experience.id} className="experience-item">
          <div className="experience-head">
            {experience.logo && (
              <Image
                className="experience-logo"
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={56}
                height={56}
                sizes="56px"
              />
            )}
            <div className="experience-head-text">
              <h3>
                <a href={experience.website} target="_blank" rel="noreferrer">
                  {experience.company}
                </a>
              </h3>
              <p className="meta">{experience.role}</p>
              <p className="meta">{experience.location} · {experience.period}</p>
            </div>
          </div>
          <p className="experience-summary">{experience.summary}</p>
          <button
            className="experience-modal-trigger"
            type="button"
            onClick={() => openExperience(experience.id)}
          >
            Responsibilities and achievements
          </button>

          <dialog
            id={`experience-dialog-${experience.id}`}
            className="experience-dialog"
            aria-labelledby={`experience-dialog-title-${experience.id}`}
            onClick={(event) => {
              if (event.target === event.currentTarget) closeExperience(experience.id);
            }}
          >
            <div className="experience-dialog-panel">
              <header className="experience-dialog-header">
                <div className="experience-head">
                  {experience.logo && (
                    <Image
                      className="experience-logo"
                      src={experience.logo}
                      alt=""
                      width={56}
                      height={56}
                      sizes="56px"
                    />
                  )}
                  <div>
                    <p className="section-kicker">{experience.period}</p>
                    <h2 id={`experience-dialog-title-${experience.id}`}>
                      {experience.company}
                    </h2>
                    <p className="meta">{experience.role} · {experience.location}</p>
                  </div>
                </div>
                <button
                  className="experience-dialog-close"
                  type="button"
                  aria-label={`Close ${experience.company} details`}
                  onClick={() => closeExperience(experience.id)}
                >
                  <IoClose aria-hidden="true" />
                </button>
              </header>

              {experience.intro && <p className="experience-dialog-intro">{experience.intro}</p>}
              <ul className="detail-list experience-dialog-list">
                {experience.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <div className="tag-list" aria-label={`${experience.company} technologies`}>
                {experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <a
                className="text-link experience-company-link"
                href={experience.website}
                target="_blank"
                rel="noreferrer"
              >
                Visit {experience.websiteLabel} <IoOpenOutline aria-hidden="true" />
              </a>
            </div>
          </dialog>
        </article>
      ))}
    </div>
  );
}
