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

    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    initialize: function(argument) {
        this.renderDropDown();
    }.on('didInsertElement'),
    renderDropDown: function() {
        let that = this;
        let selectDom = this.assembleDom();
        this.$().empty();
        this.$().append(selectDom);

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
    }.observes('value.[]'),
    assembleDom: function() {

        // init select
        let selectDom = '<select multiple="" class="' + this.get('_uiClass') + ' ' + this.get('theme') + ' ' + this.get('_componentClass') + '">';
        let value = this.get('value');

        for (var i = 0; i < value.length; i++) {
            let item = String(value[i]);
            let option = '';
            option = '<option value="' + item + '" selected="" >' + item + '</option>';
            selectDom += option;
        };

        selectDom += '</select>';
        return selectDom;
    },
    init: function() {
        this._super(...arguments);
        if (!this.get('value')) {
            this.set('value', Ember.A());
        }
    }
});