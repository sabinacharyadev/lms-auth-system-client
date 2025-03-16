import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/redux/user/userSlice";
import bookReducer from "./src/redux/book/bookSlice";
import borrowReducer from "./src/redux/burrow/burrowSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    borrow: borrowReducer,
  },
});

export default store;
