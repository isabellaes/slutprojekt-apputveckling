import express, { Request, Response } from "express";
import { moodModel } from "../database/models/moodModel";

export function moodRouter() {
  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {
      const data = await moodModel.find({});
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send({ message: "Error fetching data" });
      console.log(error);
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const result = await moodModel.create(data);
      res.status(201).send(result);
    } catch (error) {
      res.status(404).send({ message: "Error posting data" });
      console.log(error);
    }
  });

  router.patch("/", async (req: Request, res: Response) => {
    try {
      const data = req.body;
      await moodModel.findOneAndDelete({ _id: data._id });
      res.status(200).send({ message: "Deleted sucessfully" });
    } catch (error) {
      res.status(404).send({ message: "Error deleting data" });
      console.log(error);
    }
  });

  return router;
}
