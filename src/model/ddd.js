const knex = require('../database');

export default class DddModel{
    static GetDDDs() {
        const DDD  = knex('fm_ddd');
        return json(DDD);
    }
    static GetDDD(number) {
        return json(knex('fm_ddd').where("ddd",number));
    }
}