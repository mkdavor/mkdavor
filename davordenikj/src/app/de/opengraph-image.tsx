import { createProfileOpenGraphImage } from "../../components/ProfileOpenGraphImage";

export const alt = "Davor Denikj - Zertifizierter Softwarearchitekt (iSAQB CPSA-F) und Staff Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function GermanOpenGraphImage() {
  return createProfileOpenGraphImage("de");
}
