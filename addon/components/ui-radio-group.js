import Ember from 'ember';
import UiCheckboxGroupBase from '../mixins/ui-checkbox-group-base';

export default Ember.Component.extend(UiCheckboxGroupBase, {
    setupOptions: function() {
        // remove all old radio then rerender
        this.$().remove('.checkbox');
        this.$('input').change(Ember.run.bind(this, function() {
            this.set('value', this.$('input:checked').val());
        }));

        this.setupValue();
    }.observes('options'),
    setupValue: function() {
        let self = this;
        let name = this.get('name');

        this.$('input').each(function(index, item) {
            if (self.get('value').indexOf($(item).val()) >= 0) {
                $(item).prop('checked', true);
            }
            $(item).attr('name', name);
        });
    }.observes('value'),
});