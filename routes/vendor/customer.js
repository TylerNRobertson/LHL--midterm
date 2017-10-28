// customer

"use strict"
const express = require('express');
const app  = express.Router();

module.exports = (DataHelpers) => {
app.get("/", (req, res) => {});
// specific order
app.get("/:id", (req, res) => {});

return app;
}