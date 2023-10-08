import express from "express";
import {
  createSiteManager,
  getSiteMangers,
  loginSiteManager,
} from "../controllers/index.js";

const router = express.Router();

router.route("/").post(createSiteManager).get(getSiteMangers);
router.route("/login").post(loginSiteManager);

export default router;
