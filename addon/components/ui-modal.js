import Ember from 'ember';
import layout from '../templates/components/ui-modal';


export default Ember.Component.extend({
    layout: layout,
    actions: {
        onShow(){
            if(typeof this.attrs.onShow == 'function'){
                this.attrs.onShow();
            }else {
                this.sendAction('onShow');
            }
        },
        onHide(){
            if(typeof this.attrs.onHide == 'function'){
                this.attrs.onHide();
            }else{
                this.sendAction('onHide');
            }
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

    transition: 'scale',

	/**
	 * Class names to apply to the modal
	 *
	 * @property {Ember.Array} classNameBindings
	*/
    classNameBindings: ['_uiClass', 'theme', 'class', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'modal',
    class: '',
    theme:'',
	/**
     * @function showModal
     * @observes "show" property
     * @returns  {void}
    */
	showModal: function(){
        if(this.get('show')){
            this.$().modal('setting', 'transition', this.transition);
            this.$().modal('setting', 'closable', this.closable);
            this.$().modal('show');            
        }else{
            this.$().modal('hide');
        }
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
            },
            onApprove() {
                if(typeof that.attrs.onApprove == 'function'){
                    return that.attrs.onApprove();
                }
            },
            onDeny(){
                if(typeof that.attrs.onDeny == 'function'){
                    return that.attrs.onDeny();
                }
            }
		})
	}.on('didInsertElement'),
});
