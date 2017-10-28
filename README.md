DATABASE schema definitions are here:
https://docs.google.com/spreadsheets/d/1tdfC2ywA8dXkJvKh55d5tS1ZJUAGKIOQ6y8Etg3Tjmw/edit#gid=2007291170



How the work has been divided so far:
Front/Back-end division

all api routing done on the backend
all the screen flow done on the frontend
frontend requests data via ajax JSON calls.

# THINGS TO DO


pass as parameter the active menu for the create order screen

?menuId = menuID

have all the a=hrefs /create/?
Analysis

index.html

FRIDAY OCT 27.

1.put alert boxes everywhere for any event that needs to be handled
2.assign a class/classes/ids/whatevers to whatever events need to be verified
3.Start clicking on things and work to replace the alert boxes with code, or with nothing

Start the routing for the test webpages and loader


## SCARP THE FOLLOWING BUT THINK ABOUT IT FOR LATER
Take advantage of the bubbling event propagation

onClick listener api (delegated to higher level to allow for data checks/ stopevent propagation in order to allow for frontend page redirects )gets/put/delete/posts linked to class

onClick listener for data check at "closer" level

OR (could just have functions called at the same place in order avoid confusion)

idea is to keep functionality separate, possibly in totally separate script files.
## END OF SCRAP IDEA.

Sunday AM - refactor
Sunday PM - retest rehearse.

checker.js (can we)



List of user Stories

Nouns are in _italics_
Verbs are in **bold**

Some of these stories might be contradictory or too complicated.

# Customer user stories

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

# Vendor user stories


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
