import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./productsSlice";
import customersReducer from "./customersSlice";
import milestoneReducer from "./milestonesSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    customers: customersReducer,
    milestones: milestoneReducer
  }
})

export default store