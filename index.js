'use strict';
const mergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-semantic-ui',
  included: function (app) {
    this._super.included.apply(this, arguments);
    app.import('node_modules/pikaday/css/pikaday.css');
  },
  postprocessTree: function (type, tree) {
    return mergeTrees(
      [
        tree,
        new Funnel('node_modules/semantic-ui-css', {
          srcDir: 'themes',
          include: ['**/*'],
          destDir: '/assets/themes',
          overwrite: true,
        }),
        new Funnel('node_modules/semantic-ui-css', {
          srcDir: '.',
          include: ['semantic.*'],
          destDir: '/assets/',
          overwrite: true,
        }),
      ],
      {
        overwrite: true,
      }
    );
  },
};
