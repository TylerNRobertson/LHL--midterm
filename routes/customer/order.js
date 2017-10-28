"use strict"
const express = require('express');
const app  = express.Router();

// orders
module.exports = (DataHelpers) => {
app.get("/", (req, res) => {});
// specific order
app.get("/:id", (req, res) => {});
// order items
app.get("/items", (req, res) => {});
// specific order item
app.get("/items/:id", (req, res) => {});

return app;

}