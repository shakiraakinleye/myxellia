"use client";

import { pagesNavItems } from "@/data/nav";
import PageNavItem from "../atoms/page-nav-item";

const PagesNavBar = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 xl:px-10 flex justify-center py-3 md:py-4 bg-background">
      <div className="w-full max-w-screen-xl flex justify-between items-center border border-red-600">
        {/* Pages list */}
        <ul className="w-full flex justify-between items-center gap-4">
          {pagesNavItems.map((item, index) => (
            <PageNavItem key={index} item={item} />
          ))}
        </ul>

        {/* search bar */}
        <div></div>
      </div>
    </div>
  );
};

export default PagesNavBar;
