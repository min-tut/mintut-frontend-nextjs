import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../index";

interface UserState {
  username: string;
  userid: string;
  photo: string;
  isLogged: Boolean;
}
const initialState: UserState = {
  username: "",
  userid: "",
  photo: "",
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { login } = userSlice.actions;
export const selectUser = (state: AppState) => {
  state.user;
};
export default userSlice.reducer;
