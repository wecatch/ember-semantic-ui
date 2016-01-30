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
     * the select theme
     *
     * @property {Ember.String} theme
     */
    theme: 'fluid',
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['_uiClass', 'theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'dropdown',
    init(){
        this._super(...arguments);
        if(!this.name){
            this.set('name', Ember.guidFor(this));
        }
    }
});