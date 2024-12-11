import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { List, ListItem, DTOList, UpdateListItem } from "../utils/Types";
import { deleteListById, getLists, postList, updateList } from "../utils/api";

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

export const fetchUpdateList = createAsyncThunk<
  List,
  UpdateListItem,
  { rejectValue: string }
>("list/fetchUpdateList", async (data, { rejectWithValue }) => {
  try {
    const response = await updateList(data);
    return response;
  } catch (error) {
    return rejectWithValue("Something went wrong");
  }
});

export const fetchDeleteListById = createAsyncThunk<
  List,
  string,
  { rejectValue: string }
>("list/fetchDeleteListById", async (id, { rejectWithValue }) => {
  try {
    const response = await deleteListById(id);
    return response;
  } catch (error) {
    return rejectWithValue("Something went wrong");
  }
});

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
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
    builder.addCase(fetchUpdateList.fulfilled, (state, action) => {
      const data = action.payload;

      state.lists = state.lists.map((list) =>
        list._id === data._id ? action.payload : list
      );
    });
    builder.addCase(fetchDeleteListById.fulfilled, (state, action) => {
      state.lists = state.lists.filter(
        (list) => list._id !== action.payload._id
      );
    });
  },
});

export const { deleteList } = listSlice.actions;

export default listSlice.reducer;
