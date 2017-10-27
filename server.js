"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";

const express     = require("express");
const methodOverride = require('method-override');
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Menu object routes
const menuRoutes = require("./routes/menu");
// Order object routes
const orderRoutes = require("./routes/order");
// Customer object routes
const customerRoutes = require("./routes/customer");

// Food Object routes
const foodRoutes = require("./routes/food")


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
// override with POST having ?_POSTOverride=PUT/DELETE method=POST
app.use(methodOverride('_POSTOverride'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static('public'))

// Mount user routes
app.use("/api/users", usersRoutes(knex));

// Get Datahelpers
const DataHelpers = require("./lib/data-helpers.js")(knex);

// Mount menu routes
app.use("/api/menus", menuRoutes(DataHelpers));

// Mount order routes
app.use("/api/orders", orderRoutes(DataHelpers));

// Mount customer routes
app.use("/api/customers", customerRoutes(DataHelpers));

// Mount food routes
app.use("/api/food", foodRoutes(DataHelpers));

// Home page
app.get("/", (req, res) => {
  res.render("landing");
});

//User Create Order page
app.get("/create", (req, res) => {
  res.render("index");
});

// Vendor page
app.get("/vendor", (req, res) => {
  res.render("./vendor_pages/vendormain");
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
