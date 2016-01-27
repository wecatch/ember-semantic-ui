import Ember from 'ember';
import UiCheckboxGroupBase from '../mixins/ui-checkbox-group-base';
import layout from '../templates/components/ui-checkbox-group';


export default Ember.Component.extend(UiCheckboxGroupBase, {
    layout: layout,
    isOptionChecked(optionValue){
        if(Ember.isArray(this.value)){
            return this.value.contains(optionValue);
        }
        return false
    },
    actions: {
        childChange(value, checked){
            if(checked && !this.value.contains(value)){
                this.value.pushObject(value);
            }
            if(!checked && this.value.contains(value)){
                this.value.removeObject(value);
            }
        }
    }
});