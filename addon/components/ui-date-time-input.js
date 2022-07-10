import moment from 'moment';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

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
export default class UiDateTimeInputComponent extends Component {
  @tracked h;
  @tracked d;
  @tracked m;

  minutes = minutes;
  hours = hours;
  /**
    datetime value
    @property {String} value
    @default null
    */
  get value() {
    return this.args.value ?? '';
  }

  rtime() {
    let date = moment(this.d);
    let options = {
      year: date.year(),
      month: date.month(),
      day: date.day(),
      hour: this.h,
      minute: this.m,
    };
    let time = moment(options).format('YYYY-MM-DD HH:mm');
    if (typeof this.args.onChange === 'function') {
      this.args.onChange(time);
    }
  }

  @action
  change(type, value) {
    switch (type) {
      case 'd':
        this.d = value;
        break;
      case 'h':
        this.h = value;
        break;
      case 'm':
        this.m = value;
        break;
    }

    this.rtime();
  }

  constructor() {
    super(...arguments);
    if (this.value && moment(this.value).isValid()) {
      let time = moment(this.value);
      this.d = time.format('YYYY-MM-DD');
      this.h = time.hour();
      this.m = time.minute();
    }
  }
}
