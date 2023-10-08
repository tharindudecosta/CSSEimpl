import express from "express";
import {
  approveQuotations,
  createManager,
  getManagers,
  getUnApprovedProducts,
  loginManager,
} from "../controllers/index.js";

const router = express.Router();

router.route("/").post(createManager).get(getManagers);
router.route("/login").post(loginManager);
router.route("/products").get(getUnApprovedProducts);
router.route("/products/:productId").post(approveQuotations);

export default router;
