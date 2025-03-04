import { motion } from "framer-motion";

import { cloudinaryUrl } from "utils/utils";

const AboutImage = () => (
  <motion.div
    className="w-full md:w-1/2 flex items-end"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 5 }}
    viewport={{ once: true }}
  >
    <img src={IMAGE_URL} alt="hands-icon" className="w-3/4" />
  </motion.div>
);

export default AboutImage;

const IMAGE_URL = `${cloudinaryUrl}v1628780787/sanctus/about-img.svg`;
