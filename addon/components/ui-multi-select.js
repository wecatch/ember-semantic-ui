import Ember from 'ember';
import UiSelectBase from '../mixins/ui-select-base';

export default Ember.Component.extend(UiSelectBase, {
	 /**
     * value  for the checkbox radio group component
     *
     * @property {Ember.String} value
     */
    value: [],

    /**
     * if allow search option
     *
     * @property {Ember.String} allowSearch
     */
    allowMulti: true,

    /**
     * @function setSelected reset selected value when value change
     * @observes "value" property
     * @returns  {void}
     */
    setSelected: function() {
        this.get('value') ? this.$('.ui.dropdown').dropdown('set selected', this.get('value')) : '';
    }.observes('value.[]'),

    /**
     * @function setupOptions 
     * @observes "options" property
     * @returns  {void}
    */
    setupOptions: function(){
        let selectDom =  this.assembleDom();

        this.$().empty();
        this.$().append(selectDom);
        let that = this;
        this.$('select').dropdown({
            onAdd:function(addedValue, addedText, $addedChoice){
            	let value = that.get('value');
                value.addObject(addedValue);
                that.set('value', value.toArray());
            },
            onRemove:function(removedValue, removedText, $removedChoice){
                let value = that.get('value');
                value.removeObject(removedValue);
                that.set('value', value.toArray());
            }
        });
        
     }.observes('options'),
});
