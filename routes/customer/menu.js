"use strict"
const express = require('express');
const app = express.Router();

function selectDefaultMenu(menus) {

    // select the first menu by default
    let defaultMenu = menus[0];

    menus.forEach((menu, index) => {
        if (menu.default == true) {
            defaultMenu = menu;
        };
    });

    return defaultMenu;

};

// menus
module.exports = (DataHelpers) => {
    // get food, get menus, get a default menu and items to display
    app.get("/", (req, res) => {










        if (req.session.activeMenu) {
            res.redirect(`/customer/menus/${req.session.activeMenu}`);
        } else {
            DataHelpers.getMenus(null, (err, menus) => {
                //         // we need to determine which is the start menu
                req.session.defaultMenu = selectDefaultMenu(menus).id;

                res.redirect(`/customer/menus/${req.session.defaultMenu}`);

            });
        }

    });


    // specific menu
    app.get("/:id", (req, res) => {
        DataHelpers.getFoodItems(null, (err, foodItems) => {
            let foodItemsObject = {};
            foodItems.forEach((item) => {
                foodItemsObject[item.id] = item
            });
            req.session.activeMenu = req.params.id;
            DataHelpers.getMenus(null, (err, menus) => {
                // we need to determine which is the start menu
                // flag in the menu?


                let activeMenuArray = menus.filter((menu) => {
                    return menu.id == req.params.id
                });
                if (activeMenuArray.length) {
                    let activeMenu = activeMenuArray[0];
                    DataHelpers.getMenuItems(activeMenu.id, (err, activeMenuItems) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.render('customermenu', {
                                menus: menus,
                                activeMenu: activeMenu,
                                activeMenuItems: activeMenuItems,
                                foodItems: foodItemsObject,
                                cookies: req.cookies,
                                activeOrder: 1
                            });
                        }
                    });
                    // something happened just go to index page
                } else {
                    let activeMenu = selectDefaultMenu(menus);
                    DataHelpers.getMenuItems(activeMenu.id, (err, activeMenuItems) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.render('customermenu', {
                                menus: menus,
                                activeMenu: activeMenu,
                                activeMenuItems: activeMenuItems,
                                foodItems: foodItemsObject,
                                cookies: req.cookies,
                                activeOrder: req.session.activeOrder
                            });
                        }
                    });
                }
            });
        });
    });



    // menu items
    app.get("/items", (req, res) => {});
    // specific menu item
    app.get("/items/:id", (req, res) => {});

    return app;

}