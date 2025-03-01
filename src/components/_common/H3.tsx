import React, { JSX, ReactNode } from "react";

const H3: React.FC<H3Props> = ({ children, className = "" }): JSX.Element => {
  return (
    <h2 className={`font-semibold text-xl lg:text-2xl ${className}`}>
      {children}
    </h2>
  );
};

export default H3;

interface H3Props {
  children: ReactNode;
  className?: string;
}
