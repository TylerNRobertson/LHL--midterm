
$(() => {

// menu select test
  $.ajax({
    method: "GET",
    url: "/api/menus"
  }).done((menus) => {
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

  $.ajax({
    method: "GET",
    url: "/api/orders/items"
  }).done((orderItems) => {
    for(item of orderItems) {
      $("<div>").text(item.id).appendTo($("#orderitemtest"));
    }
  });

  $.ajax({
    method: "GET",
    url: "/api/customers"
  }).done((customers) => {
    for(customer of customer) {
      $("<div>").text(customer.name).appendTo($("#orderitemtest"));
    }
  });


});

