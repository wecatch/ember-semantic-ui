import Ember from 'ember';
import layout from '../templates/components/ui-modal';


export default Ember.Component.extend({
    layout: layout,
    actions: {
        onShow(){
            this.sendAction('onShow');
        },
        onHide(){
            this.sendAction('onHide');
        }
    },
	tagName: 'div',

	/**
     * modal status 
     * @property {Ember.Boolean} show
     * @default  false
    */
	show: false,

    /**
     * Setting to false will not allow you to close the modal by clicking on the dimmer
     * @property {Ember.Boolean} closable
     * @default  true
    */
    closable: true,
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
		let that = this,
            closable = this.get('closable');

		this.$().modal({
            closable: closable,
            observeChanges: true,
			onHide(){
                if(that.get('show')){
                    that.set('show', false);
                    that.send('onHide');
                }
			},
            onShow(){
                that.send('onShow');
            }
		})
	}.on('didInsertElement'),
});
