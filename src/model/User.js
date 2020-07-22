import { json } from 'express';

const knex = require('../database');

export default class UserModel {
    static GetUsers = () => {
        const result = knex('users');
        return json(result);
    }
    static GetUser(email, password) {
        const result = knex('users').where('email', email).where('password',password);
        return json(result);
    }
}