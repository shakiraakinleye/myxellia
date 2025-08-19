"use client";

import DashboardUser from "../molecules/dashboard-user";
import SalesOverviewDisplay from "./sales-overview";

const Dashboard = () => {
  return (
    <div className="w-full max-w-screen-xl flex flex-col justify-start py-4 gap-y-6 border border-red-600">
      <DashboardUser />
      {/* put the overviews here */}
      <div className="flex justify-between gap-x-5">
        <SalesOverviewDisplay />
        <div className="flex-1 flex flex-col">{/* other overviews */}</div>
      </div>
    </div>
  );
};

export default Dashboard;
