import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
  result: A(),
  actions: {
    onchange(e) {
      this.send('log', e);
    },
    onfocus(e) {
      this.send('log', e);
    },
    onfocusin(e) {
      this.send('log', e);
    },
    onfocusout(e) {
      this.send('log', e);
    },
    log(e) {
      this.result.insertAt(0, {
        type: e.type,
        value: e.target.value,
        time: new Date().toTimeString(),
      });
    },
  },
});
