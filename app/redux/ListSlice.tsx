import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { List, ListItem, DTOList } from "../utils/Types";
import { getLists, postList } from "../utils/api";

type ListState = {
  lists: List[];
};

const initialState: ListState = {
  lists: [],
};

export const fetchLists = createAsyncThunk<
  List[],
  void,
  { rejectValue: string }
>("list/fetchLists", async (_, { rejectWithValue }) => {
  try {
    const response = await getLists();
    return response;
  } catch (error) {
    return rejectWithValue("Something went wrong");
  }
});

export const fetchPostList = createAsyncThunk<
  List,
  DTOList,
  { rejectValue: string }
>("list/fetchPostList", async (data, { rejectWithValue }) => {
  try {
    const response = await postList(data);
    return response;
  } catch (error) {
    return rejectWithValue("Something went wrong");
  }
});

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

      const list = state.lists.find((l) => l._id === id);
      if (list) {
        const listItem = list.items.find((i) => i.title === item.title);
        if (listItem) {
          listItem.status = item.status;
        }
      }
    },
    deleteList: (state, action: PayloadAction<{ id: string }>) => {
      state.lists = state.lists.filter(
        (list) => list._id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLists.fulfilled, (state, action) => {
      state.lists = action.payload;
    });

    builder.addCase(fetchPostList.fulfilled, (state, action) => {
      state.lists = [...state.lists, action.payload];
    });
  },
});

export const { addList, updateStatusOnItem, deleteList } = listSlice.actions;

export default listSlice.reducer;
