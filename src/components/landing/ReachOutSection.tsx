import Link from "next/link";
import { nunitoFont, rubikFont } from "@/lib/font";
import { Headline } from "../ui/Headline";

export const ReachOutSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 px-8 py-10">
      <div>
        <Headline heading="/ Reach Out" title="LET'S MAKE AN IMPACT TOGETHER" />
      </div>
      <div
        className="flex items-center justify-center"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="md:w-165.2 bg-custom-green flex h-fit w-87.5 flex-col rounded-2xl sm:w-125 md:flex-row lg:w-250 xl:w-304">
          <div className="flex flex-col gap-4 px-8 py-8 md:px-20 md:py-20">
            <h3 className={`${rubikFont.className} text-white`}>
              Be Part of the Change
            </h3>

            <p className={`text-white lg:w-2xl ${nunitoFont.className}`}>
              Meaningful change begins when people come together. Whether you
              want to partner with us, volunteer your time, or learn more about
              our work, there’s a place for you in the DIDN community.
            </p>
            <div className="flex flex-col gap-4 lg:flex-row">
              <Link
                href="/contact"
                className="bg-custom-blue w-fit rounded-xl px-8 py-4.5 text-white md:px-12"
                data-aos="fade"
                data-aos-delay="250"
              >
                Get Involved
              </Link>
              <a
                href="tel:"
                className="w-fit rounded-xl border border-[#87A0CD] px-4 py-4.5 text-white md:px-12"
                data-aos="fade"
                data-aos-delay="350"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div
            className="bg-reachout hidden w-[405.55px] rounded-lg bg-[#1B365D]/90 lg:flex"
            data-aos="fade"
            data-aos-delay="300"
          ></div>
        </div>
      </div>
    </section>
  );
};
