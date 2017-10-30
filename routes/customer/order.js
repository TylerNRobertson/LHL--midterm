"use strict"
const express = require('express');
const app = express.Router();

// orders
module.exports = (DataHelpers) => {
app.get("/", (req, res) => {

// specific order
 req.session.activeOrder = 1;

 DataHelpers.getFoodItems(null, (err, foodItems) => {
    let foodItemsObject = {};
    foodItems.forEach((item) => {
        foodItemsObject[item.id] = item;
    });
     DataHelpers.getOrders(1, (err, orders) => {

        let activeOrder = orders[0];
           DataHelpers.getOrderItems(1, (err, activeOrderItems) => {
                if (err) {
                    console.log(err);
                } else {
                    let orderTotal = 0;
                    activeOrderItems.forEach((item) => {
                        orderTotal = Number(item.price) + Number(orderTotal);

                    });


                    DataHelpers.getCustomers(1, (err, result) => {

                        res.render('customerorder', {
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
         })
     });
 });



app.get("/:id", (req, res) => {});
// order items
app.get("/items", (req, res) => {});
// specific order item
app.get("/items/:id", (req, res) => {

});

app.put("/items/:id", (req, res) => {

});



return app;

}