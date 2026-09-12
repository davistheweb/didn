import type React from "react";
import { programs } from "@/data/programs";
import { ProgramSection } from "./ProgramSection";

export const ProgramsFocusAreas: React.FC = () => {
  return (
    <section
      id="programs"
      className="flex w-full scroll-mt-24 flex-col lg:scroll-mt-32"
    >
      {programs.map((program, index) => (
        <div key={program.id} className="border-t border-gray-200">
          <ProgramSection program={program} index={index} />
        </div>
      ))}
    </section>
  );
};
