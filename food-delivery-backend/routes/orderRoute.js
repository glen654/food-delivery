import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  listOrders,
  placeOrder,
  userOrders,
  verifyOrder,
} from "../controllers/orderController.js";
import authMiddleWare from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleWare, userOrders);
orderRouter.get("/list", listOrders);
export default orderRouter;
