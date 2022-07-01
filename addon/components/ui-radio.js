import Component from '@ember/component';
import UiCheckboxBase from '../mixins/ui-checkbox-base';
import layout from '../templates/components/ui-radio';

/**

ui-radio component see {{#crossLink "mixins.UiCheckboxBase"}}{{/crossLink}}

@module components
@class UiRadio
@namespace components
@constructor
*/
export default Component.extend(UiCheckboxBase, {
  layout: layout,
  _theme: 'radio',
});
