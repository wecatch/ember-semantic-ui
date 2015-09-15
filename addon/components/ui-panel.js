import Ember from 'ember';

export default Ember.Component.extend({
	/**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "button"
     */
    tagName: 'div',
    title: 'panel',
    topbar: false,
    
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'ui', 'panel'],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * Alert external code about the click
     *
     * @function click
     * @returns  {void}
     */

    /**
     * Class bindings for the button component
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: ['theme', 'color', 'size'],
    theme: '',
    color: '',
    size: '',
});
