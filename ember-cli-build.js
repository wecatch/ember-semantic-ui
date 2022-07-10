'use strict';
/*jshint node:true*/
/* global require, module */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var Funnel = require('broccoli-funnel');

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
  app.import('node_modules/pikaday/css/pikaday.css');

  // app.import('bower_components/semantic/dist/semantic.min.css');
  // app.import('bower_components/semantic/dist/semantic.min.js');

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  // var themes = new Funnel('node_modules/semantic-ui-css', {
  //   srcDir: 'themes',
  //   include: ['**/*'],
  //   destDir: '/assets/themes',
  // });

  // var semantic = new Funnel('node_modules/semantic-ui-css', {
  //   srcDir: '.',
  //   include: ['*.min.*'],
  //   destDir: '/assets/',
  // });

  // return app.toTree([themes, semantic]);

  app.import('node_modules/semantic-ui-css/semantic.min.js');
  app.import('node_modules/semantic-ui-css/semantic.min.css');

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
