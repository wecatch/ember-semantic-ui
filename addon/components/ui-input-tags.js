import { A } from '@ember/array';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import $ from 'jquery';

/**
ui-input-tags component

@module components
@namespace components
@class UiInputTags
@constructor
*/
export default class UiInputTagsComponent extends Component {

  @tracked value = A();

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
    this.value.addObject(value)
    if (typeof this.args.onChange === 'function') {
      this.args.onChange(this.value);
    }
  }

  _removeValue(value) {
    this.value.removeObject(value);
    if (typeof this.args.onChange === 'function') {
      this.args.onChange(this.value);
    }
  }

  constructor() {
    super(...arguments);
    for (var i = this.args.value.length - 1; i >= 0; i--) {
      this.value.set(String(i), String(this.args.value[i]));
    }
  }

  get hiddenValue() {
    return this.value.join(',');
  }
}

