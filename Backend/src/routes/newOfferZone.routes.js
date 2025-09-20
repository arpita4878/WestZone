import express from "express";
import {
  createNewOffer,
  getNewOffers,
  getNewOfferById,
  updateNewOffer,
  deleteNewOffer
} from "../controllers/newOfferZone.controller.js";

const router = express.Router();

router.post("/", createNewOffer);
router.get("/", getNewOffers);
router.get("/:id", getNewOfferById);
router.put("/:id", updateNewOffer);
router.delete("/:id", deleteNewOffer);

export default router;
