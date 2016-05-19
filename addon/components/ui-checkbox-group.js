import Ember from 'ember';
import UiCheckboxGroupBase from '../mixins/ui-checkbox-group-base';
import layout from '../templates/components/ui-checkbox-group';

/**
ui-checkbox-group component see {{#crossLink "mixins.UiCheckboxGroupBase"}}{{/crossLink}}

@module components
@namespace components
@class UiCheckboxGroup
@constructor
*/
export default Ember.Component.extend(UiCheckboxGroupBase, {
    layout: layout,
    /**
    value is checked or not
    @method isOptionChecked
    @return {Boolean}
    */
    isOptionChecked(optionValue){
        if(Ember.isArray(this.value)){
            return this.value.contains(optionValue);
        }
        return false
    },
    actions: {
        childChange(checked, value){
            if(checked && !this.value.contains(value)){
                this.value.pushObject(value);
            }
            if(!checked && this.value.contains(value)){
                this.value.removeObject(value);
            }
        }
    }
});