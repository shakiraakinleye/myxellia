"use client";

import { Button } from "../atoms/button";
import FilterButtons from "../molecules/filter-buttons";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "@/state/sales-filter-slice";
import { RootState } from "@/state/store";
import { salesViewFilters } from "@/data/dashboard";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSalesData } from "@/actions/user-actions";
import SalesChart from "../molecules/sales-chart";
import SalesSummary from "../molecules/sales-summary";

const SalesDataDisplay = () => {
  const dispatch = useDispatch();
  const setFilter = (value: string) => {
    dispatch(changeFilter(value));
  };

  useEffect(() => {
    //   First set the default filter
    setFilter(salesViewFilters[salesViewFilters.length - 1].value);
  }, []);

  const currentFilter = useSelector(
    (state: RootState) => state.salesFilter.value
  );

  const { id } = useSelector((state: RootState) => state.user.value);
  const { isPending, error, data } = useQuery({
    queryKey: ["salesData", id, currentFilter],
    queryFn: ({ queryKey }) => {
      const [, userId, filter] = queryKey as [string, string, string];
      return getSalesData(userId, filter);
    },
  });

  return (
    <div className="w-full bg-background flex flex-col border border-border-100 rounded-2xl">
      <div className="w-full flex items-center justify-between p-5">
        <div className="flex flex-col gap-y-1.5">
          <h2 className="text-2xl font-bold mb-4">Sales Overview</h2>
          {data && (
            <p className="text-muted-100 text-xs font-normal leading-3 tracking-normal">
              Showing overview {data.period}
            </p>
          )}
        </div>
        <Button
          variant="secondary"
          className="w-44 rounded-full p-4 border !border-border-200 pointer-events-none"
        >
          <span className="font-medium text-xs leading-3 tracking-normal text-foreground">
            View Transactions
          </span>
        </Button>
      </div>

      <div className="w-full flex items-center justify-end px-5 pb-5 border-b border-border-100">
        <FilterButtons
          filters={salesViewFilters}
          currentFilter={currentFilter}
          setFilter={setFilter}
        />
      </div>
      <div className="w-full flex items-center p-5">
        {isPending && <p>Loading...</p>}
        {error && <p>Error loading sales data</p>}
        {data && (
          <>
            <div className="flex-1">
              <SalesChart salesData={data} />
            </div>
            <div className="flex-1">
              <SalesSummary summaries={data.summary} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SalesDataDisplay;
