import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UiPopupController extends Controller {
  @tracked value = null;
  @tracked currentPopup = null;

  @action
  onPopupShow(value, popup) {
    this.value = new Date();
    this.currentPopup = popup;
  }
  @action
  save() {
    this.currentPopup.hide();
  }
  @action
  cancel() {
    this.currentPopup.hide();
  }
}
