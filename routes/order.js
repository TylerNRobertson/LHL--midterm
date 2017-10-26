"use strict"
const express = require('express');
const router = express.Router();

module.exports = (DataHelpers) => {

    router.get("/items/", (req, res) => {
        DataHelpers.getOrderItems({
            all: true
        }, (err, orderItems) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.json(orderItems);
            }
        });

    });

    router.get("/", (req, res) => {
        DataHelpers.getOrders({
            all: true
        }, (err, orders) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                console.log(orders);
                res.json(orders);
            }
        });

    });

// post a menu
  router.post("/", (req, res) => {

    DataHelpers.postOrder({  name: req.body.menuname,
                            description: req.body.menudesc,
                            category: req.body.menucat
                         },(err)=> {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).redirect('/');
      }
    });

  });

// post a menu item
  router.post("/item", (req, res) => {

    DataHelpers.postOrderItem({  menuId: req.body.mi_menuID,
                                foodId: req.body.mi_foodID,
                                category: req.body.mi_cat
                         },(err)=> {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).redirect('/');
      }
    });

  });

    return router;
}