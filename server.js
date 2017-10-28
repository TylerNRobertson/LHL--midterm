"use strict";

require('dotenv').config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";

const express = require("express");
const methodOverride = require('method-override');
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require('morgan');
const knexLogger = require('knex-logger');


//// API Routes

// Seperated Routes for each Resource
const usersRoutesAPI = require("./routes/users");

// Menu object routes
const menuRoutesAPI = require("./routes/menu");
// Order object routes
const orderRoutesAPI = require("./routes/order");
// Customer object routes
const customerRoutesAPI = require("./routes/customer");

// Food Object routes
const foodRoutesAPI = require("./routes/food");



//// NAVIGATION ROUTES

// Menu

// Customer router
const customerMenuRoutes = require("./routes/customer/menu");
// Vendor router
const vendorMenuRoutes = require("./routes/vendor/menu");

// Customer router
const customerOrderRoutes = require("./routes/customer/order");
// Vendor router
const vendorOrderRoutes = require("./routes/vendor/order");

// Food routes

// Customer router
const customerFoodRoutes = require("./routes/customer/food");
// Vendor router
const vendorFoodRoutes = require("./routes/vendor/food");

// Customer routes

// Customer router
const customerCustomerRoutes = require("./routes/customer/customer");
// Vendor router
const vendorCustomerRoutes = require("./routes/vendor/customer");

 function selectDefaultMenu(menus){

    // select the first menu by default
   let defaultMenu = menus[0];

    menus.forEach((menu) => {
        if (menu.default == true) {
            defaultMenu = menu;
        };
    });

    return defaultMenu;

};

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
// override with POST having ?_POSTOverride=PUT/DELETE method=POST
app.use(methodOverride('_POSTOverride'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use("/styles", sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: 'expanded'
}));
app.use(express.static('public'))

// Mount user routes
app.use("/api/users", usersRoutesAPI(knex));

// Get Datahelpers
const DataHelpers = require("./lib/data-helpers.js")(knex);

// Mount menu routes
app.use("/api/menus", menuRoutesAPI(DataHelpers));

// Mount order routes
app.use("/api/orders", orderRoutesAPI(DataHelpers));

// Mount customer routes
app.use("/api/customers", customerRoutesAPI(DataHelpers));

// Mount food routes
app.use("/api/food", foodRoutesAPI(DataHelpers));


// Mount CUSTOMER NAVIGATION Routes
// Mount menu routes
app.use("/customer/menus", customerMenuRoutes(DataHelpers));

// Mount order routes
app.use("/customer/orders", customerOrderRoutes(DataHelpers));

// Mount customer routes
app.use("/customer/customer", customerCustomerRoutes(DataHelpers));

// Mount food routes
app.use("/customer/food", customerFoodRoutes(DataHelpers));


// Mount Vendor NAVIGATION Routes
// Mount menu routes
app.use("/vendor/menus", vendorMenuRoutes(DataHelpers));

// Mount order routes
app.use("/vendor/orders", vendorOrderRoutes(DataHelpers));

// Mount vendor routes
app.use("/vendor/customer", vendorCustomerRoutes(DataHelpers));

// Mount food routes
app.use("/vendor/food", vendorFoodRoutes(DataHelpers));


// Home page
app.get("/", (req, res) => {

    res.render("landing");
});

// Home page
app.get("/data", (req, res) => {
    res.render("index_bernie_test");
});


//User Create Order page
app.get("/create", (req, res) => {
  console.log("params",req.params);
  console.log("query",req.query.menuId);

let activeMenuId = req.params.menuId || req.query.menuId;
console.log("id ",activeMenuId);
    DataHelpers.getMenus(null, (err, menus) => {
        let activeMenu = menus.filter((menu)=>{ return menu.id == activeMenuId})[0];
        console.log(activeMenu);
        if (err) {
            console.log(err);
        } else {
          if(!activeMenu){
            activeMenu = selectDefaultMenu(menus);
          };

            // we need to determine which is the start menu
            // flag in the menu?
            console.log("id before get items",activeMenu.id);
            DataHelpers.getMenuItems(activeMenu.id, (err, activeMenuItems) => {
                if (err) {
                    console.log(err);
                } else {
                  console.log("id before rendor",activeMenu.id);
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

// Vendor page
app.get("/vendor", (req, res) => {
    res.render("./vendor_pages/vendormain");
});

app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
});