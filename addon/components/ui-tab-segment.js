import Ember from 'ember';
import layout from '../templates/components/ui-tab-segment';
import uiSegmentBase from '../mixins/ui-segment-base';

export default Ember.Component.extend(uiSegmentBase, {
    layout: layout,
    _theme: 'tab',
    theme: 'bottom attached',
     /**
     * Attribute bindings for containing div
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: ['tab:data-tab'],
    tab: ''
});