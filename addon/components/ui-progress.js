/* eslint-disable ember/no-jquery */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import $ from 'jquery';

/**

ui-progress component

@module components
@namespace components
@class UiProgress
@constructor
*/
export default class UiProgressComponent extends Component {
  /**
   * progress loading status, by default false
   *
   * @property {Boolean} loading
   * @default  false
   */
  get loading() {
    if (this.args.loading) {
      return 'active';
    }

    return '';
  }

  /**
   * progress success status, by default false
   *
   * @property {Boolean} success
   * @default  false
   */
  get success() {
    if (this.args.success) {
      return 'success';
    }

    return '';
  }
  /**
   * progress error status, by default false
   *
   * @property {Boolean} error
   * @default  false
   */
  get error() {
    if (this.args.error) {
      return 'error';
    }

    return '';
  }

  /**
   * progress percent
   *
   * @property {Number} percent
   * @default  0
   */
  get percent() {
    let percent = Number(this.args.percent);
    if (isNaN(percent)) {
      return 0;
    }

    if (percent > 100) {
      return 100;
    }

    if (percent < 0) {
      return 0;
    }

    return percent;
  }

  @action
  register(element) {
    $(element).progress({
      percent: this.percent,
    });
  }
}
