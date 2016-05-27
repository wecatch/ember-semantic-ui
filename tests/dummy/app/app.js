import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

Ember.LinkComponent.reopen({
    click(){
        this._super(...arguments);
        Ember.$('html,body').animate({
            scrollTop: '0px'
        }, 200);
    }
});

loadInitializers(App, config.modulePrefix);

export default App;
