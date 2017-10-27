"use strict"
const express = require('express');
const router  = express.Router();

module.exports = (DataHelpers) => {

  router.get("/", (req, res) => {

    DataHelpers.getCustomers(null, (err, customers)=> {
        if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(customers);
      }
    });

  });

  router.get("/:id", (req, res) => {

    DataHelpers.getCustomers(req.params.id, (err, customers)=> {
        if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(customers);
      }
    });

  });

// post a customer
  router.post("/", (req, res) => {

    DataHelpers.postCustomer({
                    first_name: req.body.c_first_name,
                    last_name: req.body.c_last_name,
                    address: req.body.c_address,
                    phone: req.body.c_phone,
                    email: req.body.c_email,
                             },(err)=> {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).redirect('/');
      }
    });

  });

// update a customer
  router.put("/:id", (req, res) => {


  });

    // delete a customer
    router.delete("/:id", (req, res) => {
        console.log("delete food item");
        console.log(req.params.id);
        DataHelpers.deleteCustomer(req.params.id, (err) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.status(201).redirect('/');
            }
        });

    });


  return router;
}