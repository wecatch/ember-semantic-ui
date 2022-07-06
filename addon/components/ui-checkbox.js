import { action } from '@ember/object';
import Component from '@glimmer/component';
import $ from 'jquery';
import { guidFor } from '@ember/object/internals';


/**
ui-checkbox component see {{#crossLink "mixins.UiCheckboxBase"}}{{/crossLink}}

@module components
@namespace components
@class UiCheckbox
@constructor
*/
export default class UiCheckboxComponent extends Component {
  constructor() {
    super(...arguments);
    if (this.args.onChange) {
      this.args.onChange(this.checked, this.value);
    }
  }

  get type(){
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
    $(element).checkbox();
    let input = $(element).find('input');

    //set checbox stated
    input.prop('checked', this.checked);
    //bind input change event
    $(element).on('click', () => {
      let isChecked = input.is(':checked');
      this._updateValue(isChecked);
    });
  }

  _updateValue(checked) {
    if (typeof this.args.onChange === 'function') {
      if (checked) {
        this.args.onChange(true, this.value);
      } else {
        this.args.onChange(false, this.value);
      }
    }
  }
}
