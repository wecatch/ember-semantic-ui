import UiInputBase from '../mixins/ui-input-base';
import layout from './ui-input';
import Component from '@ember/component';

/**
ui-input component see {{#crossLink "mixins.UiInputBase"}}{{/crossLink}}

@module components
@namespace components
@class UiInput
@constructor
*/
export default Component.extend(UiInputBase, {
  layout: layout,
});
