
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.alterTable('order', function(table){
      table.dropColumn('date_time_created');
      table.dropColumn('date_time_pickup');
      table.dropColumn('date_time_completed');

      })
    ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.alterTable('order', function(table){
      table.date('date_time_created')
      table.date('date_time_pickup')
      table.date('date_time_completed')
      })
    ]);
};
