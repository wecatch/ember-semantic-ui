import Controller from '@ember/controller';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UiModalController extends Controller {

    @tracked display = false;
    @tracked display1 = false;

    @action
    clickHandler(value) {
      this.toggleProperty('display');
    }
    @action
    clickHandler1() {
      this.toggleProperty('display1');
    }

    @action
    onShow() {
      console.log('callback==>onShow');
    }

    @action
    onHide() {
      this.display = false;
    }

    @action
    onApprove() {
      this.display = false;
    }

    @action
    onDeny() {
      this.display = false;
    }
}
