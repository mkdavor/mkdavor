import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import type { Project } from "../data/types";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <article className={`tile project-card ${className}`.trim()}>
      <div className="project-card-header">
        <Image
          src={project.logo}
          alt={project.logoAlt}
          width={88}
          height={88}
          sizes="88px"
        />
        <div>
          <p className="eyebrow">{project.status}</p>
          <h3>{project.name}</h3>
          <p className="project-tagline">{project.tagline}</p>
        </div>
      </div>
      <p>{project.description}</p>
      <ul className="compact-list project-differentiators">
        {project.differentiators.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="tag-list" aria-label={`${project.name} technologies`}>
        {project.technologies.slice(0, 4).map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
      <Link className="text-link" href={`/projects/${project.slug}`}>
        View project <IoArrowForward aria-hidden="true" />
      </Link>
    </article>
  );
}
