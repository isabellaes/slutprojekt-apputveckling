import express, { Request, Response } from "express";

export function itemRouter() {
  const router = express.Router();

  router.get("/", (req: Request, res: Response) => {
    res.send("Items");
  });

  router.post("/", (req: Request, res: Response) => {
    res.send("Items");
  });

  router.delete("/", (req: Request, res: Response) => {
    res.send("Items");
  });

  return router;
}
