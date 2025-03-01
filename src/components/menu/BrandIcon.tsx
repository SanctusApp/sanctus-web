import { FC, JSX } from "react";
import { Link } from "react-scroll";

const BrandIcon: FC = (): JSX.Element => (
  <Link to="home" offset={-50} className="cursor-pointer">
    <img
      src="https://res.cloudinary.com/dplgnsjzm/image/upload/v1628852171/sanctus/ico_v2sghi.svg"
      width="50px"
      alt="brand-icon"
    />
  </Link>
);

export default BrandIcon;
