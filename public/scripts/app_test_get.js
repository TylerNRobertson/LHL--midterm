
$(() => {

// menu select test
  $.ajax({
    method: "GET",
    url: "/api/menus"
  }).done((menus) => {
    console.log("got menus");
    for(menu of menus) {
      let $div = $("<div>").text(menu.name).appendTo($("#menutest"));
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
      let $div = $("<div>").text(item.id).appendTo($("#menuitemtest"));
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
      $("<div>").text(order.id).appendTo($("#ordertest"));
    }
  });
// order item test
  $.ajax({
    method: "GET",
    url: "/api/orders/items"
  }).done((orderItems) => {
    for(item of orderItems) {
      $("<div>").text(item.id).appendTo($("#orderitemtest"));
    }
  });

// customer test
  $.ajax({
    method: "GET",
    url: "/api/customers"
  }).done((customers) => {

    for(customer of customers) {
      $("<div>").text(customer.first_name).appendTo($("#customertest"));
    }
  });

// food test
  $.ajax({
    method: "GET",
    url: "/api/food"
  }).done((food) => {
    console.log("food", food);
    for(foodItem of food) {
      $("<div>").text(foodItem.name).appendTo($("#fooditemtest"));
    }
  });


});

