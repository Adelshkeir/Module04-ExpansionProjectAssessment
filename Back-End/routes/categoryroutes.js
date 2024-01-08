import express from "express";
import * as categoryController from "../controllers/categorycontroller.js";
import upload from "../middlewares/multer.js";
import protect from "../middlewares/authmiddleware.js";
const router = express.Router();

router.get("/category", categoryController.getAllCategories);
router.get("/category/:id", categoryController.getOneCategory);
router.post(
  "/category",
  upload.single("category_image"),
  protect,
  categoryController.createCategory
);
router.patch(
  "/category/:id",
  upload.single("category_image"),protect,
  categoryController.updateCategory
);
router.delete("/category/:id", protect,categoryController.deleteCategory);

export default router;
