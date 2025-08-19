export type SummaryType = {
  title: string;
  // title: "total in flow" | "mrr" | "gmv" | "commission revenue";
  value: number;
  growth: number;
};

export type MonthlySalesData = {
  month: string;
  totalInflow: number;
  mrr: number;
  gmv: number;
};

export type FilteredSalesData = MonthlySalesData;
// type FilteredSalesData = MonthlySalesData | WeeklySalesData[];

export type SalesData = {
  filterId: string;
  period: string;
  summary: SummaryType[];
  data: FilteredSalesData[];
  chartKey: string;
};


export type OverviewType = {
  metrics: {
    label: string;
    value: number;
  }[];
};

export type DashboardData = {
  salesOverview: SummaryType[];
  listingsOverview: OverviewType;
  usersOverview: OverviewType;
};
