import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

const n = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
};

export default class UiColumnComponent extends Component {
  @tracked wide = 'one';

  constructor() {
    super(...arguments);
    this.wide = n[String(this.args.wide)];
  }
}
