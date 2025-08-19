"use client";

import { CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCalendarDrawer } from "@/state/calendar-drawer-slice";
import { RootState } from "@/state/store";

import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import Calendar from "react-calendar";
import { Button } from "@chakra-ui/react";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Cal = ({ handleClose }: { handleClose: () => void }) => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="flex flex-col w-full h-full">
      {/* header */}
      <div className="w-full p-5 flex items-center justify-start gap-x-3 bg-foreground text-secondary-foreground">
        <Button onClick={handleClose} className="p-0">
          <FaArrowLeft className="w-6 h-6 stroke-inherit" />
        </Button>
        <p className="font-semibold text-base leading-4 tracking-normal">
          Calendar
        </p>
      </div>
      
      {/* calendar */}
      <div className="w-full flex-1">
        <Calendar
          onChange={onChange}
          value={value}
          defaultView="month"
          className="bg-dark-200 text-white h-full p-5 "
        />
      </div>
    </div>
  );
};

const CalendarDrawer = () => {
  const open = useSelector((state: RootState) => state.calendarDrawer.value);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(toggleCalendarDrawer());
  };

  return (
    <Drawer.Root open={open} onOpenChange={handleClose} size="sm">
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Cal handleClose={handleClose} />
            <Drawer.CloseTrigger asChild>
              <CloseButton size="md" className="text-secondary-foreground" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default CalendarDrawer;
