const S = require("sequelize");
const db = require("../db/db");

class Products extends S.Model {}

Products.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    price: {
      type: S.DECIMAL(9, 2),
      allowNull: false,
    },
    image: {
      type: S.STRING,
    },
    stock: {
      type: S.INTEGER,
    },
    discount: {
      type: S.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize: db, modelName: "Products" }
);

module.exports = Products;
