import Ember from 'ember';
import UiSelectBase from '../mixins/ui-select-base';
import layout from '../templates/components/ui-select';


export default Ember.Component.extend(UiSelectBase, {
    layout: layout,
    defaultValue: null,
    didUpdateAttrs() {
        //only update when outer change value
        console.log(this.value);
        console.log(this._value);
        if (this.value !== this._value) {
            this.setupSelected();
            this.set('_value', this.value);
        }
    },
    renderDropDown() {
        let that = this;
        this.$().dropdown({
            onChange: function(value, text, $choice) {
                that.set('value', value);
                that.set('_value', value);
            },
            onLabelCreate: function(label) {
                that.$('input.search').val('');
                return $(label);
            }
        });
    },
    isOptionChecked(optionValue) {
        if (this.value) {
            return this.value === optionValue;
        }
        return false;
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
    init() {
        this._super(...arguments);
        this.set('_value', this.value);
    },
    isDisplayHolder: Ember.computed('_selectedOptions.[]', function(){
        return this._selectedOptions.filterBy('selected', true).length === 0;
    })
});