import Ember from 'ember';
import layout from '../templates/components/ui-modal-content';

/**
ui-modal-content component

@module components
@namespace components
@class UiModalContent
@constructor
*/
export default Ember.Component.extend({
    layout: layout,
	tagName: 'div',
    classNameBindings: ['theme', '_componentClass'],
    /**
     * Class name to apply to the modal-content
     *
     * @property {String} theme
     */
    theme: '',
    /**
     * Class name to apply to modal-content
     *
     * @property {String} class
     */
    class: '',
    _componentClass:'content'
});
