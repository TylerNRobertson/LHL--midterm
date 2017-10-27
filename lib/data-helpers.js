// These helper functions will be used to communicate between the server and db
// the purpose is to:
// 1. translate the object activity to db activities
// 2. abstract away the db so the server can focus instead on the object themselves
module.exports = function makeDataHelpers(knex) {
    return {

        ////// GETTING STUFF //////
        getMenus: function(menuId, callback) {
            //       This should return an array of menus (to be delivered 10.26)
            if (menuId == true) {
                knex
                    .select("*")
                    .from("menu")
                    .where("id", menuId)
                    .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
            } else {
                knex
                    .select("*")
                    .from("menu")
                    .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
            }
        },

        // get  menu items
        getMenuItems: function(menuId, callback) {
            //        This should return a menu item object (to be delivered 10.26)
            if (menuId) {
                knex
                    .select("*")
                    .from("menu_items")
                    .where("menuId", menuId)
                    .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
            } else {
                knex
                    .select("*")
                    .from("menu_items")
                    .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
            }

        },

        // get  a menu item
        getMenuItem: function(itemId, callback) {
            //        This should return a menu item object (to be delivered 10.26)

            knex
                .select("*")
                .from("menu_items")
                .where("id", itemId)
                .then((results) => {
                    callback(null, results);
                })
                .catch((err) => {
                    callback(err)
                });
        },


        getCustomers: function(customerId, callback) {
            //       This should return a customer object  (to be delivered 10.26)
            if (customerId) {
                knex
                    .select("*")
                    .from("customer")
                    .where("id", customerId)
                    .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
            } else {

                knex
                    .select("*")
                    .from("customer")
                    .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
            }

        },

        getFoodItems: function(foodItemId, callback) {
            //       This should return a customer object  (to be delivered 10.26)
            if (foodItemId) {
                knex
                    .select("*")
                    .from("food_items")
                    .where("id", foodItemId)
                    .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
            } else {
                knex
                    .select("*")
                    .from("food_items")

                .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
            }
        },


        getOrders: function(selectOptions, callback) {
            //       This should return an array of Orders (to be delivered 10.26)
            if (selectOptions.all == true) {
                knex
                    .select("*")
                    .from("order")
                    .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
            } else {
                knex
                    .select("*")
                    .from("order")
                    .where("id", selectOptions.id)
                    .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
            }
        },

        // get a menu item
        getOrderItems: function(selectOptions, callback) {
            //        This should return an order item object (to be delivered 10.26)
            if (selectOptions.all == true) {
                knex
                    .select("*")
                    .from("order_items")
                    .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
            } else {
                knex
                    .select("*")
                    .from("order_items")
                    .where("id", selectOptions.id)
                    .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
            }
        },

        /////// POSTING STUFF

        postMenu: function(newMenu, callback) {
            //       This should post a menu (to be delivered 10.26)
            knex("menu")
                .insert({
                    name: newMenu.name,
                    category: newMenu.category,
                    description: newMenu.description
                })
                .then((results) => {
                    callback(null, results);
                })
                .catch((err) => {
                    callback(err)
                });
        },

        postMenuItem: function(newMenuItem, callback) {
            //       This should post a menu item (to be delivered 10.26)

            knex("menu_items")
                .insert({
                    menuId: parseInt(newMenuItem.menuId),
                    foodId: parseInt(newMenuItem.foodId),
                    category: newMenuItem.category
                })
                .then((results) => {
                    callback(null, results);
                })
                .catch((err) => {
                    callback(err)
                });
        },

        postOrder: function(newOrder, callback) {
            //       This should post an order (to be delivered 10.26)

            knex("order")
                .insert({
                    customerId: parseInt(newOrder.customerId),
                    placed: newOrder.placed,
                    canceled: newOrder.canceled,
                    ready: newOrder.ready,
                    complete: newOrder.complete,
                    date_time_created: newOrder.date_time_created,
                    date_time_pickup: newOrder.date_time_pickup,
                    date_time_completed: newOrder.date_time_completed
                })
                .then((results) => {
                    callback(null, results);
                })
                .catch((err) => {
                    callback(err)
                });
        },

        postOrderItem: function(newOrderItem, callback) {
            //       This should post an order item (to be delivered 10.26)

            knex("order_items")
                .insert({
                    orderId: parseInt(newOrderItem.orderId),
                    foodItem_id: parseInt(newOrderItem.foodItem_id),
                    quantity: parseInt(newOrderItem.quantity),
                    price: Number(newOrderItem.price).toFixed(2)
                })
                .then((results) => {
                    callback(null, results);
                })
                .catch((err) => {
                    callback(err)
                });
        },

        postFoodItem: function(newFoodItem, callback) {
            //       This should post an food item (to be delivered 10.26)


            knex("food_items")
                .insert({
                    name: newFoodItem.name,
                    description: newFoodItem.description,
                    category: newFoodItem.category,
                    type: newFoodItem.type,
                    prep_time_min: parseInt(newFoodItem.prep_time_min),
                    pop_index: parseInt(newFoodItem.pop_index),
                    price: Number(newFoodItem.price).toFixed(2)
                })
                .then((results) => {
                    callback(null, results);
                })
                .catch((err) => {
                    callback(err)
                });
        },

        postCustomer: function(newCustomer, callback) {
            // This should post an food item (to be delivered 10.26)


            knex("customer")
                .insert({
                    first_name: newCustomer.first_name,
                    last_name: newCustomer.last_name,
                    address: newCustomer.address,
                    phone: newCustomer.phone,
                    email: newCustomer.email,
                })
                .then((results) => {
                    callback(null, results);
                })
                .catch((err) => {
                    callback(err)
                });
        },

        ///// DELETE STUFF
        deleteFoodItem: function(foodItemId, callback) {

            //       This should delete a food item (to be delivered 10.26)
            knex('food_items')
                .where('id', foodItemId)
                .del()
                .then(
                    (results) => {
                        callback(null, results);
                    })
                .catch((err) => {
                    callback(err)
                });
        },
        deleteOrder: function(orderId, callback) {

            //       This should delete an order (to be delivered 10.26)

            knex('order_items')
                .where('orderId', orderId)
                .del()
                .then((results) => {
                    knex('order')
                        .where('id', orderId)
                        .del()
                        .then((results) => {
                            callback(null, results);
                        })
                        .catch((err) => {
                            callback(err)
                        })
                })
                .catch((err) => {
                    callback(err)
                });
        },
        deleteOrderItem: function(orderItemId, callback) {
            //       This should delete an order item (to be delivered 10.26)
            knex('order_items')
                .where('id', orderItemId)
                .del()
                .then(
                    (results) => {
                        callback(null, results);
                    })
                .catch((err) => {
                    callback(err)
                });
        },


        deleteMenu: function(menuId, callback) {
            //       This should delete a menu(to be delivered 10.26)


            knex('menu_items')
                .where('menuId', menuId)
                .del()
                .then((results) => {

                    knex('menu')
                        .where('id', menuId)
                        .del()
                        .then((results) => {
                            callback(null, results);
                        })
                        .catch((err) => {
                            callback(err)
                        })
                })
                .catch((err) => {
                    callback(err)
                });
        },


        deleteMenuItem: function(menuItemId, callback) {
            //       This should delete a menu item (to be delivered 10.26)
            knex('menu_items')
                .where('id', menuItemId)
                .del()
                .then(
                    (results) => {
                        callback(null, results);
                    })
                .catch((err) => {
                    callback(err)
                });
        },


        deleteCustomer: function(customerId, callback) {
            //       This should post an food item (to be delivered 10.26)

            knex('customer')
                .where('id', customerId)
                .del()
                .then(
                    (results) => {
                        callback(null, results);
                    })
                .catch((err) => {
                    callback(err)
                });
        },

        ///// UPDATE STUFF
        updateFoodItem: function(foodItem, callback) {
            //       This should post an food item (to be delivered 10.26)
            console.log("update under construction");
            // console.log(newFoodItem);
            // knex("food_items")
            //     .insert({
            //         name: newFoodItem.name,
            //         description: newFoodItem.description,
            //         category: newFoodItem.category,
            //         type: newFoodItem.type,
            //         prep_time_min: parseInt(newFoodItem.prep_time_min),
            //         pop_index: parseInt(newFoodItem.pop_index),
            //         price: Number(newFoodItem.price).toFixed(2)
            //     })
            //     .then((results) => {
            //         callback(null, results);
            //     })
            //     .catch((err) => {
            //         callback(err)
            //     });
        },

        updateOrderItem: function(orderItem, callback) {
            //       This should post an food item (to be delivered 10.26)
            console.log("update under construction");
            // console.log(newFoodItem);
            // knex("food_items")
            //     .insert({
            //         name: newFoodItem.name,
            //         description: newFoodItem.description,
            //         category: newFoodItem.category,
            //         type: newFoodItem.type,
            //         prep_time_min: parseInt(newFoodItem.prep_time_min),
            //         pop_index: parseInt(newFoodItem.pop_index),
            //         price: Number(newFoodItem.price).toFixed(2)
            //     })
            //     .then((results) => {
            //         callback(null, results);
            //     })
            //     .catch((err) => {
            //         callback(err)
            //     });
        },

        updateMenuItem: function(menuItem, callback) {
            //       This should post an food item (to be delivered 10.26)
            console.log("update under construction");
            // console.log(newFoodItem);
            // knex("food_items")
            //     .insert({
            //         name: newFoodItem.name,
            //         description: newFoodItem.description,
            //         category: newFoodItem.category,
            //         type: newFoodItem.type,
            //         prep_time_min: parseInt(newFoodItem.prep_time_min),
            //         pop_index: parseInt(newFoodItem.pop_index),
            //         price: Number(newFoodItem.price).toFixed(2)
            //     })
            //     .then((results) => {
            //         callback(null, results);
            //     })
            //     .catch((err) => {
            //         callback(err)
            //     });
        },
        updateCustomer: function(customer, callback) {
            //       This should post an food item (to be delivered 10.26)
            console.log("update under construction");
            // console.log(newFoodItem);
            // knex("food_items")
            //     .insert({
            //         name: newFoodItem.name,
            //         description: newFoodItem.description,
            //         category: newFoodItem.category,
            //         type: newFoodItem.type,
            //         prep_time_min: parseInt(newFoodItem.prep_time_min),
            //         pop_index: parseInt(newFoodItem.pop_index),
            //         price: Number(newFoodItem.price).toFixed(2)
            //     })
            //     .then((results) => {
            //         callback(null, results);
            //     })
            //     .catch((err) => {
            //         callback(err)
            //     });
        },




    }
};