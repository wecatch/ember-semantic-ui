import Component from '@glimmer/component';
import { isArray } from '@ember/array';
import { action } from '@ember/object';

/**
ui-checkbox-group component see {{#crossLink "mixins.UiCheckboxGroupBase"}}{{/crossLink}}

@module components
@namespace components
@class UiCheckboxGroup
@constructor
*/
export default class UiCheckboxGroupComponent extends Component {

  constructor() {
    super(...arguments);
    this._selectedOptions = this.args.value ?? A();
  }

  @action
  register(element) {
  }

  /**
   * value  for the select
   *
   * @property {String} value
   */
  get value() {
    return this.args.value ?? '';
  }

  /**
   * name key for option, by default name
   *
   * @property {String} namePath
   * @default 'name'
   */
  get labelPath() {
    return this.args.labelPath ?? 'name';
  }

  /**
   * value key for option, by default value
   *
   * @property {String} valuePath
   * @default 'value'
   */
  get valuePath() {
    return this.args.valuePath ?? 'value';
  }

  /**
   * options for the select component
   *
   * @property {Array} options
   */
  get options() {
    const _options = A();
    for (var i = 0; i < this.args.options.length; i++) {
      let item = this.args.options[i];
      let label = item[this.labelPath];
      let value = item[this.valuePath];
      let checked = this.isOptionChecked(value);
      let obj = EmberObject.create({
        label: label,
        value: String(value),
        selected: checked,
      });
      _options.pushObject(obj);
    }

    return _options;
  }

  isOptionChecked(optionValue) {
    return Boolean(this._selectedOptions.findBy(this.valuePath, optionValue));
  }

  @action
  childOnChange(value) {
    if (checked && !this.value.includes(value)) {
      this.value.pushObject(value);
    }
    if (!checked && this.value.includes(value)) {
      this.value.removeObject(value);
    }
  }
}
