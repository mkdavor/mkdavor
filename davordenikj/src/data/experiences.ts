import { assetUrl } from "./assetUrl";
import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: "lmz",
    company: "Landesmedienzentrum Baden-Württemberg",
    role: "Lead Software Engineer",
    location: "Stuttgart",
    period: "07/2024 - Present",
    summary:
      "Lead the full lifecycle of product development from concept through delivery, with end-to-end ownership across architecture, implementation, infrastructure, and release management.",
    website: "https://lmz-bw.de",
    websiteLabel: "lmz-bw.de",
    logo: assetUrl("lmzLogo.png"),
    details: [
      "Product Ownership from Zero to Release: Build and release the iOS and iPadOS applications, and set up the full development foundation from acquiring licenses and defining the architecture to planning the roadmap and publishing releases to the App Store.",
      "Technical Leadership & Team Management: Lead and mentor the development team, define coding standards and best practices, coordinate workstreams, and conduct technical reviews to ensure long-term maintainability.",
      "Backend & API Development: Design and implement backend services for mobile and web applications with a focus on security, scalability, and clean architecture.",
      "Cross-Team Coordination: Act as the main technical contact between design, backend, infrastructure, product owners, and management to ensure alignment and effective decision-making.",
      "DevOps & Infrastructure: Develop and maintain CI/CD pipelines and manage containerized environments using Docker, Kubernetes, and Azure DevOps for reliable deployments.",
      "Strategic Feature Planning: Research and evaluate new features and technologies, and present architectural and feasibility assessments to stakeholders.",
      "Long-Term Architecture & Scalability: Ensure modern and future-proof technical decisions that balance maintainability, performance, and business needs.",
    ],
    intro:
      "In my current role at LMZ BW, I lead the full lifecycle of product development from concept through delivery, with end-to-end ownership across architecture, implementation, infrastructure, and release management. I am responsible for steering product direction, coordinating across teams, and ensuring technical excellence throughout the stack.",
    detailsHeading: "Key responsibilities and achievements:",
  },
  {
    id: "wsa",
    company: "WS Audiology",
    role: "Lead Software Engineer for Mobile Applications",
    location: "Erlangen",
    period: "07/2021 - 06/2024",
    summary:
      "Spearheaded critical mobile initiatives using .NET, Swift, and Bluetooth to deliver production-grade innovation.",
    website: "https://wsa.com",
    websiteLabel: "wsa.com",
    logo: assetUrl("wsaLogo.png"),
    intro:
      "As the Lead Developer for Mobile Applications at WS Audiology, I spearheaded various critical initiatives, leveraging my expertise in .NET, Swift, and Bluetooth technology to drive innovation and deliver exceptional results:",
    details: [
      "Swift SDK Development and Architectural Design: Led the development of a groundbreaking SDK tailored to facilitate seamless communication between smartphones and hearing aids via Bluetooth technology. This involved not only the conceptualization, design, implementation, and testing phases of the SDK but also the detailed architectural design to ensure scalability, reliability, and adherence to industry standards",
      "Xamarin SDK Development: Extended the capabilities of the Xamarin SDK and smoothly migrated it to the MAUI framework, guaranteeing enhanced performance, scalability, and cross-platform compatibility",
      "Recruitment and Leadership: Played a pivotal role in the recruitment process by conducting interviews for both .NET and Swift senior candidates, ensuring the team was equipped with top-tier talent to meet project demands",
      "Technology Proficiency: Demonstrated extensive knowledge of Bluetooth technology, which was instrumental in the successful execution of projects requiring wireless communication capabilities",
      "Collaborative Endeavors: Collaborated closely with a diverse, cross-platform international team, fostering synergy and driving collective success through effective communication and collaboration",
      "Innovative Ventures: During designated innovation periods, conceptualized and developed various projects, including an Apple Vision Pro app and a Live Translator App, showcasing creativity, initiative, and a commitment to pushing technological boundaries",
    ],
  },
  {
    id: "mathema",
    company: "Mathema",
    role: "Senior Software Engineer",
    location: "Nürnberg",
    period: "07/2019 - 06/2021",
    summary:
      "Built enterprise C#/.NET systems and improved quality through test adoption.",
    website: "https://mathema.de",
    websiteLabel: "mathema.de",
    logo: assetUrl("mathemaLogo.svg"),
    details: [
      "Enhanced and maintained enterprise applications for workforce and production management.",
      "Built C#/.NET MVC applications with SQL Server and stored procedures.",
      "Introduced unit testing to improve stability and code quality.",
      "Translated business requirements into scalable technical solutions.",
    ],
  },
  {
    id: "endava",
    company: "Endava",
    role: "Senior Software Engineer",
    location: "Skopje",
    period: "10/2017 - 01/2019",
    summary:
      "Delivered large C# integrations for insurance with strong TDD and automation practices.",
    website: "https://endava.com",
    websiteLabel: "endava.com",
    logo: assetUrl("endavaLogo.png"),
    details: [
      "Delivered large system integrations for a UK insurance group using C# and TDD practices.",
      "Worked directly with client stakeholders on architecture and delivery status.",
      "Improved automated testing flows and supported junior engineers.",
      "Contributed to integration and automation testing for production reliability.",
    ],
  },
  {
    id: "musala",
    company: "Musala Soft (acquired by Avenga)",
    role: "Software Engineer",
    location: "Skopje",
    period: "04/2016 - 10/2017",
    summary:
      "Developed Windows mobile/UWP and ASP.NET MVC applications across healthcare and insurance.",
    website: "https://linkedin.com/company/musala-soft/",
    websiteLabel: "linkedin.com/company/musala-soft",
    logo: assetUrl("musalaLogo.png"),
    details: [
      "Built Windows Mobile and UWP apps with C#, XAML, and MVVM architecture.",
      "Developed ASP.NET MVC web applications with HTML5, CSS3, and JavaScript.",
      "Delivered healthcare and insurance domain solutions with focus on stability and performance.",
    ],
  },
  {
    id: "in2",
    company: "IN2",
    role: "Software Engineer",
    location: "Skopje / Nuremberg",
    period: "01/2015 - 04/2016",
    summary:
      "Implemented healthcare-focused WPF enterprise systems and reporting/data layers.",
    website: "https://in2.eu/en/home-en/",
    websiteLabel: "in2.eu",
    logo: assetUrl("in2Logo.png"),
    details: [
      "Developed enterprise WPF applications for healthcare use cases.",
      "Designed SQL Server database structures and stored procedures.",
      "Delivered reporting solutions with Crystal Reports and XML/XSL transformations.",
      "Supported internal training and bank integration solutions.",
    ],
  },
];
