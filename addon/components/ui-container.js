import layout from '../templates/components/ui-container';
import Component from '@ember/component';

/**
ui-container component

@module components
@namespace components
@class UiContainer
@constructor
*/
export default Component.extend({
    layout,
    classNameBindings: ['_uiClass', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'container',
});
