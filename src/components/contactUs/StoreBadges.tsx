import { motion } from "framer-motion";

import { STORE_URL } from "utils/utils";
import MotionBadge from "components/contactUs/MotionBadge";

const StoreBadges = ({ t }: StoreBadgesProps) => (
  <div className="mt-4">
    <MotionBadge
      href={STORE_URL}
      src="https://res.cloudinary.com/dplgnsjzm/image/upload/v1628619914/sanctus/play_store_badge.png"
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
      <img
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
        alt="App Store Badge"
        className="w-40"
      />
      <p className="text-center mt-2">{t("contact_store_badge")}</p>
    </motion.div>
  </div>
);

interface StoreBadgesProps {
  t: (key: string) => string;
}

export default StoreBadges;
