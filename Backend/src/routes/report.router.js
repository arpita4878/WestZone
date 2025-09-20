
import express from "express";
import { salesReport, lowStockAlerts, exportSalesReport } from "../controllers/reportControler.js";

const router = express.Router();

// router.get("/sales", protect, salesReport);
// router.get("/low-stock", protect, lowStockAlerts);
// router.get("/sales/export", protect, exportSalesReport);


router.get("/sales",  salesReport);
router.get("/low-stock", lowStockAlerts);
router.get("/sales/export",  exportSalesReport);



export default router;
