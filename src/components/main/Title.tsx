import { FC, JSX } from "react";
import { motion } from "framer-motion";

import H1 from "components/_common/H1";

const Title: FC = (): JSX.Element => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <H1>Sanctus</H1>
  </motion.div>
);

export default Title;
