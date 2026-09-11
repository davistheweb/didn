import Link from "next/link";
import React from "react";

interface FooterColumnProps {
  column: IFooterColumn;
}

export const FooterColumn: React.FC<FooterColumnProps> = ({ column }) => {
  const { title, groups } = column;

  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-xs font-semibold tracking-widest text-white/70 uppercase">
        {title}
      </h4>

      <div className="flex flex-col gap-6 sm:flex-row lg:flex-col lg:gap-6">
        {groups.map((group, _i) => (
          <div
            key={_i}
            className="flex flex-col gap-3"
          >
            {group.heading && (
              <span className="text-sm text-white/60">{group.heading}</span>
            )}

            <ul className="flex flex-col gap-3">
              {group.links.map((link, _j) => (
                <li key={_j}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
