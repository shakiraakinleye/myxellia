"use client";

import Link from "next/link";
import { pagesNavItemType } from "@/data/nav";
import cx from "classnames";
import { usePathname } from "next/navigation";

interface Props {
  item: pagesNavItemType;
}
const PageNavItem = ({ item }: Props) => {
  const { title, href, icon, activeIcon } = item;
  const IconComponent = icon;
  const ActiveIconComponent = activeIcon;

  const pathName = usePathname();
  const isCurrentPage = pathName === href;

  return (
    <li
      className={cx(
        "flex-1 flex items-center justify-center rounded-lg py-2 px-7 pointer-events-none",
        isCurrentPage ? "bg-neutral-100" : "bg-inherit hover:bg-neutral-50"
      )}
    >
      <Link href={href} className="flex items-center gap-x-2">
        {isCurrentPage ? (
          <ActiveIconComponent className="w-6 h-6 text-foreground" />
        ) : (
          <IconComponent className="w-6 h-6 text-muted-200" />
        )}
        <span
          className={cx(
            "text-sm tracking-normal capitalize",
            isCurrentPage ? "font-semibold text-foreground" : "text-muted-200"
          )}
        >
          {title}
        </span>
      </Link>
    </li>
  );
};

export default PageNavItem;
