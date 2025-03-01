import { FC, JSX } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import H2 from "components/_common/H2";

const AboutText: FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="w-full md:w-1/2 flex items-center mt-4 mx-5 md:mx-0"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <div className="pl-3">
        <H2 className="text-2xl font-bold">{t("nav_item_about")}</H2>
        <p className="mt-4 text-lg">{t("about_text")}</p>
      </div>
    </motion.div>
  );
};

export default AboutText;
