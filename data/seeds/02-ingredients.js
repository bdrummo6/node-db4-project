
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
         {name: 'ingredient-1'},
         {name: 'ingredient-2'},
         {name: 'ingredient-3'},
         {name: 'ingredient-4'},
         {name: 'ingredient-5'}
      ]);
    });
};
