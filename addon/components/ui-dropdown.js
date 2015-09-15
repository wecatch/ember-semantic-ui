import Ember from 'ember';

export default Ember.Component.extend({
        
    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "div"
     */
    tagName: 'div',

    /**
     * the dropdown loading status
     *
     * @property {Ember.Boolean} loading
     */
    loading:false,

    /**
     * the dropdown error status 
     *
     * @property {Ember.Boolean} error
     */
    error:false,

    /**
     * the dropdown error status 
     *
     * @property {Ember.Boolean} error
     */
    disabled:false,
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['_uiClass', 'theme', '_componentClass', 'loading:loading:', 'error:error:'],
    _uiClass: 'ui',
    _componentClass:'dropdown',

    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
    */
    initialize: function(argument) {
        this.$().dropdown();
    }.on('didInsertElement')
});
