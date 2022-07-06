import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import $ from 'jquery';

/**

ui-modal component

@module components
@namespace components
@class UiModal
@constructor
*/
export default class UiModalComponent extends Component {
  @tracked _show = false;

  constructor() {
    super(...arguments);
  }

  @action
  updateAttr(element) {
    if (this.show) {
      $(element).modal('setting', 'transition', this.transition);
      $(element).modal('setting', 'closable', this.closable);
      $(element).modal('show');
    } else {
      $(element).modal('hide');
    }
  }

  /**
   *   when modal show, this action will be triggered
   *   @event onShow
   */
  @action
  onShow() {
    if (typeof this.args.onShow === 'function') {
      this.args.onShow();
    }
  }
  /**
   * when modal hide, this action will be triggered
   * @event onShow
   */
  @action
  onHide() {
    if (typeof this.args.onHide === 'function') {
      this.args.onHide();
    }
  }
  /**
   * modal status
   * @property {Boolean} show
   * @default  false
   */
  get show() {
    console.log(this.args.show);
    return this.args.show ?? false;
  }

  /**
   * Setting to false will not allow you to close the modal by clicking on the dimmer
   * @property {Boolean} closable
   * @default  true
   */

  get closable() {
    return this.args.closable ?? true;
  }

  /**
   * transition
   * @property {String} transition
   * @default  'scale'
   */

  get transition() {
    return this.args.transition ?? 'scale';
  }

  @action
  register(element) {
    $(element).modal({
      closable: this.closable,
      observeChanges: true,
      onHide: () => {
        if (typeof this.args.onHide === 'function') {
          return this.args.onHide();
        }
      },
      onShow: () => {
        if (typeof this.args.onShow === 'function') {
          return this.args.onShow();
        }
      },
      onApprove: () => {
        if (typeof this.args.onApprove === 'function') {
          return this.args.onApprove();
        }
      },
      onDeny: () => {
        if (typeof this.args.onDeny === 'function') {
          return this.args.onDeny();
        }
      },
    });
  }
}
