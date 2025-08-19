import LoadingState from "@/components/atoms/loading-state";

const Loading = () => {
  return (
    <div className="w-full h-full flex">
      <LoadingState mutedBg={true} />
    </div>
  );
};

export default Loading;
