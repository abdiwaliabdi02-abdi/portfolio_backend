import express from "express";
import cors from "cors";
import profileRoutes from "./routes/profile.routes";

// ✅ Swagger imports
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger/swagger";

const app = express();

// ✅ Enable CORS (allow frontend to connect)
app.use(cors());

// ✅ Parse JSON body
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// ✅ API routes
app.use("/api/profiles", profileRoutes);

// ✅ Swagger (ADD HERE — after routes)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ✅ Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📄 Swagger docs at http://localhost:${PORT}/api-docs`);
});

export default app;
