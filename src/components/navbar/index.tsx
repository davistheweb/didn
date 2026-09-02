"use client";
import { navItems } from "@/data";
import { rubikFont } from "@/lib/font";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Logo } from "../ui/Logo";
import { MobileNav } from "./MobileNav";
import { DIDNLogo, WhiteDIDNLogo } from "@/assets";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuIsOpen, setIsMobileMenuIsOpen] = useState<boolean>(false);

  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      });
    };

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => href === pathName;

  return (
    <>
      <nav
        className={`transition-top fixed flex w-full items-center justify-between px-8 duration-200 ${isScrolled ? "top-0 bg-white shadow-md" : "top-0 border-b border-b-blue-500 bg-transparent lg:top-9"} z-50 py-4 md:py-6`}
      >
        <div className="flex max-h-17.5">
          <Logo defaultImage={isScrolled ? DIDNLogo : WhiteDIDNLogo} />
        </div>

        <div className="h-ful hidden items-center gap-5 lg:flex">
          <ul className="flex space-x-5">
            {navItems.map(({ title, link, dropdownItems }, i) => (
              <li key={i} className="group/nav relative h-full">
                <Link
                  href={link}
                  className={`inline-flex gap-1 hover:text-[#0060cc] ${isScrolled ? `${isActive(link) ? "text-[#0060cc]" : "text-black"}` : `${isActive(link) ? "text-[#0060cc]" : !isScrolled ? "text-white" : isScrolled && "text-black"}`}`}
                >
                  {title}
                  {dropdownItems && (
                    <ChevronDown className="opacity-80 transition-all group-hover/nav:rotate-180" />
                  )}
                </Link>
                {dropdownItems && (
                  <div className="invisible absolute top-full left-0 h-fit w-max translate-y-4 bg-white py-2 opacity-0 shadow-sm transition-all duration-300 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
                    <ul className="flex flex-col gap-3 py-2">
                      {dropdownItems.map((item, _i) => (
                        <li key={_i} className="group/item flex flex-col gap-2">
                          <Link
                            href={item.link}
                            className={`${rubikFont.className} group-hover/item:text-custom-green w-full px-4 py-0.5 text-black transition-all duration-300 group-hover/item:bg-[#eef9ff]`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="bg-custom-blue cursor-pointer rounded-sm px-4 py-2 font-medium text-white uppercase"
            >
              Contact
            </Link>
          </div>
        </div>

        <button
          className="cursor-pointer lg:hidden"
          onClick={() => setIsMobileMenuIsOpen((prev) => !prev)}
        >
          {isMobileMenuIsOpen ? (
            <X
              size={30}
              // color={isScrolled ? "black" : "white"}
            />
          ) : (
            <Menu
              // color={isScrolled ? "black" : "white"}
              size={30}
            />
          )}
        </button>
      </nav>
      <MobileNav
        isMobileMenuIsOpen={isMobileMenuIsOpen}
        setMobileMenuIsOpen={setIsMobileMenuIsOpen}
      />
    </>
  );
};
