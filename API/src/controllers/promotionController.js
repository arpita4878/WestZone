import Promotion from "../models/Promotion.js";
<<<<<<< HEAD
import Product from "../models/product.model.js";
=======
import Product from "../models/product.js";
>>>>>>> promotion

// CREATE promotion
export const createPromotion = async (req, res) => {
  try {
    const promotion = new Promotion(req.body);
    const savedPromo = await promotion.save();
    res.status(201).json(savedPromo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET all promotions
export const getAllPromotions = async (req, res) => {
  try {
    const promotions = await Promotion.find().populate("products");
    res.json(promotions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET promotion by ID (for Edit UI)
export const getPromotionById = async (req, res) => {
  try {
    const promo = await Promotion.findById(req.params.id).populate("products");
    if (!promo) return res.status(404).json({ message: "Promotion not found" });
    res.json(promo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE promotion
export const updatePromotion = async (req, res) => {
  try {
    const updatedPromo = await Promotion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPromo) return res.status(404).json({ message: "Promotion not found" });
    res.json(updatedPromo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE promotion
export const deletePromotion = async (req, res) => {
  try {
    const deletedPromo = await Promotion.findByIdAndDelete(req.params.id);
    if (!deletedPromo) return res.status(404).json({ message: "Promotion not found" });
    res.json({ message: "Promotion deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
