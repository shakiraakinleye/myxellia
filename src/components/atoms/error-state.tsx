import cx from "classnames";
import { MdErrorOutline } from "react-icons/md";
// import { Button } from "./button";

interface ErrorStateProps {
  message?: string;
  // onRetry?: () => void;
  mutedBg?: boolean;
}

const ErrorState = ({
  message = "Something went wrong",
  // onRetry,
  mutedBg = false,
}: ErrorStateProps) => {
  return (
    <div
      className={cx(
        "flex flex-col items-center justify-center w-full h-full text-center p-6",
        mutedBg && "bg-gray-100"
      )}
    >
      <div className="text-red-500 text-sm font-semibold mb-2 flex items-center gap-1">
        <MdErrorOutline className="stroke-inherit w-4 h-4" />
        {message}
      </div>
      {/* {onRetry && (
        <Button
          onClick={onRetry}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Retry
        </Button>
      )} */}
    </div>
  );
};

export default ErrorState;
