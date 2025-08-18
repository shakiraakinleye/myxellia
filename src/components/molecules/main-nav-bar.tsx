import Image from "next/image";
import logo from "@/logos/Myxellia logo.svg";
import {
  TbBellFilled,
  TbCalculatorFilled,
  TbMessage2Filled,
  TbCalendarWeekFilled,
} from "react-icons/tb";
import NavIconBtn from "../atoms/nav-icon-btn";
import UserMenuBtn from "./user-menu-btn";

const userSample = {
  firstName: "damilola",
  lastName: "akinleye",
  email: "shakiraakin@gmail.com",
  imageSrc: "",
};

const MainNavBar = () => {
  return (
    <nav className="w-full px-4 md:px-6 lg:px-8 xl:px-10 flex justify-center py-4 md:py-5 bg-secondary-background">
      <div className="w-full max-w-screen-xl flex justify-between items-center">
        <div>
          <Image src={logo} alt="brand logo" priority />
        </div>
        <div className="flex gap-x-4 xl:gap-x-6 items-center">
          <div className="flex  gap-x-4 xl:gap-x-6 items-center text-white font-playfair">
            <NavIconBtn
              icon={TbBellFilled}
              tooltip="notifications"
              disableBtn={true}
            />
            <NavIconBtn icon={TbCalculatorFilled} tooltip="budgeting" />
            <NavIconBtn icon={TbCalendarWeekFilled} tooltip="calendar" />
            <NavIconBtn icon={TbMessage2Filled} disableBtn={true} />
          </div>
          <UserMenuBtn user={userSample} />
        </div>
      </div>
    </nav>
  );
};

export default MainNavBar;
