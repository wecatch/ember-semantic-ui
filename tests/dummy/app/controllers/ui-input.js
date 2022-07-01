import Controller from '@ember/controller';

export default Controller.extend({
  result: 0,
  actions: {
    onfocus(e) {
      this.send('log', e);
    },
    log() {
      this.set('result', this.result + 1);
    },
  },
});
