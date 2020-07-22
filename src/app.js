const express = require('express');
require('dotenv').config({
    path: process.env.NODE_ENV == 'test ' ? '.env.test' : '.env' 
})
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