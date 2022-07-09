/* eslint-disable ember/no-jquery */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import $ from 'jquery';

export default class UiMessageComponent extends Component {
  /**
   * component dom element
   */
  element = null;
  /**
   *
   */
  @action
  register(element) {
    this.element = element;
  }
  /**
   * close message event
   * @event closeMessage
   * */
  @action
  closeMessage() {
    $(this.element).transition('fade');
    if (typeof this.args.onClose === 'function') {
      this.args.onClose();
    }
  }
}
