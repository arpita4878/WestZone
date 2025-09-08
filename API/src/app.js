import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// import { createServer } from "http";
// import { Server } from "socket.io"; 
import { connectDB } from "./config/db.js"


import userRouter from "./routes/user.router.js";
<<<<<<< HEAD
<<<<<<< HEAD
import brandRouter from './routes/brand.router.js';
import categoryRouter from "./routes/category.router.js"
=======
=======
import brandRouter from './routes/brand.router.js'
>>>>>>> new-offer-zone
import promotionRouter from "./routes/promotionRoutes.js";
import newOfferZoneRoutes from "./routes/newOfferZone.routes.js";


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/brand",brandRouter);
app.use('/api/promotions',promotionRouter);
<<<<<<< HEAD
>>>>>>> promotion
app.use("/api/category",categoryRouter)

=======
app.use("/api/new-offer-zone", newOfferZoneRoutes);
>>>>>>> new-offer-zone


connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});

