import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
    this.route('ui-container');
    this.route('ui-text-container');
    this.route('layout');

    this.route('ui-message');
    
    this.route('ui-button');
    this.route('ui-animated-button');
    this.route('ui-labeled-button');
    this.route('ui-left-labeled-button');

    this.route('ui-dropdown');

    this.route('ui-dropdown-menu');
    this.route('ui-menu');
    this.route('ui-vertical-menu');
    this.route('ui-tab-menu');

    this.route('ui-select');
    this.route('ui-multi-select');

    this.route('ui-input');
    this.route('ui-input-tags');
    this.route('ui-date-input');
    this.route('ui-date-time-input');


    this.route('ui-segment');


    this.route('ui-checkbox');
    this.route('ui-checkbox-group');
    this.route('ui-radio-group');
    
    this.route('ui-label');
    this.route('ui-pointing-label');

    this.route('ui-form');
    this.route('ui-form-input');

    this.route('ui-modal');
    this.route('ui-popup');

    this.route('ui-progress');
    
    this.route('file-input');
    this.route('ui-uploader');

});
