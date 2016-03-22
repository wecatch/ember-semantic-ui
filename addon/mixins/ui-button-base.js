import Ember from 'ember';

export default Ember.Mixin.create({
    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "button"
     */
    tagName: 'button',

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
    click: function() {
        if(typeof this.attrs.action == 'function'){
            this.attrs.action();
        }else {
            this.sendAction('action', this.param);
        }
    },
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['_uiClass', 'disabled:disabled:', 'loading:loading:', 'active:active:', '_theme', 'theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass:'button',
    /**
     * private variable, Class names to apply to the button 
     *
     * @property {Ember.Array} _theme 
     */
    _theme: '',
    /**
     * Class names to apply to the button 
     *
     * @property {Ember.Array} theme 
     */
    theme: '',
    /**
     * the button loading status
     *
     * @property {Ember.Boolean} loading
     */
    loading:false,
    /**
     * the button disabled status 
     *
     * @property {Ember.Boolean} disabled
     */
    disabled:false,
    /**
     * the button active status
     *
     * @property {Ember.Boolean} active
     */
    active:false
});
