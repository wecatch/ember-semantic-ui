import Ember from 'ember';


export default Ember.Mixin.create({
    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "select"
     */
    tagName: 'div',

    /**
     * value  for the select 
     *
     * @property {Ember.String} value
     */
    value: '',
    /**
     *  label for the select radio group component
     *
     * @property {Ember.String} label
     */
    label: '',

    /**
     * name key for option
     *
     * @property {Ember.String} namePath
     */
    labelPath: 'name',

    /**
     * value key for option
     *
     * @property {Ember.String} valuePath
     */
    valuePath: 'value',
    /**
     * placeHolder for blank option
     *
     * @property {Ember.String} placeHolder
     */
    placeHolder: '',

    /**
     * the select theme
     *
     * @property {Ember.String} theme
     */
    theme: 'fluid',

    /**
     * options for the select component
     *
     * @property {Ember.Array} options
     */
    options: null,

    /**
     * options for the select component
     *
     * @property {Ember.Array} _options
     */
    _options: null,

    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['_uiClass', 'search:search:', '_multiple:multiple:', 'theme', '_theme', '_componentClass'],
    _uiClass: 'ui',
    _theme: 'selection',
    _componentClass: 'dropdown',
    /**
     * attribute to apply to the select
     *
     * @property {Ember.String} _multiple
     */
    _multiple: false,
    /**
     * attribute to apply to the select
     *
     * @property {Ember.String} search
     */
    search: false,

    /**
     * inner value state just for outer value change
     *
     * @property {Ember.String} _value
     */
    _value: null,

    /**
     * selected items to 
     *
     * @property {Ember.String} _selectedOptions
     */
    _selectedOptions: null,

    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    initialize: function(argument) {
        this.renderDropDown();
    }.on('didInsertElement'),
    /**
     * @function setupOptions 
     * @observes "options" property
     * @returns  {void}
     */
    setupOptions: function() {
        if (this.options) {
            this._options.clear();
            for (var i = 0; i < this.options.length; i++) {
                let item = this.options[i];
                let label = item[this.get('labelPath')];
                let value = item[this.get('valuePath')];
                let checked = this.isOptionChecked(value);
                let obj = Ember.Object.create({
                    'label': label,
                    'value': value,
                    'selected': checked
                });
                if (checked) {
                    this._selectedOptions.pushObject(obj);
                }
                this._options.pushObject(obj);
            };
        }
    }.observes('options'),
    init() {
        this._super(...arguments);
        this.set('_selectedOptions', Ember.A());
        this.set('_options', Ember.A());
        this.setupOptions();
    }
});