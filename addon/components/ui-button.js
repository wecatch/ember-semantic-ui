import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UiButtonComponent extends Component {
  @action
  click() {
    if (this.args.onClick) {
      this.args.onClick();
    }
  }
}
