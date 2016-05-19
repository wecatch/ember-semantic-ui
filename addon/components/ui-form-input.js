import Ember from 'ember';
import UiInputBase from '../mixins/ui-input-base';
import layout from '../templates/components/ui-form-input';

/**
ui-form-input component see {{#crossLink "mixins.UiInputBase"}}{{/crossLink}}

@module components
@namespace components
@class UiFormInput
@constructor
*/
export default Ember.Component.extend(UiInputBase, {
    layout: layout,
    _uiClass: '',
    _componentClass: 'field',
});