import Controller from '@ember/controller';
import { A } from '@ember/array';
import { observer } from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('checkvalue', A());
    this.set('checkvalue2', A());
    this.set('checkvalue3', A());
  },
  checkvalueChane: observer(
    'checkvalue.[],checkvalue2.[],checkvalue3.[]',
    function function_name() {
      this.set('checkvalueShow', this.checkvalue.toArray());
      this.set('checkvalueShow2', this.checkvalue2.toArray());
      this.set('checkvalueShow3', this.checkvalue3.toArray());
    }
  ),
});
