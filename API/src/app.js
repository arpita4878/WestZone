import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { createServer } from "http";
import { connectDB } from "./config/db.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../Swagger/swaggerConfig.js";  

import userRouter from "./routes/user.router.js";
import brandRouter from "./routes/brand.router.js";
import categoryRouter from "./routes/category.router.js";
import productRouter from "./routes/product.router.js";
import inventoryRouter from "./routes/inventory.router.js";
import orderRouter from "./routes/order.router.js";
import branchRouter from "./routes/branch.router.js";
import promotionRouter from "./routes/promotionRoutes.js";
import newOfferZoneRoutes from "./routes/newOfferZone.routes.js";
import feedbackRoutes from "./routes/feedback.routes.js";
import serviceFeedbackRoutes from "./routes/serviceFeedback.routes.js";
import productFeedbackRoutes from "./routes/productFeedback.routes.js";
import deliveryStaffRoutes from "./routes/deliveryStaff.routes.js";
import pushNotificationRoutes from "./routes/pushNotification.routes.js";
import pdfBannerRoutes from "./routes/pdfBanner.routes.js";
import reportsRouter from "./routes/report.router.js"

//swagger import
import swaggerDocs from "./config/swagger.js";


// import socket server separately
import { initSocket } from "./socket.js";

const app = express();
const port = process.env.PORT || 5000;

// HTTP server
const httpServer = createServer(app);

// Middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/users", userRouter);
app.use("/api/brand", brandRouter);
app.use("/api/category", categoryRouter);
app.use("/api/products", productRouter);
app.use("/api/inventory", inventoryRouter);
app.use("/api/orders", orderRouter);
app.use("/api/branches", branchRouter);
app.use("/api/reports",reportsRouter)

app.use("/api/promotions", promotionRouter);
app.use("/api/new-offer-zone", newOfferZoneRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/service-feedbacks", serviceFeedbackRoutes);
app.use("/api/product-feedbacks", productFeedbackRoutes);
app.use("/api/delivery-staff", deliveryStaffRoutes);
app.use("/api/push-notifications", pushNotificationRoutes);
app.use("/api/pdf-banners", pdfBannerRoutes);

// Swagger docs route
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
swaggerDocs(app);


// Initialize Socket.IO
initSocket(httpServer);


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec,{
  
}))


connectDB().then(() => {
  httpServer.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://192.168.1.19:${port}`);
  });
});
