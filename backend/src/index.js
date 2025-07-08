// import express from "express";
// import dotenv from "dotenv";
// import authRoutes from "./routes/auth.route.js";
// import messageRoutes from "./routes/message.route.js";
// import { connectDB } from "./lib/db.js";
// import cookieParser from "cookie-parser";
// import cors from "cors"

// import path from "path";

// import { app, server } from "./lib/socket.js";

// dotenv.config();

// const PORT = process.env.PORT;
// const __dirname = path.resolve();

// app.use(express.json());
// app.use(cookieParser());
// app.use(cors(
//     {
//         origin: "http://localhost:5173",
//         credentials: true
//     }
// ))

// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);

// if(process.env.NODE_ENV==="production"){
//     app.use(express.static(path.join(__dirname, "../frontend/dist")));

//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//     })
// }

// server.listen(PORT, () => {
//     console.log(`Server is running at Port: ${PORT}`);
//     connectDB();
// });

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

// Load env variables
dotenv.config();

// Handle __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Port
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS setup
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

// API Routes
app.use("/api/auth", authRoutes);         // Handles all /api/auth routes (e.g., /login, /register)
app.use("/api/messages", messageRoutes);  // Handles /api/messages routes

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Start server
server.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  connectDB(); // Connect to database
});
