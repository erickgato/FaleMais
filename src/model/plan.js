const knex = require("../database/database");

class plansModel {
  async GetPlans() {
    return await knex("fm_plans").select('pl_id','pl_name','pl_price','pl_tolerancy');
  }
  async GetPlan(pl_id) {
    return await knex("fm_plans").select('pl_name','pl_price','pl_tolerancy').where({ pl_id });
  }
}

module.exports = new plansModel();