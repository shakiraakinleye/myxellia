
export const userData = {
  firstName: "Ahmed",
  lastName: "Akinleye",
  email: "ahmedakinleye@gmail.com",
  // imageSrc: "https://example.com/profile.jpg",
};


// DASHBOARD FILTERS
export const salesViewFilters = [
  { label: "1 Week", value: "week" },
  { label: "1 Month", value: "month" },
  { label: "1 Year", value: "year" },
] ;


export const salesData = {
  "salesOverview": {
    "filterId": "year",
    "period": "Jan 2022 - Sep 2022",
    "summary": {
      "totalInflow": { "value": 120000000, "growth": 2.5 },
      "mrr": { "value": 50000000, "growth": 2.5 },
      "gmv": { "value": 100000000, "growth": -0.5 },
      "commissionRevenue": { "value": 200000000, "growth": 0.5 }
    },
    "monthlyData": [
      { "month": "Jan", "totalInflow": 32000000, "mrr": 12000000, "gmv": 8000000, "commissionRevenue": 20000000 },
      { "month": "Feb", "totalInflow": 10000000, "mrr": 28000000, "gmv": 6000000, "commissionRevenue": 22000000 },
      { "month": "Mar", "totalInflow": 24000000, "mrr": 14000000, "gmv": 4000000, "commissionRevenue": 18000000 },
      { "month": "Apr", "totalInflow": 8000000, "mrr": 22000000, "gmv": 3000000, "commissionRevenue": 16000000 },
      { "month": "May", "totalInflow": 7000000, "mrr": 10000000, "gmv": 2000000, "commissionRevenue": 14000000 },
      { "month": "Jun", "totalInflow": 32000000, "mrr": 50000000, "gmv": 9000000, "commissionRevenue": 30000000 },
      { "month": "Jul", "totalInflow": 28000000, "mrr": 38000000, "gmv": 15000000, "commissionRevenue": 25000000 },
      { "month": "Aug", "totalInflow": 22000000, "mrr": 26000000, "gmv": 14000000, "commissionRevenue": 28000000 },
      { "month": "Sep", "totalInflow": 26000000, "mrr": 18000000, "gmv": 12000000, "commissionRevenue": 32000000 }
    ]
  }
}

// export const salesData = {
//   "salesOverview": {
//     "filterId": "year",
//     "period": "Jan 2022 - Sep 2022",
//     "summary": {
//       "totalInflow": { "value": 120000000, "growth": 2.5, "color": "blue" },
//       "mrr": { "value": 50000000, "growth": 2.5, "color": "green" },
//       "gmv": { "value": 100000000, "growth": -0.5, "color": "red" },
//       "commissionRevenue": { "value": 200000000, "growth": 0.5, "color": "green" }
//     },
//     "monthlyData": [
//       { "month": "Jan", "totalInflow": 32000000, "mrr": 12000000, "gmv": 8000000, "commissionRevenue": 20000000 },
//       { "month": "Feb", "totalInflow": 10000000, "mrr": 28000000, "gmv": 6000000, "commissionRevenue": 22000000 },
//       { "month": "Mar", "totalInflow": 24000000, "mrr": 14000000, "gmv": 4000000, "commissionRevenue": 18000000 },
//       { "month": "Apr", "totalInflow": 8000000, "mrr": 22000000, "gmv": 3000000, "commissionRevenue": 16000000 },
//       { "month": "May", "totalInflow": 7000000, "mrr": 10000000, "gmv": 2000000, "commissionRevenue": 14000000 },
//       { "month": "Jun", "totalInflow": 32000000, "mrr": 50000000, "gmv": 9000000, "commissionRevenue": 30000000 },
//       { "month": "Jul", "totalInflow": 28000000, "mrr": 38000000, "gmv": 15000000, "commissionRevenue": 25000000 },
//       { "month": "Aug", "totalInflow": 22000000, "mrr": 26000000, "gmv": 14000000, "commissionRevenue": 28000000 },
//       { "month": "Sep", "totalInflow": 26000000, "mrr": 18000000, "gmv": 12000000, "commissionRevenue": 32000000 }
//     ]
//   }
// }