import { action } from '@ember/object';
import { isArray } from '@ember/array';
import Component from '@glimmer/component';
import $ from 'jquery';

/**
ui-tab-menu component

@module components
@namespace components
@class UiTabMenu
@constructor
*/
export default class UiTabMenu extends Component {


  get selector() {
    return this.args.active ? `.item[data-tab="${this.args.active}"]` : '';
  }

  @action
  register(element) {
    $(element).find(".item").tab();
    if (this.selector) {
      $(element).find(this.selector).addClass('active');
    }
  }
}

