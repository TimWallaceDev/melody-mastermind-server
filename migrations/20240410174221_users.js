/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
function up(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary()
    table.string("username").notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
function down(knex) {
  return knex.schema.dropTable("users")
};

export {up, down};
