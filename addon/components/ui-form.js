import Ember from 'ember';
import layout from '../templates/components/ui-form';

/**
ui-form component

@module components
@namespace components
@class UiForm
@constructor
*/
export default Ember.Component.extend({
    layout: layout,
    /**
     * The root component element
     *
     * @property {String} tagName
     * @default  "div"
     */
    tagName: 'div',

    /**
     * the form theme
     *
     * @property {String} theme
     */
    theme: '',
    
    /**
     * the form loading status
     *
     * @property {Boolean} loading
     */
    loading:false,

    /**
     * the form error status 
     *
     * @property {Boolean} error
     */
    error:false,

    /**
     * the form success status 
     *
     * @property {Boolean} error
     */
    success:false,

    /**
     * the form warning status 
     *
     * @property {Boolean} warning
     */
    warning:false,

    /**
     * Class names to apply to the button
     *
     * @property {Array} classNames
     */
    classNameBindings: ['_uiClass', 'theme', '_componentClass', 'success:success:', 'warning:warning:', 'loading:loading:', 'error:error:'],
    _uiClass: 'ui',
    _componentClass:'form',
});
