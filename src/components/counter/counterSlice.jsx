import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      // You can mutate state directly thanks to Immer!
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Export the auto-generated action creators
export const { increment, decrement } = counterSlice.actions;

// Export the reducer for store configuration
export default counterSlice.reducer;