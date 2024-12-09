import express, { Request, Response } from "express";

export function listRouter() {
  const router = express.Router();

  router.get("/", (req: Request, res: Response) => {
    res.send("Lists");
  });

  router.post("/", (req: Request, res: Response) => {
    res.send("Lists");
  });

  router.patch("/", (req: Request, res: Response) => {
    res.send("Lists");
  });
  router.delete("/", (req: Request, res: Response) => {
    res.send("Lists");
  });
  return router;
}
