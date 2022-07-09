/* eslint-disable ember/no-jquery */
import { action } from '@ember/object';
import Component from '@glimmer/component';
import $ from 'jquery';
import { guidFor } from '@ember/object/internals';
import { bind } from '@ember/runloop';

/**
ui-checkbox component see {{#crossLink "mixins.UiCheckboxBase"}}{{/crossLink}}

@module components
@namespace components
@class UiCheckbox
@constructor
*/
export default class UiCheckboxComponent extends Component {
  element = null;

  constructor() {
    super(...arguments);
    if (this.args.onChange) {
      this.args.onChange(this.checked, this.value);
    }
  }

  get type() {
    return this.args.type ?? 'checkbox';
  }

  get name() {
    return this.args.name ?? guidFor(this);
  }

  get value() {
    return this.args.value ?? '';
  }

  get checked() {
    return this.args.checked ?? false;
  }

  @action
  register(element) {
    this.element = element;
    $(element).checkbox();
    let input = $(element).find('input');

    //set checbox stated
    input.prop('checked', this.checked);
    //bind input change event
    $(element).on('click', bind(this, this._updateValue));
  }

  _updateValue() {
    let checked = $(this.element).find('input').is(':checked');
    if (typeof this.args.onChange === 'function') {
      if (checked) {
        this.args.onChange(true, this.value);
      } else {
        this.args.onChange(false, this.value);
      }
    }
  }
}
