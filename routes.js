const express = require("express");
const router = express.Router();
const Product = require("./models/Product");
const Order = require("./models/Order");

// get all products
router.get("/products", async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json(products);
});

// posting products
router.post("/products", async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  const newProduct = Product.build({
    name: name,
    description: description,
    price: price,
    imageUrl: imageUrl,
  });
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.json(error);
  }
});

// getting one product
router.get("/product/:id", async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(product);
});

// update a product
router.put("/product/:id", async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  const { name, description, price, imageUrl } = req.body;
  await product.set({
    name: name,
    description: description,
    price: price,
    imageUrl: imageUrl,
  });
  await product.save();

  res.status(200).json(product);
});

// delete a product
router.delete("/product/:id", async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  try {
    await product.destroy();
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(400).json(error);
  }
});

/**
 *
 *
 * Orders Section
 *
 *
 */

// get all orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.json(error);
  }
});

// posting orders
router.post("/orders", async (req, res) => {
  const {
    name,
    description,
    price,
    imageUrl,
    quantity,
    total,
    email,
    destination,
  } = req.body;
  const newOrder = Order.build({
    name: name,
    description: description,
    price: price,
    imageUrl: imageUrl,
    quantity: quantity,
    total: total,
    email: email,
    destination: destination,
  });
  try {
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.json(error);
  }
});

// getting one product
router.get("/order/:id", async (req, res) => {
  const order = await Order.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(order);
});

// update a order
router.put("/order/:id", async (req, res) => {
  const order = await Order.findOne({
    where: {
      id: req.params.id,
    },
  });
  const {
    name,
    description,
    price,
    imageUrl,
    quantity,
    total,
    email,
    destination,
  } = req.body;
  await order.set({
    name: name,
    description: description,
    price: price,
    imageUrl: imageUrl,
    quantity: quantity,
    total: total,
    email: email,
    destination: destination,
  });
  await order.save();

  res.status(200).json(order);
});

// delete a order
router.delete("/order/:id", async (req, res) => {
  const order = await Order.findOne({
    where: {
      id: req.params.id,
    },
  });
  try {
    await order.destroy();
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
