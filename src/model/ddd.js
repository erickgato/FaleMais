const knex = require('../database/database');

class DddModel{
    async GetDDDs() {
        const DDD  =  await knex('fm_ddd');
        return DDD;
    }
    async GetDDD(number) {
        const result = await knex.select('*').from('fm_ddd').where('ddd','011');
        return result;
    }
    async CreateDDD(ddd) {
        const insert = await knex.insert([{ddd}]).into('fm_ddd');
        return insert;
    }
}
module.exports = new DddModel();