import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  items: [
    {
      title: { type: String },
      status: {
        type: String,
        enum: ["checked", "unchecked", "indeterminate"],
        default: "unchecked",
      },
    },
  ],
});

export const listModel = mongoose.model("List", listSchema);
