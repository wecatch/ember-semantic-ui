/* jshint node: true */
'use strict';

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
  }
};