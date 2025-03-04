import { ReactNode } from "react";

const H1 = ({ children, className = "" }: H1Props) => {
  return (
    <h1
      className={`font-bold tracking-tighter text-5xl md:text-7xl lg:text-8xl ${className}`}
    >
      {children}
    </h1>
  );
};

export default H1;

interface H1Props {
  children: ReactNode;
  className?: string;
}
