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
     * value  for the select radio group component
     *
     * @property {Ember.String} value
     */
    value: '',

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
    namePath: 'name',

    /**
     * value key for option
     *
     * @property {Ember.String} valuePath
     */
    valuePath: 'value',
    
    /**
     * if allow empty option
     *
     * @property {Ember.String} allowBlank
     */
    allowBlank: true,

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
    theme: '',
    
    /**
     * if allow search option
     *
     * @property {Ember.String} allowSearch
     */
    allowSearch: true,

    /**
     * if allow search option
     *
     * @property {Ember.String} allowSearch
     */
    allowMulti: false,
    
    /**
     * options for the select component
     *
     * @property {Ember.Array} options
     */
    options: [],

    /**
     * Class names to apply to the select
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['theme'],

    /**
     * attribute to apply to the select
     *
     * @property {Ember.String} multiple
     */
    attributeBindings: [],

    /**
     * attribute to apply to the select
     *
     * @property {Ember.String} multiple
     */
    multiple: function(){
        return this.get('allowMulti') ? 'multiple=""' : '';
    }.property('allowMulti'),

    /**
     * attribute to apply to the select
     *
     * @property {Ember.String} multiple
     */
    search: function(){
        return this.get('allowSearch') ? 'search' : '';
    }.property('allowSearch'),
    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    initialize: function (argument) {
        this.setupOptions();
    }.on('didInsertElement'),

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
            onChange: function(value, text, $choice){
                that.set('value', value);
            }
        });

     }.observes('options'),
    
    /**
     * @function selectedValue 
     * @observes "options" property
     * @returns  {void}
    */

    /**
     * @function assembleDom 
     * 
     * @returns  select dom
    */
     assembleDom: function(){
        let options = this.get('options'), 
            valuePath = this.get('valuePath'),
            namePath = this.get('namePath'),
            selectedVal = this.get('value'),
            label = this.get('label'),
            allowBlank = this.get('allowBlank'),
            allowMulti = this.get('allowMulti'),
            placeHolder = this.get('placeHolder');

        // init select option
        let selectDom = '';
        // init lable
        if(label){
            selectDom += '<label>'+label+'</label>';
        }

        // init select
        selectDom += '<select '+this.get('multiple')+' class="ui '+ this.get('search') +' dropdown ">';
        // init blank
        if (allowBlank){
            selectDom += '<option value="">'+placeHolder+'</option>';
        }
        if (options) {
            if(allowMulti){
                // padding
            }else {
                options.forEach(function(item){
                    let selected = '';
                    let option = '';
                    if(String(selectedVal)===item[valuePath]){
                        selected = 'selected="selected"';
                    }
                    option = '<option value="'+item[valuePath]+'"'+selected+'>'+item[namePath]+'</option>';
                    selectDom += option;
                });
            }
        }

        selectDom += '</select>';

        return selectDom;
    }
});
