import Ember from 'ember';
import layout from '../templates/components/ui-form';


export default Ember.Component.extend({
    layout: layout,
    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "div"
     */
    tagName: 'div',

    /**
     * the form theme
     *
     * @property {Ember.String} theme
     */
    theme: '',
    
    /**
     * the form loading status
     *
     * @property {Ember.Boolean} loading
     */
    loading:false,

    /**
     * the form error status 
     *
     * @property {Ember.Boolean} error
     */
    error:false,

    /**
     * the form success status 
     *
     * @property {Ember.Boolean} error
     */
    success:false,

    /**
     * the form warning status 
     *
     * @property {Ember.Boolean} warning
     */
    warning:false,

    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['_uiClass', 'theme', '_componentClass', 'success:success:', 'warning:warning:', 'loading:loading:', 'error:error:'],
    _uiClass: 'ui',
    _componentClass:'form',
});
