import Component from '@ember/component';
import layout from '../templates/components/ui-vertical-menu';

/**
ui-vertical-menu component

@module components
@namespace components
@class UiVerticalMenu
@constructor
*/
export default Component.extend({
    layout,
    classNameBindings: ['_uiClass', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'vertical menu',
});