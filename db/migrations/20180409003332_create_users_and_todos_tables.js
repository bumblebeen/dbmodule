
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.timestamps(true, true);
  }).createTable('todos', (table) => {
    table.increments();
    table.timestamps(true, true);
    table.string('title').notNullable();
    table.boolean('completed').notNullable().defaultTo(false);
    table.integer('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos').dropTable('users');
};
