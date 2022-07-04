import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class UiSelect extends Controller {

  @service options;

  value = '';
}
