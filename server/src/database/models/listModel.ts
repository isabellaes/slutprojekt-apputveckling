import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  items: [
    {
      title: { type: String },
      description: { type: String },
      status: { type: String },
    },
  ],
});

export const listModel = mongoose.model("List", listSchema);
