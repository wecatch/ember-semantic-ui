import Controller from '@ember/controller';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UiCheckboxController extends Controller {
  @tracked value = null;
  @tracked checked = false;

  @action
  onCheck(checked) {
    this.checked = checked;
  }
  @action
  onChange(value) {
    this.value = value;
  }
}
