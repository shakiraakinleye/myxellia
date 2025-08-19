import cx from "classnames";

interface LoadingStateProps {
  mutedBg?: boolean;
}

const LoadingState = ({ mutedBg = false }: LoadingStateProps) => {
  return (
    <div
      className={cx(
        "flex items-center justify-center w-full h-full",
        mutedBg ? "bg-gray-100" : ""
      )}
    >
      <div className="w-10 h-10 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingState;
