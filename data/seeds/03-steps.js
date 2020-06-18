
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
         { recipe_id: 1, step_number: 1, ingredient_id: 1, quantity: 2, description: 'Add' },
         { recipe_id: 1, step_number: 2, ingredient_id: 3, quantity: 5, description: 'Add' },
         { recipe_id: 1, step_number: 3, ingredient_id: 1, quantity: 3, description: 'Add' },
         { recipe_id: 2, step_number: 1, ingredient_id: 5, quantity: 7, description: 'Add' },
         { recipe_id: 2, step_number: 2, ingredient_id: 1, quantity: 4, description: 'Add' },
         { recipe_id: 2, step_number: 3, ingredient_id: 4, quantity: 1, description: 'Add' },
         { recipe_id: 3, step_number: 1, ingredient_id: 2, quantity: 6, description: 'Add' },
         { recipe_id: 3, step_number: 2, ingredient_id: 1, quantity: 4, description: 'Add' },
         { recipe_id: 3, step_number: 3, ingredient_id: 4, quantity: 2, description: 'Add' },
         { recipe_id: 4, step_number: 1, ingredient_id: 1, quantity: 1, description: 'Add' },
         { recipe_id: 4, step_number: 2, ingredient_id: 3, quantity: 2, description: 'Add' },
         { recipe_id: 4, step_number: 3, ingredient_id: 5, quantity: 6, description: 'Add' },
         { recipe_id: 5, step_number: 1, ingredient_id: 2, quantity: 2, description: 'Add' },
         { recipe_id: 5, step_number: 2, ingredient_id: 1, quantity: 1, description: 'Add' },
         { recipe_id: 5, step_number: 3, ingredient_id: 4, quantity: 3, description: 'Add' }
      ]);
    });
};
