"use client";

import Image from "next/image";
import logo from "@/logos/Myxellia logo.svg";
import NavIconBtn from "../atoms/nav-icon-btn";
import UserMenuBtn from "../molecules/user-menu-btn";
import { mainNavItems } from "@/data/nav";
import { useDispatch } from "react-redux";
import { toggleBudgetModal } from "@/state/budget-modal-slice";
import BudgetModal from "../molecules/budget-modal";

const MainNavBar = () => {
  const dispatch = useDispatch();
  const handleBudgetClick = () => {
    dispatch(toggleBudgetModal());
  };

  return (
    <>
      <nav className="w-full px-4 md:px-6 lg:px-8 xl:px-10 flex justify-center py-4 md:py-5 bg-secondary-background">
        <div className="w-full max-w-screen-xl flex justify-between items-center">
          <div>
            <Image src={logo} alt="brand logo" priority />
          </div>
          <div className="flex gap-x-4 xl:gap-x-6 items-center">
            <div className="flex  gap-x-4 xl:gap-x-6 items-center text-white font-playfair">
              {mainNavItems.map((item, index) => {
                const { icon, title, disabled, onClick } = item;
                // For budgeting nav button, use the onClick from the item directly
                if (title === "budgeting") {
                  return (
                    <NavIconBtn
                      key={index}
                      icon={icon}
                      tooltip={title}
                      disabled={disabled}
                      onClick={handleBudgetClick}
                    />
                  );
                }
                // For other nav buttons, use the onClick from the item directly
                else
                  return (
                    <NavIconBtn
                      key={index}
                      icon={icon}
                      tooltip={title}
                      disabled={disabled}
                      onClick={onClick}
                    />
                  );
              })}
            </div>
            <UserMenuBtn />
          </div>
        </div>
      </nav>
      <BudgetModal />
    </>
  );
};

export default MainNavBar;
