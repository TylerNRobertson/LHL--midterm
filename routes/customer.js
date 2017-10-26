"use strict"
const express = require('express');
const router  = express.Router();

module.exports = (DataHelpers) => {

  router.get("/", (req, res) => {
    console.log("customer route found");
    DataHelpers.getCustomers({all: true}, (err, customers)=> {
        if (err) {
        res.status(500).json({ error: err.message });
      } else {
        console.log("route response customer",customers);
        res.json(customers);
      }
    });

  });



  return router;
}