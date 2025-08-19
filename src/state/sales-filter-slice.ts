import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  value: null | string;
} = {
  value: null,
};

const salesFilterSlice = createSlice({
  name: "salesFilterSlice",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.value = action.payload;
    },
    resetFilter: (state) => {
      state.value = null;
    },
  },
});

export const { changeFilter } = salesFilterSlice.actions;
export default salesFilterSlice.reducer;
