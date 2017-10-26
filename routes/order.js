"use strict"
const express = require('express');
const router  = express.Router();

module.exports = (DataHelpers) => {

  router.get("/", (req, res) => {
    DataHelpers.getOrders({all: true}, (err, orders)=> {
      console.log("route for orders we are here");
        if (err) {
        res.status(500).json({ error: err.message });
      } else {
        console.log(orders);
        res.json(orders);
      }
    });

  });

    router.get("/items/", (req, res) => {
    DataHelpers.getOrderItems({all: true}, (err, orderItems)=> {
      console.log("route for order items we are here");
        if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(orderItems);
      }
    });

  });

  return router;
}