const knex = require('../database');
export default class TarifasModel {
    static GetTarifas() {
        const Tarifas = knex('fm_tarifa');
        return json(Tarifas);
    }
    
}