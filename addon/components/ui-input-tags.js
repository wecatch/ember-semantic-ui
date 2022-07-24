/* eslint-disable ember/no-jquery */
import { A } from '@ember/array';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import $ from 'jquery';

/**
ui-input-tags component

@module components
@namespace components
@class UiInputTags
@constructor

value must be required

*/
export default class UiInputTagsComponent extends Component {
  get value() {
    return this.args.value.map((v) => String(v));
  }

  @action
  register(element) {
    $(element).dropdown({
      allowAdditions: true,
      onAdd: (addedValue) => {
        this._addValue(addedValue);
      },
      onRemove: (removedValue) => {
        this._removeValue(removedValue);
      },
      onLabelCreate: function (label) {
        $(element).find('input.search').val('');
        $(element).find('.addition.item b').html('');
        return $(label);
      },
    });
  }

  _addValue(value) {
    // keep up to date args value
    if (typeof this.args.onChange === 'function') {
      const newValue = A([].concat(this.args.value));
      newValue.addObject(value);
      this.args.onChange(newValue);
    }
  }

  _removeValue(value) {
    // keep up to date args value
    if (typeof this.args.onChange === 'function') {
      const newValue = A([].concat(this.args.value));
      newValue.removeObject(value);
      this.args.onChange(newValue);
    }
  }

  get hiddenValue() {
    return this.value.join(',');
  }
}
