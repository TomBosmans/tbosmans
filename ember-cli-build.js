'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('node_modules/normalize.css/normalize.css');
  app.import('node_modules/milligram/dist/milligram.css');

  return app.toTree();
};