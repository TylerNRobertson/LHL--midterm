exports.seed = function(knex, Promise) {
      let rightNow = new Date().toISOString();
    return knex('customer').del()
        .then(function() {

            return Promise.all([
                knex('customer').insert({
                    id: 1,
                    first_name: 'Someguy',
                    last_name: 'Laughing',
                    address: '123 Street funkytown',
                    phone: '111-111-1111',
                    email: 'test@test.com'
                }),
                knex('customer').insert({
                    id: 2,
                    first_name: '2Someguy2',
                    last_name: '2Laughing',
                    address: '222 Street funkytown',
                    phone: '222-222-2222',
                    email: 'test@test.com'
                }),
            ]).then(() => {
              return knex('order').del()
        .then(function() {
                return Promise.all([

                    knex('order').insert({
                        id: 1,
                        customerId: 2,
                        date_time_created: rightNow

                    })
                ]);
              });
            });
        });
}