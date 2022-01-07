import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  userid: string;
  username: string;
  photo: string;
  token: string;
  isLogged: boolean;
};

const initialState: UserState = {
  userid: "",
  username: "",
  photo: "",
  token: "",
  isLogged: false,
};

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => ({
      ...state,
      ...action.payload,
    }),
    logout: (state) => {
      return {
        ...state,
        ...initialState,
      };
    },
  },
});
const userReducer = userSlice.reducer;
export const { login, logout } = userSlice.actions;
export default userReducer;
