// Initializes the `address` service on path `/address`
const { Address } = require('./address.class');
const createModel = require('../../models/address.model');
const hooks = require('./address.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/address', new Address(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('address');
  service.hooks(hooks);

  const userService = app.service('users');
  userService.on('created', (user) => {
    console.log('Event handler - user has been created - attempting to insert new row.');
    return service.create({
      text: 'Demo row for another service.'
    }).then(() => console.log('Inserted new row as a result of event handler.'))
      .catch(() => console.log('Failed inserting new row from event handler.'));
  });
};
