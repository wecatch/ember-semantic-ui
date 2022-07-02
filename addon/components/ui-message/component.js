import Component from '@glimmer/component';
import { action } from '@ember/object';
import $ from 'jquery';
import { run } from '@ember/runloop';


export default class UiMessageComponent extends Component {
  /**
   * close message event
   * @event closeMessage
   * */
  @action
  closeMessage() {
    $(this.element).transition('fade');
    run.next(this, () => {
      if (this) {
        this.destroy();
      }
    });
    if (typeof this.attrs.onClose === 'function') {
      this.attrs.onClose();
    }
  }
}
