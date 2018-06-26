import layout from '../templates/components/ui-grid';
import Component from '@ember/component';

/**
ui-grid component

@module components
@namespace components
@class UiGrid
@constructor
*/
export default Component.extend({
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
