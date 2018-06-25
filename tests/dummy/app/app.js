import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
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
