import { FC, JSX } from "react";

const Container: FC<ContainerProps> = ({
  children,
  className,
}): JSX.Element => {
  return <div className={`py-20 lg:py-30 px-4 md:px-20 ${className}`}>{children}</div>;
};

export default Container;

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
