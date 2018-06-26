import { computed } from '@ember/object';
import Component from '@ember/component';
import { A } from '@ember/array';
import EmberObject from '@ember/object';
import layout from '../templates/components/ui-select';

/**
ui-select component

@module components
@namespace components 
@class UiSelect
@constructor
*/
export default Component.extend({
    layout: layout,
    defaultValue: null,
    tagName: 'select',
    didRender() {
        let that = this;
        this.$().dropdown({
            forceSelection: false,
            onChange(value){
                if(that.attrs.value){
                    that.attrs.value.update(value);
                }
            }
        });
        if(!this.get('value')){
            this.$().dropdown('restore placeholder text');
        }
    },
    /**
     * value  for the select 
     *
     * @property {String} value
     */
    value: '',
    /**
     *  label for the select radio group component
     *
     * @property {String} label
     */
    label: '',

    /**
     * name key for option, by default name
     *
     * @property {String} namePath
     * @default 'value'
     */
    labelPath: 'name',

    /**
     * value key for option, by default value
     *
     * @property {String} valuePath
     * @default 'value'
     */
    valuePath: 'value',
    /**
     * placeholder for blank option
     *
     * @property {String} placeholder
     */
    placeholder: '',

    /**
     * the select theme
     *
     * @property {String} theme
     */
    theme: '',

    /**
     * the select theme
     *
     * @property {String} class
     */
    class: '',

    /**
     * options for the select component
     *
     * @property {Array} options
     */
    options: null,

    /**
     * options for the select component
     * @private
     * @property {Array} _options
     */
    _options: computed('options', {
        get(){
            const _options = A();
            for (var i = 0; i < this.options.length; i++) {
                let item = this.options[i];
                let label = item[this.get('labelPath')];
                let value = item[this.get('valuePath')];
                let checked = this.isOptionChecked(value);
                let obj = EmberObject.create({
                    'label': label,
                    'value': String(value),
                    'selected': checked
                });
                _options.pushObject(obj);
            }
            return _options;
        }
    }),

    classNameBindings: ['_uiClass', 'search:search:', 'class', 'theme', 'selection', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'dropdown',
    /**
     * allow select to search or not , by default false
     *
     * @property {Boolean} search
     * @default false
     */
    search: false,
    /**
     * @method setupOptions 
     * @observes "options" property
     * @returns  {void}
     */
    isOptionChecked(optionValue) {
        return String(this.value) === optionValue;
    },
    init() {
        this._super(...arguments);
    }
});