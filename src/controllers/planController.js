const plansModel = require("../model/plan");
class planController {
  async index(req, resp, next) {
    try {
      const query  = await plansModel.GetPlans();
      return resp.json(query);
    } catch (error) {
      next(error);
    }
  }
  async SearchByid(req, resp, next){
      try {
        const { id } = req.query;
        return resp.json( await plansModel.GetPlan(id).catch(err => resp.status(404).send) ); 
      } catch (error) {
          next(error);
      }
  }
}

module.exports = new planController();
