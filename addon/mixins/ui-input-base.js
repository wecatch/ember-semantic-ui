import Mixin from '@ember/object/mixin';


/**
ui-input-base mixin

@module mixins
@namespace mixins
@class UiInputBase 
@constructor
*/
export default Mixin.create({
	tagName: 'div',

	/**
	 * the input type
	 *
	 * @property {String} type
	 * @default text
	 */
	type: 'text',

	/**
	 * the input value
	 *
	 * @property {String} value
	 */
	value: '',

	/**
	 * the input placeholder
	 *
	 * @property {String} placeholder
	 */
	placeholder: '',

	/**
	 * the label 
	 *
	 * @property {String} label
	 */
	label: '',

	/**
	 * the input 
	 *
	 * @property {String} theme
	 */
	theme: '',

	/**
	 * the input focus status
	 *
	 * @property {Boolean} focus
	 * @default false
	 */
	focus: false,

	/**
	 * the input loading status
	 *
	 * @property {Boolean} loading
	 * @default false
	 */
	loading: false,

	/**
	 * the input error status 
	 *
	 * @property {Boolean} error
	 * @default false
	 */
	error: false,

	/**
	 * the input error status 
	 *
	 * @property {Boolean} error
	 * @default false
	 */
	disabled: false,

	/**
	 * the input readonly status 
	 *
	 * @property {Boolean} readonly
	 * @default false
	 */
	readonly: false,

	classNameBindings: ['_uiClass', 'disabled:disabled:', 'theme', '_componentClass', 'focus:focus:', 'loading:loading:', 'error:error:'],
	_uiClass: 'ui',
	_componentClass: 'input',

	//Attribute bindings for containing div
	attributeBindings: [],
	_updateValue() {
		let newValue = this.$('input').val();
		if (typeof this.attrs.update === 'function') {
			this.attrs.update(newValue);
		}else {
			this.set('value', newValue);
		}
	},
	didInsertElement(){
		if (this.get('readonly')) {
			this.$('input').attr('readonly', 'readonly');
		}
		this.$('input').change((e) => {
			this._updateValue();
			if(typeof this.attrs.onChange === 'function'){
				this.attrs.onChange(e);
			}
		});

		this.$('input').focus((e)=>{
			if(typeof this.attrs.onFocus === 'function'){
				this.attrs.onFocus(e);
			}
		});

		this.$('input').focusin((e)=>{
			if(typeof this.attrs.onFocusin === 'function'){
				this.attrs.onFocusin(e);
			}
		});

		this.$('input').focusout((e)=>{
			if(typeof this.attrs.onFocusout === 'function'){
				this.attrs.onFocusout(e);
			}
		});
	}
});