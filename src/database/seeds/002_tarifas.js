exports.seed = function(knex) {
  return knex('fm_tarifa').del()
    .then(function () {
      // Inserts seed entries
      return knex('fm_tarifa').insert([
        {ddd_origin: 1, ddd_destination: 2, H_M: '1.90'},
        {ddd_origin: 2, ddd_destination: 1, H_M: '2.90'},
        {ddd_origin: 1, ddd_destination: 3, H_M: '1.70'},
        {ddd_origin: 3, ddd_destination: 1, H_M: '2.70'},
        {ddd_origin: 1, ddd_destination: 4, H_M: '0.90'},
        {ddd_origin: 4, ddd_destination: 1, H_M: '1.90'},
      ]);
    });
};
