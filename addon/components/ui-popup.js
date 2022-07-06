import Component from '@glimmer/component';
import { action } from '@ember/object';
import $ from 'jquery';

/**

ui-popup component

@module components
@namespace components
@class UiPopup
@constructor
*/
export default class UiPopupComponent extends Component {
  element = null;
  get boundary() {
    return this.args.boundary ?? window;
  }

  /**
   * If a selector or jQuery object is specified this allows target the popup content
   *
   * @property {String} target
   * @default  ""
   */
  get popup() {
    return this.args.popup ?? false;
  }

  /**
   * If a selector or jQuery object is specified this allows the popup to be positioned relative to that element.
   *
   * @property {String} target
   * @default  ""
   */
  get target() {
    return this.args.target ?? false;
  }
  /**
  the pop content
  @property {String} content
  */
  get content() {
    return this.args.content ?? '';
  }

  /**
  the pop html content
  @property {String} html
  */
  get html() {
    return this.args.html ?? '';
  }

  /**
  the pop title
  @property {String} title
  */
  get title() {
    return this.args.title ?? '';
  }

  get variation() {
    return this.args.variation ?? '';
  }

  /**
   * Event used to trigger popup: focus, click, hover, or manual, by default hover
   *
   * @property {String} event
   * @default  "hover"
   */
  get event() {
    return this.args.event ?? 'hover';
  }

  get position() {
    return this.args.position ?? 'top left';
  }

  get inline() {
    return this.args.inline ?? false;
  }

  get transition() {
    return this.args.transition ?? 'slide down';
  }
  /**
   * Whether popup should not close on hover (useful for popup navigation menus), by default false
   *
   * @property {Boolean} hoverable
   * @default  false
   */
  get hoverable() {
    return this.args.hoverable ?? false;
  }
  /**
   * When using on: 'click' specifies whether clicking the page should close the popup, by default true
   *
   * @property {Boolean} closable
   * @default  true
   */
  get closable() {
    return this.args.closable ?? true;
  }

  /**
   * Duration of animation events, by default 200
   *
   * @property {Number} duration
   * @default  200
   */
  get duration() {
    return this.args.duration ?? 200;
  }

  get delayShow() {
    return this.args.delayShow ?? 50;
  }

  get delayHide() {
    return this.args.delayHide ?? 30;
  }

  get preserve() {
    return this.args.preserve ?? false;
  }

  get lastResort() {
    return this.args.lastResort ?? false;
  }

  @action
  updateAttr(element) {
    if (this.popup || this.title || this.content || this.html) {
      this.bindPopEvent(element);
    }
  }

  @action
  register(element) {
    this.element = element;
    if (this.title || this.content || this.html || this.popup) {
      this.bindPopEvent(element);
    }
  }

  bindPopEvent(element) {
    $(element).popup({
      popup: this.popup,
      on: this.event,
      inline: this.inline,
      hoverable: this.hoverable,
      closable: this.closable,
      target: this.target,
      title: this.title,
      variation: this.variation,
      html: this.html,
      content: this.content,
      duration: this.duration,
      position: this.position,
      lastResort: this.lastResort,
      delay: {
        show: this.delayShow,
        hide: this.delayHide,
      },
      preserve: this.preserve,
      onCreate: () => {
        if (typeof this.args.onCreate === 'function') {
          this.args.onCreate(this);
        }
      },
      onRemove: () => {
        if (typeof this.args.onRemove === 'function') {
          this.args.onRemove(this);
        }
      },
      onShow: () => {
        if (typeof this.args.onShow === 'function') {
          this.args.onShow(this);
        }
      },
      onVisible: () => {
        if (typeof this.args.onVisible === 'function') {
          this.args.onVisible(this);
        }
      },
      onHide: () => {
        if (typeof this.args.onHide === 'function') {
          this.args.onHide(this);
        }
      },
    });
  }

  hide() {
    $(this.element).popup('hide');
  }

  show() {
    $(this.element).popup('hide');
  }
}
