import { motion } from "framer-motion";

import { CLOUDINARY_BASE_URL, STORE_URL } from "constants/constants";
import MotionBadge from "components/contactUs/MotionBadge";

const StoreBadges = ({ t }: StoreBadgesProps) => (
  <div className="mt-4">
    <MotionBadge
      href={STORE_URL}
      src={GOOGLE_PLAY_BADGE_URL}
      alt="Google Play Badge"
      className="block mt-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.6 }}
    />

    <motion.div
      className="opacity-30 mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 2 }}
      viewport={{ once: true }}
    >
      <img src={APP_STORE_BADGE_URL} alt="App Store Badge" className="w-40" />
      <p className="text-center mt-2">{t("contact_store_badge")}</p>
    </motion.div>
  </div>
);

export default StoreBadges;

interface StoreBadgesProps {
  t: (key: string) => string;
}

const GOOGLE_PLAY_BADGE_URL = `${CLOUDINARY_BASE_URL}v1628619914/sanctus/play_store_badge.png`;
const APP_STORE_BADGE_URL =
  "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
