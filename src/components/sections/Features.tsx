import { FC, JSX } from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

import H2 from "components/_common/H2";
import Container from "components/_common/Container";
import FeatureItem from "components/features/FeatureItem";

const Features: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Element id="features">
      <Container className="px-4 md:px-20 py-30 flex flex-col items-center bg-[#FFEECC]">
        <div>
          <H2 className="md:mb-20 mb-10">{t("nav_item_features")}</H2>
        </div>
        <div>
          <div className="flex flex-wrap justify-center md:gap-x-20">
            {features.map((feature, i) => (
              <FeatureItem key={feature} feature={feature} i={i} />
            ))}
          </div>
        </div>
      </Container>
    </Element>
  );
};

export default Features;

const features = ["one", "two", "three"];
