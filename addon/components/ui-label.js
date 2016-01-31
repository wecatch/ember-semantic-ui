import Ember from 'ember';
import layout from '../templates/components/ui-label';
import uiLabelBase from '../mixins/ui-label-base';


export default Ember.Component.extend(uiLabelBase, {
    layout: layout
});
