const express = require('express');

class MainController{
    constructor(){
        this.express = express();
        this.Middleware();
        this.routes();
    }
    Middleware(){
        this.express.use(express.json());
    }
    routes(){
        this.express.use(require('./routes'));
    }
}
module.exports = new MainController().express;