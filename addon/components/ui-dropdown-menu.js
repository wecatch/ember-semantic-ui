import layout from './ui-dropdown-menu';
import Component from '@ember/component';

/**
ui-dropdown-menu component

@module components
@namespace components
@class UiDropdownMenu
@constructor
*/
export default Component.extend({
  layout: layout,
  /**
   * the component style class
   *
   * @property {String} theme
   * @default ''
   */
  theme: '',
  /**
   * the component style class
   *
   * @property {String} class
   */
  class: '',
  classNameBindings: ['_uiClass', 'class', 'theme', '_componentClass'],
  _uiClass: 'ui',
  _componentClass: 'dropdown',

  didInsertElement() {
    this._super(...arguments);
    this.renderDropDown();
  },
  renderDropDown() {
    let that = this;
    this.$().dropdown({
      onChange(value) {
        if (that.attrs.value) {
          that.attrs.value.update(value);
        }
      },
    });
  },
  didRender() {
    this._super(...arguments);
    // re render component then restore default texts
    if (!this.attrs.value.value) {
      this.$().dropdown('restore defaults');
    }
  },
});
