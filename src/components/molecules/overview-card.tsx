import Link from "next/link";
import { IconType } from "react-icons";
import { IoIosArrowForward } from "react-icons/io";
import { OverviewType } from "@/types/dashboard";
import { formatK } from "@/utils/number-formatter";

interface CardProps {
  cardTitle: string;
  cardIcon: IconType;
  href: string;
  data: OverviewType;
}
const OverviewCard = ({ cardTitle, cardIcon, href, data }: CardProps) => {
  const IconComponent = cardIcon;
  const metrics = data.metrics;
  return (
    <div className="bg-background border border-border-100 rounded-2xl overflow-hidden">
      <div className="bg-gray-50 border-b border-border-100 flex justify-between gap-1 p-4">
        <div className="flex gap-2.5 items-center">
          <IconComponent className="w-6 h-6 stroke-chart-blue text-chart-blue" />
          <h6 className="text-sm font-medium leading-4 tracking-normal text-muted-400 capitalize">
            {cardTitle}
          </h6>
        </div>
        <Link
          href={href}
          className="pointer-events-none flex items-center gap-0.5 font-medium text-xs leading-3 tracking-normal text-chart-blue"
        >
          <span>View all</span>
          <IoIosArrowForward className="stroke-chart-blue w-4 h-4" />
        </Link>
      </div>

      <div className="p-4 flex items-center justify-between">
        {metrics.map((metric, index) => {
          const { label, value } = metric;
          const formttedValue = formatK(value);
          return (
            <p key={index} className="flex flex-col items-start gap-y-2">
              <span className="text-sm font-medium leading-5 tracking-normal text-neutral-600">
                {label}
              </span>
              <span className="text-dark-100 font-semibold text-2xl leading-10 tracking-normal">
                {formttedValue}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewCard;
