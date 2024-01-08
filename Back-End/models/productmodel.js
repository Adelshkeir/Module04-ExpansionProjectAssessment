import sequelize from "../databaseconnection/database-connection.js";
import { DataTypes } from "sequelize";
import Category from "./categorymodel.js";

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  supplier: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Category.hasMany(Product, {
  foreignKey: "categoryId",
  allowNull: false,
  onDelete: "CASCADE",
});
Product.belongsTo(Category, { foreignKey: "categoryId", allowNull: false });

export default Product;