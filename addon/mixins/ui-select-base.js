import Mixin from '@ember/object/mixin';
import EmberObject from '@ember/object';
import { observer } from '@ember/object';
import { A } from '@ember/array';

/**
ui-select-base mixin

@module mixins
@namespace mixins
@class UiSelectBase
@constructor
*/
export default Mixin.create({
  tagName: 'div',

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
  _options: null,

  classNameBindings: [
    '_uiClass',
    'search:search:',
    '_multiple:multiple:',
    'class',
    'theme',
    '_theme',
    '_componentClass',
  ],
  _uiClass: 'ui',
  _theme: 'selection',
  _componentClass: 'dropdown',
  _multiple: false,
  /**
   * allow select to search or not , by default false
   *
   * @property {Boolean} search
   * @default false
   */
  search: false,

  /**
   * inner value state just for outer value change
   *
   * @private
   * @property {String} _value
   */
  _value: null,

  /**
   * selected items to
   *
   * @property {String} _selectedOptions
   */
  _selectedOptions: null,

  didInsertElement() {
    this._super(...arguments);
    this.renderDropDown();
  },
  /**
   * @method setupOptions
   * @observes "options" property
   * @returns  {void}
   */
  setupOptions() {
    if (this.options) {
      this._options.clear();
      for (var i = 0; i < this.options.length; i++) {
        let item = this.options[i];
        let label = item[this.labelPath];
        let value = item[this.valuePath];
        let checked = this.isOptionChecked(value);
        let obj = EmberObject.create({
          label: label,
          value: String(value),
          selected: checked,
        });
        if (checked) {
          this._selectedOptions.pushObject(obj);
        }
        this._options.pushObject(obj);
      }
    }
  },
  optionsChange: observer('options', function () {
    this.setupOptions();
  }),
  init() {
    this._super(...arguments);
    this.set('_selectedOptions', A());
    this.set('_options', A());
    this.setupOptions();
  },
});
