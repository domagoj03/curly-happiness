// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class address extends Model {

  static get tableName() {
    return 'address';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['text'],

      properties: {
        text: { type: 'string' }
      }
    };
  }

  $beforeInsert() {
    this.createdAt = this.updatedAt = new Date();
  }

  $beforeUpdate() {
    this.updatedAt = new Date();
  }
}

module.exports = function (app) {
  const db = app.get('knex');

  db.schema.hasTable('address').then(exists => {
    if (!exists) {
      db.schema.createTable('address', table => {
        table.increments('id');
        table.string('text');
        table.timestamp('createdAt');
        table.timestamp('updatedAt');
      })
        .then(() => console.log('Created address table')) // eslint-disable-line no-console
        .catch(e => console.error('Error creating address table', e)); // eslint-disable-line no-console
    }
  })
    .catch(e => console.error('Error creating address table', e)); // eslint-disable-line no-console

  return address;
};
