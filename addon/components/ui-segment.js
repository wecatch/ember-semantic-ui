import Ember from 'ember';
import layout from '../templates/components/ui-segment';
import uiSegmentBase from '../mixins/ui-segment-base';

export default Ember.Component.extend(uiSegmentBase, {
    layout: layout
});
