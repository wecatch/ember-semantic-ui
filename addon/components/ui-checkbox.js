import Ember from 'ember';
import UiCheckboxBase from '../mixins/ui-checkbox-base';
import layout from '../templates/components/ui-checkbox';

/**
ui-checkbox component see {{#crossLink "mixins.UiCheckboxBase"}}{{/crossLink}}

@module components
@namespace components
@class UiCheckbox
@constructor
*/
export default Ember.Component.extend(UiCheckboxBase, {
    layout: layout
});
