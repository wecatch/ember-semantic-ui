import Ember from 'ember';
import layout from '../templates/components/ui-left-labeled-button';
import uiButtonBase from '../mixins/ui-button-base';

/**
ui-left-labeled-button component {{#crossLink "mixins.UiButtonBase"}}{{/crossLink}}


@module components
@class UiLeftLabeledButton
@namespace components
@constructor
*/
export default Ember.Component.extend(uiButtonBase, {
    tagName: 'div',
    layout: layout,
    _theme: 'left labeled',
    /**
     * Attribute bindings for containing div
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: ['tabindex'],
    tabindex: 0
});
