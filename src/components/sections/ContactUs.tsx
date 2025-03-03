import { FC } from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

import H2 from "components/_common/H2";
import Container from "components/_common/Container";
import StoreBadges from "components/contactUs/StoreBadges";
import ContactEmail from "components/contactUs/ContactEmail";
import SocialIcons from "components/contactUs/SocialIcons";

const ContactUs: FC = () => {
  const { t } = useTranslation();

  return (
    <Element id="contact">
      <Container className="bg-[#CCDCEC] flex flex-col items-center text-center">
        <H2>{t("nav_item_contact")}</H2>
        <ContactEmail />
        <SocialIcons />
        <StoreBadges t={t} />
      </Container>
    </Element>
  );
};

export default ContactUs;
