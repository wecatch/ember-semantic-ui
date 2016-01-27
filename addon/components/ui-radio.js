import Ember from 'ember';
import UiCheckboxBase from '../mixins/ui-checkbox-base';
import layout from '../templates/components/ui-radio';

export default Ember.Component.extend(UiCheckboxBase, {
    layout: layout,
    _theme: 'radio'
});
