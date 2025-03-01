import { FC, JSX } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const SocialIcons: FC = (): JSX.Element => (
  <motion.div
    className="flex gap-6 mt-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1.4 }}
    viewport={{ once: true }}
  >
    <SocialIcon url="https://www.instagram.com/sanctusapp/" />
    <SocialIcon url="https://www.facebook.com/Sanctus-B%C3%ADblia-Liturgia-Ter%C3%A7os-e-Ora%C3%A7%C3%B5es-106478487553539" />
  </motion.div>
);

export default SocialIcons;
