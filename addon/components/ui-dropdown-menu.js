/* eslint-disable ember/no-jquery */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import $ from 'jquery';

/**
ui-dropdown-menu component

@module components
@namespace components
@class UiDropdownMenu
@constructor
*/
export default class UiDropdonwMenuComponent extends Component {
  @action
  register(element) {
    $(element).dropdown({
      onChange: (value) => {
        if (this.args.onChange) {
          this.args.onChange(value);
        }
      },
    });
  }
}
