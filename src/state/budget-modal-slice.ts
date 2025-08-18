import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  value: boolean;
} = {
  value: false,
};

const budgetModalSlice = createSlice({
  name: "budgetModalSlice",
  initialState,
  reducers: {
    toggleBudgetModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleBudgetModal } = budgetModalSlice.actions;

export default budgetModalSlice.reducer;
