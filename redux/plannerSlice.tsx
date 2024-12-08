import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../utils/Types";

type plannerState = {
  items: Item[];
};

const initialState: plannerState = {
  items: [
    {
      id: "1",
      title: "Hämta medicin",
      date: new Date("2024-12-08T10:00:00").toISOString(),
    },
    {
      id: "2",
      title: "Jobb",
      date: new Date("2024-12-12T10:00:00").toISOString(),
    },
    {
      id: "3",
      title: "Möte",
      date: new Date("2024-12-17T10:00:00").toISOString(),
    },
  ],
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = plannerSlice.actions;

export default plannerSlice.reducer;
