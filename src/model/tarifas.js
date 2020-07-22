const knex = require('../database/database');

class TarifasModel {
    static GetTarifas() {
        const Tarifas = knex('fm_tarifa');
        return json(Tarifas);
    }
    
}

module.exports = new TarifasModel();