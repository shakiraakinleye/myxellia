"use client";

import { pagesNavItems } from "@/data/nav";
import PageNavItem from "../atoms/page-nav-item";
import SearchBox from "../atoms/search-box";

const PagesNavBar = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 xl:px-10 flex justify-center py-3 md:py-4 bg-background">
      <div className="w-full max-w-screen-xl flex justify-between items-center">
        {/* Pages list */}
        <ul className="w-full flex justify-between items-center gap-4">
          {pagesNavItems.map((item, index) => (
            <PageNavItem key={index} item={item} />
          ))}
        </ul>

        {/* search box */}
        <SearchBox placeholder="Search listings, users here..." />
      </div>
    </div>
  );
};

export default PagesNavBar;
