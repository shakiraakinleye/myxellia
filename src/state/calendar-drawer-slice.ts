import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  value: boolean;
} = {
  value: false,
};

const calendarDrawerSlice = createSlice({
  name: "calendarDrawerSlice",
  initialState,
  reducers: {
    toggleCalendarDrawer: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleCalendarDrawer } = calendarDrawerSlice.actions;

export default calendarDrawerSlice.reducer;
