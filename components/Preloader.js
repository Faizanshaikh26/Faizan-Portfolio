"use client";

import { useEffect } from "react";

export default function Preloader() {
  useEffect(() => {
    // Replicate the jQuery preloader behavior: add 'loaded' class to body
    const handleLoad = () => {
      document.body.classList.add("loaded");
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback: hide preloader after 3 seconds even if load doesn't fire
      const timeout = setTimeout(handleLoad, 3000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <div id="preloader">
      <div className="loader">
        <img src="/img/load.gif" alt="loading..." />
      </div>
    </div>
  );
}
