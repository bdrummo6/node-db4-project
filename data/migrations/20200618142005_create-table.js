

exports.up = function(knex) {
    return knex.schema
      .createTable('recipe-book', tbl => {
        tbl.increments();
        tbl.text('name', 128)
          .unique()
          .notNullable();
      })
     .createTable('ingredients', tbl => {
       tbl.increments();
       tbl.text('name', 128)
          .unique()
          .notNullable();
     })
    .createTable('steps', tbl => {
      tbl.increments();
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipe-book')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.integer('step_number')
        .unsigned()
        .notNullable();
      tbl.integer('ingredient_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('ingredients')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');
      tbl.float('quantity').notNullable();
      tbl.text('description')
        .notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipe-book');
  };
  
