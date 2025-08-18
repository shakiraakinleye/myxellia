import { IconType } from "react-icons";
import { RiContactsFill, RiShieldCheckFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";

export interface MenuItemProps {
  title: string;
  href?: string | undefined;
  icon: IconType;
  disabled?: boolean;
}

export const menuItems: MenuItemProps[] = [
  {
    title: "teams",
    icon: BsFillPeopleFill,
    href: undefined,
  },
  {
    title: "contact persons",
    icon: RiContactsFill,
    href: undefined,
  },
  {
    title: "change password",
    icon: MdLock,
    href: undefined,
  },
  {
    title: "2 - factor authentication",
    icon: RiShieldCheckFill,
    href: undefined,
  },
];
