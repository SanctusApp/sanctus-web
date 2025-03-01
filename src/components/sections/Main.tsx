import { FC, JSX } from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

import Container from "components/_common/Container";
import Title from "components/main/Title";
import MainButton from "components/main/MainButton";
import MainImage from "components/main/MainImage";

const Main: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Element id="home">
      <Container className="bg-brand-light flex flex-col w-full h-screen items-center justify-center gap-y-14">
        <Title />
        <MainButton t={t} />
        <MainImage t={t} />
      </Container>
    </Element>
  );
};

export default Main;
