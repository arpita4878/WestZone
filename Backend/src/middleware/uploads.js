import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath = "uploads"; 

    if (req.baseUrl.includes("brand")) {
      uploadPath = "uploads/brands";
    } else if (req.baseUrl.includes("category")) {
      uploadPath = "uploads/categories";
    } else if (req.baseUrl.includes("product")) {
      uploadPath = "uploads/products";
    } else if (req.baseUrl.includes("pdf-banners")) {
      uploadPath = "uploads/pdfs";  
    }else if (req.baseUrl.includes("branch")) {
      uploadPath = "uploads/branch";  
    }

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (req.baseUrl.includes("pdf-banners")) {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed for banners!"), false);
    }
  } else {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  }
};

export const upload = multer({ storage, fileFilter });
