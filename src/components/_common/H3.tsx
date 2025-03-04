import { ReactNode } from "react";

const H3 = ({ children, className = "" }: H3Props) => {
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
