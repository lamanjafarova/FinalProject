import express from "express";
import { getJobs } from "../controllers/job.js";

const router = express.Router();

router.get("/", getJobs);

export default router;