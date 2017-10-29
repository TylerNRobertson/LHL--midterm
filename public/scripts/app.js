// Makes the vendors menus show up in the yourmenus section of the yourmenus popup
let yourmenufunc = function(){
  $.ajax({
      method: "GET",
      url: "/vendor/menus"
    }).done((menus) => {
      for(menu of menus) {
          let div = $('<div>').addClass('menuInfo')
            let name = $('<p>').addClass('menuName').text(menu.name)
            let id = $('<p>').addClass('menuID').text(menu.id)
            let desc = $('<p>').addClass('menuDesc').text(menu.description)
            let editBtn = $('<button>').attr('type', 'button').addClass('btn').addClass('btn-primary').attr('data-toggle', 'modal').attr('data-target', '#editmenupopup').attr('onclick', `showItems(${menu.id})`).text('Edit Menu')
            let deleteBtn = $('<button>').attr('type', 'button').addClass('btn').addClass('btn-primary').attr('data-toggle', 'modal').attr('data-target', '#deleteconfirmpopup').text('Delete Menu')
          div.append(name).append(id).append(desc).append(editBtn).append(deleteBtn)
          $('#yourmenus').append(div)
      }

    });
}
// Shows all items in a menu
function showItems(evt){
  console.log('show items')
$.ajax({
  method: 'GET',
  url: `/vendor/menus/${evt}/items`
}).done((menuItems) => {
  console.log(menuItems)
  for (let item of menuItems) {
    $.ajax({
      method: 'GET',
      url: `/vendor/menus/${evt}/items/food/${item.foodId}`
    }).done((foods) => {
      for (let food of foods) {
        let div = $('<div>').addClass('menuedititem')
          let image = $('<img>').attr('src', 'http://via.placeholder.com/125x125')
          let name = $('<h5>').text(food.name)
          let desc = $('<p>').text(food.description)
          let price = $('<p>').text('Price: $' + food.price)
          let remove = $('<button>').attr('type', 'button').addClass('btn').addClass('btn-primary').addClass('remove').text('Remove')
        div.append(image).append(name).append(desc).append(price).append(remove)
        $('#menuItems').append(div)
    }
  })
}
});
