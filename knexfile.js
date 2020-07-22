module.exports = {
  client: 'mysql',
    connection: {
        host: 'localhost',
        database: 'falemais',
        user: 'root',
        password: '',
    },
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
