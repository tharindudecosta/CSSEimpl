import express from "express";
import { createContructionSite, getContructionSites } from "../controllers/index.js";

const router = express.Router();

router.route("/").post(createContructionSite).get(getContructionSites);
// router.route("/get").get(getContructionSites);

export default router;
