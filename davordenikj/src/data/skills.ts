import { assetUrl } from "./assetUrl";
import type { Skill } from "./types";

export const skills: Skill[] = [
  {
    name: ".NET / C#",
    icon: assetUrl("dotnet.svg"),
    alt: ".NET",
  },
  {
    name: "Xamarin / MAUI",
    icon: assetUrl("mauiLogo.svg"),
    alt: "MAUI / Xamarin",
  },
  {
    name: "Swift / SwiftUI",
    icon: assetUrl("swift.svg"),
    alt: "Swift",
  },
  {
    name: "Mobile Architecture",
    icon: assetUrl("mobileArchLogo.png"),
    alt: "Mobile",
  },
  {
    name: "Clean Architecture",
    icon: assetUrl("clean-architecture.svg"),
    alt: "Clean Architecture",
  },
  {
    name: "API & SDK Architecture",
    icon: assetUrl("api.png"),
    alt: "API",
  },
  {
    name: "Docker & Kubernetes",
    icon: assetUrl("docker.svg"),
    alt: "Docker",
  },
  {
    name: "Azure DevOps / CI-CD",
    icon: assetUrl("azuredevops-original.svg"),
    alt: "Azure DevOps",
  },
  {
    name: "Bluetooth (BLE)",
    icon: assetUrl("bluetooth.svg"),
    alt: "Bluetooth",
  },
  {
    name: "SQL Server / Postgres",
    icon: assetUrl("postgres.svg"),
    alt: "PostgreSQL",
  },
];
