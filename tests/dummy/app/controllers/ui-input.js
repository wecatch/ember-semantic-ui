import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UiInputController extends Controller {
  @tracked result = 0;

  @action
  onfocus(e) {
    this.send('log', e);
  }

  @action
  log() {
    this.result += 1;
  }
}
