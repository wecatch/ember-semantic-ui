import Ember from 'ember';

/**
ui-checkbox-base mixinx

@module mixins
@namespace mixins
@class UiCheckboxBase
@constructor
*/
export default Ember.Mixin.create({
    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "input"
     */
    tagName: 'div',

    /**
     * the checkbox 
     *
     * @property {Ember.String} theme
     */
    _theme: 'checkbox',
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['_uiClass', '_theme', 'theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'checkbox',

    /**
     * 
     *
     * @property {Ember.String} value
     */
    value: null,

    /**
     * checkbox checked
     *
     * @property {Ember.Boolean} checked
     */
    checked: false,
    /**
     * checkbox name
     *
     * @property {Ember.String} name
     */
    name: null,

    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    didInsertElement() {
        this.$().checkbox();
        let {checked} = this.getProperties('checked');
        let input = this.$('input');

        //set checbox stated
        input.prop('checked', checked);
        //bind input change event
        this.$('input').change(()=>{
            let isChecked = input.is(':checked');
            this._updateValue(isChecked);
            this.set('checked', isChecked);
            this.sendAction('action', isChecked, this.value);
        });
    },
    _updateValue(checked){
        if(typeof this.attrs.update ==='function'){
            if(checked){
                this.attrs.update(this.value);
            }else {
                this.attrs.update('');
            }
        }
    },
    init(){
        //set checked value
        this._super(...arguments);
        this._updateValue(this.get('checked'));
    },
    didUpdateAttrs(){
        this.setChecked();
    },
    /**
     * @function setChecked
     * @observes "checked" 
     * @returns  {void}
     */
    setChecked() {
        let input = this.$('input');
        //when checked change, set checkbox state
        input.prop('checked', this.get('checked'));
        //change value
        this._updateValue(this.get('checked'));
    }
});