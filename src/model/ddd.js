const knex = require('../database/database');

class DddModel{
    static GetDDDs() {
        const DDD  = knex('fm_ddd');
        return json(DDD);
    }
    static GetDDD(number) {
        return json(knex('fm_ddd').where("ddd",number));
    }
}
module.exports = new DddModel();