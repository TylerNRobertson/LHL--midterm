//
// $(() => {
//
// // menu select test
//   $.ajax({
//     method: "GET",
//     url: "/api/menus"
//   }).done((menus) => {
//     for(menu of menus) {
//       $("<div>").text(menu.name).appendTo($("body"));
//     }
//   });
//
//   $.ajax({
//     method: "GET",
//     url: "/api/menus/items"
//   }).done((menuItems) => {
//     for(item of menuItems) {
//       $("<div>").text(item.id).appendTo($("body"));
//     }
//   });
//
// // order select test
//   $.ajax({
//     method: "GET",
//     url: "/api/orders"
//   }).done((orders) => {
//     for(order of orders) {
//       $("<div>").text(order.id).appendTo($("body"));
//     }
//   });
//
//   $.ajax({
//     method: "GET",
//     url: "/api/orders/items"
//   }).done((orderItems) => {
//     for(item of orderItems) {
//       $("<div>").text(item.id).appendTo($("body"));
//     }
//   });
//
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });
//
//
// });
//
