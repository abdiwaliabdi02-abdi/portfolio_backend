import express from "express";
import profileRoutes from "./routes/profile.routes";

const app = express();

app.use(express.json());

app.use("/api/profiles", profileRoutes);

export default app;
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});