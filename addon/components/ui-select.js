import Ember from 'ember';
import UiSelectBase from '../mixins/ui-select-base';


export default Ember.Component.extend(UiSelectBase, {
    /**
     * @function setSelected reset selected value when value change
     * @observes "value" property
     * @returns  {void}
     */
    setSelected: function() {
        let value = this.get('value'),
            options = this.get('options'),
            valuePath = this.get('valuePath'),
            namePath = this.get('namePath');

        for (var i = 0; i < options.length; i++) {
            if (options[i][valuePath] == String(value)) {
                this.$('.ui.dropdown').dropdown('set selected', String(value));
                return;
            }
        };
        this.$('.ui.dropdown').dropdown('restore defaults')
    }.observes('value'),
});