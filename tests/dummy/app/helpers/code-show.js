import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class CodeShow extends Helper {
  constructor() {
    super(...arguments);
  }

  @service code;

  compute(params) {
    let code = this.code;
    let name = params[0];
    let index = params[1];
    return code.code[name][index];
  }
}
