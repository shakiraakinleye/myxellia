import { Avatar, ButtonProps } from "@chakra-ui/react";
import { User } from "@/types/user";
import { TbLogout2 } from "react-icons/tb";
import { Button } from "@chakra-ui/react";
import { UserMenuItemProps, userMenuItems } from "@/data/nav";
import Link from "next/link";

const UserCard = ({ user }: Props) => {
  const { firstName, lastName, imageSrc, email } = user;

  return (
    <div className="bg-zinc-50 rounded-md border border-zinc-100 px-3 py-4 flex gap-x-2 items-center">
      <Avatar.Root shape="full" size="md" className="bg-emerald-800">
        <Avatar.Image src={imageSrc} />
        <Avatar.Fallback
          className="uppercase text-secondary-foreground text-xl font-playfair"
          name={firstName}
        />
      </Avatar.Root>
      <div className="space-y-0.5">
        <p className="font-bold text-sm font-playfair capitalize">
          {firstName} {lastName}
        </p>
        <p className="text-muted-foreground text-xs">{email}</p>
      </div>
    </div>
  );
};


interface ItemProps extends ButtonProps {
  item: UserMenuItemProps;
}

const MenuItem = ({ item, ...buttonProps }: ItemProps) => {
  const { title, icon, href } = item;
  const Icon = icon;

  return (
    <Button asChild className="w-full pointer-events-none" {...buttonProps}>
      <Link
        href={href}
        className="p-0 w-full h-fit"
        onClick={(e) => e.preventDefault()}
      >
        <p className="w-full h-fit py-5 flex gap-x-4 items-center text-foreground border-b border-zinc-100">
          <Icon className="md:w-4 md:h-4 xl:w-6 xl:h-6" />
          <span className="font-semibold text-sm font-playfair capitalize">
            {title}
          </span>
        </p>
      </Link>
    </Button>
  );
};

const LogoutBtn = () => {
  const logout = () => {
    console.log("Logout clicked");
  };
  return (
    <Button
      asChild
      className="w-full block items-center justify-start p-0"
      onClick={logout}
    >
      <p className="w-full h-fit py-5 flex gap-x-4 items-center text-red-500">
        <TbLogout2 className="md:w-4 md:h-4 xl:w-6 xl:h-6" />
        <span className="font-semibold text-sm font-playfair capitalize">
          logout
        </span>
      </p>
    </Button>
  );
};

interface Props {
  user: User;
}

const UserMenu = ({ user }: Props) => {
  return (
    <div className="bg-background pt-4 px-4 rounded-md overflow-hidden">
      <UserCard user={user} />
      <div>
        {userMenuItems.map((item) => {
          return <MenuItem key={item.title} item={item} />;
        })}
        <LogoutBtn />
      </div>
    </div>
  );
};

export default UserMenu;
