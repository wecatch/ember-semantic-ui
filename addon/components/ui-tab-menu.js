import { computed } from '@ember/object';
import { isArray } from '@ember/array';
import Component from '@ember/component';
import layout from './ui-tab-menu';

/**
ui-tab-menu component

@module components
@namespace components
@class UiTabMenu
@constructor
*/
export default Component.extend({
  layout: layout,
  tagName: 'div',
  tabs: '',
  delimiter: ',',
  classNameBindings: ['_uiClass', '_theme', '_componentClass'],
  _uiClass: 'ui',
  _componentClass: 'menu',
  theme: '',
  _theme: computed('theme', {
    get() {
      return this.theme ? this.theme : 'top attached tabular';
    },
  }),
  _tabs: computed('delimiter', 'tabs', {
    get() {
      if (isArray(this.tabs)) {
        return this.tabs;
      }

      return this.tabs.split(this.delimiter);
    },
  }),
  /**
    the active tab name
    @property {String} active
    */
  active: '',
  didInsertElement() {
    this._super(...arguments);
    this.$('.item').tab();
    this.$('.item[data-tab="' + this.active + '"]').addClass('active');
  },
});
