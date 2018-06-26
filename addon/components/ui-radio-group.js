import Component from '@ember/component';
import UiCheckboxGroupBase from '../mixins/ui-checkbox-group-base';
import layout from '../templates/components/ui-radio-group';


/**

ui-radio-group component see {{#crossLink "mixins.UiCheckboxGroupBase"}}{{/crossLink}}

@module components
@class UiRadioGroup
@namespace components
@constructor
*/
export default Component.extend(UiCheckboxGroupBase, {
    layout: layout,
    isOptionChecked(optionValue){
        return String(this.value) === optionValue;
    },
    actions: {
        childChange(checked, value){
            if(checked){
                this.set('value', value);
            }
        }
    }
});