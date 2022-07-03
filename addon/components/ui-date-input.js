import Component from '@glimmer/component';
import moment from 'moment';
import { action } from '@ember/object';
import Pikaday from 'pikaday';

let zh_cn = {
  previousMonth: '上一月',
  nextMonth: '下一月',
  months: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ],
  weekdays: [
    '周日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ],
  weekdaysShort: ['日', '一', '二', '三', '四', '五', '六'],
};

/**
ui-date-input component

@module components
@namespace components
@class UiDateInput 
@constructor
*/
export default class UiDateInputComponent extends Component {
  picker = null;

  @action
  register(element) {
    let options = {
      field: element,
      format: this.format,
      position: this.position,
      i18n: zh_cn,
      onSelect: (value) => {
        if (typeof this.args.onChange === 'function') {
          this.args.onChange(moment(value).format(self.format));
        }
      },
    };
    this.picker = new Pikaday(options);
  }

  /**
   * pikaday position 'bottom right', 'bottom left', 'top left', 'top right'
   * @property {String} position
   * @default 'bottom left'
    */
  get position() {
    return this.args.position ?? 'bottom left';
  }

  /**
   * moment format
   * @property {String} format
   * @default 'YYYY-MM-DD'
   * */
  get format() {
    return this.args.format ?? 'YYYY-MM-DD';
  }

  get valueDisplay() {
    return (
      moment(this.args.value).isValid() &&
      moment(this.args.value).format(this.format)
    );
  }

  constructor() {
    super(...arguments);
  }

  willDestory() {
    this.picker.destroy();
  }
}
