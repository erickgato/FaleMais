exports.seed = function(knex) {
  return knex('fm_plans').del()
    .then(function () {
      // Inserts seed entries
      return knex('fm_plans').insert([
        {pl_name: 'Fale mais 30', pl_price: 'R$ 40', pl_tolerancy: '30'},
        {pl_name: 'Fale mais 60', pl_price: 'R$ 80', pl_tolerancy: '60'},
        {pl_name: 'Fale mais 120', pl_price: 'R$ 106', pl_tolerancy: '120'},
      ]);
    });
};