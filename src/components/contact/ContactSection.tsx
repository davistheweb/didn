import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { Headline } from "@/components/ui/Headline";
import { socialLinks } from "@/data";
import { contactEmails, contactPhone, officeLocation } from "@/data/contact";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";
import { ContactForm } from "./ContactForm";

export const ContactSection: React.FC = () => {
  return (
    <section
      id="get-in-touch"
      className="flex w-full scroll-mt-24 flex-col gap-10 px-8 py-15 lg:py-20"
    >
      <Headline heading="02 / Contact Us" title="Reach Us Directly" />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col lg:col-span-5">
          <div className="flex flex-col divide-y divide-gray-200 border-y border-gray-200">
            <div className="flex gap-5 py-7">
              <span className="bg-custom-blue/10 text-custom-blue flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                <Phone size={18} />
              </span>
              <div className="flex flex-col gap-1">
                <span
                  className={`${nunitoFont.className} text-xs font-semibold tracking-widest text-gray-400 uppercase`}
                >
                  Phone
                </span>
                <span
                  className={`${nunitoFont.className} text-xs text-gray-400`}
                >
                  {contactPhone.note}
                </span>
                <a
                  href={contactPhone.href}
                  className={`${rubikFont.className} text-custom-blue w-fit font-medium hover:underline`}
                >
                  {contactPhone.label}
                </a>
              </div>
            </div>

            <div className="flex gap-5 py-7">
              <span className="bg-custom-blue/10 text-custom-blue flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                <Mail size={18} />
              </span>
              <div className="flex flex-col gap-1">
                <span
                  className={`${nunitoFont.className} text-xs font-semibold tracking-widest text-gray-400 uppercase`}
                >
                  Email
                </span>
                {contactEmails.map((email, _i) => (
                  <div key={_i} className="flex flex-col gap-1">
                    <span
                      className={`${nunitoFont.className} text-xs text-gray-400`}
                    >
                      {email.note}
                    </span>
                    <a
                      href={email.href}
                      className={`${rubikFont.className} text-custom-blue w-fit font-medium hover:underline`}
                    >
                      {email.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-5 py-7">
              <span className="bg-custom-blue/10 text-custom-blue flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                <MapPin size={18} />
              </span>
              <div className="flex flex-col gap-1">
                <span
                  className={`${nunitoFont.className} text-xs font-semibold tracking-widest text-gray-400 uppercase`}
                >
                  Office Address
                </span>
                <p
                  className={`${poppinsFont.className} text-sm leading-relaxed text-[#1a1a1a]`}
                >
                  {officeLocation.line1}
                  <br />
                  {officeLocation.line2}
                </p>
                <a
                  href={officeLocation.directionHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${rubikFont.className} text-custom-blue flex w-fit items-center gap-1 font-medium hover:underline`}
                >
                  Get Directions <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-8">
            <span
              className={`${nunitoFont.className} text-xs font-semibold tracking-widest text-gray-400 uppercase`}
            >
              Follow DIDN
            </span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, _i) => (
                <Link
                  key={_i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-custom-blue flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity duration-200 hover:opacity-80"
                >
                  <social.icon className="h-4 w-4" strokeWidth={2} />
                </Link>
              ))}
            </div>
            <p
              className={`${poppinsFont.className} max-w-sm text-sm leading-relaxed text-gray-500`}
            >
              Stay up to date with our initiatives, projects, and community
              stories.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
