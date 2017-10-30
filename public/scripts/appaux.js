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
