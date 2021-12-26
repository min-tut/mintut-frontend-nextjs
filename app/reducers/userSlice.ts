import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  userid: string;
  username: string;
  photos: string;
  isLogged: boolean;
};

const initialState: UserState = {
  userid: "",
  username: "",
  photos: "",
  isLogged: false,
};

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    login: (state) => state,
  },
});
const userReducer = userSlice.reducer;
export const { login } = userSlice.actions;
export default userReducer;
