"use strict"
const express = require('express');
const router  = express.Router();

module.exports = (DataHelpers) => {

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

// post a menu
  router.post("/", (req, res) => {

    DataHelpers.postFoodItem({  name: req.body.menuname,
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

  return router;

};