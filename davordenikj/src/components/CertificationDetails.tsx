import { IoOpenOutline } from "react-icons/io5";
import { certification } from "../data/certification";

export function CertificationDetails({
  locale = "en",
  headingLevel: Heading = "h3",
}: {
  locale?: "en" | "de";
  headingLevel?: "h2" | "h3";
}) {
  const isGerman = locale === "de";

  return (
    <>
      <Heading>{certification.name}</Heading>
      <p>{isGerman ? certification.titleDe : certification.title}</p>
      <p>{isGerman ? "Zertifizierungsstelle" : "Certification body"}: {certification.certificationBody}</p>
      <a className="text-link" href={certification.verificationUrl} target="_blank" rel="noreferrer">
        {isGerman ? "Zertifikat verifizieren" : "Verify certificate"} <IoOpenOutline aria-hidden="true" />
      </a>
    </>
  );
}
