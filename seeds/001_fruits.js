
exports.seed = async function(knex) {
  await knex("fruits").truncate()
  await knex("fruits").insert([
    { name: "dragonfruit", avgWeightOz: 16.7, delicious: true, color: "red"},
    { name: "strawberry", avgWeightOz: 16.7, delicious: true, color: "red"},
    { name: "raspberry", avgWeightOz: 16.7, delicious: true, color: "red"},
    
])
};
