import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, DTOItem } from "../utils/Types";
import { getItems, postItem } from "../utils/api";

type plannerState = {
  items: Item[];
};

const initialState: plannerState = {
  items: [],
};

export const fetchItems = createAsyncThunk<
  Item[],
  void,
  { rejectValue: string }
>("item/fetchItems", async (_, { rejectWithValue }) => {
  try {
    const response = await getItems();
    return response;
  } catch (error) {
    return rejectWithValue("Something went wrong");
  }
});

export const fetchPostItem = createAsyncThunk<
  Item,
  DTOItem,
  { rejectValue: string }
>("item/fetchPostItem", async (data, { rejectWithValue }) => {
  try {
    const response = await postItem(data);
    return response;
  } catch (error) {
    return rejectWithValue("Something went wrong");
  }
});

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });

    builder.addCase(fetchPostItem.fulfilled, (state, action) => {
      state.items = [...state.items, action.payload];
    });
  },
});

export const { } = plannerSlice.actions;

export default plannerSlice.reducer;
