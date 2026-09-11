"use client";

import { footerColumns, legalLinks, socialLinks } from "@/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FooterColumn } from "./Footercolumn";
import { Logo } from "./Logo";
import { WhiteDIDNLogo } from "@/assets";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle newsletter submission
    setEmail("");
  };

  return (
    <footer className="bg-custom-green relative w-full overflow-hidden px-8 pt-16 pb-10">
      {/* Top: brand + newsletter */}
      <div className="mb-16 flex w-full flex-col justify-between gap-12 lg:flex-row">
        <div className="flex flex-col gap-6">
          <Logo defaultImage={WhiteDIDNLogo} />

          <div className="flex flex-col gap-1">
            <p className="text-lg text-white md:w-125">
              Creating meaningful and sustainable change by empowering
              communities, protecting the environment, advancing human rights,
              and developing the next generation of leaders.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social, _i) => (
              <Link
                key={_i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#150806] transition-opacity duration-200 hover:opacity-80"
              >
                <social.icon
                  className="h-4 w-4"
                  strokeWidth={2}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:w-100">
          <p className="text-sm text-gray-200">
            Stay up to date. Subscribe to our Newsletter
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 rounded-md bg-black p-1.5 pl-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="w-full bg-transparent text-sm text-white placeholder:text-gray-300 focus:outline-none"
            />

            <button
              type="submit"
              className="bg-custom-blue flex cursor-pointer items-center gap-1 rounded-md px-4 py-2.5 text-sm font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-[#0a428c]"
            >
              Submit
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Columns */}
      <div className="mb-20 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {footerColumns.map((column, _i) => (
          <FooterColumn
            key={_i}
            column={column}
          />
        ))}
      </div>

      {/* Big background wordmark */}
      <div className="relative flex w-full items-center justify-center pt-10 pb-6">
        <span className="pointer-events-none text-[15vw] leading-none font-bold text-white/5 select-none">
          DIDN
        </span>
      </div>

      {/* Bottom bar */}
      <div className="flex w-full flex-col items-center justify-center gap-3 border-t border-white/10 pt-6">
        <p className="text-center text-xs text-gray-100">
          © {new Date().getFullYear()} Direct Impact Development Network. All rights reserved.
        </p>

        {/* <ul className="flex items-center gap-6">
          {legalLinks.map((link, _i) => (
            <li key={_i}>
              <Link
                href={link.href}
                className="text-xs text-gray-200 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
    </footer>
  );;;
};
