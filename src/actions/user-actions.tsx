import { DashboardData } from "@/data/dashboard";

// export const getUser = () => {
//   // Simulating a user fetch operation
//   return {
//     firstName: "Ahmed",
//     lastName: "Akinleye",
//     email: "",
//   };
// };

// export const getUserImage = () => {
//   return "https://example.com/user-image.jpg";
// };

// useIid === accountId
export const getSalesData = async (userId: string, filter: string) => {
  // const res = await fetch(
  //   `https://api.fake.com/sales?userId=${userId}&filter=${filter}`
  // );

  // if (!res.ok) {
  //   throw new Error("Network response was not ok");
  // }

  // const data = await res.json();

  // return data;
    return DashboardData.salesOverview;

};

export const getlistingsData = async (userId: string) => {
  // const res = await fetch(
  //   `https://api.fake.com/lisitngs?userId=${userId}`
  // );

  // if (!res.ok) {
  //   throw new Error("Network response was not ok");
  // }

  // const data = await res.json();

  // return data;
    return DashboardData.listingsOverview;

};

export const getUsersData = async (userId: string) => {
  // const res = await fetch(
  //   `https://api.fake.com/users?userId=${userId}`
  // );

  // if (!res.ok) {
  //   throw new Error("Network response was not ok");
  // }

  // const data = await res.json();

  // return data;
    return DashboardData.usersOverview;

};