import Ember from 'ember';
import layout from '../templates/components/ui-input-tags';
import Component from '@ember/component';
import { guidFor } from '@ember/object/internals';
import { A } from '@ember/array';
import { computed } from '@ember/object';
import { isArray } from '@ember/array';
import $ from 'jquery';

/**
ui-input-tags component

@module components
@namespace components
@class UiInputTags
@constructor
*/
export default Component.extend({
  layout: layout,
  tagName: 'div',

  /**
   * Class name to apply to the button
   *
   * @property {String} theme
   */
  theme: 'fluid',
  /**
   * Class name to apply to the button
   *
   * @property {String} class
   */
  class: '',
  classNameBindings: ['_uiClass', 'class', 'theme', '_componentClass'],
  _uiClass: 'ui',
  _componentClass: 'multiple search selection dropdown',

  renderDropDown: function () {
    let that = this;
    this.$().dropdown({
      allowAdditions: true,
      onAdd: function (addedValue) {
        that._addValue(addedValue);
      },
      onRemove: function (removedValue) {
        that._removeValue(removedValue);
      },
      onLabelCreate: function (label) {
        that.$('input.search').val('');
        that.$('.addition.item b').html('');
        return $(label);
      },
    });
  },
  didInsertElement() {
    this._super(...arguments);
    this.renderDropDown();
  },
  _addValue(value) {
    try {
      this.value.addObject(value);
    } catch (e) {
      let id = guidFor(this);
      Ember.Logger.warn(
        `component:ui-input-tags ${id} value is not Ember.A type`
      );
      Ember.Logger.error(e);
    }
    if (typeof this.attrs.update === 'function') {
      this.attrs.update(this.value);
    }
  },
  _removeValue(value) {
    this.value.removeObject(value);
    if (typeof this.attrs.update === 'function') {
      this.attrs.update(this.value);
    }
  },
  init() {
    //if value do not be passed to component
    this._super(...arguments);
    if (this.value === undefined) {
      this.set('value', A());
    }

    for (var i = this.value.length - 1; i >= 0; i--) {
      this.value.set(String(i), String(this.value[i]));
    }
  },
  hiddenValue: computed('value', {
    get() {
      if (isArray(this.value)) {
        return this.value.join(',');
      } else {
        return '';
      }
    },
  }),
});
