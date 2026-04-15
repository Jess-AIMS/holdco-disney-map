"use client";

import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  wide?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  wide = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div
        className={`mx-auto ${wide ? "max-w-[1400px]" : "max-w-[1100px]"}`}
      >
        {children}
      </div>
    </section>
  );
}
