import Ember from 'ember';
import layout from '../templates/components/ui-tab-segment';
import uiSegmentBase from '../mixins/ui-segment-base';


/**
ui-tab-segment component  {{#crossLink "mixins.uiSegmentBase"}}{{/crossLink}}

 
@module components
@namespace components
@class UiTabSegment
@constructor
*/
export default Ember.Component.extend(uiSegmentBase, {
    layout: layout,
    _theme: 'tab',
    theme: 'bottom attached',
    attributeBindings: ['tab:data-tab'],
    /**
    tab name
    @property {String} tab
    */
    tab: '',
    didInsertElement(){
        if(this.active){
            this.$().addClass('active');
        }
    }
});