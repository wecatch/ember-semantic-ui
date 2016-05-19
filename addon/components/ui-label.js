import Ember from 'ember';
import layout from '../templates/components/ui-label';
import uiLabelBase from '../mixins/ui-label-base';


/**
ui-label component {{#crossLink "mixins.UiLabelBase"}}{{/crossLink}}

@module components
@namespace components
@class UiLabel
@constructor
*/
export default Ember.Component.extend(uiLabelBase, {
    layout: layout
});
