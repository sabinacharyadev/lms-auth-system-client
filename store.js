import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/redux/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
