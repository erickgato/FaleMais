const DddModel = require("../model/ddd");
const { query } = require("express");
errors = {
  exist: "DDD exist in database please store other value",
  notexist: "DDD not exist",
  missing: "Missing param for query",
};
class DDDcontroller {
  static async VerifyIfExist(ddd) {
    const search = await DddModel.GetDDD(ddd);
    return search == "" ? false : true;
  }

  async index(req, resp) {
    /* Lógica 
      1. Verificar se um ddd foi passado
      2. se foi passado trazer o especifico 
      3. se nao trazer todos */
    const ddd = req.query.ddd ? req.query.ddd : false;
    let query;
    if (!ddd) query = await DddModel.GetDDDs();
    else {
      query = await DddModel.GetDDD(ddd);
      if (query == '' ) query = errors.notexist;
    }

    return resp.json(query);
  }

  async store(req, resp) {
    const search = await DDDcontroller.VerifyIfExist(req.query.ddd);
    let result;
    search
      ? (result = errors.exist)
      : (result = await DddModel.Create(req.query.ddd));
    return resp.json(result);
  }

  async Delete(req, res) {
    const search = await DDDcontroller.VerifyIfExist(req.query.ddd);
    if (!search) return res.json(errors.notexist);
    const result = await DddModel.Delete(req.query.ddd);
    return res.json(result);
  }
  async Alter(req, res) {
    if (!req.query.id) return res.json(errors.missing);
    const searchid = await DDDcontroller.VerifyIfExist(req.query.id);
    const searchddd = await DDDcontroller.VerifyIfExist(req.query.ddd);
    if (searchddd) return res.json(errors.exist);
    if (searchid) return res.json(errors.notexist);
    return res.json(await DddModel.Alter(req.query.id, req.query.ddd));
  }
}

module.exports = new DDDcontroller();
