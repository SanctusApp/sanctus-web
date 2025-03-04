import { ReactNode } from "react";

const H2 = ({ children, className = "" }: H2Props) => {
  return (
    <h2
      className={`font-bold text-2xl md:text-3xl lg:text-4xl mb-8 lg:mb-12 ${className}`}
    >
      {children}
    </h2>
  );
};

export default H2;

interface H2Props {
  children: ReactNode;
  className?: string;
}
