"use strict"
const express = require('express');
const app = express.Router();

// orders
module.exports = (DataHelpers) => {
app.get("/", (req, res) => {
  console.log("get customer order");
// specific order
 req.session.activeOrder = 1;

 DataHelpers.getFoodItems(null, (err, foodItems) => {
    let foodItemsObject = {};
    foodItems.forEach((item) => {
        foodItemsObject[item.id] = item;
    });
     DataHelpers.getOrders(1, (err, orders) => {
console.log("order");
console.log(orders);
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
                        console.log("getting customer")
                        console.log(result)
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
    console.log("putting order item");


    //             // get the food price and multiply by quantity.
    // DataHelpers.getFoodItems(req.params.id, (err, result) => {
    //     console.log("food item for order price calculation");
    //     console.log(result[0].price);
    //     console.log(req.body.oi_quantity);

    // console.log("after quantity");
    // console.log(req.session.activeOrder);
});



return app;

}