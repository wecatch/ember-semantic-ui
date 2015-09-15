import Ember from 'ember';
import UiCheckboxGroupBase from '../mixins/ui-checkbox-group-base';

export default Ember.Component.extend(UiCheckboxGroupBase, {

    /**
     * @function setupOptions
     * @observes "options" propety
     * @returns  {void}
     */
    setupOptions: function(){
        // remove all old radio then rerender
        this.$().remove('.checkbox');
        this.$('input').change(Ember.run.bind(this, function() {
            var newValue = this.$('input:checked').map(function(index, item){
                return $(item).val();
            });
            this.set('value', newValue.toArray());
        }));
        var that = this;
        this.$('input').each(function(index, item){
            if(that.get('value').indexOf($(item).val())>=0){
                $(item).prop('checked', true);
            }
        });
    }.observes('options'),
});
