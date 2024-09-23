import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import path from "path";

import connectToMongodb from "./db/connections.js";
import authRoute from "./routes/authRoute.js";
import messagesRoute from "./routes/messagesRoute.js";
import userRoute from "./routes/userRoute.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages", messagesRoute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongodb();
  console.log(`Server started at ${PORT}`);
});
