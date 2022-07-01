import $ from 'jquery';
import Mixin from '@ember/object/mixin';
import { observer } from '@ember/object';
import { bool } from '@ember/object/computed';
import { set } from '@ember/object';
import { guidFor } from '@ember/object/internals';

/**
ui-checkbox-base mixinx

@module mixins
@namespace mixins
@class UiCheckboxGroupBase
@constructor
*/
export default Mixin.create({
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
  valueChange: observer('value', function () {
    if (this._options) {
      for (var i = 0; i < this._options.length; i++) {
        let item = this._options[i];
        set(item, 'checked', this.isOptionChecked(item['value']));
      }
    }
    this.setupBlockOptions();
  }),
  /**
   * @function initOptions connect options and _options step one
   * @observes "didInsertElement" event
   * @returns  {void}
   */
  init: function () {
    this._super(...arguments);
    this.setupOptions();
    if (!this.name) {
      this.set('name', guidFor(this));
    }
  },
  didInsertElement() {
    this._super(...arguments);
    this.setupBlockOptions();
  },
  setupBlockOptions() {
    if (this.hasBlock && !this.options) {
      let name = this.name;
      this.$('input').each((index, item) => {
        if (!$(item).attr('name')) {
          $(item).attr('name', name);
        }
        let checked = this.isOptionChecked($(item).val());
        $(item).prop('checked', checked);
      });
    }
  },
  setupOptions() {
    let _options = [];
    if (this.options) {
      for (var i = 0; i < this.options.length; i++) {
        let item = this.options[i];
        let label = item[this.labelPath];
        let value = item[this.valuePath];
        let checked = this.isOptionChecked(value);
        _options.push({
          label: label,
          value: String(value),
          checked: checked,
        });
      }
      this.set('_options', _options);
    }
  },
  optionsChange: observer('options', function () {
    this.setupOptions();
  }),
  hasBlock: bool('template').readOnly(),
});
