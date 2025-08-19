import DashboardUser from "../molecules/dashboard-user";
import SalesDataDisplay from "./sales-data-display";
import DashboardOverviews from "./overviews";

const Dashboard = () => {
  return (
    <div className="w-full max-w-screen-xl flex flex-col justify-start gap-y-6">
      <DashboardUser />

      <div className="grid grid-cols-3 gap-5 justify-between">
        <div className="col-span-2">
          <SalesDataDisplay />
        </div>
        <div className="col-span-1">
          <DashboardOverviews />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
