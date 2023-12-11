import express, { Router } from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./Controllers.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"], // Include POST method
    credentials: true, // Include credentials (cookies) in the request
  })
);
app.use(express.json());

app.use("/", router);

export default app;
