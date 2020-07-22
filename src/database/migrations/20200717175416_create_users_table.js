
exports.up = function(knex,promise) {
  return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('nome', 80).notNullable();
        table.string("email",80).notNullable();
        table.string("password",80).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
};

exports.down = function(knex, promise) {
  return knex.schema.dropTable('users');
};
