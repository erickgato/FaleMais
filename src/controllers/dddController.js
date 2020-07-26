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

  async index(req, resp, next) {
    try {
      const ddd = req.query.ddd ? req.query.ddd : false;
      let query;
      if (!ddd) query = await DddModel.GetDDDs();
      else {
        query = await DddModel.GetDDD(ddd);
        if (query == "") query = errors.notexist;
      }
      return resp.json(query);
    } catch (error) {
      next(error);
    }
  }

  async store(req, resp, next) {
    try {
      const { ddd } = req.query;
      const search = await DDDcontroller.VerifyIfExist(ddd);
      let result;
      search ? (result = errors.exist) : (result = await DddModel.Create(ddd));

      return resp.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async Delete(req, res, next) {
    try {
      const { ddd } = req.query;
      const exists = await DDDcontroller.VerifyIfExist(ddd);
      if (!exists) return res.status(404).send();
      await DddModel.Delete(ddd);
      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  }

  async Alter(req, res, next) {
    try {
      const { id, ddd } = req.query;
      if (!id) return res.json(errors.missing);
      const searchid = await DDDcontroller.VerifyIfExist(id);
      const searchddd = await DDDcontroller.VerifyIfExist(ddd);
      if (searchddd || searchid) return res.status(404).send();
      await DddModel.Alter(id, ddd);
      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DDDcontroller();
