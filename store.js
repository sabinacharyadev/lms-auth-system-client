import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./src/redux/book/bookSlice";
import reviewReducer from "./src/redux/review/reviewSlice";
import userReducer from "./src/redux/user/userSlice";
import borrowReducer from "./src/redux/burrow/burrowSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    borrow: borrowReducer,
    review: reviewReducer,
  },
});

export default store;
