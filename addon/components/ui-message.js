import { get } from '@ember/object';
import layout from '../templates/components/ui-message';
import Component from '@ember/component';
import { getWithDefault } from '@ember/object';
import { warn } from '@ember/debug';
import { run } from '@ember/runloop';
import { computed } from '@ember/object';

/**
ui-message component

@module components
@namespace components
@class UiMessage
@constructor
*/
export default Component.extend({
  layout: layout,
  header: null,
  /**
   * The message to show
   *
   * @property {String} message
   * @default  null
   */
  message: null,
  /**
   * The messages to show
   *
   * @property {Array} message
   * @default  null
   */
  messages: null,
  /**
   * allow to close messsage, by default false
   *
   * @property {Boolean} close
   * @default  false
   */
  close: false,
  tagName: 'div',
  /**
   * Class name to apply to the message
   *
   * @property {String} theme
   */
  theme: '',

  /**
   * Class name to apply to the message
   *
   * @property {String} class
   */
  class: '',
  /**
   * timeout to close message, by default 0
   *
   * @property {Number} timeout
   * @default  false
   */
  timeout: 0,
  classNameBindings: [
    '_uiClass',
    '_theme',
    '_size',
    'theme',
    '_componentClass',
  ],
  _uiClass: 'ui',
  _componentClass: 'message',
  _theme: computed('type', {
    get() {
      const typeClass = this.type === undefined ? '' : this.type;
      return `${typeClass}`;
    },
    set() {
      warn('`_type` is read only');
      return this;
    },
  }),
  _size: computed('size', {
    get() {
      const sizeClass = this.size === undefined ? '' : this.size;
      return `${sizeClass}`;
    },
    set() {
      warn('`_size` is read only');
      return this;
    },
  }),
  init() {
    this._super(...arguments);
    if (this.timeout > 0) {
      run.later(
        this,
        function () {
          this.send('closeMessage');
        },
        this.timeout
      );
    }
  },
  actions: {
    /**
        close message event
        @event closeMessage
        */
    closeMessage() {
      if (this && this.$()) {
        this.$().transition('fade');
      }
      run.next(this, () => {
        if (this) {
          this.destroy();
        }
      });
      if (typeof this.attrs.onClose === 'function') {
        this.attrs.onClose();
      }
    },
  },
});
