"use client";

import { Dialog, Portal } from "@chakra-ui/react";
import BudgetModalContent from "./budget-menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleBudgetModal } from "@/state/budget-modal-slice";
import { RootState } from "@/state/store";

const BudgetModal = () => {
  const open = useSelector((state: RootState) => state.budgetModal.value);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(toggleBudgetModal());
  };
  return (
    <Dialog.Root 
        lazyMount 
        open={open} 
        onOpenChange={handleClose}
        placement="center"
        modal
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content className="p-0 shadow-none bg-background w-fit max-w-[438px] rounded-lg overflow-hidden">
            <Dialog.Body className="p-0">
              <BudgetModalContent />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default BudgetModal;
