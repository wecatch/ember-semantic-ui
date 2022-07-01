import uiButtonBase from '../mixins/ui-button-base';
import layout from '../templates/components/ui-button';
import Component from '@ember/component';

/**
ui-button component see {{#crossLink "mixins.UiButtonBase"}}{{/crossLink}}

@module components
@class UiButton
@namespace components
@constructor
*/
export default Component.extend(uiButtonBase, {
  layout: layout,
});
