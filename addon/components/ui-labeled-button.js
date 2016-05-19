import Ember from 'ember';
import layout from '../templates/components/ui-labeled-button';
import uiButtonBase from '../mixins/ui-button-base';

/**
ui-labeled-button component {{#crossLink "mixins.UiButtonBase"}}{{/crossLink}}

@module components
@namespace components
@class UiLabeledButton
@constructor
*/
export default Ember.Component.extend(uiButtonBase, {
    tagName: 'div',
    layout: layout,
    _theme: 'labeled',
    attributeBindings: ['tabindex'],
    tabindex: 0
});
