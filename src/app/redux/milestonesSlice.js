import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    year: 2020,
    event: "Founded Doffy Puffy",
    desc: "Founded in 2020, Doffy Puffy is a pastry startup that aspires to make the best special pastries for customers."
  },
  {
    id: 2,
    year: 2021,
    event: "Opened 100th store",
    desc: "Started in Indonesia, we have opened 100 stores in the Indonesia and several others."
  },
  {
    id: 3,
    year: 2022,
    event: "Expanded to 10 countries",
    desc: "We have spread our wings in 10 countries with more than 300 stores."
  },
  {
    id: 4,
    year: 2023,
    event: "Reached 1 million customers",
    desc: "After 3 years of operation, we have reached 1 million customers. We are committed to bringing incredibly delicious pastries to the community."
  }
]

const milestonesSlice = createSlice({
  name: "milestones",
  initialState,
  reducers: {}
})

export default milestonesSlice.reducer