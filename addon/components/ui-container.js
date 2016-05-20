import Ember from 'ember';
import layout from '../templates/components/ui-container';

/**
ui-container component

@module components
@namespace components
@class UiContainer
@constructor
*/
export default Ember.Component.extend({
    layout,
    classNameBindings: ['_uiClass', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'container',
});
