import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	display: false,
	transition: 'scale',
	/**
	 * Class names to apply to the button
	 *
	 * @property {Ember.Array} classNames
	 // */
	classNames: ['ui', 'modal'],

	// -------------------------------------------------------------------------
	// Actions

	// -------------------------------------------------------------------------
	// Events
	
	classNameBindings: ['_uiClass', 'theme'],
	_uiClass: 'ui',

	setDisplay: function(){
		this.get('display') ? this.$().modal('show') : this.$().modal('false');
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
	initialize: function(argument) {
		let that = this;

		this.$().modal({
			transition: this.get('transition'),
			onHide(){
				that.set('display', false);
			}
		})
	}.on('didInsertElement'),
});
