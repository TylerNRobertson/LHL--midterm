exports.seed = function(knex, Promise) {
  return knex('customer').del()
    .then(function () {
      let rightNow = new Date();
      return Promise.all([
        knex('customer').insert({  id: 1,
                                   first_name: 'Bernard',
                                   last_name: 'Roach',
                                   address  : 'Only the finest address',
                                   phone    : 'BES-TPH-ONE#'
                                 }),
          knex('order').insert({  customerId: 1,
                                date_time_created: rightNow,
                                date_time_pickup: rightNow.setMinutes(rightNow.getMinutes() + 30),
                            }),
      ]);
    });
};