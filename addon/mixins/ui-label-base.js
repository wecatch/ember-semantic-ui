import Ember from 'ember';

export default Ember.Mixin.create({
    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "button"
     */
    tagName: 'div',
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['_uiClass', '_theme', 'theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass:'label',
    _theme: '',
    theme: ''
});
