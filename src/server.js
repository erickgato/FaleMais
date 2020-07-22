const app = require('./app');
const knex = require('./database/database');
app.listen(process.env.PORT || 3000);