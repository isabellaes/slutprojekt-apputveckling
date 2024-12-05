import { createSlice } from "@reduxjs/toolkit";

type List = {
  id: string;
  type?: "check" | "todo";
  title: string;
  items: [
    {
      title: string;
      description: string;
      deadline?: Date;
      status: boolean;
    }
  ];
};

type ListState = {
  lists: List[];
};

const initialState: ListState = {
  lists: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
});

export const {} = listSlice.actions;

export default listSlice.reducer;
