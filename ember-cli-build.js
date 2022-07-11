'use strict';
/*jshint node:true*/
/* global require, module */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  var options = {
    // Add options here
    minifyJS: {
      enabled: true,
    },
    minifyCSS: {
      enabled: true,
    },
    fingerprint: {
      enabled: false,
    },
    storeConfigInMeta: false,
  };

  if (process.env.EMBER_ENV === 'development') {
    options.minifyJS.enabled = false;
    options.minifyCSS.enabled = false;
  }

  var app = new EmberAddon(defaults, options);

  app.import('node_modules/highlight.js/styles/github.css');
  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
