const express = require("express");
const mongoose = require("mongoose");
const passportConfig = require("./lib/passportConfig");
const cors = require("cors");
const fs = require("fs");

// ==================== MongoDB ====================
mongoose
  .connect("mongodb://127.0.0.1:27017/jobPortal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connecté à la base de données"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ==================== Initialisation dossiers ====================
["./public", "./public/resume", "./public/profile"].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
});

// ==================== App ====================
const app = express();
const port = 4444;

// ==================== Middlewares ====================
app.use(cors());
app.use(express.json()); // ⬅️ SUFFISANT (body-parser inutile)
app.use(express.urlencoded({ extended: true }));
app.use(passportConfig.initialize());

// ==================== Routes ====================
app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/apiRoutes"));
app.use("/upload", require("./routes/uploadRoutes"));
app.use("/host", require("./routes/downloadRoutes"));

// ==================== Server ====================
app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
});
