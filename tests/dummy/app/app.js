import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import LinkComponent from '@ember/routing/link-component';
import Ember from 'ember';
import $ from 'jquery';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

LinkComponent.reopen({
    click(){
        this._super(...arguments);
        $('html,body').animate({
            scrollTop: '0px'
        }, 200);
    }
});

loadInitializers(App, config.modulePrefix);

export default App;
