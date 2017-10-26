exports.seed = function(knex, Promise) {
      let rightNow = new Date().toISOString();
    return knex('food_items').del()
        .then(function() {

            return Promise.all([
                knex('food_items').insert({
                    id: 1,
                    name: 'GoodFood',
                    category: 'Food that makes you laugh... then cry',
                    type: 'Gas/vapour',
                    prep_time_min: 30,
                    pop_index: 0,
                    description : "This is like.. so good you don't even understand"
                }),
                knex('menu').insert({
                    id: 1,
                    name: 'That is a sharp looking menu',
                    category: 'Basically you are a genius',
                    description: 'impossible to describe, but think Salvador Dali playing Jai Lai moments before a strategic nuclear assault in a distopiann future where that kind of event does not even make the news'
                }),
            ]).then(() => {
              return knex('menu_items').del()
        .then(function() {
                return Promise.all([

                    knex('menu_items').insert({
                        id: 1,
                        menuId: 1,
                        category: 'item category, but still a pretty category',
                        foodId : 1
                    })
                ]);
              });
            });
        });
}