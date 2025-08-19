import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { Button } from "../atoms/button";

const ChatButton = () => {
  const chatHandler = () => console.log("chat clicked");
  return (
    <Button
      className="pointer-events-none w-14 h-14 flex justify-center items-center bg-secondary-background border border-gray-600 rounded-full"
      onClick={chatHandler}
    >
      <HiChatBubbleLeftRight className="w-6 h-6 fill-background stroke-transparent" />
    </Button>
  );
};

export default ChatButton;
