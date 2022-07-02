import UiCheckboxGroupBase from '../mixins/ui-checkbox-group-base';
import layout from './ui-checkbox-group';
import Component from '@ember/component';
import { isArray } from '@ember/array';

/**
ui-checkbox-group component see {{#crossLink "mixins.UiCheckboxGroupBase"}}{{/crossLink}}

@module components
@namespace components
@class UiCheckboxGroup
@constructor
*/
export default Component.extend(UiCheckboxGroupBase, {
  layout: layout,
  /**
    value is checked or not
    @method isOptionChecked
    @return {Boolean}
    */
  isOptionChecked(optionValue) {
    if (isArray(this.value)) {
      return this.value.includes(optionValue);
    }
    return false;
  },
  actions: {
    childChange(checked, value) {
      if (checked && !this.value.includes(value)) {
        this.value.pushObject(value);
      }
      if (!checked && this.value.includes(value)) {
        this.value.removeObject(value);
      }
    },
  },
});
