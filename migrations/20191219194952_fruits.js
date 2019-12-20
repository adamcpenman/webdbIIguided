exports.up = async function(knex) {
  await knex.schema.createTable("fruits", (table) => {
      //table.integer("id").notNull().unique().primary()
      //translate to "id" INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT
      table.increments("id")
      //translate to "name" NOT NULL UNIQUE
      table.text("name").notNull().unique()
      //translate to "avgWeightOz" FLOAT
      table.float("avgWeightOz")
      //translate to "delicious" BOOLEAN Default 0
      table.boolean("delicious").defaultTo(false)
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("fruits")
};
