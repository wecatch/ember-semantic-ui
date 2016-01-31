import Ember from 'ember';
import UiSelectBase from '../mixins/ui-select-base';
import layout from '../templates/components/ui-select';


export default Ember.Component.extend(UiSelectBase, {
    layout: layout,
    defaultValue: null,
    didUpdateAttrs() {
        //only update when outer change value
        if (this.value !== this._value) {
            this.setupSelected();
            this.set('_value', this.value);
        }
    },
    renderDropDown() {
        let that = this;
        this.$().dropdown({
            onLabelCreate: function(label) {
                that.$('input.search').val('');
                return $(label);
            },
            action: function(text, value) {
                // nothing built in occurs
                that.set('value', value);
                that.set('_value', value);
                //trigger _selectionOptions re selected
                //trigger _options re selected
                //make sure only call setupSelected once
                console.log(text);
                console.log(value);
                that.setupSelected(value);
                that.$().dropdown('hide');
            }
        });
    },
    isOptionChecked(optionValue) {
        if (this.value) {
            return this.value === optionValue;
        }
        return false;
    },
    setupSelected: function(value) {
        this._selectedOptions.clear();
        for (var i = 0; i < this._options.length; i++) {
            let item = this._options[i];
            let checked = value ? value === item['value'] : this.isOptionChecked(item['value']);
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
    isDisplayHolder: Ember.computed('_selectedOptions.[]', function() {
        return this._selectedOptions.filterBy('selected', true).length === 0;
    })
});