// for test tool.
$(() => {

// menu select test
  $.ajax({
    method: "GET",
    url: "/api/menus"
  }).done((menus) => {
    for(menu of menus) {
      let $div = $("<div>").text(JSON.stringify(menu)).appendTo($("#menutest"));
      let $form = $("<form>")
        .attr("action",`/api/menus/${menu.id}?_POSTOverride=DELETE`)
        .attr("method","POST")
        .html(`<input type="submit" value="Delete${menu.id}">`)
        .appendTo($div);
      let $put = $("<form>")
        .attr("action",`/api/menus/${menu.id}?_POSTOverride=PUT`)
        .attr("method","POST")
        .html(`<input type="submit" value="Update${menu.id}">
              <textarea name="m_json" style="width:100%" >${JSON.stringify(menu)}</textarea>`)
        .appendTo($div);
    }
  });

  $.ajax({
    method: "GET",
    url: "/api/menus/items"
  }).done((menuItems) => {
    for(let item of menuItems) {
      let $div = $("<div>").text(JSON.stringify(item)).appendTo($("#menuitemtest"));
      let $form = $("<form>")
        .attr("action",`/api/menus/items/${item.id}?_POSTOverride=DELETE`)
        .attr("method","POST")
        .html(`<input type="submit" value="Delete${item.id}">`)
        .appendTo($div);
      let $put = $("<form>")
        .attr("action",`/api/menus/items/${item.id}?_POSTOverride=PUT`)
        .attr("method","POST")
        .html(`<input type="submit" value="Update${item.id}">
              <textarea name="mi_json" style="width:100%" >${JSON.stringify(item)}</textarea>`)
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
      let $put = $("<form>")
        .attr("action",`/api/orders/${order.id}?_POSTOverride=PUT`)
        .attr("method","POST")
        .html(`<input type="submit" value="Update${order.id}">
              <textarea name="o_json" style="width:100%" >${JSON.stringify(order)}</textarea>`)
        .appendTo($div);
    }
  });
// order item test
  $.ajax({
    method: "GET",
    url: "/api/orders/items"
  }).done((orderItems) => {
    for(let item of orderItems) {
      let $div = $("<div>").text(JSON.stringify(item)).appendTo($("#orderitemtest"));
      let $form = $("<form>")
        .attr("action",`/api/orders/items/${item.id}?_POSTOverride=DELETE`)
        .attr("method","POST")
        .html(`<input type="submit" value="Delete${item.id}">`)
        .appendTo($div);
      let $put = $("<form>")
        .attr("action",`/api/orders/items/${item.id}?_POSTOverride=PUT`)
        .attr("method","POST")
        .html(`<input type="submit" value="Update${item.id}">
              <textarea name="oi_json" style="width:100%" >${JSON.stringify(item)}</textarea>`)
        .appendTo($div);
    }
  });

// customer test
  $.ajax({
    method: "GET",
    url: "/api/customers"
  }).done((customers) => {

    for(let customer of customers) {
      let $div = $("<div>").text(JSON.stringify(customer)).appendTo($("#customertest"));
      let $form = $("<form>")
        .attr("action",`/api/customers/${customer.id}?_POSTOverride=DELETE`)
        .attr("method","POST")
        .html(`<input type="submit" value="Delete${customer.id}">`)
        .appendTo($div);
      let $put = $("<form>")
        .attr("action",`/api/customers/${customer.id}?_POSTOverride=PUT`)
        .attr("method","POST")
        .html(`<input type="submit" value="Update${customer.id}">
              <textarea name="c_json" style="width:100%" >${JSON.stringify(customer)}</textarea>`)
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
      let $div = $("<div>").text(foodItem.id).appendTo($("#fooditemtest"));
      let $delete = $("<form>")
        .attr("action",`/api/food/${foodItem.id}?_POSTOverride=DELETE`)
        .attr("method","POST")
        .html(`<input type="submit" value="Delete${foodItem.id}">`)
        .appendTo($div);
      let $put = $("<form>")
        .attr("action",`/api/food/${foodItem.id}?_POSTOverride=PUT`)
        .attr("method","POST")
        .html(`<input type="submit" value="Update${foodItem.id}">
              <textarea name="fi_json" style="width:100%" >${JSON.stringify(foodItem)}</textarea>`)
        .appendTo($div);
    }
  });


});

