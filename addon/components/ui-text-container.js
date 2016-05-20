import Ember from 'ember';
import layout from '../templates/components/ui-text-container';

/**
ui-text-container component

@module components
@namespace components
@class UiTextContainer
@constructor
*/
export default Ember.Component.extend({
    layout,
    classNameBindings: ['_uiClass', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'text container',
});
