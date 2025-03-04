import { motion } from "framer-motion";
import { CLOUDINARY_BASE_URL } from "constants/constants";

const MainImage = ({ t }: MainImageProps) => (
  <motion.img
    src={IMAGE_URL}
    alt={t("cross_mountain_alt")}
    loading="lazy"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  />
);

export default MainImage;

interface MainImageProps {
  t: (key: string) => string;
}

const IMAGE_URL = `${CLOUDINARY_BASE_URL}v1628780787/sanctus/main-img.svg`;
