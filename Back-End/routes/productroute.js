import express from "express";
import * as productController from "../controllers/productcontroller.js";
import upload from "../middlewares/multer.js";
import protect from '../middlewares/authmiddleware.js';


const router = express.Router();

router.get("/product", productController.getAllProducts);
router.get("/product/:id", productController.getOneProduct);
router.post(
  "/product",
  upload.single("image"),protect,
  productController.createProduct
);
router.patch(
  "/product/:id",
  upload.single("image"),protect,
  productController.updateProduct
);
router.delete("/product/:id",protect, productController.deleteProduct);

export default router;

