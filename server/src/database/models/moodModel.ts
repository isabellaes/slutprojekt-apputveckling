import mongoose from "mongoose";

const moodSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  note: {
    type: String,
  },
  img: {
    type: String,
  },
});

export const moodModel = mongoose.model("Mood", moodSchema);
