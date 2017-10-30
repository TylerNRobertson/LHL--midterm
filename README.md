
# Restaurant Pick-up midterm project

This app is an ordering/pick-up app which allows vendors to manage their orders, menus/menu items and food items which will be made availabe to order in the customer views.

# Getting Started

The app should be started on localhost:8080/aux

The .env file we used has the following contents for the DB connection

DB_HOST=localhost
DB_USER=labber
DB_PASS=labber
DB_NAME=midterm
DB_SSL=true if heroku
DB_PORT=5432


The app is thus split into 2 views - The vendor management view and the customer order view.

## Vendor View

The Vendor side of the app has essentially 3 views:

### Food Items View

Food Items are what can be ordered by the customer. Food Items can be created, modified and deleted. All menu items are built off of these food items. Without food items, there is no restaurant.

### Menu/Menu Items View

Food Items need to be organized and presented in some manner. This app does so through menu and menu items. Menus are a collection of menu items and menu items create the link between a menu and one or more food items. Only foods which are linked to a menu can be seen/ordered by the customer. Like food items, menu and menu items can be created, deleted or modified.

### Orders View

The Vendor Order view provides a list of all orders that have been made at the restaurant. Details of orders and the relevant customer information can be retrieved and are displayed on the same page. Orders cannot be deleted

## Customer View

The customer, or ordering view, allow a customer to order from a list of menus, verify their order and view/modify their profile

### Menu View

The customer select the menu of their choice and can choose to order menu items

### Order View

The order view displays the current order

### Customer View

The customer view displays profile information including address, phone, email etc.


## Dependencies

- Express 4.16.2
- Ejs 2.4.1
- DotEnv 2.0.0
- Node 5.10.x or above
- Cookie Session 2.0.0
- KNEX 0.11.7
- KNEX logger 0.1.0
- Method-override 2.3.10
- PG 6.0.2
- Bcrypt 1.0.3
- Body-Parser 1.18.2
- NodeMon 1.9.2
- Node-Sass-Middleware 0.11.0
- Chance 1.0.11


# Notes:

## User Stories

List of user Stories

Nouns are in _italics_
Verbs are in **bold**

Some of these stories might be contradictory or too complicated.

### Customer user stories

* As a _CUSTOMER_ I want to **VIEW** a _MENU_
* As a _CUSTOMER_ I want to **SELECT** a _MENU_ by _CATEGORY_
* As a _CUSTOMER_ I want to **SELECT** _FOOD_ from a _MENU_
* As a _CUSTOMER_ I want to **ORDER** _FOOD_ from a _MENU_

* As a _CUSTOMER_ I want to **MODIFY** my _ORDER_
  + As a _CUSTOMER_ I want to **ADD** an _ORDER LINE_
  + As a _CUSTOMER_ I want to **MODIFY** my _ORDER LINE_ _QUANTITY_
  + As a _CUSTOMER_ I want to **MODIFY** my _ORDER LINE_ _FOOD_
  + As a _CUSTOMER_ I want to **MODIFY** my _ORDER_ by adding _COUPON_
  + As a _CUSTOMER_ I want to **CANCEL** my _ORDER LINE_
  + As a _CUSTOMER_ I want to **PAY** my _ORDER_

* As a _CUSTOMER_ I want to **TRACK** my _ORDER_
  + As a _CUSTOMER_ I want to **REMOVE** my _ORDER LINE_
  + As a _CUSTOMER_ I want to **PLACE** an _ORDER_
    - As a _CUSTOMER_ I want to **MODIFY** an _ORDER_ _CUSTOMER REQUEST_ to "PLACE"
  + As a _CUSTOMER_ I want to **CANCEL** an _ORDER_
    - As a _CUSTOMER_ I want to **MODIFY** an _ORDER_ _CUSTOMER REQUEST_ to "CANCEL"
  + As a _CUSTOMER_ I want to **PAY** an _ORDER_

* As a _CUSTOMER_ I want to **TRACK/VIEW** an _ORDER_
* As a _CUSTOMER_ I want to **SEARCH** _FOOD_ by _PRICE_, _FOOD NAME_ and/or _FOOD TYPE_
* As a _CUSTOMER_ I want to **SORT** a _MENU_ and _MENU ITEMS_ by _PRICE_
* As a _CUSTOMER_ I want to **SORT** a _MENU_ and _MENU ITEMS_ by _PRICE_
* As a _CUSTOMER_ I want to **SORT** a _MENU_ and _MENU ITEMS_ by _CATEGORY_

### Vendor user stories


* As a _VENDOR_ I want to **CREATE** a _MENU_
* As a _VENDOR_ I want to **REMOVE** a _MENU_
* As a _VENDOR_ I want to **MODIFY** a _MENU_
  + As a _VENDOR_ I want to **ADD** a _CATEGORY_ on a _MENU_
  + As a _VENDOR_ I want to **REMOVE** a _CATEGORY_ on a _MENU_

* As a _VENDOR_ I want to **ADD** a _MENU ITEM LIST_ on a _MENU_
* As a _VENDOR_ I want to **SORT/SELECT** a _MENU ITEM LIST_ on a _MENU_ by _FOOD_ "QTYORDERED"

  + As a _VENDOR_ I want to **ADD** a _MENU ITEM_ on a _MENU_
  + As a _VENDOR_ I want to **REMOVE** a _MENU ITEM_ on a _MENU_
  + As a _VENDOR_ I want to **MODIFY** a _MENU ITEM_ on a _MENU_

* As a _VENDOR_ I want to **CREATE** a _MENU ITEM_ on a _MENU_ from _FOOD_
  + As a _VENDOR_ I want to **MODIFY** a _MENU ITEM_ _PRICE_
  + As a _VENDOR_ I want to **MODIFY** a _MENU ITEM_ _QUANTITY_
  + As a _VENDOR_ I want to **ADD** a _MENU ITEM_ _FOOD CATEGORY_

* As a _VENDOR_ I want to **CREATE** a _FOOD_
* As a _VENDOR_ I want to **REMOVE** a _FOOD_
* As a _VENDOR_ I want to **MODIFY** a _FOOD_
  + As a _VENDOR_ I want to **MODIFY** a _FOOD_ _PRICE_
  + As a _VENDOR_ I want to **MODIFY** a _FOOD_ _NAME_
  + As a _VENDOR_ I want to **MODIFY** a _FOOD_ _QUANTITY_
  + As a _VENDOR_ I want to **MODIFY** a _FOOD_ _PREP TIME_
  + As a _VENDOR_ I want to **MODIFY** a _FOOD_ _CATEGORY_


* As a _VENDOR_ I want to **CREATE**  an _ORDER_


  + As a _VENDOR_ I want to **MODIFY** an _ORDER_ _CLIENT_
  + As a _VENDOR_ I want to **MODIFY** an _ORDER_ _PRICE_
  + As a _VENDOR_ I want to **MODIFY** an _ORDER_ _OVERALL STATUS_
    - As a _VENDOR_ I want to **CANCEL**  an _ORDER_
    - As a _VENDOR_ I want to **MODIFY**  an _ORDER_
  + As a _VENDOR_ I want to **MODIFY** an _ORDER_ _PREP STATUS_
  + As a _VENDOR_ I want to **MODIFY** an _ORDER_ _PREP TIME_
  + As a _VENDOR_ I want to **MODIFY** an _ORDER_ _DELIVERY STATUS_
  + As a _VENDOR_ I want to **MODIFY** an _ORDER_ _DELIVERY TIME_
  + As a _VENDOR_ I want to **MODIFY** an _ORDER_ _PAY STATUS_
  + As a _VENDOR_ I want to **MODIFY** an _ORDER_ _PRIORITY_

* As a _VENDOR_ I want to **VIEW**  an _ORDER_
* As a _VENDOR_ I want to **VIEW** _ORDER ITEMS of an _ORDER_
* As a _VENDOR_ I want to **SEARCH** for an _ORDER_ by _CUSTOMER_
* As a _VENDOR_ I want to **SEARCH** for an _ORDER_ by _FOOD_

### Database design

DATABASE schema definitions are here:
https://docs.google.com/spreadsheets/d/1tdfC2ywA8dXkJvKh55d5tS1ZJUAGKIOQ6y8Etg3Tjmw/edit#gid=2007291170
