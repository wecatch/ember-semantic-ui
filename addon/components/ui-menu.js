import Ember from 'ember';
import layout from '../templates/components/ui-menu';

/**
ui-menu component

@module components
@namespace components
@class UiMenu
@constructor
*/
export default Ember.Component.extend({
    layout,
    classNameBindings: ['_uiClass', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'menu',
});
