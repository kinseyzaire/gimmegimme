exports.up = function(knex, Promise) {
  return knex.schema.createTable('wants', function(table){
    table.increments();
    table.string('name');
    table.string('price');
    table.string('images');
    table.string('links');
    table.string('notes');
    table.string('category');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('wants');
};
