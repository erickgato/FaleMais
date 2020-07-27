exports.up = function (knex, Promise) {
  return knex.schema
    .createTable("fm_ddd", (table) => {
      table.increments("ddd_id").primary();
      table.string("ddd", 5).notNullable();
      table.engine("InnoDB");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("fm_tarifa", (table) => {
      table.increments("tarifa_id").primary();
      table
        .integer("ddd_origin", 10)
        .unsigned()
        .references("ddd_id")
        .inTable("fm_ddd");
      table
        .integer("ddd_destination", 10)
        .unsigned()
        .references("ddd_id")
        .inTable("fm_ddd");
      table.string("H_M", 10).notNullable();
      table.engine("InnoDB");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("fm_plans", (table) => {
      table.increments("pl_id").primary();
      table.string("pl_name", 90).notNullable();
      table.string("pl_price", 10).notNullable();
      table.string('pl_tolerancy',4).notNullable();
      table.engine("InnoDB");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable("fm_tarifa")
    .dropTable("fm_ddd")
    .dropTable("fm_plans");
};
