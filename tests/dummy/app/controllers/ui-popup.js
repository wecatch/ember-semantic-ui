import Controller from '@ember/controller';

export default Controller.extend({
  value: null,
  currentPopup: null,
  actions: {
    onPopupShow(value, popup) {
      this.set('value', new Date());
      this.set('currentPopup', popup);
    },
    save() {
      this.currentPopup.hide();
    },
    cancel() {
      this.currentPopup.hide();
    },
  },
});
