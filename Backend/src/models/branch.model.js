import mongoose from "mongoose";
import { parsePhoneNumberFromString } from "libphonenumber-js";
const zoneSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  polygon: {
    type: {
      type: String,
      enum: ["Polygon"],
      default: "Polygon"
    },
    coordinates: {
      type: [[[Number]]], 
      required: true
    }
  },
  freeDeliveryAbove: { type: Number, default: 0 },   // free delivery if order >= amount
  minOrderValue: { type: Number, default: 0 },       // minimum order allowed
  deliveryTime: { type: String, default: "30-45 mins" },
  deliveryCharge: { type: Number, default: 0 },
  deliveryChargeAfterKm: { type: Number, default: 0 }, // charge after distance
  paymentMethods: [{ type: String, enum: ["card", "cash", "upi"] }]
});

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email:{type:String, required:true},
  phone: {  
  type: String, // use String instead of Number (to keep +, leading 0, etc.)
    required: [true, "Phone number is required"],
    validate: {
      validator: function (v) {
        if (!v) return false;
        const phoneNumber = parsePhoneNumberFromString(v);
        return phoneNumber ? phoneNumber.isValid() : false;
      },
      message: (props) => `${props.value} is not a valid phone number!`
    }
  },

  
  whatsapp_Number: {
    type: String,
    required: [true, "WhatsApp number is required"],
    validate: {
      validator: function (v) {
        if (!v) return false;
        const phoneNumber = parsePhoneNumberFromString(v);
        return phoneNumber ? phoneNumber.isValid() : false;
      },
      message: (props) => `${props.value} is not a valid WhatsApp number!`
    }
  },


  isOpen: { type: Boolean, default: true },
  openTime: { type: String },  
  closeTime: { type: String }, 
  zones: [zoneSchema]
});

const branchSchema = new mongoose.Schema(
  {
    branchName: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    address: { type: String },
    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], default: [0, 0] }
    },
    stores: [storeSchema],
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

branchSchema.index({ location: "2dsphere" });
branchSchema.index({ "stores.zones.polygon": "2dsphere" });

export default mongoose.model("Branch", branchSchema);


  //phone number like this 
  //  phone: "+14155552671",       // USA valid
 // whatsapp_Number: "+919876543210"
