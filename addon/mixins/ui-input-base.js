import Ember from 'ember';


export default Ember.Mixin.create({
	/**
	 * the component tag
	 *
	 * @property {Ember.String} text
	 */
	tagName: 'div',

	/**
	 * the input type
	 *
	 * @property {Ember.String} type
	 */
	type: 'text',

	/**
	 * the input value
	 *
	 * @property {Ember.String} value
	 */
	value: '',

	/**
	 * the input placeholder
	 *
	 * @property {Ember.String} placeholder
	 */
	placeholder: '',

	/**
	 * the label 
	 *
	 * @property {Ember.String} label
	 */
	label: '',

	/**
	 * the input 
	 *
	 * @property {Ember.String} theme
	 */
	theme: '',

	/**
	 * the input focus status
	 *
	 * @property {Ember.Boolean} focus
	 */
	focus: false,

	/**
	 * the input loading status
	 *
	 * @property {Ember.Boolean} loading
	 */
	loading: false,

	/**
	 * the input error status 
	 *
	 * @property {Ember.Boolean} error
	 */
	error: false,

	/**
	 * the input error status 
	 *
	 * @property {Ember.Boolean} error
	 */
	disabled: false,

	/**
	 * the input readonly status 
	 *
	 * @property {Ember.Boolean} readonly
	 */
	readonly: false,

	/**
	 * Class names to apply to the button
	 *
	 * @property {Ember.Array} classNames
	 */
	classNameBindings: ['_uiClass', 'disabled:disabled:', 'theme', '_componentClass', 'focus:focus:', 'loading:loading:', 'error:error:'],
	_uiClass: 'ui',
	_componentClass: 'input',

	/**
	 * Attribute bindings for containing div
	 *
	 * @property {Ember.Array} attributeBindings
	 */
	attributeBindings: [],

	// -------------------------------------------------------------------------
	// Actions

	// -------------------------------------------------------------------------
	// Events

	/**
	 * @function initialize
	 * @observes "didInsertElement" event
	 * @returns  {void}
	 */
	_updateValue() {
		let newValue = this.$('input').val();
		if (typeof this.attrs.update === 'function') {
			this.attrs.update(newValue);
		}else {
			this.set('value', newValue);
		}
	},
	initialize: function(argument) {
		if (this.get('readonly')) {
			this.$('input').attr('readonly', 'readonly');
		}
		this.$('input').change(() => {
			this._updateValue();
		});
	}.on('didInsertElement')
});