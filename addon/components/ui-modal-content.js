import Ember from 'ember';

export default Ember.Component.extend({
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
