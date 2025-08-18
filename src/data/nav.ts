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
import { VscSettings } from "react-icons/vsc";
import { LuTrendingUp } from "react-icons/lu";
import { PiChartBarLight } from "react-icons/pi";


// MAIN NAVIGATION ITEMS
export interface NavItemProps {
  title: string;
  icon: IconType;
  disabled?: boolean;
  onClick: () => void;
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


// USER MENU ITEMS
export interface UserMenuItemProps {
  title: string;
  href: Url;
  icon: IconType;
  disabled?: boolean;
}

export const userMenuItems: UserMenuItemProps[] = [
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

// BUDGET MENU ITEMS
export const budgetMenuItems = [
  {
    title: "Set up annual budgets by account category",
    description:
      "Allocate funds across income and expense lines with full visibility.",
    icon: VscSettings,
  },
  {
    title: "Track actuals vs budget in real time",
    description:
      "See how your community is performing against plan, month by month.",
    icon: LuTrendingUp,
  },
  {
    title: "Adjust figures and forecast with ease",
    description:
      "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.",
    icon: PiChartBarLight,
  },
];

