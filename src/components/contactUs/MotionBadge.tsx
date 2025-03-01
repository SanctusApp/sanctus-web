import { FC, JSX } from "react";
import { motion, TargetAndTransition } from "framer-motion";

const MotionBadge: FC<MotionBadgeProps> = ({
  href,
  src,
  alt,
  className,
  initial,
  animate,
  transition,
  children,
}): JSX.Element => (
  <motion.a
    href={href}
    target="_blank"
    className={className}
    initial={initial}
    animate={animate}
    transition={transition}
    viewport={{ once: true }}
  >
    <img src={src} alt={alt} className="w-40" />
    {children}
  </motion.a>
);

export default MotionBadge;

interface MotionBadgeProps {
  href: string;
  src: string;
  alt: string;
  className: string;
  initial: boolean | TargetAndTransition;
  animate: boolean | TargetAndTransition;
  transition: object;
  children?: JSX.Element | JSX.Element[];
}
