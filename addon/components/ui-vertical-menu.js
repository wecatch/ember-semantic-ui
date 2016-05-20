import Ember from 'ember';
import layout from '../templates/components/ui-vertical-menu';

/**
ui-menu component

@module components
@namespace components
@class UiVerticalMenu
@constructor
*/
export default Ember.Component.extend({
    layout,
    classNameBindings: ['_uiClass', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'vertical menu',
});