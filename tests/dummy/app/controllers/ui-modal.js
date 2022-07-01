import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    clickHandler(value) {
      console.log(`display: ${this.display}`);
      if (value) {
        this.set('transition', value);
      }
      this.set('display', true);
      console.log(`display: ${this.display}`);
    },
    clickHandler1() {
      this.toggleProperty('display1');
    },
    onShow() {
      console.log('callback==>onShow');
    },
    onHide() {
      console.log('callback==>onHide');
    },
    onApprove() {
      console.log('callback==>onApprove');
    },
    onDeny() {
      console.log('callback==>onDeny');
      return false;
    },
  },
});
