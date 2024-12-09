import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { List, ListItem } from "../utils/Types";

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
  reducers: {
    addList: (state, action: PayloadAction<List>) => {
      state.lists.push(action.payload);
    },
    updateStatusOnItem: (
      state,
      action: PayloadAction<{ id: string; item: ListItem }>
    ) => {
      const { id, item } = action.payload;

      const list = state.lists.find((l) => l.id === id);
      if (list) {
        const listItem = list.items.find((i) => i.title === item.title);
        if (listItem) {
          listItem.status = item.status;
        }
      }
    },
    deleteList: (state, action: PayloadAction<{ id: string }>) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload.id);
    },
  },
});

export const { addList, updateStatusOnItem, deleteList } = listSlice.actions;

export default listSlice.reducer;
