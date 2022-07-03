import Component from '@glimmer/component';
import { A } from '@ember/array';
import EmberObject, { action } from '@ember/object';
import $ from 'jquery';

/**
ui-select component

@module components
@namespace components 
@class UiSelect
@constructor
*/
export default class UiSelectComponent extends Component {

  @action
  register(element) {
    $(element).dropdown({
      forceSelection: false,
      onChange: (value) => {
        if (this.args.onChange) {
          this.args.onChange(value);
        }
      },
    })
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
  /**
   * allow select to search or not , by default false
   *
   * @property {Boolean} search
   * @default false
   */
  get search() {
    return this.args.search ?? false;
  }
  
  isOptionChecked(optionValue) {
    return String(this.value) === optionValue;
  }
}
