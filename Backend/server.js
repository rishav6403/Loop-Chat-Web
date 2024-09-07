import express from "express";
import dotenv from "dotenv";

import authRoute from "./routes/authRoute.js";
import connectToMongodb from "./db/connections.js";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(express.json())

app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  return res.send("Hii from the server");
});


app.listen(PORT, () => {
  connectToMongodb();

  console.log(`Server started at ${PORT}`);
});
