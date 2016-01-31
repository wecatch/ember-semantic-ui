import Ember from 'ember';
import UiInputBase from '../mixins/ui-input-base';
import layout from '../templates/components/ui-form-input';

export default Ember.Component.extend(UiInputBase, {
    layout: layout,
    _uiClass: '',
    _componentClass: 'field',
});