"use client";
import { navItems } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const MobileNav: React.FC<{
  isMobileMenuIsOpen: boolean;
  setMobileMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isMobileMenuIsOpen, setMobileMenuIsOpen }) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const MobileNavRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        MobileNavRef.current &&
        !MobileNavRef.current.contains(e.target as Node)
      )
        setMobileMenuIsOpen(false);
    };
    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMobileMenuIsOpen, setMobileMenuIsOpen]);

  const toogleAccordin = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };
  return (
    <AnimatePresence>
      {isMobileMenuIsOpen && (
        <div className="fixed top-35 z-40 h-fit w-full bg-white shadow-sm lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            ref={MobileNavRef}
          >
            <div className="flex w-full flex-col p-8">
              <ul className="flex w-full flex-col gap-6">
                {navItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col border-b border-white/10 pb-6"
                  >
                    <div className="flex w-full items-center justify-between">
                      <Link
                        href={item.link}
                        onClick={() => setMobileMenuIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                      {item.dropdownItems && (
                        <ChevronDown
                          onClick={() => {
                            toogleAccordin(item.title);
                          }}
                          className={`cursor-pointer transition-transform duration-300 ${openAccordion === item.title ? "rotate-180" : ""}`}
                        />
                      )}
                    </div>
                    <AnimatePresence>
                      {openAccordion === item.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-2 pt-6">
                            {item.dropdownItems &&
                              item.dropdownItems.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.link}
                                  className="flex items-center p-2"
                                  onClick={() => setMobileMenuIsOpen(false)}
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
