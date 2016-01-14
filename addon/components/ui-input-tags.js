import Ember from 'ember';

export default Ember.Component.extend({
    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "div"
     */
    tagName: 'div',

    theme: 'fluid',
    _uiClass: 'ui',
    _componentClass: 'search dropdown',

    /**
     * the input value
     *
     * @property {Ember.String} value
     */
    value: null,
    renderDropDown: function() {
        let that = this;
        this.$('select').dropdown({
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
            }
        });
    },
    valueChange: Ember.observer('value', function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
            this.renderDropDown();
        });
    }),
    /**
     * @function initialize step two
     * @observes "didInsertElement" event
     * @returns  {void}
     */
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