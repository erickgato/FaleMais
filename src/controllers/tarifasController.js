const tarifasModel = require("../model/tarifas");
const DddModel = require("../model/ddd");
class tarifasController {
  static async VerifyDDD(ddd) {
    const search = await DddModel.GetDDD(ddd);
    return search.length == ''  ? false : true
  }

  async index(req, resp, next) {
    try {
      const query  = await tarifasModel.GetTarifas();
      return resp.json(query);
    } catch (error) {
      next(error);
    }
  }
  async ByDestination(req, resp, next){
      try {
        const { origin, destination } = req.query;
        if(! await tarifasController.VerifyDDD(origin) || ! await tarifasController.VerifyDDD(destination)) return resp.status(404).send();
        return resp.json( await tarifasModel.GetTarifa( origin  ,   destination ).catch(() => resp.status(404).send()) ); 
      } catch (error) {
          next(error);
      }
  }
}

module.exports = new tarifasController();
