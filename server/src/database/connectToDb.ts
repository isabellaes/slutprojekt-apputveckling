import mongoose from "mongoose";

export async function connectToDb() {
  await mongoose.connect("mongodb://localhost:27017/npf-planner");
}