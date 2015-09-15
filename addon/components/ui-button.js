import Ember from 'ember';

export default Ember.Component.extend({
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
        this.sendAction();
    },

    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['_uiClass','disabled:disabled:', 'loading:loading:', 'theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass:'button',

    /**
     * the button loading status
     *
     * @property {Ember.Boolean} loading
     */
    loading:false,

    /**
     * the button error status 
     *
     * @property {Ember.Boolean} error
     */
    disabled:false,
    /**
     * Attribute bindings for the button component
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: ['href']
});
