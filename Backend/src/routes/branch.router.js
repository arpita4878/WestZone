import express from "express";
import {
  createBranch,
  listBranches,
  getBranch,
  updateBranch,
  deleteBranch,
  getBranchesByLocation
} from "../controllers/branchController.js";

import {
  addStore,
  updateStore,
  deleteStore
} from "../controllers/storeController.js";

import {
  addZone,
  updateZone,
  deleteZone,
  checkDeliveryAvailability
} from "../controllers/zoneController.js"
import { upload } from "../middleware/uploads.js";
const router = express.Router();

// Branch routes
router.post("/", upload.single("image"), createBranch);
router.get("/", listBranches); 
router.get("/location", getBranchesByLocation);
router.get("/:id", getBranch);
router.put("/:id",upload.single("image"), updateBranch);
router.delete("/:id", deleteBranch);

// Store routes
router.post("/:branchId/stores", addStore);
router.put("/:branchId/stores/:storeId", updateStore);
router.delete("/:branchId/stores/:storeId", deleteStore);

// Zone routes
router.post("/:branchId/stores/:storeId/zones", addZone); 
router.put("/:branchId/stores/:storeId/zones/:zoneId", updateZone); 
router.delete("/:branchId/stores/:storeId/zones/:zoneId", deleteZone); 
router.post("/:branchId/stores/:storeId/check-delivery", checkDeliveryAvailability); 


export default router;
