import Mixin from '@ember/object/mixin';

/**
ui-button-base mixinx

@module mixins
@class UiButtonBase
@namespace mixins
@constructor
*/
export default Mixin.create({
    /**
     * The root component element
     *
     * @property tagName
     * @type {String}
     * @default  "button"
     */
    tagName: 'button',

    /**
     * Alert external code about the click
     *
     * @method click
     * @return  {void}
     */
    click: function() {
        if(typeof this.attrs.action === 'function'){
            this.attrs.action();
        }else {
            this.sendAction('action', this.param);
        }
    },
    /**
     * Class names to apply to the button
     *
     * @property classNames
     * @type {Array}
     */
    classNameBindings: ['_uiClass', 'disabled:disabled:', 'loading:loading:', 'active:active:', '_theme', 'theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass:'button',
    /**
     * private variable, Class names to apply to the button 
     * @private
     * @property _theme
     * @type {String}  
     */
    _theme: '',
    /**
     * Class name to apply to the button 
     *
     * @property theme 
     * @type {String}
     */
    theme: '',
    /**
     * the button loading status
     *
     * @property loading
     * @type {boolean}
     * @default false
     */
    loading:false,
    /**
     * the button disabled status 
     *
     * @property disabled
     * @type {boolean}
     * @default false
     */
    disabled:false,
    /**
     * the button active status
     *
     * @property active
     * @type {boolean}
     * @default false
     */
    active:false
});
