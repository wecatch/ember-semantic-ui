import Ember from 'ember';

export default Ember.Mixin.create({
    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "input"
     */
    tagName: 'div',

    /**
     * the input type
     *
     * @property {Ember.String} type
     */
    type: 'checkbox',

    /**
     * Alert external code about the click
     *
     * @function click
     * @returns  {void}
     */
    click: function() {
        this.sendAction('action');
    },

    /**
     * the checkbox 
     *
     * @property {Ember.String} theme
     */
    theme: function() {
        if (this.get('type') == 'radio') {
            return 'radio';
        }
        return '';
    }.property(),

    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['_uiClass', 'theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'checkbox',

    /**
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    value: null,

    /**
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    checked: false,
    /**
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    name: null,

    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    initialize: function(argument) {
        this.$().checkbox();
        let name = this.get('name'),
            input = this.$('input'),
            value = this.get('value'),
            checked = this.get('checked');

        input.prop('checked', checked);
        input.attr('name', name);
        input.val(value);
        this.$('input').change(Ember.run.bind(this, function() {
            this.set('checked', this.$('input').is(':checked'));
        }));

    }.on('didInsertElement'),

    /**
     * @function setChecked
     * @observes "checked" 
     * @returns  {void}
     */
    setChecked: function() {
        let input = this.$('input');
        input.prop('checked', this.get('checked'));
    }.observes('checked'),

    /**
     * @function setValue
     * @observes "value" 
     * @returns  {void}
     */
    setValue: function() {
        let input = this.$('input');
        input.val(this.get('value'));
    }.observes('value'),
});