import mongoose from "mongoose";
import crypto from "crypto";
import { parsePhoneNumberFromString } from "libphonenumber-js";

// Counter schema for auto-increment
const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});
const Counter = mongoose.model("Counter", counterSchema);

// User schema
const userSchema = new mongoose.Schema(
  {
    _id: Number,
    designation: { type: String, trim: true, required: [true, "designation is required"] },
    name: { type: String, required: [true, "Name is required"], trim: true },
    surname: { type: String, trim: true, required: true },
    email: { type: String, unique: true, sparse: true, lowercase: true, trim: true },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      unique: true,
      validate: {
        validator: function (v) {
          const phoneNumber = parsePhoneNumberFromString(v);
          return phoneNumber ? phoneNumber.isValid() : false;
        },
        message: "Please provide a valid phone number with country code",
      },
    },
    password: {
      type: String,
      required: function () {
        return this.role === "online_customer";
      },
      minlength: [6, "Password must be at least 6 characters long"],
    },
    role: {
      type: String,
      enum: [
        "super_admin",
        "branch_manager",
        "staff",
        "delivery_boy",
        "supermarket_customer",
        "online_customer",
      ],
      default: "supermarket_customer",
    },
    branch: { type: String, ref: "Branch" },
    birthday: { type: Date },
    registeredDate: { type: Date, default: Date.now },
    lastOrderDate: { type: Date },
    points: { type: Number, default: 0 },
    orderCount: { type: Number, default: 0 },
    totalOrderAmount: { type: Number, default: 0 },
    nationality: { type: String, trim: true, required: true },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

// Pre-save hook to auto-generate numeric _id for online_customer
userSchema.pre("save", async function (next) {
  if (this.isNew && this.role === "online_customer" && !this._id) {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "userId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this._id = counter.seq;
  }
  next();
});

userSchema.methods.getResetPasswordToken = function () {
  if (this.role !== "online_customer") return null;
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  return resetToken;
};

export default mongoose.model("Users", userSchema);
