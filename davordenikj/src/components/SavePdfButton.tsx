"use client";

import { IoDocumentTextOutline } from "react-icons/io5";

type SavePdfButtonProps = {
  locale?: "en" | "de";
};

export function SavePdfButton({ locale = "en" }: SavePdfButtonProps) {
  const isGerman = locale === "de";

  function savePdf() {
    // Browsers suggest the document title as the PDF file name.
    const originalTitle = document.title;
    document.title = isGerman ? "Davor-Denikj-Lebenslauf" : "Davor-Denikj-CV";
    window.addEventListener("afterprint", () => {
      document.title = originalTitle;
    }, { once: true });
    window.print();
  }

  return (
    <button className="button button-primary" type="button" onClick={savePdf}>
      <IoDocumentTextOutline aria-hidden="true" /> {isGerman ? "Als PDF speichern" : "Save as PDF"}
    </button>
  );
}
