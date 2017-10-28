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
    //User Create Order page
    app.get("/", (req, res) => {

        DataHelpers.getMenus(null, (err, menus) => {
            // we need to determine which is the start menu
            // flag in the menu?
            let activeMenu = selectDefaultMenu(menus);
            DataHelpers.getMenuItems(activeMenu.id, (err, activeMenuItems) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render('index', {
                        menus: menus,
                        activeMenu: activeMenu,
                        activeMenuItems: activeMenuItems
                    });
                }
            });
        });
    });


    // specific menu
    app.get("/:id", (req, res) => {

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
                                res.render('index', {
                                    menus: menus,
                                    activeMenu: activeMenu,
                                    activeMenuItems: activeMenuItems
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
                                res.render('index', {
                                    menus: menus,
                                    activeMenu: activeMenu,
                                    activeMenuItems: activeMenuItems
                                });
                            }
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