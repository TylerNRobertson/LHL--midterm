"use strict"
const express = require('express');
const app = express.Router();


module.exports = (DataHelpers) => {
// get food, get menus, get a default menu and items to display
    app.get("/", (req, res) => {


        DataHelpers.getFoodItems(null, (err, foodItems) => {
             if (err) {
                        console.log(err);
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
console.log(" get food item page", req.params.id);
console.log("under construction");
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

      //   DataHelpers.getFoodItems(null, (err, foodItems) => {
      //     let foodItemsObject = {};
      //     foodItems.forEach((item)=>{ foodItemsObject[item.id] = item });

      //   DataHelpers.getMenus(null, (err, menus) => {
      //       // we need to determine which is the start menu
      //       // flag in the menu?


      //       let activeMenuArray = menus.filter((menu) => {
      //           return menu.id == req.params.id
      //       });
      //       if (activeMenuArray.length) {
      //           let activeMenu = activeMenuArray[0];
      //           DataHelpers.getMenuItems(activeMenu.id, (err, activeMenuItems) => {
      //               if (err) {
      //                   console.log(err);
      //               } else {
      //                   res.render('vendormenu', {
      //                       menus: menus,
      //                       activeMenu: activeMenu,
      //                       activeMenuItems: activeMenuItems,
      //                       foodItems: foodItemsObject,
      //                       cookies: req.cookies
      //                   });
      //               }
      //           });
      //           // something happened just go to index page
      //       } else {
      //           let activeMenu = selectDefaultMenu(menus);
      //           DataHelpers.getMenuItems(activeMenu.id, (err, activeMenuItems) => {
      //               if (err) {
      //                   console.log(err);
      //               } else {
      //                   res.render('vendormenu', {
      //                       menus: menus,
      //                       activeMenu: activeMenu,
      //                       activeMenuItems: activeMenuItems,
      //                       foodItems: foodItemsObject,
      //                       cookies: req.cookies
      //                   });
      //               }
      //           });
      //       }
      //   });
      // });




    // menu items
    app.get("/items", (req, res) => {});
    // specific menu item
    app.get("/items/:id", (req, res) => {});

    return app;

}