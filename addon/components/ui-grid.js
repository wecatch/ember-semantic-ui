import Ember from 'ember';
import layout from '../templates/components/ui-grid';

/**
ui-grid component

@module components
@namespace components
@class UiGrid
@constructor
*/
export default Ember.Component.extend({
    layout,
    classNameBindings: ['_uiClass', 'class', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'grid',
    /**
     * Class name to apply to the button
     *
     * @property {String} class
    */
    class: '',
});
