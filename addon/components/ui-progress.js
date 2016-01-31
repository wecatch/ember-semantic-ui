import Ember from 'ember';
import layout from '../templates/components/ui-progress';


export default Ember.Component.extend({
    layout: layout,

    /**
     * A array contain class names apply to root element
     *
     * @property {Ember.Array} classNames
     * @default  ""
     */
    classNameBindings: ['_uiClass', 'theme', 'loading:active:', 'success:success:', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'progress',

    /**
     * progress theme
     *
     * @property {Ember.String} theme
     * @default  ''
     */
    theme: '',

    /**
     * progress status
     *
     * @property {Ember.Boolean} status
     * @default  false
     */
    loading: false,
    success: false,

    /**
     * progress percent
     *
     * @property {Ember.Number} percent
     * @default  0
     */
    percent: 0,

    /**
     * A array contain attribute to root element
     *
     * @property {Ember.Array} attribuebindings
     * @default  ""
     */
    attributeBindings: ['percent:data-percent'],
    initialize: function(argument) {
        this.$().progress();
    }.on('didInsertElement')
});