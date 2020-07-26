const routes = require('express').Router();
const DDDcontroller = require('./controllers/dddController');
//DDDs
routes.get('/ddds', DDDcontroller.index );
routes.post('/ddds', DDDcontroller.store);
routes.delete('/ddds', DDDcontroller.Delete);
routes.put('/ddds', DDDcontroller.Alter);





//Export
module.exports = routes;