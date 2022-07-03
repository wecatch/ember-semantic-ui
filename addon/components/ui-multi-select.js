import Component from '@glimmer/component';
import { A } from '@ember/array';
import EmberObject, { action } from '@ember/object';
import $ from 'jquery';

/**

ui-multi-select component see {{#crossLink "mixins.UiSelectBase"}}{{/crossLink}}

@module components
@namespace components
@class UiMultiSelect
@constructor
*/
export default class UiMultiSelectComponent extends Component {

  constructor() {
    super(...arguments);
    this._selectedOptions = this.args.value ?? A();
  }

  @action
  register(element) {
    $(element).dropdown({
      onAdd: (addedValue) => {
        if(this.isOptionChecked(addedValue)) return;
        for (var i = 0; i < this.options.length; i++) {
          let item = this.options[i];
          if (item[this.valuePath] === addedValue) {
            this._selectedOptions.pushObject(item);
            break;
          }
        }
        if (this.args.onChange) {
          this.args.onChange(this._selectedOptions);
        }
      },
      onRemove: (removedValue) => {
        for (var i = 0; i < this._selectedOptions.length; i++) {
          let item = this._selectedOptions[i];
          if (item[this.valuePath] === removedValue) {
            this._selectedOptions.removeObject(item);
            break;
          }
        }
        if (this.args.onChange) {
          this.args.onChange(this._selectedOptions);
        }
      }
    });
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
    return  Boolean(this._selectedOptions.findBy(this.valuePath, optionValue));
  }
}
