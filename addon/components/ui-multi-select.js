import Ember from 'ember';
import UiSelectBase from '../mixins/ui-select-base';
import layout from '../templates/components/ui-multi-select';

export default Ember.Component.extend(UiSelectBase, {
    layout: layout
});
