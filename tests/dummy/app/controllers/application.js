import { capitalize } from '@ember/string';
import { camelize } from '@ember/string';
import Controller from '@ember/controller';
import ENV from 'dummy/config/environment';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;

  @service options;

  get routeName() {
    return capitalize(camelize(this.router.currentRouteName));
  }

  get host() {
    let host = window.location.origin + ENV.rootURL;
    let routeName = this.routeName;
    if (routeName === 'Index' || routeName === 'Layout') {
      return '';
    }

    let p = `docs/classes/components.${routeName}.html`;
    return `${host}${p}`;
  }
}
