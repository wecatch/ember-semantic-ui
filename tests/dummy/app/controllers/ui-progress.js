import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UiProgressController extends Controller {
  @tracked value = 0;

  @action
  plus() {
    this.value += 5;
  }

  @action
  minus() {
    this.value -= 5;
  }
}
