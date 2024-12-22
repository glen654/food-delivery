import express from "express";
import { addFood, getFood, deleteFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image storage engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/get", getFood);
foodRouter.delete("/delete", deleteFood);

export default foodRouter;
