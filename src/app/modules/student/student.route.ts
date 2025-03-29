import express from "express";
import { studentController } from "./student.controller";

const router = express.Router();

// will call controller func
router.post("/create-student", studentController.createStudent);

router.get("/", studentController.getAllStudents);
router.get("/:studentID", studentController.getSingleStudent);

export const studentRoutes = router;
