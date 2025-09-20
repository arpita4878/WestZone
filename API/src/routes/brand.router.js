import express from "express";
import { createBrand, getBrands ,updateBrand,deleteBrand, getBrandWithProducts} from "../controllers/brandcontroller.js";
import { protect, restrictTo } from "../middleware/auth.js";
import { upload } from "../middleware/uploads.js";
const router = express.Router();

//router.use(protect, restrictTo("super_admin"));

router.post("/",protect,restrictTo("super_admin"), upload.single('image'), createBrand);           
router.get("/", getBrands);              
router.get("/:brandId/products", getBrandWithProducts); 
router.put("/:brandId",protect,restrictTo("super_admin"),updateBrand);          
router.delete("/:brandId",protect,restrictTo("super_admin"), deleteBrand);

export default router;
                