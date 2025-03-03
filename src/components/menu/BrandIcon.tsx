import { FC, JSX } from "react";

const BrandIcon: FC = (): JSX.Element => {
  return (
    <img
      src={IMAGE_URL}
      alt="brand-icon"
      className="size-[30px] lg:size-[50px]"
    />
  );
};

export default BrandIcon;

const IMAGE_URL =
  "https://res.cloudinary.com/dplgnsjzm/image/upload/v1628852171/sanctus/ico_v2sghi.svg";
