/* eslint-disable ember/no-jquery */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import $ from 'jquery';

/**
ui-input component see {{#crossLink "mixins.UiInputBase"}}{{/crossLink}}

@module components
@namespace components
@class UiInput
@constructor
*/
export default class UiIputComponent extends Component {
  /**
   * the input type
   *
   * @property {String} type
   * @default text
   */
  get type() {
    return this.args.type ?? 'text';
  }

  /**
   * the input value
   *
   * @property {String} value
   */
  get value() {
    return this.args.value ?? '';
  }

  /**
   * the input placeholder
   *
   * @property {String} placeholder
   */
  get placeholder() {
    return this.args.placeholder ?? '';
  }

  /**
   * the label
   *
   * @property {String} label
   */
  get label() {
    return this.args.placeholder ?? '';
  }

  /**
   * the input focus status
   *
   * @property {Boolean} focus
   * @default false
   */
  get focus() {
    return this.args.focus ?? false;
  }

  /**
   * the input loading status
   *
   * @property {Boolean} loading
   * @default false
   */
  get loading() {
    return this.args.loading ?? false;
  }

  /**
   * the input error status
   *
   * @property {Boolean} error
   * @default false
   */
  get error() {
    return this.args.error ?? false;
  }

  /**
   * the input error status
   *
   * @property {Boolean} error
   * @default false
   */
  get disabled() {
    return this.args.disabled ?? false;
  }

  /**
   * the input readonly status
   *
   * @property {Boolean} readonly
   * @default false
   */
  get readonly() {
    return this.args.readonly ?? false;
  }

  get statusClass() {
    const classList = this.args.class ? [this.args.class] : [];
    if (this.disabled) {
      classList.push('disabled');
    }

    if (this.focus) {
      classList.push('focus');
    }

    if (this.loading) {
      classList.push('loading');
    }

    if (this.error) {
      classList.push('error');
    }

    return classList.join(' ');
  }

  @action
  register(element) {
    if (this.readonly) {
      $(element).find('input').attr('readonly', 'readonly');
    }

    $(element)
      .find('input')
      .on('onchange', (e) => {
        if (typeof this.args.onChange === 'function') {
          this.args.onChange(e);
        }
      });

    $(element)
      .find('input')
      .focus((e) => {
        if (typeof this.args.onFocus === 'function') {
          this.args.onFocus(e);
        }
      });

    $(element)
      .find('input')
      .focusin((e) => {
        if (typeof this.args.onFocusin === 'function') {
          this.args.onFocusin(e);
        }
      });

    $(element)
      .find('input')
      .focusout((e) => {
        if (typeof this.args.onFocusout === 'function') {
          this.args.onFocusout(e);
        }
      });
  }
}
