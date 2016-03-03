import Ember from 'ember';

export default Ember.Mixin.create({
    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "div"
     */
    tagName: 'div',

    /**
     * value  for the checkbox radio group component
     *
     * @property {Ember.Array} value
     */
    value: null,

    /**
     * name for the checkbox radio group component
     *
     * @property {Ember.String} name
     */
    name: '',

    /**
     *  label for the checkbox radio group component
     *
     * @property {Ember.String} label
     */
    label: '',

    /**
     * label key for option
     *
     * @property {Ember.String} labelPath
     */
    labelPath: 'name',

    /**
     * value key for option
     *
     * @property {Ember.String} valuePath
     */
    valuePath: 'value',

    /**
     * Class bindings for the checkbox component
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: ['theme', '_componentClass'],
    theme: 'inline',
    _componentClass: 'fields',

    /**
     * options for the checkbox component
     *
     * @property {Ember.Array} options
     */
    options: null,

    /**
     * options for the checkbox component
     *
     * @property {Ember.Array} options
     */
    _options: null,
    valueChange: Ember.observer('value', function(){
        if(this._options){
            for (var i = 0; i < this._options.length; i++) {
                let item = this._options[i];
                Ember.set(item, 'checked', this.isOptionChecked(item['value']));
            };
        }
    }),
    /**
     * @function initOptions connect options and _options step one
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    init: function() {
        this._super(...arguments);
        this.setupOptions();
        if(!this.name){
            this.set('name', Ember.guidFor(this));
        }
    },
    setupOptions: function(){
        let _options = [];
        if(this.options){
            for (var i = 0; i < this.options.length; i++) {
                let item = this.options[i];
                let label = item[this.get('labelPath')];
                let value = item[this.get('valuePath')];
                let checked = this.isOptionChecked(value);
                _options.push({
                    'label': label,
                    'value': String(value),
                    'checked': checked
                });
            };
            this.set('_options', _options);
        }
    }.observes('options')
});