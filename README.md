# Node Skeleton

## Project Setup

1. Create your own empty repo on GitHub
2. Clone this repository (do not fork)
  - Suggestion: When cloning, specify a different folder name that is relevant to your project
3. Remove the git remote: `git remote rm origin`
4. Add a remote for your origin: `git remote add origin <your github repo URL>`
5. Push to the new origin: `git push -u origin master`
6. Verify that the skeleton code now shows up in your repo on GitHub

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above


# USER STORIES

List of user Stories

Nouns are in _italics_
Verbs are in **bold**

Some of these stories might be contradictory or too complicated.

## Customer user stories

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


## Vendor user stories
=======
# Vendor user stories


* As a _VENDOR_ I want to **CREATE** a _MENU_
* As a _VENDOR_ I want to **REMOVE** a _MENU_
* As a _VENDOR_ I want to **MODIFY** a _MENU_
  + As a _VENDOR_ I want to **ADD** a _CATEGORY_ on a _MENU_
  + As a _VENDOR_ I want to **REMOVE** a _CATEGORY_ on a _MENU_

* As a _VENDOR_ I want to **ADD** a _MENU ITEM LIST_ on a _MENU_
* As a _VENDOR_ I want to **SORT/SELECT** a _MENU ITEM LIST_ on a _MENU_ by _FOOD_ "POPULARITYINDEX"
  + As a _VENDOR_ I want to **ADD** a _MENU ITEM_ on a _MENU_
  + As a _VENDOR_ I want to **REMOVE** a _MENU ITEM_ on a _MENU_


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

# USER SCENARIOS

Given  When  Then
Our order is kind of like a shopping cart (maybe we should call it a shopping cart)
Instead of PLACING an ORDER we should CHECKOUT a shopping cart??


## Customer(ish) Scenarios

* GIVEN an _ORDER_ is **PLACED**
  + THEN **VERIFY** the _FOOD_ on the _ORDER_
* GIVEN a _CUSTOMER_ logsin/gets to home page
  + THEN _CUSTOMER_ **SEES** the _MENU_
* GIVEN a _CUSTOMER_ SELECTS a _MENU ITEM_
  + THEN an _ORDER_ is CREATED/UPDATED
  + AND an _ORDER LIST_ is created/updated
  + AND an _ORDER ITEM_ is **COPIED** from _FOOD_ on _MENU ITEM_
* GIVEN a _CUSTOMER_ **REMOVES** an _ORDER ITEM_ from the _ORDER ITEM LIST_
  + THEN _ORDER ITEM_ is **REMOVED** from _ORDER ITEM LIST_
* GIVEN an _ORDER ITEM_ is **MODIFIED**
  + THEN _ORDER ITEM_ is **VERIFIED**
* GIVEN a _CUSTOMER_ **PLACES** an _ORDER_
  + THEN the _ORDER_ "STATUS" is set to "PLACED"
* GIVEN an _ORDER_ "STATUS" is set to "PLACED"
  + THEN an _ORDER_ is **VERIFIED**
* GIVEN an _ORDER_ is **BEING VERIFIED**
  + THEN _ORDER ITEMS_ are **VERIFIED**
* GIVEN an _ORDER ITEM_ is **VERIFIED**
  + THEN the _ORDER ITEM_ has "PICKUPTIME" is determined
  + AND _ORDER ITEM_ "PRICE" is determined
* GIVEN all _ORDER ITMES_ of an _ORDER_ are **VERIFIED**
  + THEN the _ORDER_ is **VERIFIED**
  + AND _ORDER_ "PICKUPTIME" is determined
  + AND _ORDER_ "PROCE" is determined
* GIVEN an _ORDER_ has been **PLACED** by a _CUSTOMER_ and **VERIFIED**
  + THEN the _CUSTOMER_ can **ACCEPT** or **REJECT** the _ORDER_
* GIVEN a _CUSTOMER_ **ACCEPTS** an _ORDER_
  + THEN a _CUSTOMER_ **PAYS** the _ORDER_
* GIVEN a _CUSTOMER_ **ACCEPTS** AND **PAYS** the _ORDER_
  + THEN the _ORDER_ "STATUS" is set to **STARTED** or **TAKEN**
* GIVEN an _ORDER_ status is set to "DELIVERED"
  + THEN for every _FOOD ITEM_ found on the _ORDER_ **UPDATE** the "POPULARITYINDEX"


## Vendor(ish) Scenarios


* GIVEN a _VENDOR_ **ADDS** a _MENU_
* GIVEN a _VENDOR_ **REMOVES** a _MENU_
* GIVEN a _VENDOR_ **MODIFIES** a _MENU_
* GIVEN a _VENDOR_ **CANCELS** an _ORDER_
* GIVEN a _VENDOR_ **MODIFIES** an _ORDER_
  + THEN
* GIVEN a _VENDOR_ **REMOVES** a _MENU ITEM_
* GIVEN a _VENDOR_ **ADDS** a _MENU ITEM_
*

food item out of scope - just create them and then don't modify them.





