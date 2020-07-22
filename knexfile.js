require('dotenv').config({
  path: process.env.NODE_ENV == 'test ' ? '.env.test' : '.env' 
});
module.exports = {
  client: process.env.DB_TYPE || 'mysql',
    connection:{
        host: process.env.SCHEMA_HOST,
        database: process.env.SCHEMA_NAME,
        user: process.env.SCHEMA_USER,
        password: process.env.SCHEMA_PASSWORD, 
    },
    useNullAsDefault: true,
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
};
