import express, { Application } from "express";
import cors from "cors";
import { studentRoutes } from "./app/modules/student/student.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/student", studentRoutes);

app.get("/", (req, res) => {
  const a = 200;
  res.sendStatus(a);
});

export default app;
