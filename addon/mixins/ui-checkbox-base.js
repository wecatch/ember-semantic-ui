import Mixin from '@ember/object/mixin';

/**
ui-checkbox-base mixinx

@module mixins
@namespace mixins
@class UiCheckboxBase
@constructor
*/
export default Mixin.create({
  /**
   * The root component element
   *
   * @property {Ember.String} tagName
   * @default  "input"
   */
  tagName: 'div',

  /**
   * the checkbox default class
   * @private
   * @property {Ember.String} _theme
   */
  _theme: 'checkbox',
  /**
   * the checkbox classes
   *
   * @property {Ember.String} theme
   */
  class: '',
  /**
   * Class names to apply to the button
   *
   * @property {Ember.Array} classNames
   */
  classNameBindings: ['_uiClass', '_theme', 'class', '_componentClass'],
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
  didInsertElement() {
    this._super(...arguments);
    this.$().checkbox();
    let { checked } = this.getProperties('checked');
    let input = this.$('input');

    //set checbox stated
    input.prop('checked', checked);
    //bind input change event
    this.$('input').change(() => {
      let isChecked = input.is(':checked');
      this._updateValue(isChecked);
      this.set('checked', isChecked);
      this.sendAction('action', isChecked, this.value);
    });
  },
  _updateValue(checked) {
    if (typeof this.attrs.update === 'function') {
      if (checked) {
        this.attrs.update(this.value);
      } else {
        this.attrs.update('');
      }
    }
  },
  init() {
    //set checked value
    this._super(...arguments);
    this._updateValue(this.checked);
  },
  didUpdateAttrs() {
    this._super();
    this.setChecked();
  },
  /**
   * @function setChecked
   * @observes "checked"
   * @returns  {void}
   */
  setChecked() {
    let input = this.$('input');
    //when checked change, set checkbox state
    input.prop('checked', this.checked);
    //change value
    this._updateValue(this.checked);
  },
});
