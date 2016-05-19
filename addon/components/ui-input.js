import Ember from 'ember';
import UiInputBase from '../mixins/ui-input-base';
import layout from '../templates/components/ui-input';


/**
ui-input component see {{#crossLink "mixins.UiInputBase"}}{{/crossLink}}

@module components
@namespace components
@class UiInput
@constructor
*/
export default Ember.Component.extend(UiInputBase, {
    layout: layout
});
