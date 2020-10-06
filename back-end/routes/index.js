const express = require("express");
const router = express.Router();
const Products = require("../models/products");

router.get("/products", (req, res) => {
  Products.findAll().then((allProducts) => res.status(200).send(allProducts));
});

router.post("/products/add", (req, res) => {
  Products.create(req.body).then(() => res.sendStatus(201));
});

module.exports = router;
