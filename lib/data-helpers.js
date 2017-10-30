// These helper functions will be used to communicate between the server and db
// the purpose is to:
// 1. translate the object activity to db activities
// 2. abstract away the db so the server can focus instead on the object themselves
module.exports = function makeDataHelpers(knex) {
    return {

        ////// GETTING STUFF //////
        getMenus: function(menuId, callback) {
            //       This should return an array of menus (to be delivered 10.26)
            if (menuId) {
                knex
                    .select("*")
                    .from("menu")
                    .where("id", menuId)
                    .catch((err) => {
                        callback(err)
                        return
                    })
                    .then((results) => {
                        callback(null, results);
                        return
                    })

            } else {
                knex
                    .select("*")
                    .from("menu")
                    .catch((err) => {
                        callback(err);
                        return;
                    })
                    .then((results) => {
                        callback(null, results);
                        return
                    })
;
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


        getOrders: function(OrderId, callback) {
            //       This should return an array of Orders (to be delivered 10.26)
            if (OrderId) {
                knex
                    .select("*")
                    .from("order")
                    .where("id", OrderId)
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
                    .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });

            }
        },

        // get a menu item
        getOrderItems: function(OrderId, callback) {
            //        This should return an order item object (to be delivered 10.26)
            if (OrderId) {
                knex
                    .select("*")
                    .from("order_items")
                    .where("orderId", OrderId)
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
                .returning("id")
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
                .returning("id")
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
              if(newOrder){
            knex("order")
                .returning("id")
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
            } else {
              knex("order")
                .returning("id")
                .insert({customerId : 17})
                .then((results) => {
                    callback(null, results);
                })
                .catch((err) => {

                    callback(err)
            })
        }

        },

        postOrderItem: function(newOrderItem, callback) {
            //       This should post an order item (to be delivered 10.26)

            knex("order_items")
                .returning("id")
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
                .returning("id")
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
                .returning("id")
                .insert({
                    first_name: newCustomer.first_name,
                    last_name: newCustomer.last_name,
                    address: newCustomer.address,
                    phone: newCustomer.phone,
                    email: newCustomer.email,
                })
                .then((results) => {
                    console.log("results in helper");
                    console.log(results);
                    callback(null, results);
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
            //       This should update an food item (to be delivered 10.26)

            knex('food_items')
                .where('id', foodItem.id)
                .update(foodItem)
                .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
        },

        updateOrder: function(order, callback) {
            //       This should update an order (to be delivered 10.26)
            knex('order')
                .where('id', order.id)
                .update(order)
                .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
        },


        updateOrderItem: function(orderItem, callback) {
            //       This should update a menu item (to be delivered 10.26)
            knex('order_items')
                .where('id', orderItem.id)
                .update(orderItem)
                .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
        },


        updateMenu: function(menu, callback) {
            //       This should update a menu (to be delivered 10.26)
            knex('menu')
                .where('id', menu.id)
                .update(menu)
                .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
        },


        updateMenuItem: function(menuItem, callback) {
            //       This should update a menu item (to be delivered 10.26)
            knex('menu_items')
                .where('id', menuItem.id)
                .update(menuItem)
                .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
        },

        updateCustomer: function(customer, callback) {
            //       This should post a customer (to be delivered 10.26)

            knex('customer')
                .where('id', customer.id)
                .update(customer)
                .then((results) => {
                        callback(null, results);
                    })
                    .catch((err) => {
                        callback(err)
                    });
        },

    }
};