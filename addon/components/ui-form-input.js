import UiInputBase from '../mixins/ui-input-base';
import layout from './ui-form-input';
import Component from '@ember/component';

/**
ui-form-input component see {{#crossLink "mixins.UiInputBase"}}{{/crossLink}}

@module components
@namespace components
@class UiFormInput
@constructor
*/
export default Component.extend(UiInputBase, {
  layout: layout,
  _uiClass: '',
  _componentClass: 'field',
});
