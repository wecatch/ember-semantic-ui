import Ember from 'ember';
import layout from '../templates/components/ui-progress';


/**

ui-progress component

@module components
@namespace components
@class UiProgress
@constructor
*/
export default Ember.Component.extend({
    layout: layout,
    classNameBindings: ['_uiClass', 'class', 'theme', 'loading:active:', '_componentClass', 'success:success:', 'error:error:'],
    _uiClass: 'ui',
    _componentClass: 'progress',

    /**
     * progress theme, indicating
     *
     * @property {String} theme
     * @default  ''
     */
    theme: '',

    /**
     * progress theme
     *
     * @property {String} class
     * @default  ''
     */
    class: '',

    /**
     * progress loading status, by default false
     *
     * @property {Boolean} loading
     * @default  false
     */
    loading: false,

    /**
     * progress success status, by default false
     *
     * @property {Boolean} success
     * @default  false
     */
    success: false,

    /**
     * progress error status, by default false
     *
     * @property {Boolean} error
     * @default  false
     */
    error: false,
    /**
     * progress percent
     *
     * @property {Number} percent
     * @default  0
     */
    percent: 0,
    didInsertElement() {
        this.$().progress({
            percent: this.get('_percent')
        });
    },
    _percent: Ember.computed('percent', {
        get(){
            if(this.percent > 100){
                return 100;
            }

            if(this.percent < 0){
                return 0;
            }

            return this.percent;
        }
    }),
    updateProgress: Ember.observer('percent', function(){
        this.$().progress({
            percent: this.get('_percent')
        });
    })
});