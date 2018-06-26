import { get } from '@ember/object';
import Helper from '@ember/component/helper';
import { inject } from '@ember/service';


export default Helper.extend({
  code: inject(),
  compute(params) {
    let code = get(this, 'code');
    let name = params[0];
    let index = params[1];
    return code.code[name][index];
  }
});