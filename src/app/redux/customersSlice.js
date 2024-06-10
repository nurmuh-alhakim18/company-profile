import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    img: "/images/john-doe.jpg",
    name: "John Doe",
    description: "Best pastry shop in town"
  },
  {
    id: 2,
    img: "/images/jane-doe.jpg",
    name: "Jane Doe",
    description: "Better than Hijab Mama's in my book"
  },
  {
    id: 3,
    img: "/images/john-smith.jpg",
    name: "John Smith",
    description: "You won't get enough of it"
  },
  {
    id: 4,
    img: "/images/jane-smith.jpg",
    name: "Jane Smith",
    description: "Can't find better pastry anywhere else"
  }
]

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {}
})

export default customersSlice.reducer