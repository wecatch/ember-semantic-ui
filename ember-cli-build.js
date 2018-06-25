'use strict';
/*jshint node:true*/
/* global require, module */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
    minifyJS: {
      enabled: true
    },
    fingerprint: {
      enabled: false
    },
    storeConfigInMeta: false
  }

  if (process.env.EMBER_ENV === 'development') {
    options.minifyJS = {
      enabled: false
    };
  }

  var app = new EmberAddon(defaults, options);
  app.import('bower_components/highlightjs/highlight.pack.js');
  app.import('bower_components/highlightjs/styles/default.css');
  
  // app.import('bower_components/semantic/dist/semantic.min.css');
  // app.import('bower_components/semantic/dist/semantic.min.js');

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  var themes = new Funnel('bower_components/semantic/dist', {
      srcDir  : 'themes',
      include   : ['**/*'],
      destDir : '/assets/themes'
  });

  var semantic = new Funnel('bower_components/semantic/dist', {
      srcDir  : '.',
      include   : ['*.min.*'],
      destDir : '/assets/'
  });

  return app.toTree([themes, semantic]);
};
