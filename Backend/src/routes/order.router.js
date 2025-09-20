import { Router } from "express";
import {
  listOrders,
  createOrder,
  assignDelivery,
  updateOrderStatus,
  cancelOrderByCustomer,
  confirmDelivery,
  trackOrder,
  listNewOrders,
  listUnderProcessOrders,
  deliveredOrder,
  pendingConfirmOrders,
  reportMissingProducts,
  deliveredOrdersWithMissingProducts,
  cancelledOrders,
  listGoneForDeliveryOrders,
  getOrderByUserAndId,
  getOrdersByUser,
  notifyBranch,
  submitFeedback
} from "../controllers/orderController.js"

import { protect, restrictTo } from "../middleware/auth.js";

const router = Router();

router.get("/", listOrders);
router.post("/", protect,createOrder);
router.post("/:id/report-missing",protect, reportMissingProducts);
router.post("/:id/cancel-order",protect, cancelOrderByCustomer);
router.get("/user/:userId", getOrdersByUser);
router.get("/user/:userId/order/:orderId",protect, getOrderByUserAndId);
router.post("/notify-branch", notifyBranch);
router.get("/:id/trackOrder", trackOrder);
router.post("/:id/feedback", protect, submitFeedback);

//delivery boy
router.put("/:id/assign", assignDelivery);

router.put("/:id/status", updateOrderStatus);

router.put("/:id/confirm", confirmDelivery);

//admin
router.get("/new",protect,restrictTo("super_admin"),listNewOrders)

router.get("/under-process",protect,restrictTo("super_admin"),listUnderProcessOrders)

router.get("/out-for-delivery",protect,restrictTo("super_admin"),listGoneForDeliveryOrders)

router.get("/delivered",protect,restrictTo("super_admin"),deliveredOrder)

router.get("/pending-confirm",protect,restrictTo("super_admin"),pendingConfirmOrders)

router.get("/delivered-missing",protect,restrictTo("super_admin"),deliveredOrdersWithMissingProducts)

router.get("/cancel-order",protect,restrictTo("super_admin"),cancelledOrders)

export default router;
