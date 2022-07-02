import Component from '@glimmer/component';
import { action } from '@ember/object';
import $ from 'jquery';

/**
ui-tab-segment component  {{#crossLink "mixins.uiSegmentBase"}}{{/crossLink}}

 
@module components
@namespace components
@class UiTabSegment
@constructor
*/
export default class UiTabSegment extends Component {
  /**
  * tab name
  * @property {String} tab
  */
  get tab() {
    return this.args.tab ?? '';
  }
  @action
  register(element) {
    if (this.args.active) {
      $(element).addClass('active');
    }
  }
}
