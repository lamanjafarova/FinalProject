import express from "express";
import { getJobs, getJobsByid, addJobs } from "../controllers/job.js";

const router = express.Router();

router.get("/", getJobs);
router.post("/", addJobs);
router.get("/:id", getJobsByid);

export default router;