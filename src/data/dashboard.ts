
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


export const DashboardData = {
  "salesOverview": {
    "filterId": "year",
    "period": "Jan 2022 - Sep 2022",
    "summary": [
        {
        "title": "total in flow",
        "value": 120000000,
        "growth": 2.5
        },
        {
        "title": "mrr",
        "value": 50000000,
        "growth": 2.5
        },
        {
        "title": "commission revenue",
        "value": 200000000,
        "growth": 0.5
        },
        {
        "title": "gmv",
        "value": 100000000,
        "growth": -0.5
        },
    ],
    "data": [
      { "month": "Jan", "totalInflow": 32000000, "mrr": 12000000, "gmv": 8000000,},
      { "month": "Feb", "totalInflow": 10000000, "mrr": 28000000, "gmv": 6000000, },
      { "month": "Mar", "totalInflow": 24000000, "mrr": 14000000, "gmv": 4000000, },
      { "month": "Apr", "totalInflow": 8000000, "mrr": 22000000, "gmv": 3000000, },
      { "month": "May", "totalInflow": 7000000, "mrr": 10000000, "gmv": 2000000, },
      { "month": "Jun", "totalInflow": 32000000, "mrr": 50000000, "gmv": 9000000, },
      { "month": "Jul", "totalInflow": 28000000, "mrr": 38000000, "gmv": 15000000,  },
      { "month": "Aug", "totalInflow": 22000000, "mrr": 26000000, "gmv": 14000000, },
      { "month": "Sep", "totalInflow": 26000000, "mrr": 18000000, "gmv": 12000000, }
    ],
    "chartKey": "month"
  },
  "listingsOverview": {
    "metrics": [
      { "label": "Total", "value": 1800 },
      { "label": "Active", "value": 80 },
      { "label": "Archived", "value": 1000 }
    ]
  },
  "usersOverview": {
    "metrics": [
      { "label": "Total", "value": 20700 },
      { "label": "Riders", "value": 8500 },
      { "label": "Subscribers", "value": 7500 }
    ]
  }
}
