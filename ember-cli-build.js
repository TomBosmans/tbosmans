'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    minifyCSS: {
      enabled: false
    }
  });

  app.import('node_modules/normalize.css/normalize.css');
  app.import('node_modules/milligram/dist/milligram.css');

  return app.toTree();
};
