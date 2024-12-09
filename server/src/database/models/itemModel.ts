import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  title: {
    type: String,
  },
});

export const itemModel = mongoose.model("Item", itemSchema);
