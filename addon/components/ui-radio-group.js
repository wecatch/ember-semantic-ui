import Ember from 'ember';
import UiCheckboxGroupBase from '../mixins/ui-checkbox-group-base';
import layout from '../templates/components/ui-radio-group';


export default Ember.Component.extend(UiCheckboxGroupBase, {
    layout: layout,
    isOptionChecked(optionValue){
        return String(this.value) === optionValue;
    },
    initialize: function(argument) {
        if(!this.options){
            let name = this.name;
            this.$('input').each(function(index, item) {
                if(!$(item).attr('name')){
                    $(item).attr('name', name);
                }
            });
        }
    }.on('didInsertElement'),
    actions: {
        childChange(value, checked){
            if(checked){
                this.set('value', value);
            }
        }
    }
});