import { Avatar } from "@chakra-ui/react";
import { User } from "@/types/user";

interface UserAvatarProps {
  user: User;
  className?: string;
  size?: "sm" | "md" | "lg";
  shape?: "full" | "rounded" | "square";
  fallbackClassName?: string;
}

const UserAvatar = ({
  user,
  className,
  size,
  shape,
  fallbackClassName,
}: UserAvatarProps) => {
  const { firstName, imageSrc } = user;

  return (
    <Avatar.Root
      shape={shape ?? "full"}
      size={size ?? "sm"}
      className={className}
    >
      <Avatar.Image src={imageSrc} />
      <Avatar.Fallback className={`text-lg ${fallbackClassName}`} name={firstName} />
    </Avatar.Root>
  );
};

export default UserAvatar;
