"use client";

import cx from "classnames";
import { Button } from "@chakra-ui/react";

type Filter = {
  label: string;
  value: string;
};
interface Props {
  filters: Filter[];
  currentFilter: Filter["value"] | null;
  setFilter: (value: Filter["value"]) => void;
}

const FilterButtons = ({ filters, currentFilter, setFilter }: Props) => {
  const clickHandler = (value: string) => {
    setFilter(value);
    // console.log(`Filter changed to: ${value}`);
  };

  return (
    <div className="flex items-center gap-x-3">
      {filters.map(({ label, value }) => (
        <Button
          key={value}
          onClick={() => clickHandler(value)}
          className={cx(
            "bg-inherit px-4 py-2 rounded-lg border border-transparent text-muted-200 text-sm leading-4 tracking-normal transition hover:bg-neutral-100",
            currentFilter === value
              ? "bg-neutral-100 font-semibold"
              : "bg-inherit font-normal"
          )}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
