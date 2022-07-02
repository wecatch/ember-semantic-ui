import UiCheckboxBase from '../mixins/ui-checkbox-base';
import layout from './ui-checkbox';
import Component from '@ember/component';

/**
ui-checkbox component see {{#crossLink "mixins.UiCheckboxBase"}}{{/crossLink}}

@module components
@namespace components
@class UiCheckbox
@constructor
*/
export default Component.extend(UiCheckboxBase, {
  layout: layout,
});
