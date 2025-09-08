import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// import { createServer } from "http";
// import { Server } from "socket.io"; 
import { connectDB } from "./config/db.js"


import userRouter from "./routes/user.router.js";

import brandRouter from './routes/brand.router.js';
import categoryRouter from "./routes/category.router.js"

import promotionRouter from "./routes/promotionRoutes.js";



const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRouter);

app.use("/api/brand",brandRouter)

app.use('/api/promotions',promotionRouter);

app.use("/api/category",categoryRouter)



connectDB().then(() => {
  app.listen(port, '0.0.0.0',() => {
    console.log(`Server running on port ${port},192.168.0.126:5000`);
  });
});

//http://192.168.0.126:5000/api/data'
//for ui