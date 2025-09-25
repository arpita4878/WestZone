import Branch from "../models/branch.model.js";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const isValidPhone = (number) => {
  if (!number) return false;
  const phoneNumber = parsePhoneNumberFromString(number);
  return phoneNumber ? phoneNumber.isValid() : false;
};

export const addStore = async (req, res) => {
  try {
    const { name, isOpen, openTime, closeTime, email, phone, whatsapp_Number, zones } = req.body;

    if (!name) return res.status(400).json({ message: "Store name is required" });
    if (!email) return res.status(400).json({ message: "Store email is required" });
    if (!phone || !isValidPhone(phone)) return res.status(400).json({ message: "Invalid phone number" });
    if (!whatsapp_Number || !isValidPhone(whatsapp_Number)) return res.status(400).json({ message: "Invalid WhatsApp number" });

    const branch = await Branch.findById(req.params.branchId);
    if (!branch) return res.status(404).json({ message: "Branch not found" });

    const newStore = {
      name,
      isOpen: isOpen !== undefined ? isOpen : true,
      openTime,
      closeTime,
      email,
      phone,
      whatsapp_Number,
      zones: zones ? JSON.parse(zones) : []
    };

    branch.stores.push(newStore);
    await branch.save();

    res.status(201).json(branch.stores[branch.stores.length - 1]);
  } catch (err) {
    console.error("Add store error:", err);
    res.status(500).json({ message: err.message });
  }
};

export const updateStore = async (req, res) => {
  try {
    const { branchId, storeId } = req.params;

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "No data provided to update" });
    }

    const branch = await Branch.findById(branchId);
    if (!branch) return res.status(404).json({ message: "Branch not found" });

    const store = branch.stores.id(storeId);
    if (!store) return res.status(404).json({ message: "Store not found" });

    const allowedFields = ["name", "isOpen", "openTime", "closeTime", "email", "phone", "whatsapp_Number", "zones"];
    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        if ((field === "phone" || field === "whatsapp_Number") && !isValidPhone(req.body[field])) {
          return res.status(400).json({ message: `Invalid ${field}` });
        }
        // Parse zones if it's a JSON string
        store[field] = field === "zones" && typeof req.body[field] === "string" ? JSON.parse(req.body[field]) : req.body[field];
      }
    }

    await branch.save();
    res.json(store);
  } catch (err) {
    console.error("Update store error:", err);
    res.status(500).json({ message: err.message });
  }
};

export const deleteStore = async (req, res) => {
  try {
    const { branchId, storeId } = req.params;

    const branch = await Branch.findById(branchId);
    if (!branch) return res.status(404).json({ message: "Branch not found" });

    const store = branch.stores.id(storeId);
    if (!store) return res.status(404).json({ message: "Store not found" });

    store.remove();
    await branch.save();

    res.json({ message: "Store deleted successfully" });
  } catch (err) {
    console.error("Delete store error:", err);
    res.status(500).json({ message: err.message });
  }
};
