
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('customer', function(table) {
      table.increments('id').primary().unsigned();
      table.string('first_name');
      table.string('last_name');
      table.string('address');
      table.string('phone');
      table.string('email');
    }),
    knex.schema.createTable('food_items', function(table){
      table.increments('id').primary().unsigned();
      table.string('name');
      table.string('category');
      table.string('type');
      table.integer('prep_time_min');
      table.decimal('price').unsigned();
      table.integer('pop_index').unsigned();
      table.string('description');
    }),
    knex.schema.createTable('order', function(table){
      table.increments('id').primary().unsigned();
      table.integer('customerId').unsigned();
      table.foreign('customerId').references('customer.id');
      table.date('date_time_created');
      table.date('date_time_pickup');
      table.date('date_time_completed');
      table.boolean('placed');
      table.boolean('payed');
      table.boolean('canceled');
      table.boolean('ready');
      table.boolean('complete')
    }),
    knex.schema.createTable('order_items', function(table) {
      table.increments('id').primary().unsigned();
      table.integer('orderId').unsigned();
      table.foreign('orderId').references('order.id');
      table.integer('foodItem_id').unsigned();
      table.foreign('foodItem_id').references('food_items.id');
      table.integer('quantity').unsigned();
      table.decimal('price').unsigned();
    }),
    knex.schema.createTable('menu', function(table) {
      table.increments('id').primary().unsigned();
      table.string('name');
      table.string('category');
      table.string('description');
    }),
    knex.schema.createTable('menu_items', function(table) {
      table.increments('id').primary().unsigned();
      table.integer('menuId').unsigned();
      table.foreign('menuId').references('menu.id');
      table.string('category');
      table.integer('foodId').unsigned();
      table.foreign('foodId').references('food_items.id');
    })
  ])
};

exports.down = function(knex, Promise) {
 return Promise.all([
   knex.schema.dropTable('menu'),
   knex.schema.dropTable('menu_items'),
   knex.schema.dropTable('order_items'),
   knex.schema.dropTable('order'),
   knex.schema.dropTable('food_items'),
   knex.schema.dropTable('customer')
 ])
};
