import { IconType } from "react-icons";
import {
  TbBellFilled,
  TbCalculatorFilled,
  TbMessage2Filled,
  TbCalendarWeekFilled,
} from "react-icons/tb";
import { RiContactsFill, RiShieldCheckFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";
import { Url } from "next/dist/shared/lib/router/router";

export interface NavItemProps {
  title: string;
  icon: IconType;
  disabled?: boolean;
  onClick?: () => void;
}

export const mainNavItems: NavItemProps[] = [
  {
    title: "notifications",
    icon: TbBellFilled,
    disabled: true,
    onClick: () => {
      console.log("Notifications clicked");
    }
  },
  {
    title: "budgeting",
    icon: TbCalculatorFilled,
    disabled: false,
     onClick: () => {
      console.log("Budgeting clicked");
    }
  },
  {
    title: "calendar",
    icon: TbCalendarWeekFilled,
    disabled: false,
     onClick: () => {
      console.log("calendar clicked");
    }
  },
  {
    title: "messages",
    icon: TbMessage2Filled,
    disabled: true,
     onClick: () => {
      console.log("Messages clicked");
    }
  },
];

export interface MenuItemProps extends NavItemProps {
  href: Url;
}

// export interface MenuItemProps {
//   title: string;
//   href?: string | undefined;
//   icon: IconType;
//   disabled?: boolean;
// }

export const menuItems: MenuItemProps[] = [
  {
    title: "teams",
    icon: BsFillPeopleFill,
    href: "",
  },
  {
    title: "contact persons",
    icon: RiContactsFill,
    href: "",
  },
  {
    title: "change password",
    icon: MdLock,
    href: "",
  },
  {
    title: "2 - factor authentication",
    icon: RiShieldCheckFill,
    href: "",
  },
];
