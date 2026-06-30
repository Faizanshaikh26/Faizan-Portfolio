"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyClassReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Clean up body classes and overlay states on route changes
    document.body.classList.remove("section-show");

    const activeSections = document.querySelectorAll("section.active");
    activeSections.forEach((sec) => sec.classList.remove("active"));
  }, [pathname]);

  return null;
}
