import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { createServer } from "http";
 import { Server } from "socket.io"; 
import { connectDB } from "./config/db.js"
import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename); 

import userRouter from "./routes/user.router.js";
import brandRouter from './routes/brand.router.js';
import categoryRouter from "./routes/category.router.js"
import promotionRouter from "./routes/promotionRoutes.js";
import newOfferZoneRoutes from "./routes/newOfferZone.routes.js";
import feedbackRoutes from "./routes/feedback.routes.js";
import serviceFeedbackRoutes from "./routes/serviceFeedback.routes.js";
import productFeedbackRoutes from "./routes/productFeedback.routes.js";
import deliveryStaffRoutes from "./routes/deliveryStaff.routes.js";
import pushNotificationRoutes from "./routes/pushNotification.routes.js";
import pdfBannerRoutes from "./routes/pdfBanner.routes.js";
import productRouter from "./routes/product.router.js"
import inventoryRouter from "./routes/inventory.router.js"
import orderRouter from "./routes/order.router.js"
import branchRouter from "./routes/branch.router.js"


const app = express();
const port = process.env.PORT || 5000;


const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"]
  }
});


global._io = io;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/brand",brandRouter);
app.use("/api/category",categoryRouter)
app.use("/api/products",productRouter)
app.use("/api/inventory",inventoryRouter)
app.use("/api/orders",orderRouter)
app.use("/api/branches",branchRouter)


app.use('/api/promotions',promotionRouter);
app.use("/api/new-offer-zone", newOfferZoneRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/service-feedbacks", serviceFeedbackRoutes);
app.use("/api/product-feedbacks", productFeedbackRoutes);
app.use("/api/delivery-staff", deliveryStaffRoutes);
app.use("/api/push-notifications", pushNotificationRoutes);
app.use("/api/pdf-banners", pdfBannerRoutes);




app.post("/notify/order", (req, res) => {
  const { branchId, orderId, status } = req.body;
  if (!branchId || !orderId) {
    return res.status(400).json({ message: "branchId and orderId are required" });
  }

  
  io.to(String(branchId)).emit("newOrder", {
    branchId,
    orderId,
    status: status || "pending",
    time: new Date(),
  });

  res.json({ message: "Notification sent", branchId, orderId });
});

// Socket.IO handlers
io.on("connection", (socket) => {
  console.log(" New client connected:", socket.id);

  // Branch joins its own room
  socket.on("joinBranch", (branchId) => {
    socket.join(String(branchId));
    console.log(` Branch ${branchId} joined via socket ${socket.id}`);
  });

  // Delivery boy 
  socket.on("joinDeliveryBoy", (deliveryBoyId) => {
    socket.join(`delivery_${deliveryBoyId}`);
    console.log(` Delivery Boy ${deliveryBoyId} joined via socket ${socket.id}`);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});


connectDB().then(() => {
  app.listen(port, '0.0.0.0',() => {
    console.log(`Server running on port ${port},192.168.0.126:5000`);
  });
});



//http://192.168.0.126:5000/api/data'
//for ui