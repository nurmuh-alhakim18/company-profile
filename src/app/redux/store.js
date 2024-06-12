import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./productsSlice";
import milestoneReducer from "./milestonesSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    milestones: milestoneReducer
  }
})

export default store