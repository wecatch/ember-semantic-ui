/* jshint node: true */
'use strict';
var mergeTrees = require( 'broccoli-merge-trees' );
var Funnel = require('broccoli-funnel');


module.exports = {
  name: 'ember-semantic-ui',
  included: function(app){
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
    this._super.included(app);
    app.import({
        development : app.bowerDirectory+'/moment/min/moment-with-locales.js',
        production  : app.bowerDirectory+'/moment/min/moment-with-locales.min.js'
    });
    app.import(app.bowerDirectory+'/pikaday/pikaday.js');
    app.import(app.bowerDirectory+'/pikaday/css/pikaday.css');
    app.import('vendor/shims/moment.js');
    app.import('vendor/shims/pikaday.js');

  },
  postprocessTree: function( type, tree ) {
    return mergeTrees([ tree,
          new Funnel( 'bower_components/semantic/dist', {
              srcDir  : 'themes',
              include   : ['**/*'],
              destDir : '/assets/themes'
          }),
          new Funnel('bower_components/semantic/dist', {
              srcDir  : '.',
              include   : ['*.min.*'],
              destDir : '/assets/'
          })
        ],
        {
          overwrite: true
        });
  }
};