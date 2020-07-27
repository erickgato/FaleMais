const knex = require("../database/database");

class TarifasModel {
  async GetTarifas() {
    return await knex("fm_tarifa")
      .join("fm_ddd as DDDor ", "DDDor.ddd_id", "=", "fm_tarifa.ddd_origin")
      .join("fm_ddd as DDDd ", "DDDd.ddd_id", "=", "fm_tarifa.ddd_destination")
      .select("DDDor.ddd as origem", "DDDd.ddd as destino", "H_M");
  }
  async GetTarifa(ddd_origin, ddd_destination) {
    const search = await knex("fm_tarifa")
      .join("fm_ddd as DDDor ", "DDDor.ddd_id", "=", "fm_tarifa.ddd_origin")
      .join("fm_ddd as DDDd ", "DDDd.ddd_id", "=", "fm_tarifa.ddd_destination")
      .select("DDDor.ddd as origem", "DDDd.ddd as destino", "H_M")
      .where("DDDor.ddd", ddd_origin)
      .where('DDDd.ddd',ddd_destination)
    return search;
  }
  async Create(ddd) {
    const insert = await knex
      .insert([{ ddd }])
      .into("fm_tarifa")
      .catch((err) => {
        return "Error while creating ddd";
      });
    return insert;
  }
  async Delete(number) {
    const del = await knex("fm_tarifa")
      .where("tarifa_id", number)
      .del()
      .then(() => "Sucess deleting")
      .catch(() => "Error while deleting");
    return del;
  }

  async Alter(id, number) {
    return await knex("fm_tarifa")
      .where({ tarifa_id: id })
      .update({
        ddd: number,
      })
      .then(() => {
        "Updated sucess";
      })
      .catch(() => "Error while updating");
  }
}

module.exports = new TarifasModel();
