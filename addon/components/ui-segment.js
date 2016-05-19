import Ember from 'ember';
import layout from '../templates/components/ui-segment';
import uiSegmentBase from '../mixins/ui-segment-base';

/**

ui-segment component {{#crossLink "mixins.uiSegmentBase"}}{{/crossLink}}

@module components
@class UiSegment
@namespace components
@constructor
*/
export default Ember.Component.extend(uiSegmentBase, {
    layout: layout
});
