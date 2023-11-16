const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const Order = sequelize.define("Order", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destination: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "Pending Confirmation",
  },
});

// sequelize.sync();

module.exports = Order;
