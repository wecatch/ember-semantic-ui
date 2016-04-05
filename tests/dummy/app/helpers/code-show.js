import Ember from 'ember';

const {get} = Ember

export default Ember.Helper.extend({
  code: Ember.inject.service(),
  compute(params, hash) {
    let code = get(this, 'code');
    let name = params[0];
    let index = params[1];
    return code.code[name][index];
  }
});