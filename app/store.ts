import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
const store = configureStore({
  reducer: {
    userReducer,
  },
});
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
