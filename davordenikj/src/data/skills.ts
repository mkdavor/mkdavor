import { assetUrl } from "./assetUrl";
import type { Skill, SkillGroup } from "./types";

export const skills: Skill[] = [
  {
    name: ".NET",
    icon: assetUrl("dotnet.svg"),
    alt: ".NET",
  },
  {
    name: "Swift",
    icon: assetUrl("swift.svg"),
    alt: "Swift",
  },
  {
    name: "Docker",
    icon: assetUrl("docker.svg"),
    alt: "Docker",
  },
  {
    name: "Azure DevOps",
    icon: assetUrl("azuredevops-original.svg"),
    alt: "Azure DevOps",
  },
  {
    name: "Bluetooth LE",
    icon: assetUrl("bluetooth.svg"),
    alt: "Bluetooth LE",
  },
  {
    name: "PostgreSQL",
    icon: assetUrl("postgres.svg"),
    alt: "PostgreSQL",
  },
  {
    name: "Keycloak",
    icon: assetUrl("keycloak.svg"),
    alt: "Keycloak",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Backend",
    items: ["C#", ".NET", "ASP.NET Core", "REST APIs", "Entity Framework"],
  },
  {
    name: "Mobile",
    items: ["Swift", "SwiftUI", "iOS", ".NET MAUI", "Xamarin", "Bluetooth LE"],
  },
  {
    name: "Cloud & DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Azure DevOps",
      "GitHub Actions",
      "CI/CD",
      "OpenTelemetry",
    ],
  },
  {
    name: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Data & identity",
    items: ["PostgreSQL", "SQL Server", "Keycloak", "ZITADEL"],
  },
  {
    name: "Architecture & practices",
    items: [
      "Clean Architecture",
      "SOLID Principles",
      "API & SDK Design",
      "TDD",
      "Observability",
      "Technical Leadership",
    ],
  },
];
