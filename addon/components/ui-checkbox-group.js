import Ember from 'ember';
import UiCheckboxGroupBase from '../mixins/ui-checkbox-group-base';
import layout from '../templates/components/ui-checkbox-group';
import Component from '@ember/component';

/**
ui-checkbox-group component see {{#crossLink "mixins.UiCheckboxGroupBase"}}{{/crossLink}}

@module components
@namespace components
@class UiCheckboxGroup
@constructor
*/
export default Component.extend(UiCheckboxGroupBase, {
    layout: layout,
    /**
    value is checked or not
    @method isOptionChecked
    @return {Boolean}
    */
    isOptionChecked(optionValue){
        if(Ember.isArray(this.value)){
            return this.value.includes(optionValue);
        }
        return false;
    },
    actions: {
        childChange(checked, value){
            if(checked && !this.value.includes(value)){
                this.value.pushObject(value);
            }
            if(!checked && this.value.includes(value)){
                this.value.removeObject(value);
            }
        }
    }
});