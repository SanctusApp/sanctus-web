import { Link } from "react-scroll";

const MenuItems = ({ isOpen, setIsOpen, t }: MenuItemsProps) => (
  <div
    className={`fixed top-0 right-0 w-4/5 lg:w-full h-full bg-white z-20 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${
      isOpen ? "translate-x-0" : "translate-x-full"
    } lg:static lg:translate-x-0 lg:flex lg:flex-row lg:justify-center lg:space-x-6 lg:h-auto lg:bg-transparent lg:w-auto lg:space-y-0`}
    onClick={() => setIsOpen(false)}
  >
    {menuItems.map((item) => (
      <Link
        key={item}
        to={item}
        offset={-80}
        className="cursor-pointer font-bold! text-black text-2xl lg:text-base text-center"
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          setIsOpen(false);
        }}
      >
        {t(`nav_item_${item}`)}
      </Link>
    ))}
  </div>
);

export default MenuItems;

const menuItems = ["home", "about", "features", "contact"];

interface MenuItemsProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  t: (key: string) => string;
}
