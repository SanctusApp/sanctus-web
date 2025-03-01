import { FC, JSX } from "react";
import { Menu, X } from "lucide-react";

const MenuButton: FC<MenuButtonProps> = ({
  isOpen,
  setIsOpen,
}): JSX.Element => (
  <button
    className="lg:hidden text-black z-30"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <X size={40} /> : <Menu size={40} />}
  </button>
);

export default MenuButton;

interface MenuButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
