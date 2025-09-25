import express from "express";
import { createBrand, getBrands ,updateBrand,deleteBrand, getBrandWithProducts} from "../controllers/brandcontroller.js";
import { upload } from "../middleware/uploads.js";
const router = express.Router();

//router.use(protect,);

router.post("/", upload.single('image'), createBrand);           
router.get("/", getBrands);              
router.get("/:brandId/products", getBrandWithProducts); 
router.put("/:brandId", upload.single('image'), updateBrand);          
router.delete("/:brandId", deleteBrand);

export default router;
                