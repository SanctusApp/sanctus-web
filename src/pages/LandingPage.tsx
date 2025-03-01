import { FC, JSX } from "react";

import Main from "components/sections/Main";
import AboutUs from "components/sections/AboutUs";
import Features from "components/sections/Features";
import ContactUs from "components/sections/ContactUs";

const LandingPage: FC = (): JSX.Element => {
  return (
    <>
      <Main />
      <AboutUs />
      <Features />
      <ContactUs />
    </>
  );
};

export default LandingPage;
