"use client";

import { Chart, useChart } from "@chakra-ui/charts";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { SalesData, FilteredSalesData } from "@/types/dashboard";

const SalesChart = ({ salesData }: { salesData: SalesData }) => {
  const key = salesData.chartKey;
  const data = salesData.data;
  const chart = useChart({
    data,
    series: [
      { name: "totalInflow", color: "blue.600" },
      { name: "gmv", color: "green.600" },
      { name: "mrr", color: "red.600" },
    ],
  });

  return (
    <Chart.Root maxH={160} chart={chart}>
      <BarChart data={chart.data}>
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key(key as keyof FilteredSalesData)}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          width={50}
          stroke={chart.color("gray.300")}
          tickFormatter={(value: number) => `${value / 1_000_000}m`}
        />
        {chart.series.map((item) => (
          <Bar
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            stroke={chart.color(item.color)}
            stackId={item.stackId}
            width={20}
            legendType="line"
            barSize={5}
          />
        ))}
      </BarChart>
    </Chart.Root>
  );
};

export default SalesChart;
