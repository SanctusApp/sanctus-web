import { FC, JSX } from "react";
import { Element } from "react-scroll";

import Container from "components/_common/Container";
import AboutImage from "components/aboutUs/AboutImage";
import AboutText from "components/aboutUs/AboutText";

const AboutUs: FC = (): JSX.Element => {
  return (
    <Element id={"about"}>
      <Container className="container ml-0 pl-0 md:px-20 py-30">
        <div className="flex flex-wrap min-h-[400px]">
          <AboutImage />
          <AboutText />
        </div>
      </Container>
    </Element>
  );
};

export default AboutUs;
