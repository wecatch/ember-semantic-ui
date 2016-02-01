import Ember from 'ember';
import layout from '../templates/components/ui-tab-menu';

const {
    String: {
        classify, htmlSafe
    },
    Component,
    getWithDefault,
    warn,
    run,
    on,
    get,
    computed,
    isArray,
    set
} = Ember;

export default Ember.Component.extend({
    layout: layout,
    tagName: 'div',
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    tabs: '',
    delimiter: ',',
    classNameBindings: ['_uiClass', '_theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'menu',
    theme: '',
    _theme: computed('theme', {
        get() {
            return this.get('theme') ? this.get('theme') : 'top attached tabular';
        }
    }),
    _tabs: computed('tabs', {
        get() {
            if(isArray(this.get('tabs'))){
                return this.get('tabs');
            }

            return this.get('tabs').split(this.get('delimiter'));
        }
    }),
    initialize: function() {
        this.$('.item').tab();
    }.on('didInsertElement')
});