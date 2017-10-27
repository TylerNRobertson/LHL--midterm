
$(() => {

// menu select test
  $.ajax({
    method: "GET",
    url: "/api/menus"
  }).done((menus) => {
    console.log("got menus");
    for(menu of menus) {
      let $div = $("<div>").text(JSON.stringify(menu)).appendTo($("#menutest"));
      let $form = $("<form>")
        .attr("action",`/api/menus/${menu.id}?_POSTOverride=DELETE`)
        .attr("method","POST")
        .html(`<input type="submit" value="Delete${menu.id}">`)
        .appendTo($div);
    }
  });

  $.ajax({
    method: "GET",
    url: "/api/menus/items"
  }).done((menuItems) => {
    for(item of menuItems) {
      let $div = $("<div>").text(JSON.stringify(item)).appendTo($("#menuitemtest"));
      let $form = $("<form>")
        .attr("action",`/api/menus/items/${item.id}?_POSTOverride=DELETE`)
        .attr("method","POST")
        .html(`<input type="submit" value="Delete${item.id}">`)
        .appendTo($div);
    }
  });

// order select test
  $.ajax({
    method: "GET",
    url: "/api/orders"
  }).done((orders) => {
    for(order of orders) {
      let $div = $("<div>").text(JSON.stringify(order)).appendTo($("#ordertest"));
      let $form = $("<form>")
        .attr("action",`/api/orders/${order.id}?_POSTOverride=DELETE`)
        .attr("method","POST")
        .html(`<input type="submit" value="Delete${order.id}">`)
        .appendTo($div);
    }
  });
// order item test
  $.ajax({
    method: "GET",
    url: "/api/orders/items"
  }).done((orderItems) => {
    for(item of orderItems) {
      let $div = $("<div>").text(JSON.stringify(item)).appendTo($("#orderitemtest"));
      let $form = $("<form>")
        .attr("action",`/api/orders/items/${item.id}?_POSTOverride=DELETE`)
        .attr("method","POST")
        .html(`<input type="submit" value="Delete${item.id}">`)
        .appendTo($div);
    }
  });

// customer test
  $.ajax({
    method: "GET",
    url: "/api/customers"
  }).done((customers) => {

    for(customer of customers) {
      let $div = $("<div>").text(JSON.stringify(customer)).appendTo($("#customertest"));
      let $form = $("<form>")
        .attr("action",`/api/customers/${customer.id}?_POSTOverride=DELETE`)
        .attr("method","POST")
        .html(`<input type="submit" value="Delete${customer.id}">`)
        .appendTo($div);
    }
  });

// food test
  $.ajax({
    method: "GET",
    url: "/api/food"
  }).done((food) => {
    console.log("food", food);
    for(foodItem of food) {
      let $div = $("<div>").text(JSON.stringify(foodItem)).appendTo($("#fooditemtest"));
      let $form = $("<form>")
        .attr("action",`/api/food/${foodItem.id}?_POSTOverride=DELETE`)
        .attr("method","POST")
        .html(`<input type="submit" value="Delete${foodItem.id}">`)
        .appendTo($div);
    }
  });


});

