"use strict"
const express = require('express');
const app = express.Router();

// orders
module.exports = (DataHelpers) => {
    app.get("/", (req, res) => {});
    // specific order
    app.get("/:id", (req, res) => {});
    // order items
    app.get("/items", (req, res) => {});
    // specific order item
    app.get("/items/:id", (req, res) => {

    });

    app.put("/items/:id", (req, res) => {
        console.log("putting order item");
        if (!req.session.activeOrder.items) {
          req.session.activeOrder.items = {};
        }
        if (!req.session.activeOrder.items[req.params.id]) {

            req.session.activeOrder.items[req.params.id] = {
                orderId: req.session.activeOrder.id,
                foodItem_id: req.params.id,
                quantity: req.body.oi_quantity

            };
                    // get the food price and multiply by quantity.
        DataHelpers.getFoodItems(req.params.id, (err, result) => {
            console.log("food item for order price calculation");
            console.log(result[0].price);
            console.log(req.body.oi_quantity);
            req.session.activeOrder.items[req.params.id].price = Number(result[0].price) * req.body.oi_quantity;
        console.log("after quantity");
        console.log(req.session.activeOrder);
        })

        }


    });

    return app;

}