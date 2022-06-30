import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import LinkComponent from '@ember/routing/link-component';
import $ from 'jquery';
import config from 'dummy/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

LinkComponent.reopen({
    click(){
        this._super(...arguments);
        $('html,body').animate({
            scrollTop: '0px'
        }, 200);
    }
});

loadInitializers(App, config.modulePrefix);
