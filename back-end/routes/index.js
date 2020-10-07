const express = require("express");
const router = express.Router();
const Products = require("../models/products");

router.get("/products", (req, res) => {
  Products.findAll().then((allProducts) => res.status(200).send(allProducts));
});

router.post("/products/add", (req, res) => {
  Products.create(req.body).then(() => res.sendStatus(201));
});

router.delete("/products/delete/:id", (req, res) => {
  Products.findByPk(req.params.id)
    .then((product) => {
      product.destroy();
    })
    .then(() => Products.findAll())
    .then((allProducts) => res.status(200).send(allProducts));
});

router.get("/products/:id", (req, res) => {
  Products.findByPk(req.params.id).then((product) =>
    res.status(200).send(product)
  );
});

router.post("/products/:id", (req, res) => {
  Products.findByPk(req.params.id)
    .then((product) => {
      return product.update(req.body);
    })
    .then(() =>
      Products.findAll().then((allProducts) =>
        res.status(201).send(allProducts)
      )
    );
});

module.exports = router;
