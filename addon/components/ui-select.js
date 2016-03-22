import Ember from 'ember';
import UiSelectBase from '../mixins/ui-select-base';
import layout from '../templates/components/ui-select';


export default Ember.Component.extend(UiSelectBase, {
    layout: layout,
    defaultValue: null,
    didUpdateAttrs() {
        this.setupSelected();
    },
    renderDropDown() {
        let that = this;
        this.$().dropdown({
            onLabelCreate: function(label) {
                that.$('input.search').val('');
                return $(label);
            },
            action: function(text, value) {
                that.set('value', value);
                that.$().dropdown('hide');
                if(that.attrs.value === undefined){
                    that.setupSelected();
                }
                if(that.attrs.update === 'function'){
                    that.attrs.update(value);
                }
                if(that.search){
                    that.$('.menu .item').removeClass('filtered');
                }
            }
        });
    },
    isOptionChecked(optionValue) {
        return String(this.value) === optionValue;
    },
    setupSelected: function() {
        this._selectedOptions.clear();
        for (var i = 0; i < this._options.length; i++) {
            let item = this._options[i];
            let checked = this.isOptionChecked(item['value']);
            Ember.set(item, 'selected', checked);
            if (checked) {
                this._selectedOptions.pushObject(item);
            }
        };
    },
    didInitAttrs(){
        this.setupSelected();
    },
    isDisplayHolder: Ember.computed('_selectedOptions.[]', function() {
        return this._selectedOptions.filterBy('selected', true).length === 0;
    })
});