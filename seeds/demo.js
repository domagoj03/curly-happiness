const app = require('../src/app');

exports.seed = () => {
  return app.service('users').create({
    text: 'Demo'
  }).then(() => console.log('Inserted demo row from seed.'))
    .catch(() => console.log('Failed inserting demo row from seed.'))
};
