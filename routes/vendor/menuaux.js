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
            res.redirect(`/vendor/menusaux/${req.session.activeMenu}`);
        } else {
            DataHelpers.getMenus(null, (err, menus) => {
                //         // we need to determine which is the start menu
                req.session.defaultMenu = selectDefaultMenu(menus).id;

                res.redirect(`/vendor/menusaux/${req.session.defaultMenu}`);

            });
        }

    });

app.get("/new", (req, res) => {
DataHelpers.getMenus(null, (err, menus) => {
                //         // we need to determine which is the start menu

                res.render("vendormenunew", {menus : menus});
    });
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
                            res.render('vendormenu', {
                                  menus: menus,
                                  activeMenu: activeMenu,
                                  activeMenuItems: activeMenuItems,
                                  foodItems: foodItemsObject,
                                  cookies: req.cookies
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
                            res.render('vendormenu', {
                                menus: menus,

                                activeMenu: activeMenu,
                                activeMenuItems: activeMenuItems,
                                foodItems: foodItemsObject,
                                cookies: req.cookies
                            });
                        }
                    });
                }
            });
        });
    });



    // menu items
    app.get("/:id/items", (req, res) => {
      // new item selection
        console.log("here we have the add ADD menu item stuff");

        DataHelpers.getFoodItems(null, (err, foodItems) => {
             if (err) {
                        console.log(err);
                    } else {
                        res.render('vendormenuitem', {
                            menuId: req.params.id,
                            foodItems: foodItems,
                            cookies: req.cookies,
                            session: req.session
                        });
                    }
                });


            });



    // specific menu item
    app.get("/id/items/:itemId", (req, res) => {});
    // viewing/deleting/updating -- probably won't use
   // menu items
    app.post("/:id/items/:foodId", (req, res) => {
      // new item selection
        console.log("here we have the add ADD menu item stuff");
        console.log(req.params);

        DataHelpers.postMenuItem({
            menuId: req.params.id,
            foodId: req.params.foodId,
            category: "newly created"
        }, (err) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.status(201).redirect("/vendor/menusaux");;
            }
        });

    });


        // delete a menu item
    app.delete("/items/:id", (req, res) => {
        console.log("delete menu item");
        console.log(req.params.id);
        DataHelpers.deleteMenuItem(req.params.id, (err) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.status(201).redirect("/vendor/menusaux");
            }
        });


      });

     // delete a menu item
    app.post("/items/:id", (req, res) => {
        console.log("POST!!!elete menu item");
        console.log(req.params.id);
        DataHelpers.deleteMenuItem(req.params.id, (err) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.status(201).redirect("/vendor/menusaux");
            }
        });


      });

    // delete a menu
    app.delete("/:id", (req, res) => {
        console.log("delete menu");
        console.log(req.params.id);
        DataHelpers.deleteMenu(req.params.id, (err) => {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                req.session.activeMenu = req.session.defaultMenu;
                res.status(201).redirect('/vendor/menusaux');
            }
        });

    });


   // post a menu
    app.post("/", (req, res) => {

        DataHelpers.postMenu({
            name: req.body.menuname,
            description: req.body.menudesc,
            category: req.body.menucat
        }, (err,result) => {
          console.log("create menu", result);
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                req.session.activeMenu = result[0];
                res.status(201).redirect('/vendor/menusaux');
            }
        });

    });

    return app;

}


