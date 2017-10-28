"use strict"
const express = require('express');
const app  = express.Router();

// menus
module.exports = (DataHelpers) => {
app.get("/", (req, res) => {});
// specific menu
app.get("/:id", (req, res) => {});
// menu items
app.get("/items", (req, res) => {});
// specific menu item
app.get("/items/:id", (req, res) => {});

return app;

}