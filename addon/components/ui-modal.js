import Component from '@ember/component';
import layout from './ui-modal';
import { observer } from '@ember/object';

/**

ui-modal component

@module components
@namespace components
@class UiModal
@constructor
*/
export default Component.extend({
  layout: layout,
  actions: {
    /**
        when modal show, this action will be triggered
        @event onShow
        */
    onShow() {
      if (typeof this.attrs.onShow === 'function') {
        this.attrs.onShow();
      } else {
        this.sendAction('onShow');
      }
    },
    /**
        when modal hide, this action will be triggered
        @event onShow
        */
    onHide() {
      if (typeof this.attrs.onHide === 'function') {
        this.attrs.onHide();
      } else {
        this.sendAction('onHide');
      }
    },
  },
  tagName: 'div',

  /**
   * modal status
   * @property {Boolean} show
   * @default  false
   */
  show: false,

  /**
   * Setting to false will not allow you to close the modal by clicking on the dimmer
   * @property {Boolean} closable
   * @default  true
   */
  closable: true,

  /**
   * transition
   * @property {String} transition
   * @default  'scale'
   */
  transition: 'scale',

  classNameBindings: ['_uiClass', 'theme', 'class', '_componentClass'],
  _uiClass: 'ui',
  _componentClass: 'modal',

  /**
   * Class names to apply to the modal
   *
   * @property {String} class
   */
  class: '',
  /**
   * Class names to apply to the modal
   *
   * @property {String} theme
   */
  theme: '',
  /**
   * @method showModal
   * @observes "show" property
   * @returns  {void}
   */
  showModal: observer('show', function () {
    if (this.show) {
      this.$().modal('setting', 'transition', this.transition);
      this.$().modal('setting', 'closable', this.closable);
      this.$().modal('show');
    } else {
      this.$().modal('hide');
    }
  }),
  didInsertElement() {
    this._super(...arguments);
    let that = this,
      closable = this.closable;

    this.$().modal({
      closable: closable,
      observeChanges: true,
      onHide() {
        if (that.get('show')) {
          that.set('show', false);
          that.send('onHide');
        }
      },
      onShow() {
        that.send('onShow');
      },
      onApprove() {
        if (typeof that.attrs.onApprove === 'function') {
          return that.attrs.onApprove();
        }
      },
      onDeny() {
        if (typeof that.attrs.onDeny === 'function') {
          return that.attrs.onDeny();
        }
      },
    });
  },
});
