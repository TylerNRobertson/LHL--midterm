"use strict"
const express = require('express');
const router  = express.Router();

module.exports = (DataHelpers) => {


// get food items
    router.get("/", (req, res) => {
      console.log("food item route found");
    DataHelpers.getFoodItems({all: true}, (err, foodItems)=> {
        if (err) {
        res.status(500).json({ error: err.message });
      } else {
        console.log("food items",foodItems);
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
        res.status(201).redirect('/');
      }
    });

  });

  return router;

};