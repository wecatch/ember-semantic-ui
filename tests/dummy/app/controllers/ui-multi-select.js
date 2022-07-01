import Controller from '@ember/controller';
import { A } from '@ember/array';
import { computed } from '@ember/object';

export default Controller.extend({
  value: A(),
  valueShow: computed('value', function () {
    console.log(this.value.toArray());
    // return this.value.toArray();
  }),
});
