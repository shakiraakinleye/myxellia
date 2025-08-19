import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  imageSrc: string;
}

const userSample = {
  id: "user_123",
  firstName: "damilola",
  lastName: "akinleye",
  email: "shakiraakin@gmail.com",
  imageSrc: "",
};

const initialState: {
  value: User;
} = {
  value: userSample,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    clearUser: (state) => {
      state.value = userSample;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
