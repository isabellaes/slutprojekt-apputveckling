import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/list", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Node.js!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
