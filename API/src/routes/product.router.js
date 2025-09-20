import express from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  listProducts
} from "../controllers/productController.js";

const router = express.Router();
import { upload } from "../middleware/uploads.js"

//router.post("/", protect, adminOnly(["superadmin"]), createProduct);

router.post("/",upload.array("images",5),  createProduct);


router.get("/:id", getProduct);
router.get("/",  listProducts);
router.put("/:id",upload.array("images",5),  updateProduct);
router.delete("/delete/:id",  deleteProduct);

export default router;
