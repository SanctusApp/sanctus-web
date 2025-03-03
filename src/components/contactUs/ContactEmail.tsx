import { FC, JSX } from "react";
import { motion } from "framer-motion";

import { contactEmail } from "utils/utils";

const ContactEmail: FC = (): JSX.Element => (
  <motion.a
    href={contactEmail}
    className="text-lg text-blue-600 hover:underline"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
    viewport={{ once: true }}
  >
    include.add@gmail.com
  </motion.a>
);

export default ContactEmail;
