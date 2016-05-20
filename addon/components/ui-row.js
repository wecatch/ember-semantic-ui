import Ember from 'ember';
import layout from '../templates/components/ui-row';

/**
ui-row component

@module components
@namespace components
@class UiRow
@constructor
*/
export default Ember.Component.extend({
    layout,
    classNameBindings: ['_componentClass'],
    _componentClass: 'row',
});
