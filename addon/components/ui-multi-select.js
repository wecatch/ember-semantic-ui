import Ember from 'ember';
import UiSelectBase from '../mixins/ui-select-base';
import layout from '../templates/components/ui-multi-select';


/**

ui-multi-select component see {{#crossLink "mixins.UiSelectBase"}}{{/crossLink}}

@module components
@namespace components
@class UiMultiSelect
@constructor
*/
export default Ember.Component.extend(UiSelectBase, {
    layout: layout,
    /**
     * defaultValue  for the component
     *
     * @property {Array} defaultValue
     */
    defaultValue: null,
    _multiple: true,
    _valueChange: Ember.observer('value.[]', function(){
        if (this.value.join(',') !== this._value) {
            this.setupSelected();
            this.set('_value', this.value.join(','));
        }
    }),
    renderDropDown() {
        let that = this;
        this.$().dropdown({
            onAdd: function(addedValue) {
                for (var i = 0; i < that._options.length; i++) {
                    let item = that._options[i];
                    if (item['value'] === addedValue) {
                        that._selectedOptions.pushObject(item);
                        break;
                    }
                }
                that.value.pushObject(addedValue);
            },
            onRemove: function(removedValue) {
                for (var i = 0; i < that._selectedOptions.length; i++) {
                    let item = that._selectedOptions[i];
                    if (item['value'] === removedValue) {
                        that._selectedOptions.removeObject(item);
                        break;
                    }
                }
                that.value.removeObject(removedValue);
            },
            onLabelCreate: function(label) {
                that.$('input.search').val('');
                return Ember.$(label);
            }
        });
    },
    setupSelected: function() {
        this._selectedOptions.clear();
        for (var i = 0; i < this._options.length; i++) {
            let item = this._options[i];
            let checked = this.isOptionChecked(item['value']);
            Ember.set(item, 'selected', checked);
            if(checked){
                this._selectedOptions.pushObject(item);
            }
        }
    },
    isOptionChecked(optionValue) {
        if (this.value) {
            return this.value.includes(optionValue);
        }
        return false;
    },
    init() {
        this._super(...arguments);
    }
});