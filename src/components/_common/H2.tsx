import React, { JSX, ReactNode } from "react";

const H2: React.FC<H2Props> = ({ children, className = "" }): JSX.Element => {
  return (
    <h2 className={`font-bold text-2xl md:text-3xl lg:text-4xl ${className}`}>
      {children}
    </h2>
  );
};

export default H2;

interface H2Props {
  children: ReactNode;
  className?: string;
}
