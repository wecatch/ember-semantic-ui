import Ember from 'ember';
import layout from '../templates/components/ui-input-tags';

export default Ember.Component.extend({
    layout: layout,
    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "div"
     */
    tagName: 'div',

    theme: 'fluid',
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['_uiClass', 'theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'multiple search selection dropdown',

    /**
     * the input value
     *
     * @property {Ember.String} value
     */
    value: null,
    renderDropDown: function() {
        let that = this;
        this.$().dropdown({
            allowAdditions: true,
            onAdd: function(addedValue, addedText, $addedChoice) {
                let value = that.get('value');
                value.addObject(addedValue);
                that.set('value', value.toArray());
            },
            onRemove: function(removedValue, removedText, $removedChoice) {
                let value = that.get('value');
                value.removeObject(removedValue);
                that.set('value', value.toArray());
            },
            onLabelCreate: function(label){
                that.$('input.search').val('');
                return false;
            }
        });
    },
    /**
     * @function initialize step two
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    valueChange: Ember.observer('value', function(){
        // this.$('.label').remove();
        // Ember.run.scheduleOnce('afterRender', this, function(){
        //     this.renderDropDown();
        // });
    }),
    initialize: function(argument) {
        this.renderDropDown();
    }.on('didInsertElement'),
    init: function() {
        this._super(...arguments);
        if (!this.get('value')) {
            this.set('value', Ember.A());
        }
    }
});