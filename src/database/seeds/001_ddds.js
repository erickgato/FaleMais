exports.seed = function(knex) {
  return knex('fm_ddd').del()
    .then(function () {
      return knex('fm_ddd').insert([
        { ddd: '011'},
        { ddd: '016'},
        { ddd: '017'},
        { ddd: '018'},
      ]);
    });
};
