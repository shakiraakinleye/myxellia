import cx from "classnames";
import { currencyFormatter } from "@/utils/currency-formatter";
import { FaArrowAltCircleUp } from "react-icons/fa";

interface SummaryType {
  title: string;
  value: number;
  growth: number;
}

interface SalesSummaryProps {
  saleSummary: SummaryType;
  cardColor: string;
}

const SummaryCard = ({ saleSummary, cardColor }: SalesSummaryProps) => {
  const { title, value, growth } = saleSummary;
  const increasedGrowth = growth >= 0;
  const formattedValue = currencyFormatter(value, "NGN", "symbol");
  console.log("cardColor", cardColor);

  return (
    <div className="p-4 bg-background border border-border-100 rounded-xl flex flex-col items-start gap-y-1 tracking-normal ">
      <h3 className={cx("text-lg leading-6 font-semibold", cardColor)}>
        {formattedValue}
      </h3>
      <p className="flex items-center gap-x-2 text-xxs leading-3">
        <span
          className={cx(
            "text-muted-200 font-medium",
            title.length > 5 ? "capitalize" : "uppercase"
          )}
        >
          {title}
        </span>
        <p className="flex items-center gap-x-1">
          <FaArrowAltCircleUp
            className={cx(
              "w-4 h-4",
              increasedGrowth
                ? "fill-chart-green"
                : "transform rotate-180 text-chart-red"
            )}
          />
          <span
            className={cx(
              "font-normal",
              increasedGrowth ? "text-chart-green" : "text-chart-red"
            )}
          >
            {growth}%
          </span>
        </p>
      </p>
    </div>
  );
};

const SalesSummary = ({ summaries }: { summaries: SummaryType[] }) => {
  const getCardColor = (title: string): string => {
    switch (title.toLowerCase()) {
      case "total in flow":
        return "text-chart-blue";
      case "mrr":
        return "text-chart-green";
      case "commission revenue":
        return "text-chart-teal";
      case "gmv":
        return "text-chart-red";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="grid  grid-cols-2 gap-4">
      {summaries.map((summary, index) => {
        const cardColor = getCardColor(summary.title);
        return (
          <SummaryCard
            key={index}
            saleSummary={summary}
            cardColor={cardColor}
          />
        );
      })}
    </div>
  );
};

export default SalesSummary;
