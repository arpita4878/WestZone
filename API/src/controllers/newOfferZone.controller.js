import NewOfferZone from "../models/newOfferZone.model.js";

// Create New Offer
export const createNewOffer = async (req, res) => {
  try {
    const newOffer = new NewOfferZone({
      ...req.body,
      createdBy: {
        name: req.user.name,
        surname: req.user.surname,
        email: req.user.email,
        phone: req.user.phone,
        date: new Date()
      }
    });
    await newOffer.save();
    res.status(201).json({ success: true, data: newOffer });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


// Get all offers
export const getNewOffers = async (req, res) => {
  try {
    const offers = await NewOfferZone.find().sort({ priority: -1 });
    res.json({ success: true, data: offers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single offer
export const getNewOfferById = async (req, res) => {
  try {
    const offer = await NewOfferZone.findById(req.params.id);
    if (!offer) return res.status(404).json({ success: false, message: "Offer not found" });
    res.json({ success: true, data: offer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update offer
export const updateNewOffer = async (req, res) => {
  try {
    const updatedOffer = await NewOfferZone.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        updatedBy: {
          name: req.user.name,
          surname: req.user.surname,
          email: req.user.email,
          phone: req.user.phone,
          date: new Date()
        }
      },
      { new: true, runValidators: true }
    );
    if (!updatedOffer) return res.status(404).json({ success: false, message: "Offer not found" });
    res.json({ success: true, data: updatedOffer });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


// Delete offer
export const deleteNewOffer = async (req, res) => {
  try {
    await NewOfferZone.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Offer deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
