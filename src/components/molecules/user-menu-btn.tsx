"use client";

import { useState } from "react";
import { Button, Popover } from "@chakra-ui/react";
import { Tooltip } from "../ui/tooltip";
import UserAvatar from "../atoms/user-avatar";
import UserTooltip from "./user-tooltip";
import { User } from "@/types/user";
import UserMenu from "./user-menu";

interface Props {
  user: User;
}

const UserMenuBtn = ({ user }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root
      open={open}
      positioning={{ placement: "bottom-end", offset: {mainAxis: 4, crossAxis: 4} }}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Tooltip
        content={<UserTooltip user={user} />}
        positioning={{ placement: "bottom-end", offset: {mainAxis: 4, crossAxis: 4} }}
        openDelay={100}
        closeDelay={100}
        disabled={open}
        contentProps={{
          className: "bg-zinc-100 p-3 font-display shadow-none",
        }}
      >
        <Popover.Trigger asChild>
          <Button
            size="sm"
            variant="subtle"
            className="bg-background hover:scale-125 rounded-full transition-all duration-500"
          >
            <UserAvatar
              user={user}
              className="bg-background"
              fallbackClassName="uppercase font-playfair text-foreground"
            />
          </Button>
        </Popover.Trigger>
      </Tooltip>

      <Popover.Positioner>
        <Popover.Content className="shadow-none">
          <UserMenu user={user} />
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
};

export default UserMenuBtn;
