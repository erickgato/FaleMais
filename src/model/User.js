import { json } from 'express';

const knex = require('../database/database');
class UserModel {
    GetUsers = () => {
        const result = knex('users');
        return json(result);
    }
    GetUser(email, password) {
        const result = knex('users').where('email', email).where('password',password);
        return json(result);
    }
}
module.exports = new UserModel();