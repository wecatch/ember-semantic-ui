import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	display: false,
	transition: 'scale',
	direction: 'left',
	/**
	 * Class names to apply to the button
	 *
	 * @property {Ember.Array} classNames
	 // */
	classNames: ['ui', 'sidebar', 'inverted vertical'],

	// -------------------------------------------------------------------------
	// Actions

	// -------------------------------------------------------------------------
	// Events
	
	classNameBindings: ['_uiClass', 'direction', 'theme'],
	_uiClass: 'ui',

	setDisplay: function(){
		this.get('display') ? this.$().sidebar('toggle') : this.$().sidebar('false');
	}.observes('display'),
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

	/**
	 * Attribute bindings for the button component
	 *
	 * @property {Ember.Array} attributeBindings
	 */

	initialize: function(argument){
		this.$().sidebar({
			dimPage: false
		});
	}.on('didInsertElement')
});
