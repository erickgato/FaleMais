const routes = require('express').Router();
const DDDcontroller = require('./controllers/dddController');
const TarifasController = require('./controllers/tarifasController');
const PlansController = require('./controllers/planController');
//DDDs
routes.get('/ddds', DDDcontroller.index );
routes.post('/ddds', DDDcontroller.store);
routes.delete('/ddds', DDDcontroller.Delete);
routes.put('/ddds', DDDcontroller.Alter);
//Tarifas
routes.get('/tarifas', TarifasController.index )
routes.get('/tarifas/destination', TarifasController.ByDestination )
///Planos
routes.get('/planos', PlansController.index);
routes.get('/planos/especific', PlansController.SearchByid)




//Export
module.exports = routes;