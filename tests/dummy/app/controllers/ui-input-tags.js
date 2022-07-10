import Controller from '@ember/controller';
import { A } from '@ember/array';
import { later } from '@ember/runloop';
import { action } from '@ember/object';

// eslint-disable-next-line ember/no-classic-classes
export default class UiInputTagsController extends Controller {
  value = A(['google']);
  get valueShow() {
    return this.value.join(',');
  }

  get value1Show() {
    return this.value1 && this.value1.join(',');
  }

  get value2Show() {
    return this.value2 && this.value2.join(',');
  }

  @action
  changeValue2() {
    this.value2 = A(['google']);
    later(
      this,
      function () {
        this.value2.addObject('apple');
      },
      1000
    );
  }
}
