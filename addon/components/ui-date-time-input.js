import moment from 'moment';
import layout from '../templates/components/ui-date-time-input';
import Component from '@ember/component';
import { observer } from '@ember/object';

const minutes = [];

for (let i = 0; i < 60; i++) {
  minutes[i] = { value: i, name: i };
}

const hours = [];

for (let i = 0; i < 24; i++) {
  hours[i] = { value: i, name: i };
}

/**
ui-date-time-input component

@module components
@namespace components
@class UiDateTimeInput 
@constructor
*/
export default Component.extend({
  layout,
  minutes: minutes,
  hours: hours,
  /**
    datetime value
    @property {String} value
    @default null
    */
  value: null,
  classNameBindings: ['class'],
  /**
    class apply to this component
    @property {String} class
    @default ''
    */
  class: '',
  rtime: observer('d,h,m', function () {
    let hour = this.h;
    let minute = this.m;
    let date = moment(this.d);
    let options = {
      year: date.year(),
      month: date.month(),
      day: date.day(),
      hour: hour,
      minute: minute,
    };
    let time = moment(options).format('YYYY-MM-DD HH:mm');
    if (typeof this.attrs.update === 'function') {
      this.attrs.update(time);
    }
  }),
  init() {
    this._super(...arguments);
    if (this.value && moment(this.value).isValid()) {
      let time = moment(this.value);
      this.set('d', time.format('YYYY-MM-DD'));
      this.set('h', time.hour());
      this.set('m', time.minute());
    }
  },
});
