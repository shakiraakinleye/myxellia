"use client";

import OverviewCard from "../molecules/overview-card";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { getlistingsData, getUsersData } from "@/actions/user-actions";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import LoadingState from "../atoms/loading-state";
import ErrorState from "../atoms/error-state";

const DashboardOverviews = () => {
  const { id } = useSelector((state: RootState) => state.user.value);
  const {
    isPending: listingsPending,
    error: listingsError,
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
    error: usersDataError,
    data: usersData,
  } = useQuery({
    queryKey: ["usersData", id],
    queryFn: ({ queryKey }) => {
      const [, userId] = queryKey as [string, string];
      return getUsersData(userId);
    },
  });

  return (
    <div className="h-full grid grid-rows-[1fr_1fr] gap-y-5 shrink-0">
      {/* lisitngs */}
      {listingsPending && <LoadingState />}
      {listingsError && <ErrorState message={listingsError.message} />}
      {listingsData && (
        <OverviewCard
          cardTitle="lisitings overview"
          cardIcon={IoHomeOutline}
          href="/listings"
          data={listingsData}
        />
      )}
      {/* users */}
      {usersDataPending && <LoadingState />}
      {usersDataError && <ErrorState message={usersDataError.message} />}
      {usersData && (
        <OverviewCard
          cardTitle="users overview"
          cardIcon={FaRegUser}
          href="/users"
          data={usersData}
        />
      )}
    </div>
  );
};

export default DashboardOverviews;
