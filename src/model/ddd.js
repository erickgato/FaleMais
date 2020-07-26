const knex = require("../database/database");

class DddModel {
  async GetDDDs() {
    const DDD = await knex("fm_ddd");
    return DDD;
  }
  async GetDDD(number) {
    const result = await knex
      .select("*")
      .from("fm_ddd")
      .where("ddd", number)
      .catch((err) => {
        "Error while searching ddd";
      });
    return result;
  }
  async Create(ddd) {
    const insert = await knex
      .insert([{ ddd }])
      .into("fm_ddd")
      .catch((err) => {
        return "Error while creating ddd";
      });
    return insert;
  }
  async Delete(number) {
    const del = await knex("fm_ddd")
      .where("ddd", number)
      .del()
      .then(() => "Sucess deleting")
      .catch(() => "Error while deleting");
    return del;
  }

  async Alter(id, number) {
    return await knex("fm_ddd")
      .where({ ddd_id: id })
      .update({
        ddd: number,
      })
      .then(() => {
        "Updated sucess";
      })
      .catch(() => "Error while updating");
  }
}
module.exports = new DddModel();
