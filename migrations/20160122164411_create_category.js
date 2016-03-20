exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function(table){
    table.increments();
    table.string('type');
    table.string('hex');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
