
$(() => {

// menu select test
  $.ajax({
    method: "GET",
    url: "/api/menus"
  }).done((menus) => {
    console.log("got menus");
    for(menu of menus) {
      $("<div>").text(menu.name).appendTo($("#menutest"));
    }
  });

  $.ajax({
    method: "GET",
    url: "/api/menus/items"
  }).done((menuItems) => {
    for(item of menuItems) {
      $("<div>").text(item.id).appendTo($("#menuitemtest"));
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

