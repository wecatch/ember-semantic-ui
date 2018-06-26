import Component from '@ember/component';
import layout from '../templates/components/ui-text-container';

/**
ui-text-container component

@module components
@namespace components
@class UiTextContainer
@constructor
*/
export default Component.extend({
    layout,
    classNameBindings: ['_uiClass', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'text container',
});
