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
      <Container className="flex flex-col items-center bg-[#FFEECC]">
        <div>
          <H2>{t("nav_item_features")}</H2>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 md:gap-x-20 justify-items-center">
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
