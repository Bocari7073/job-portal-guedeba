const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { promisify } = require("util");

const pipeline = promisify(require("stream").pipeline);

const router = express.Router();

const upload = multer();
const path = require("path");


const profileDir = path.join(__dirname, "../public/profile");
const resumeDir = path.join(__dirname, "../public/resume");

if (!fs.existsSync(profileDir)) {
  fs.mkdirSync(profileDir, { recursive: true });
}

if (!fs.existsSync(resumeDir)) {
  fs.mkdirSync(resumeDir, { recursive: true });
}


router.post("/resume", upload.single("file"), (req, res) => {
  const { file } = req;

  if (!file) return res.status(400).json({ message: "No file uploaded" });
  if (file.mimetype !== "application/pdf")
    return res.status(400).json({ message: "Invalid format" });

  const filename = `${uuidv4()}.pdf`;
  const filePath = path.join(__dirname, "../public/resume", filename);

  fs.writeFile(filePath, file.buffer, (err) => {
    if (err) return res.status(500).json({ message: "Error while uploading" });

    res.json({
      message: "File uploaded successfully",
      url: `/host/resume/${filename}`,
    });
  });
});



router.post("/profile", upload.single("file"), (req, res) => {
  try {
    const { file } = req;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Vérifie le format de l'image
    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      return res.status(400).json({ message: "Invalid format" });
    }

    // Détermine l'extension
    const extension = file.mimetype === "image/png" ? ".png" : ".jpg";
    const filename = `${uuidv4()}${extension}`;
    const uploadPath = path.join(__dirname, "../public/profile", filename);

    // Écrit le fichier directement depuis le buffer
    fs.writeFile(uploadPath, file.buffer, (err) => {
      if (err) {
        console.error("UPLOAD ERROR:", err);
        return res.status(500).json({ message: "Error while uploading file" });
      }

      res.json({
        message: "Profile image uploaded successfully",
        url: `/host/profile/${filename}`,
      });
    });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});



module.exports = router;
