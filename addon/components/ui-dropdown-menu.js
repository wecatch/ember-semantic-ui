
import Component from '@glimmer/component';
import { action } from '@ember/object';

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
          that.args.onChange(value);
        }
      }
    })
  }
}
