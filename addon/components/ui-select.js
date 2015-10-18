import Ember from 'ember';
import UiSelectBase from '../mixins/ui-select-base';


export default Ember.Component.extend(UiSelectBase, {
    /**
     * @function setSelected reset selected value when value change
     * @observes "value" property
     * @returns  {void}
     */
    setSelected: function() {
        this.get('value') ? this.$('.ui.dropdown').dropdown('set selected', this.get('value')) : '';
    }.observes('value'),
});