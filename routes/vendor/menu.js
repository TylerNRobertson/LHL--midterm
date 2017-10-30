"use strict"

// NOT used in the end, will explain why later
const app  = express.Router();

// menus
module.exports = (DataHelpers) => {
app.get("/", (req, res) => {
  DataHelpers.getMenus(null, (err, menus) => {
    if (err) {
      res.status(500)
      return;
    }
    res.status(200).json(menus)
    return;
  })
});
// specific menu's items
app.get("/:id/items", (req, res) => {
  DataHelpers.getMenuItems(null, (err, items) => {
    if (err) {
      res.status(500)
      return;
    }
    res.status(200).json(items)
    return;
  })
})
// specific menu's menu item's food items
app.get("/:id/items/food/:id", (req, res) => {
  DataHelpers.getFoodItems(null, (err, foods) => {
    if (err) {
      res.status(500)
      return;
    }
    res.status(200).json(foods)
    return;
  })
});
// specific menu
app.get("/:id", (req, res) => {});
// menu items
app.get("/items", (req, res) => {});
// specific menu item
app.get("/items/:id", (req, res) => {});

return app;

}
