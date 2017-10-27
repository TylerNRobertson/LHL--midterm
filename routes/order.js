"use strict"

// Router middleware for Order Object
// Bernard Roach
// Tyler Robertson
//LHL midterm group project Oct 25
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

                res.json(orders);
            }
        });

    });

// post an order
  router.post("/", (req, res) => {
       let rightNow = new Date().toISOString();

    DataHelpers.postOrder({  customerId: Number(req.body.o_customerId),
                             placed: req.body.o_placed,
                             canceled: req.body.o_canceled,
                             ready: req.body.o_ready,
                             complete: req.body.o_complete,
                             date_time_created:rightNow,
                             date_time_pickup: rightNow,
                             date_time_completed: rightNow

                         },(err)=> {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).redirect('/data');
      }
    });

  });

// post an order item
  router.post("/item", (req, res) => {

    DataHelpers.postOrderItem({ foodItem_id: req.body.oi_foodItem_id,
                                orderId: req.body.oi_orderId,
                                price: req.body.oi_price,
                                quantity: req.body.oi_quantity
                         },(err)=> {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).redirect('/data');
      }
    });

  });

  router.put("/items/:id", (req, res) => {
  console.log("/items/:id");
          DataHelpers.updateOrderItem(JSON.parse(req.body.oi_json), (err) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.status(201).redirect('/data');
            }
        });
    });

  router.put("/:id", (req, res) => {

          DataHelpers.updateOrder(JSON.parse(req.body.o_json), (err) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.status(201).redirect('/data');
            }
        });
    });

    // delete a order
    router.delete("/:id", (req, res) => {

        DataHelpers.deleteOrder(req.params.id, (err) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.status(201).redirect('/data');
            }
        });

    });

    // delete a order item
    router.delete("/items/:id", (req, res) => {

        DataHelpers.deleteOrderItem(req.params.id, (err) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.status(201).redirect('/data');
            }
        });

    });

    return router;
}