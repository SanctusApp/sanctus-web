import { FC, JSX } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import H2 from "components/_common/H2";

const AboutText: FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="w-full md:w-1/2 flex items-center px-4 md:px-20 pt-20 md:pb-20 lg:py-30"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <div>
        <H2>{t("nav_item_about")}</H2>
        <p className="text-lg">{t("about_text")}</p>
      </div>
    </motion.div>
  );
};

export default AboutText;
