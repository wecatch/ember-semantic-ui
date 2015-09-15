import Ember from 'ember';
import UiCheckboxGroupBase from '../mixins/ui-checkbox-group-base';

export default Ember.Component.extend(UiCheckboxGroupBase, {
    setupOptions: function() {
        var name = this.get('name');
        // remove all old radio then rerender
        this.$().remove('.checkbox');
        this.$('input').change(Ember.run.bind(this, function() {
            this.set('value', this.$('input:checked').val());
        }));

        var that = this;
        this.$('input').each(function(index, item) {
            if (that.get('value') && that.get('value') === $(item).val()) {
                $(item).prop('checked', true);
            }
            $(item).attr('name', name);
        });
    }.observes('options')
});