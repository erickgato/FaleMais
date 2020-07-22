const User = require('../model/User');
module.exports = {
    async index() {
        return User.GetUserS();
    }
}