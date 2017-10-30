//
 $(document).ready(() => {
//

$(".addItemToCart").on("click", function(event){
  // prevent the button from sending POST
  event.preventDefault();

let oldCookieValue = Cookies.get('010');
if(oldCookieValue) {
Cookies.set('010', ++oldCookieValue);
} else {
  Cookies.set('010', 0);
}
console.log(oldCookieValue);
$(this).siblings(".qty").text(oldCookieValue);
});

$(".subItemFromCart").on("click", function(event){
  // prevent the button from sending POST
  event.preventDefault();
  console.log("click order item")
let oldCookieValue = Cookies.get('010');

if(oldCookieValue) {
Cookies.set('010', --oldCookieValue);
} else {
  Cookies.set('010', 0);
}
console.log(oldCookieValue);
$(this).siblings(".qty").text(oldCookieValue);
});

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
 });
//

// For button animations
$(function() {
  $('.btn-6')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});
