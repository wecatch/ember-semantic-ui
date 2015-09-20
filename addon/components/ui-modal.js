import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',

	/**
     * modal status 
     * @property {Ember.Boolean} show
     * @default  false
    */
	show: false,
	/**
	 * Class names to apply to the button
	 *
	 * @property {Ember.Array} classNames
	*/
	classNames: ['ui', 'modal'],

	/**
     * @function showModal
     * @observes "show" property
     * @returns  {void}
    */
	showModal: function(){
		this.get('show') ? this.$().modal('show') : this.$().modal('hide');
	}.observes('show'),

	initialize: function(argument) {
		let that = this;

		this.$().modal({
			onHide(){
				that.set('show', false);
			}
		})
	}.on('didInsertElement'),
});
