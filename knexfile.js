const config = require('@feathersjs/configuration')();

module.exports = {
  development: {
    client: 'mysql2',
    connection: config().mysql.connection,
    migrations: {
      tableName: 'migrations'
    }
  }
};
