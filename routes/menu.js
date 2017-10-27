"use strict"
const express = require('express');
const router  = express.Router();

module.exports = (DataHelpers) => {

    router.get("/items/", (req, res) => {
    DataHelpers.getMenuItems({all: true}, (err, menuItems)=> {
        if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(menuItems);
      }
    });

  });

  router.get("/", (req, res) => {
    DataHelpers.getMenus({all: true}, (err, menus)=> {
        if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(menus);
      }
    });

  });



// post a menu
  router.post("/", (req, res) => {

    DataHelpers.postMenu({  name: req.body.menuname,
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

    DataHelpers.postMenuItem({  menuId: req.body.mi_menuID,
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


// update a menu item
  router.put("/:id", (req, res) => {


  });

  // delete a menu item
  router.delete("/:id", (req, res) => {
   console.log("delete menu");
   console.log(req.params.id);
   DataHelpers.deleteMenu(req.params.id,(err)=> {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).redirect('/');
      }
    });

  });

  return router;
}