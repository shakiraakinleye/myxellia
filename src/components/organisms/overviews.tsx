"use client";

import OverviewCard from "../molecules/overview-card";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { getlistingsData, getUsersData } from "@/actions/user-actions";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const DashboardOverviews = () => {
  const { id } = useSelector((state: RootState) => state.user.value);
  const {
    isPending: listingsPending,
    // error: listingsError,
    data: listingsData,
  } = useQuery({
    queryKey: ["listingsData", id],
    queryFn: ({ queryKey }) => {
      const [, userId] = queryKey as [string, string];
      return getlistingsData(userId);
    },
  });
  const {
    isPending: usersDataPending,
    // error: usersDataError,
    data: usersData,
  } = useQuery({
    queryKey: ["usersData", id],
    queryFn: ({ queryKey }) => {
      const [, userId] = queryKey as [string, string];
      return getUsersData(userId);
    },
  });

  return (
    <div className="h-full flex flex-col justify-between gap-y-5 shrink-0">
      {/* lisitngs */}
      {listingsPending && <p>Loading...</p>}
      {listingsData && (
        <OverviewCard
          cardTitle="lisitings overview"
          cardIcon={IoHomeOutline}
          href="/listings"
          data={listingsData}
        />
      )}
      {/* users */}
      {usersDataPending && <p>Loading...</p>}
      {usersData && (
        <OverviewCard
          cardTitle="users overview"
          cardIcon={FaRegUser}
          href="/users"
          data={usersData}
        />
      )}{" "}
    </div>
  );
};

export default DashboardOverviews;
