"use strict"
const express = require('express');
const app = express.Router();


module.exports = (DataHelpers) => {
// get food, get menus, get a default menu and items to display
    app.get("/", (req, res) => {


        DataHelpers.getFoodItems(null, (err, foodItems) => {
             if (err) {

                    } else {
                        res.render('vendorfood', {
                            foodItems: foodItems,
                            cookies: req.cookies,
                            session: req.session
                        });
                    }
                });
            });



    // specific food
    app.get("/:id", (req, res) => {

        DataHelpers.getFoodItems(req.params.id, (err, foodItems) => {
             if (err) {
                        console.log(err);
                    } else {
                        res.render('vendorfooditem', {
                            foodItems: foodItems,
                            cookies: req.cookies,
                            session: req.session
                        });
                    }
                });
            });




    // menu items
    app.get("/items", (req, res) => {});
    // specific menu item
    app.get("/items/:id", (req, res) => {});

    return app;

}