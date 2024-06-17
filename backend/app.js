import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Import database initialization function
import dbInit from "./data/db-init.js";

// Import routes
import countryRouter from "./routes/countries.routes.js";

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/countries", countryRouter);

// Start the server
(async function start() {
  const PORT = process.env.PORT;
  await dbInit();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})();
