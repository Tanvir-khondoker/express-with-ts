import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const a = 10;
  res.send(a);
});

export default app;
