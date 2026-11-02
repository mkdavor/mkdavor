import { createProfileOpenGraphImage } from "../components/ProfileOpenGraphImage";

export const alt = "Davor Denikj - Certified Software Architect (iSAQB CPSA-F) and Staff Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createProfileOpenGraphImage();
}
