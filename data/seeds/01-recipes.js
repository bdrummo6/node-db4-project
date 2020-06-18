
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe-book').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe-book').insert([
         {name: 'recipe-1'},
         {name: 'recipe-2'},
         {name: 'recipe-3'},
         {name: 'recipe-4'},
         {name: 'recipe-5'}
      ]);
    });
};
