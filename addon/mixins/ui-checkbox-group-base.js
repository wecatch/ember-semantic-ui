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
    value: [],

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
    labelPath: 'label',

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
    options: [],

    /**
     * options for the checkbox component
     *
     * @property {Ember.Array} options
     */
    _options: [],
    
    /**
     * @function init ember component init func
     * @returns  {void}
     */
    init: function(){
        this._super();
        let _options = [];
        this.get('options').forEach(Ember.run.bind(this, function(item){
            _options.push({
                'label': item[this.get('labelPath')],
                'value': item[this.get('valuePath')],
            });
        }));
        this.set('_options', _options);
    },
    
    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    initialize: function (argument) {
        this.setupOptions();
    }.on('didInsertElement')
});
