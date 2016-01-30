import Ember from 'ember';
import UiSelectBase from '../mixins/ui-select-base';
import layout from '../templates/components/ui-select';
import multiLayout from '../templates/components/ui-multi-select';

export default Ember.Component.extend(UiSelectBase, {
    init(){
        if(this.multiple){
            this.set('layout', multiLayout)
        }else {
            this.set('layout', layout);
        }
        this._super(...arguments);
    }
});