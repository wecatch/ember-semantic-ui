import Ember from 'ember';
import layout from '../templates/components/ui-modal-content';


export default Ember.Component.extend({
    layout: layout,
	tagName: 'div',
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['theme', '_componentClass'],
    theme: '',
    _componentClass:'content'
});
