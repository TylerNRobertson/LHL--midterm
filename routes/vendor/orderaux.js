"use strict"
const express = require('express');
const app = express.Router();

function selectDefaultOrder(orders) {

    // select the first menu by default
    let defaultOrder = orders[0];

    orders.forEach((order, index) => {
        if (order.default == true) {
            defaultOrder = order;
        };
    });

    return defaultOrder;

};


// orders
module.exports = (DataHelpers) => {

        // specific order
        // get food, get menus, get a default menu and items to display
        app.get("/", (req, res) => {

            if (req.session.activeOrder) res.redirect(`/vendor/ordersaux/${req.session.activeOrder}`)

            DataHelpers.getOrders(null, (err, orders) => {
                //         // we need to determine which is the start menu
                req.session.defaultOrder = selectDefaultOrder(orders).id;

                res.redirect(`/vendor/ordersaux/${req.session.defaultOrder}`)

            });


        });



        app.get("/:id", (req, res) => {

    DataHelpers.getFoodItems(null, (err, foodItems) => {
        let foodItemsObject = {};
        foodItems.forEach((item) => {
            foodItemsObject[item.id] = item;
        });
        req.session.activeOrder = req.params.id;
        DataHelpers.getOrders(null, (err, orders) => {

            let activeOrderArray = orders.filter((order) => {
                return order.id == req.params.id
            });
            if (activeOrderArray.length) {
                let activeOrder = activeOrderArray[0];
                DataHelpers.getOrderItems(activeOrder.id, (err, activeOrderItems) => {
                    if (err) {
                        console.log(err);
                    } else {
                        let orderTotal = 0;
                        activeOrderItems.forEach((item) => {
                            orderTotal = Number(item.price) + Number(orderTotal);

                        });


                        DataHelpers.getCustomers(activeOrder.customerId,(err,result)=>{
    console.log("getting customer")
    console.log(req.session.activeCustomer);

console.log(result)

                        res.render('vendororder', {
                            orders: orders,
                            activeOrder: activeOrder,
                            activeOrderItems: activeOrderItems,
                            foodItems: foodItemsObject,
                            cookies: req.cookies,
                            orderTotal: orderTotal,
                            customer: result[0]
});
                        });
                    };
                })
            }
        });
    }); });



                    // order items
                    app.get("/items", (req, res) => {});
                    // specific order item
                    app.get("/items/:id", (req, res) => {});

                    return app;

                }