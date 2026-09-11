"use client";

import AOS from "aos";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const AOSInit: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  useEffect(() => {
    if (!pathname) return;
    AOS.refreshHard();
  }, [pathname]);

  return null;
};
