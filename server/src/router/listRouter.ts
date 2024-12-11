import express, { Request, Response } from "express";
import { listModel } from "../database/models/listModel";
import mongoose from "mongoose";

export function listRouter() {
  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {
      const data = await listModel.find({});
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send({ message: "Error fetching data" });
      console.log(error);
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const result = await listModel.create(data);
      res.status(201).send(result);
    } catch (error) {
      res.status(404).send({ message: "Error posting data" });
      console.log(error);
    }
  });

  router.patch("/", async (req: Request, res: Response) => {
    try {
      const { listId, itemId, item } = req.body;

      const result = await listModel.findOneAndUpdate(
        { _id: listId, "items._id": itemId },
        { $set: { "items.$": item } },
        { new: true }
      );

      res.status(201).send(result);
    } catch (error) {
      res.status(404).send({ message: "Error updating data" });
      console.log(error);
    }
  });

  router.delete("/:id", async (req: Request, res: Response) => {
    try {
      const data = req.params;
      await listModel.findOneAndDelete({ _id: data });
      res.status(200).send({ message: "Deleted sucessfully" });
    } catch (error) {
      res.status(404).send({ message: "Error deleting data" });
      console.log(error);
    }
  });
  return router;
}
