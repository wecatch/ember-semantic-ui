import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class UiCheckboxController extends Controller {
  @service options;
  @tracked value = null;
  @tracked checked = false;

  @action
  onChange(checked, value) {
    this.checked = checked;
    if (checked) {
      this.value = value;
    } else {
      this.value = '';
    }
  }
}
