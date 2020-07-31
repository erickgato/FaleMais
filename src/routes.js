const routes = require('express').Router();
const DDDcontroller = require('./controllers/dddController');
const TarifasController = require('./controllers/tarifasController');
const PlansController = require('./controllers/planController');

routes.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
//DDDs
routes.get('/api/ddds', DDDcontroller.index );
routes.post('/api/ddds', DDDcontroller.store);
routes.delete('/api/ddds', DDDcontroller.Delete);
routes.put('api/ddds', DDDcontroller.Alter);
//Tarifas
routes.get('/api/tarifas', TarifasController.index )
routes.get('/api/tarifas/destino', TarifasController.ByDestination )
///Planos
routes.get('/api/planos', PlansController.index);
routes.get('/api/planos/especifico', PlansController.SearchByid)




//Export
module.exports = routes;