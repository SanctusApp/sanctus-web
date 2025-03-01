import { FC, JSX } from "react";

const Container: FC<ContainerProps> = ({
  children,
  className,
}): JSX.Element => {
  return <div className={`${className}`}>{children}</div>;
};

export default Container;

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
