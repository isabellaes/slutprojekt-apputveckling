import { createSlice } from "@reduxjs/toolkit";
import { List } from "../utils/Types";

type ListState = {
  lists: List[];
};

const initialState: ListState = {
  lists: [
    {
      id: "1",
      title: "Städlista",
      items: [
        {
          title: "Damma",
          description: "Damma",
          status: "unchecked",
        },
        {
          title: "Dammsuga",
          description: "",
          status: "unchecked",
        },
        {
          title: "Städa kök",
          description: "",
          status: "unchecked",
        },
        {
          title: "Städa toalett",
          description: "",
          status: "unchecked",
        },
        {
          title: "Moppa",
          description: "",
          status: "unchecked",
        },
      ],
    },
    {
      id: "2",
      title: "Morgonrutiner",
      items: [
        {
          title: "Mata katterna",
          description: "",
          status: "unchecked",
        },
        {
          title: "Äta frukost",
          description: "",
          status: "unchecked",
        },
        {
          title: "Ta mediciner",
          description: "",
          status: "unchecked",
        },
        {
          title: "Plocka ur diskmaskinen",
          description: "",
          status: "unchecked",
        },
        {
          title: "Borsta tänderna",
          description: "",
          status: "unchecked",
        },
      ],
    },
  ],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
});

export const {} = listSlice.actions;

export default listSlice.reducer;
