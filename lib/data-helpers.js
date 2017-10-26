// These helper functions will be used to communicate between the server and db
// the purpose is to:
// 1. translate the object activity to db activities
// 2. abstract away the db so the server can focus instead on the object themselves
module.exports = function makeDataHelpers(knex) {
    return {


        // Get all tweets in `db`, sorted by newest first
        getMenus: function(selectOptions, callback) {
            //       This should return an array of menus (to be delivered 10.26)
            knex
                .select("*")
                .from("menu")
                .then((results) => {
                    callback(null,results);
                })
                .catch((err) => {
                    callback(err)
                });
        },

        // get a menu item
        getMenuItems: function(selectOptions, callback) {
            //        This should return a menu item object (to be delivered 10.26)
            console.log("calling items");
            knex
                .select("*")
                .from("menu_items")
                .then((results) => {
                    callback(null, results);
                })
                .catch((err) => {
                    callback(err)
                });
        },


        getCustomers: function(selectOptions, callback) {
            //       This should return a customer object  (to be delivered 10.26)
            knex
                .select("*")
                .from("customer")
                .then((results) => {
                    callback(null, results);
                })
                .catch((err) => {
                    callback(err)
                });
        },

        // Get all tweets in `db`, sorted by newest first
        getOrders: function(selectOptions, callback) {
            //       This should return an array of Orders (to be delivered 10.26)
            knex
                .select("*")
                .from("order")
                .then((results) => {
                    callback(null, results);
                })
                .catch((err) => {
                    callback(err)
                });
        },

        // get a menu item
        getOrderItems: function(selectOptions, callback) {
            //        This should return an order item object (to be delivered 10.26)
            knex
                .select("*")
                .from("order_items")
                .then((results) => {
                    callback(null, results);
                })
                .catch((err) => {
                    callback(err)
                });
        },


    }
};