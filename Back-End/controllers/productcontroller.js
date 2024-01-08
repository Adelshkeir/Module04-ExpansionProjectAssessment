import Product from "../models/productmodel.js";
import asyncHandler from "express-async-handler";
import Category from "../models/categorymodel.js";
// @desc    Get products
// @route   GET /api/products
// @access  Private
export const getAllProducts = asyncHandler(async (req, res) => {
  let cat = req.query.category_name;

  let config = {
    include: [
      {
        model: Category,
        where: { category_name: cat },
      },
    ],
  };

  if (cat) {
    const category = await Category.findOne({ where: { category_name: cat } });

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    config.include[0].where.id = category.id;
  }

  const products = await Product.findAll(config);
  res.status(200).json(products);
});
// @desc    Get one product
// @route   GET /api/products/:id
// @access  Private
export const getOneProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id, {
    include: [
      {
        model: Category,
      },
    ],
  });
  if (!product) {
    res.status(400);
    throw new Error("Cannot find product");
  }
  res.status(200).json(product);
});

export const createProduct = asyncHandler(async (req, res) => {

  const { title, description,price, supplier, categoryId } =
    req.body;
  if (
    !title ||
    !description ||
    !price ||
    !supplier ||
    !categoryId
  ) {
    res.status(400);
    throw new Error("Cannot create product");
  }
  const product = await Product.create({ ...req.body });
  res.status(200).json(product);
});


export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }

  let updatedFields = { ...req.body };

  if (req.file) {
    updatedFields.image = req.file.path;
  }

  await Product.update(updatedFields, { where: { id: id } });

  const updatedProduct = await Product.findByPk(id);
  res.status(200).json(updatedProduct);
});


export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }
  await product.destroy();
  res.status(200).json(product);
});
