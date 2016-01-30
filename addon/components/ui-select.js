import Ember from 'ember';
import UiSelectBase from '../mixins/ui-select-base';
import layout from '../templates/components/ui-select';
import multiLayout from '../templates/components/ui-multi-select';



let _valueChange = function(){
    if(this.multiple){
        if(this.value.join(',') !== this._value){
            this.setupSelected();
            this.set('_value', this.value.join(','));
        }
    }else {
        this.setupSelected();
    }
};

export default Ember.Component.extend(UiSelectBase, {
    init(){
        if(this.multiple){
            this.set('layout', multiLayout);
            Ember.addObserver(this, 'value.[]', this, function(){
                _valueChange.call(this);
            });
        }else {
            this.set('layout', layout);
            Ember.addObserver(this, 'value', this, function(){
                _valueChange.call(this);
            });
        }
        this._super(...arguments);
    }
});