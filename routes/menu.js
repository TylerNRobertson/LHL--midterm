"use strict"
const express = require('express');
const router  = express.Router();

module.exports = (DataHelpers) => {

  router.get("/", (req, res) => {
    DataHelpers.getMenus({all: true}, (err, menus)=> {
        if (err) {
        res.status(500).json({ error: err.message });
      } else {
        console.log(menus);
        res.json(menus);
      }
    });

  });

    router.get("/items/", (req, res) => {
    DataHelpers.getMenuItems({all: true}, (err, menuItems)=> {
        if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(menuItems);
      }
    });

  });

  return router;
}