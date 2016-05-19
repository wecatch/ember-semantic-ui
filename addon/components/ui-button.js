import Ember from 'ember';
import uiButtonBase from '../mixins/ui-button-base';
import layout from '../templates/components/ui-button';

/**
ui-button component see {{#crossLink "mixins.UiButtonBase"}}{{/crossLink}}

@module components
@class UiButton
@namespace components
@constructor
*/
export default Ember.Component.extend(uiButtonBase, {
  layout: layout
});
