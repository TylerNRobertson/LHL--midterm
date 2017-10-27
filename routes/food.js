"use strict"
const express = require('express');
const router  = express.Router();

module.exports = (DataHelpers) => {


// get food items
    router.get("/", (req, res) => {

    DataHelpers.getFoodItems(null, (err, foodItems)=> {
        if (err) {
        res.status(500).json({ error: err.message });
      } else {

        res.json(foodItems);
      }
    });

  });

    // get a food item
    router.get("/:id", (req, res) => {

    DataHelpers.getFoodItems(req.params.id, (err, foodItems)=> {
        if (err) {
        res.status(500).json({ error: err.message });
      } else {

        res.json(foodItems);
      }
    });

  });

// post a food item
  router.post("/", (req, res) => {

    DataHelpers.postFoodItem({
                    name: req.body.fi_name,
                    description: req.body.fi_description,
                    category: req.body.fi_category,
                    type: req.body.fi_type,
                    prep_time_min: parseInt(req.body.fi_prep_time_min),
                    pop_index: parseInt(req.body.fi_pop_index),
                    price: Number(req.body.fi_price).toFixed(2)
                             },(err)=> {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).redirect('/data');
      }
    });

  });

// update a food item
  router.put("/:id", (req, res) => {

        DataHelpers.updateFoodItem(JSON.parse(req.body.fi_json), (err) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.status(201).redirect('/data');
            }
        });
    });

    // delete a food item
    router.delete("/:id", (req, res) => {

        console.log(req.params.id);
        DataHelpers.deleteFoodItem(req.params.id, (err) => {
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

};