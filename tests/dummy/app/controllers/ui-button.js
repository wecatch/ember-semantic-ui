import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UiButtonController extends Controller {
  @action
  clickMe(value) {
    alert(value);
  }
}
