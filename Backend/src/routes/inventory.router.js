import express from "express";
import multer from "multer";    
import {
  upsertMyBranchInventory,
  bulkUploadForMyBranch,
  getInventoryForBranch,
  getInventoryById
} from "../controllers/inventoryController.js"
import { protect } from "../middleware/auth.js";

const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post("/mine", upsertMyBranchInventory);
router.post("/mine/bulk", protect, upload.single("file"), bulkUploadForMyBranch);
router.get("/get-inventory/:id",getInventoryById )
router.get("/:branchId",  getInventoryForBranch);

export default router;
