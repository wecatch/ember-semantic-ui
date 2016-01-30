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
     * defaultValue  for the component
     *
     * @property {Ember.String} value
     */
    defaultValue: '',

    /**
     * defaultLabel  for the component
     *
     * @property {Ember.String} defaultLabel
     */
    _selectedLabel: '',

    /**
     * name for the select radio group component
     *
     * @property {Ember.String} name
     */
    name: '',

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
     * @property {Ember.Array} options
     */
    _options: null,

    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['_uiClass', 'search:search:', 'multiple:multiple:','theme', '_theme', '_componentClass'],
    _uiClass: 'ui',
    _theme: 'selection',
    _componentClass: 'dropdown',
    /**
     * attribute to apply to the select
     *
     * @property {Ember.String} multiple
     */
    multiple: false,
    /**
     * attribute to apply to the select
     *
     * @property {Ember.String} search
     */
    search: false,

    /**
     * inner value state just for outer value change
     *
     * @property {Ember.String} search
     */
    _value: null,

    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    initialize: function(argument) {
        this.renderDropDown();
    }.on('didInsertElement'),
    isOptionChecked(optionValue) {
        if (this.value) {
            if(this.multiple){
                return this.value.contains(optionValue);
            }else {
                return this.value === optionValue;
            }
        }
        return false;
    },
    renderDropDown() {
        let that = this;
        this.$().dropdown({
            onAdd: function(addedValue, addedText, $addedChoice){
                let obj = Ember.Object.create({
                    'value': addedValue,
                    'label': Ember.String.htmlSafe(addedText),
                    'selected': true,
                })
                that._selectedOptions.pushObject(obj);

                that.value.pushObject(addedValue);
            },
            onRemove: function(removedValue, removedText, $removedChoice){
                for (var i = 0; i < that._selectedOptions.length; i++) {
                    let item = that._selectedOptions[i];
                    if(item['value'] === removedValue){
                        that._selectedOptions.removeObject(item);
                    }
                };
                that.value.removeObject(removedValue);
            },
            onChange: function(value, text, $choice) {
                if(!that.multiple){
                    that.set('value', value);
                }
            },
            onLabelCreate: function(label){
                that.$('input.search').val('');
                return $(label);
            }
        });
    },
    init(){
        this._super(...arguments);
        if(!this.name){
            this.set('name', Ember.guidFor(this));
        }

        if(this.multiple){
            if(!Ember.isArray(this.value)){
                this.set('value', Ember.A());
            }
            this.set('_value', this.value.join(','));
        }
        this.setupOptions();
    },
    setupSelected: function(){
        this._selectedOptions.clear();
        for (var i = 0; i < this._options.length; i++) {
            let item = this._options[i];
            let checked = this.isOptionChecked(item['value']);
            Ember.set(item, 'selected', checked);
            if(checked){
                this.set('_selectedLabel', item['label']);
                this._selectedOptions.pushObject(item);
            }
        };
    },
    /**
     * selected items to 
     *
     * @property {Ember.String} _selectedOptions
     */
    _selectedOptions: null,
    selectedClass: Ember.computed('multiple', function(){
        if(this.multiple){
            return 'active filtered';
        }

        return 'active selected';
    }),
    /**
     * @function setupOptions 
     * @observes "options" property
     * @returns  {void}
     */
    setupOptions: function() {
        let _options = [];
        let _selectedOptions = [];
        if (this.options) {
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
                if(checked){
                    this.set('_selectedLabel', label);
                    _selectedOptions.pushObject(obj);
                }
                _options.pushObject(obj);
            };
        }
        this.set('_options', _options);
        this.set('_selectedOptions', _selectedOptions);
    }.observes('options')
});