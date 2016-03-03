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
     * Alert external code about the click
     *
     * @function click
     * @returns  {void}
     */
    click: function() {
        if(typeof this.attrs.action ==='function' ){
            this.attrs.action(this.value, this.checked);
        }
    },

    /**
     * the checkbox 
     *
     * @property {Ember.String} theme
     */
    _theme: 'checkbox',
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['_uiClass', '_theme', 'theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'checkbox',

    /**
     * 
     *
     * @property {Ember.String} value
     */
    value: null,

    /**
     * checkbox checked
     *
     * @property {Ember.Boolean} checked
     */
    checked: false,
    /**
     * checkbox name
     *
     * @property {Ember.String} name
     */
    name: null,

    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    initialize: function(argument) {
        this.$().checkbox();
        let {name, value, checked} = this.getProperties('name','value', 'checked');
        let input = this.$('input');

        input.prop('checked', checked);
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
    }.observes('checked')
});