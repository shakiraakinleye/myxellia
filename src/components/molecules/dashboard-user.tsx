"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const DashboardUser = () => {
  const user = useSelector((state: RootState) => state.user.value);

  return (
    <h1 className="capitalize text-foreground text-xl leading-5 tracking-normal font-semibold">
      Welcome {user.firstName}
    </h1>
  );
};

export default DashboardUser;
