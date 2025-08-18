import Image from "next/image";
import header from "@/images/budget-header.svg";
import { IconType } from "react-icons";
import { budgetMenuItems } from "@/data/nav";
import { Button } from "@chakra-ui/react";

const ListItem = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: IconType;
}) => {
  const IconComponent = icon;

  return (
    <li className="flex gap-x-3 items-center">
      <IconComponent className="text-zinc-600 w-6 h-6" />
      <div className="flex flex-col gap-y-1">
        <h3 className="text-base font-semibold text-foreground tracking-normal leading-5">
          {title}
        </h3>
        <p className="text-xs text-muted-100 tracking-normal leading-4">
          {description}
        </p>
      </div>
    </li>
  );
};

const BudgetModalContent = () => {
  return (
    <div className="min-w-[438px] max-w-[438px] rounded-lg bg-background pb-6 px-0 flex flex-col gap-y-6">
      <div className="w-full">
        <Image
          src={header}
          alt="budget header"
          className="w-full object-fill rounded-t-lg"
        />
      </div>

      <div className="w-full px-12 space-y-6">
        <ul className="w-ful flex flex-col gap-y-6">
          {budgetMenuItems.map((item, index) => (
            <ListItem
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </ul>
        <Button className="w-full rounded-full h-12 flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 transition-colors">
          <span className="text-secondary-foreground font-semibold text-base leading-6">
            Create Budget
          </span>
        </Button>
      </div>
    </div>
  );
};
export default BudgetModalContent;
