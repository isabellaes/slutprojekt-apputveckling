import express from "express";
import { listRouter } from "./router/listRouter";
import { moodRouter } from "./router/moodRouter";
import { itemRouter } from "./router/itemRouter";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/list", listRouter());
app.use("/item", itemRouter());
app.use("/mood", moodRouter());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
