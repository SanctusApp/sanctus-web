import { FC, JSX } from "react";
import { motion } from "framer-motion";

import Button from "components/_common/Button";
import { STORE_URL } from "utils/utils";

const MainButton: FC<MainButtonProps> = ({ t }): JSX.Element => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    <Button
      variant="primary"
      onClick={() => {
        window.open(STORE_URL, "_blank");
      }}
    >
      {t("main_btn")}
    </Button>
  </motion.div>
);

export default MainButton;

interface MainButtonProps {
  t: (key: string) => string;
}
