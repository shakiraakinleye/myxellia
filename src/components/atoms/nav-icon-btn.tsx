import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Tooltip } from "../ui/tooltip";

interface Props extends ButtonProps {
  icon: IconType;
  tooltip?: string;
  disableBtn?: boolean;
}

const NavIconBtn = React.forwardRef<HTMLButtonElement, Props>(
  ({ icon, tooltip, disableBtn = false, ...buttonProps }: Props) => {
    const defaultClassName = disableBtn ? "pointer-events-none" : "";
    const Icon = icon;
    return (
      <Tooltip
        content={tooltip}
        disabled={disableBtn || tooltip === undefined}
        openDelay={100}
        closeDelay={100}
        positioning={{ offset: { mainAxis: 4, crossAxis: 4 } }}
        contentProps={{
          css: {
            "--tooltip-bg": "black",
            rounded: "md",
            color: "white",
            padding: 2.5,
            textTransform: "capitalize",
            fontFamily: "inter",
            fontSize: "xs",
          },
        }}
      >
        <Button className={defaultClassName} {...buttonProps}>
          <Icon className="md:w-6 md:h-6 xl:w-8 xl:h-8" />
        </Button>
      </Tooltip>
    );
  }
  
)

NavIconBtn.displayName = "NavIconBtn"

export default NavIconBtn;
