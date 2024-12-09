import express, { Request, Response } from "express";

export function moodRouter() {
  const router = express.Router();

  router.get("/", (req: Request, res: Response) => {
    res.send("Moods");
  });

  router.post("/", (req: Request, res: Response) => {
    res.send("Moods");
  });

  router.patch("/", (req: Request, res: Response) => {
    res.send("Moods");
  });

  return router;
}
