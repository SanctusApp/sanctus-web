import { FC, JSX } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import useIsPrivacyPage from "hooks/useIsPrivacyPage";

const BrandIcon: FC = (): JSX.Element => {
  const isPrivacyPage = useIsPrivacyPage();

  return (
    <>
      {isPrivacyPage ? (
        <Link to="/" className="cursor-pointer">
          <img src={IMAGE_URL} width="50px" alt="brand-icon" />
        </Link>
      ) : (
        <LinkScroll to="home" offset={-50} className="cursor-pointer">
          <img src={IMAGE_URL} width="50px" alt="brand-icon" />
        </LinkScroll>
      )}
    </>
  );
};

export default BrandIcon;

const IMAGE_URL =
  "https://res.cloudinary.com/dplgnsjzm/image/upload/v1628852171/sanctus/ico_v2sghi.svg";
