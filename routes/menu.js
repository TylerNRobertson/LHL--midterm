"use strict"
const express = require('express');
const router = express.Router();

module.exports = (DataHelpers) => {

// get all items
    router.get("/items/", (req, res) => {
      console.log("/items");
        DataHelpers.getMenuItems( null, (err, menuItems) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.json(menuItems);
            }
        });
      });

// get all menus
    router.get("/", (req, res) => {
      console.log("/");
        DataHelpers.getMenus({
            all: true
        }, (err, menus) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.json(menus);
            }
        });

      });

// get a single item
    router.get("/items/:id", (req, res) => {
      console.log("items/:id");
        DataHelpers.getMenuItem(req.params.id
        , (err, menuItem) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.json(menuItem);
            }
        });
    });



// get item for a menu
    router.get("/:id/items/", (req, res) => {
      console.log("/:id/items/");
        DataHelpers.getMenuItems(req.params.id
        , (err, menuItems) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.json(menuItems);
            }
        });
    });


    router.get("/:id", (req, res) => {
      console.log("/:id");
        DataHelpers.getMenus({
            all: false , id: req.params.id
        }, (err, menus) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.json(menus);
            }
        });

    });

    // post a menu
    router.post("/", (req, res) => {

        DataHelpers.postMenu({
            name: req.body.menuname,
            description: req.body.menudesc,
            category: req.body.menucat
        }, (err) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.status(201).redirect('/data');
            }
        });

    });

    // post a menu item
    router.post("/items", (req, res) => {

        DataHelpers.postMenuItem({
            menuId: req.body.mi_menuID,
            foodId: req.body.mi_foodID,
            category: req.body.mi_cat
        }, (err) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.status(201).redirect('/data');
            }
        });

    });


    // update a menu item

  router.put("/items/:id", (req, res) => {

          DataHelpers.updateMenuItem(JSON.parse(req.body.mi_json), (err) => {
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

          DataHelpers.updateMenu(JSON.parse(req.body.m_json), (err) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.status(201).redirect('/data');
            }
        });
    });

    // delete a menu item
    router.delete("/:id", (req, res) => {
        console.log("delete menu");
        console.log(req.params.id);
        DataHelpers.deleteMenu(req.params.id, (err) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.status(201).redirect('/data');
            }
        });

    });



    // delete a menu item
    router.delete("/items/:id", (req, res) => {
        console.log("delete menu item");
        DataHelpers.deleteMenuItem(req.params.id, (err) => {
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