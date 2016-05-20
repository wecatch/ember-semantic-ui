import Ember from 'ember';
import layout from '../templates/components/ui-input-tags';

/**
ui-input-tags component

@module components
@namespace components
@class UiInputTags
@constructor
*/
export default Ember.Component.extend({
    layout: layout,
    tagName: 'div',

    /**
     * Class name to apply to the button
     *
     * @property {String} theme
    */
    theme: 'fluid',
    /**
     * Class name to apply to the button
     *
     * @property {String} class
    */
    class: '',
    classNameBindings: ['_uiClass', 'class', 'theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'multiple search selection dropdown',

    renderDropDown: function() {
        let that = this;
        this.$().dropdown({
            allowAdditions: true,
            onAdd: function(addedValue, addedText, $addedChoice) {
                that._addValue(addedValue);
            },
            onRemove: function(removedValue, removedText, $removedChoice) {
                that._removeValue(removedValue);
            },
            onLabelCreate: function(label){
                that.$('input.search').val('');
                that.$('.addition.item b').html('');
                return $(label);
            }
        });
    },
    didInsertElement() {
        this.renderDropDown();
    },
    _addValue(value){
        try{
            this.get('value').addObject(value);
        }catch(e){
            let id = Ember.guidFor(this);
            Ember.Logger.warn(`component:ui-input-tags ${id} value is not Ember.A type`);
            Ember.Logger.error(e);
        }
        if(typeof this.attrs.update === 'function'){
            this.attrs.update(this.get('value'));
        }
    },
    _removeValue(value){
        this.get('value').removeObject(value);
        if(typeof this.attrs.update === 'function'){
            this.attrs.update(this.get('value'));
        }
    },
    didInitAttrs(){
        //if value do not be passed to component
        if(this.value === undefined){
            this.set('value', Ember.A());
        }

        for (var i = this.value.length - 1; i >= 0; i--) {
            this.value.set(String(i), String(this.value[i]));
        };
    },
    hiddenValue: Ember.computed('value', {
        get(){
            if(Ember.isArray(this.value)){
                return this.value.join(',');
            }else{
                return '';
            }
        }
    })
});