import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import H3 from "components/_common/H3";
import { cloudinaryUrl } from "utils/utils";

const FeatureItem = ({ feature, i }: FeatureItemProps) => {
  const { t } = useTranslation();
  return (
    <motion.div
      key={feature}
      className="w-full flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 0.1 * i,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="circle flex justify-center items-center w-32 h-32 rounded-full bg-white shadow-md mb-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src={`${cloudinaryUrl}v1628619914/sanctus/feature-${feature}.svg`}
          alt={`feature-${feature}-icon`}
          className="w-20 h-20"
        />
      </motion.div>
      <H3>{t(`features_${feature}_title`)}</H3>
      <p className="mt-4 text-lg">{t(`features_${feature}_text`)}</p>
    </motion.div>
  );
};

export default FeatureItem;

interface FeatureItemProps {
  feature: string;
  i: number;
}
