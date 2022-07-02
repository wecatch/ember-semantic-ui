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

  @action
  register(element) {
    $(element).find(".item").tab();
    const selector = `.item[data-tab="${this.args.active}"]`;
    console.log(selector);
    $(element).find(selector).addClass('active');
  }
}

